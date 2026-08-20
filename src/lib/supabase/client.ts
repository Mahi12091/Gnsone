"use client";

import { createClient } from "@supabase/supabase-js";

import { getRequiredSupabasePublicEnv } from "@/config/env";
import type { Database } from "@/types/database";

export function createBrowserSupabaseClient() {
  const { supabaseUrl, supabasePublishableKey } = getRequiredSupabasePublicEnv();

  return createClient<Database>(supabaseUrl, supabasePublishableKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
}
