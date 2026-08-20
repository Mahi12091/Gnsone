"use client";

import { createClient } from "@supabase/supabase-js";

import { getRequiredPublicEnv } from "@/config/env";
import type { Database } from "@/types/database";

export function createBrowserSupabaseClient() {
  const { supabaseUrl, supabaseAnonKey } = getRequiredPublicEnv();

  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
}
