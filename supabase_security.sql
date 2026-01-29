-- Enable Row Level Security (RLS) on the leads table
-- This immediately blocks all access that isn't explicitly allowed by a policy
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows the service_role (backend API) to do everything
-- The service_role key bypasses RLS by default in Supabase clients, but explicit policies differ by setup.
-- However, strict RLS often requires explicit permissions or role-based checks.
-- For standard Supabase setups, the service_role is a "superuser" regarding RLS bypass, 
-- but it's good practice (and sometimes necessary depending on config) to be explicit or just rely on the bypass.
-- IF you just want to block public access, simply enabling RLS is enough because "deny all" is the default.

-- We will create a policy that explicitly grants full access to the service role, just in case.
CREATE POLICY "Enable generic access for service role only" ON "public"."leads"
AS PERMISSIVE FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- OPTIONAL: If you want to be extra sure no public access exists, you don't need to do anything else.
-- By default, no policies = no access for 'anon' or 'authenticated' users.

-- Verify:
-- SELECT * FROM pg_policies WHERE tablename = 'leads';
