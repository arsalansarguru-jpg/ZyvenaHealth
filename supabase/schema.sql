-- Run in Supabase SQL Editor: https://supabase.com/dashboard/project/nsmmyvtchwlpolaantex/sql

create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text not null
);

alter table public.contact_inquiries enable row level security;

-- Allow anonymous inserts from the website (anon key)
create policy "Allow public insert on contact_inquiries"
  on public.contact_inquiries
  for insert
  to anon
  with check (true);

-- Restrict reads to authenticated/service roles only
create policy "No public read on contact_inquiries"
  on public.contact_inquiries
  for select
  to anon
  using (false);
