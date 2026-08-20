-- GNSOne database foundation
-- Phase 4A creates only foundation schemas, required extensions, and a reusable updated_at trigger function.
-- Business tables, seed data, financial APIs, and AI functionality are intentionally excluded.

create schema if not exists reference;
create schema if not exists ingestion;
create schema if not exists market;
create schema if not exists financials;
create schema if not exists analytics;

-- Supabase projects commonly keep extensions in the extensions schema.
create schema if not exists extensions;

create extension if not exists pgcrypto with schema extensions;
create extension if not exists pg_trgm with schema extensions;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

comment on schema reference is 'Stable reference data for GNSOne, such as countries, currencies, exchanges, sectors, identifier types, units, and statement taxonomies.';
comment on schema ingestion is 'Source, ingestion, lineage, freshness, and data quality foundation for GNSOne data pipelines.';
comment on schema market is 'Normalized market and security data namespace for future GNSOne stock architecture tables.';
comment on schema financials is 'Normalized financial statement, fundamentals, ratios, and valuation namespace for future GNSOne financial data tables.';
comment on schema analytics is 'Derived analytics namespace for future GNSOne technical indicators, stock scores, and screener data.';
comment on function public.set_updated_at() is 'Reusable trigger function that sets NEW.updated_at to now() before row updates.';
