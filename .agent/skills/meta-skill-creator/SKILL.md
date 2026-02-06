---
name: meta-skill-creator
version: 0.1.0
description: Helps the agent design and scaffold new Antigravity Skills from natural language requests, including SKILL.md templates and suggested folder structures.
author: Colton Foley
tags:
  - meta
  - generator
  - skills
  - scaffolding
visibility: workspace
---

# Meta Skill Creator

## Goal

The goal of this skill is to translate a user’s free‑form description of a desired capability into a complete Antigravity Skill skeleton. This includes designing the necessary directory structure and generating a fully populated `SKILL.md` file that adheres to Antigravity standards.

## Inputs

The agent must extract the following information from the user's request and conversation context:

- **Skill Purpose and High-Level Behavior**: What is the core problem this skill solves?
- **Trigger Phrases**: What specific user intents or phrases should activate this skill?
- **Required Inputs and Outputs**: What data does the skill need, and what artifacts does it produce?
- **Tools and Dependencies**: What tools (e.g., terminal commands, file edits, web searches) or external systems will the skill utilize?
- **Constraints and Safety Rules**: What actions are forbidden? What safety checks are required?

## Outputs

The skill must produce the following:

1. **Proposed Directory Structure**: A visual tree representation of the skill folder (e.g., inside a fenced code block).
2. **Fully Written SKILL.md**: A complete, ready-to-save markdown file containing:
   - **YAML Frontmatter**: `name`, `version`, `description`, `author`, `tags`, `visibility`.
   - **Body Sections**: `Goal`, `Inputs`, `Outputs`, `Instructions`, `Examples`, `Constraints`.
3. **Stub Files**: Code blocks or descriptions for any optional scripts, templates, or resource files needed by the skill.

## Instructions

1. **Analyze and Clarify**:
   - Analyze the user's request to understand the desired capability.
   - If critical details (e.g., trigger conditions, safety constraints) are missing, ask clarifying questions _before_ proceeding with generation.
2. **Design Metadata**:
   - Propose a concise, unique `name` (kebab-case) for the skill.
   - Write a `description` optimized for semantic matching, embedding key terms that define _when_ the skill should trigger.
3. **Structure the Logic**:
   - Draft the "Instructions" section of the target `SKILL.md` as bulletproof, step-by-step guidance.
   - Ensure the logic flows linearly: Input Analysis -> Action/Execution -> Verification -> Output.
4. **Draft Examples**:
   - Create at least 2–3 short, concrete examples of user interactions that would trigger the skill, showing the expected Inputs and resolved Outputs.
5. **Define Safety Constraints**:
   - Explicitly add "Do not..." rules to prevent destructive operations or unauthorized external calls.
   - Mandate safe defaults (e.g., dry-run modes, confirmation prompts) for any code or data modification steps.
6. **Scaffold the Content**:
   - Prefer designing minimal, composable skills. If a request is too complex, suggest splitting it into multiple smaller skills.
   - Output the full `SKILL.md` content and directory structure.

## Examples

### Example 1: Creating an API Auditor

**User Request**: "Create a Skill that audits my REST API design for security issues."

**Generated Output**:
_Directory Structure_:

```
api-security-auditor/
└── SKILL.md
```

_SKILL.md Preview_:

- **Name**: `api-security-auditor`
- **Description**: Analyzes OpenAPI/Swagger definitions or route files to identify security risks like missing auth or exposed data.
- **Constraints**: "Do not upload API specs to external servers. Perform all analysis locally."

### Example 2: React Component Splitter

**User Request**: "I want a skill that takes a big React file and suggests how to split it up."

**Generated Output**:
_Directory Structure_:

```
react-component-splitter/
└── SKILL.md
```

_SKILL.md Preview_:

- **Name**: `react-component-splitter`
- **Description**: Identifies large components and proposes a refactoring plan to extract sub-components, improving maintainability.
- **Trigger**: "refactor this component", "split this file".

## Constraints

- **Design Only**: This meta-skill must **never** execute the scripts or tools it designs; it only generates the blueprints and text content.
- **Safe Defaults**: Any generated skill that modifies code or infrastructure must be designed to default to a read-only analysis or dry-run mode.
- **Privacy First**: Do not include any sensitive secrets, real API keys, or proprietary identifiers in the generated examples or templates.
