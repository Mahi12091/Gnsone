import "server-only";

import { createClient } from "@supabase/supabase-js";

import { getRequiredPublicEnv } from "@/config/env";
import type { Database } from "@/types/database";

export function createServerSupabaseClient() {
  const { supabaseUrl, supabaseAnonKey } = getRequiredPublicEnv();

  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}
