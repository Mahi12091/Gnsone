import "server-only";

import { createClient } from "@supabase/supabase-js";

import { getRequiredSupabasePublicEnv } from "@/config/env";
import type { Database } from "@/types/database";

export function createServerSupabaseClient() {
  const { supabaseUrl, supabasePublishableKey } = getRequiredSupabasePublicEnv();

  return createClient<Database>(supabaseUrl, supabasePublishableKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}
