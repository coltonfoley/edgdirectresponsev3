import assert from 'node:assert/strict';
import test from 'node:test';

import {
  createOpaqueLeadSubmissionId,
  isOpaqueLeadSubmissionId,
  leadSubmissionFingerprint,
  resolvePendingLeadSubmission,
} from '../src/lib/lead-submission-identity.ts';

const baseLead = {
  firstName: 'Internal',
  email: 'test@example.invalid',
  source: 'contact_page',
  metadata: { ignored: true },
};
const baseMetadata = {
  page_path: '/contact',
  form_id: 'contact_page',
  utm_source: 'google',
};

test('fingerprints ignore key order and the assigned anonymous ID', () => {
  const first = leadSubmissionFingerprint(baseLead, {
    ...baseMetadata,
    submission_id: 'first-id',
  });
  const second = leadSubmissionFingerprint(
    { source: 'contact_page', email: 'test@example.invalid', firstName: 'Internal' },
    {
      utm_source: 'google',
      submission_id: 'second-id',
      form_id: 'contact_page',
      page_path: '/contact',
    }
  );
  assert.equal(first, second);
});

test('an unchanged retry reuses the original anonymous submission ID', () => {
  const fingerprint = leadSubmissionFingerprint(baseLead, baseMetadata);
  let generated = 0;
  const createId = () => `submission-${++generated}`;
  const first = resolvePendingLeadSubmission({
    pending: null,
    fingerprint,
    createId,
  });
  const retry = resolvePendingLeadSubmission({
    pending: first,
    fingerprint,
    createId,
  });
  assert.equal(retry.submissionId, first.submissionId);
  assert.equal(generated, 1);
});

test('an edited form starts a new submission transaction', () => {
  const firstFingerprint = leadSubmissionFingerprint(baseLead, baseMetadata);
  const editedFingerprint = leadSubmissionFingerprint(
    { ...baseLead, firstName: 'Updated' },
    baseMetadata
  );
  let generated = 0;
  const createId = () => `submission-${++generated}`;
  const first = resolvePendingLeadSubmission({
    pending: null,
    fingerprint: firstFingerprint,
    createId,
  });
  const edited = resolvePendingLeadSubmission({
    pending: first,
    fingerprint: editedFingerprint,
    createId,
  });
  assert.notEqual(edited.submissionId, first.submissionId);
  assert.equal(generated, 2);
});

test('generated submission IDs are opaque and reject contact-shaped values', () => {
  for (let index = 0; index < 100; index += 1) {
    assert.equal(isOpaqueLeadSubmissionId(createOpaqueLeadSubmissionId()), true);
  }
  assert.equal(isOpaqueLeadSubmissionId('customer@example.com'), false);
  assert.equal(isOpaqueLeadSubmissionId('8475551212'), false);
  assert.equal(isOpaqueLeadSubmissionId('edg-1721070000000-random'), false);
});
