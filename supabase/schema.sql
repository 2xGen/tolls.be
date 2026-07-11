-- Run this in the Supabase SQL editor for project iemgpccgdlwpsrsjuumo.
-- Stores newsletter sign-ups from tolls.be. Access is server-only via the
-- service role key; no public read policies are defined.

-- Remove previous attempt if it exists (safe when table is empty / first setup).
drop table if exists public.newsletter_subscribers cascade;

create table if not exists public.tolls (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  locale text not null default 'en',
  consent_given_at timestamptz not null default now(),
  unsubscribed_at timestamptz,
  created_at timestamptz not null default now(),
  constraint tolls_email_key unique (email)
);

create index if not exists tolls_email_idx on public.tolls (email);

alter table public.tolls enable row level security;

-- No policies: anon/authenticated roles cannot read or write.
-- The Next.js API route uses the service role key, which bypasses RLS.
