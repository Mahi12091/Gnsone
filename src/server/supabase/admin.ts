import "server-only";

import { createClient } from "@supabase/supabase-js";

import { getRequiredPublicEnv, getServerEnv } from "@/config/env";
import type { Database } from "@/types/database";

export function createSupabaseAdminClient() {
  const { supabaseUrl } = getRequiredPublicEnv();
  const { supabaseServiceRoleKey } = getServerEnv();

  if (!supabaseServiceRoleKey) {
    throw new Error("Missing server-only SUPABASE_SERVICE_ROLE_KEY environment variable.");
  }

  return createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}
