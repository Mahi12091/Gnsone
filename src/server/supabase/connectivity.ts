import "server-only";

import { getRequiredSupabasePublicEnv } from "@/config/env";

import type { SupabaseConnectivityResult } from "@/types/supabase";

export async function testSupabaseConnectivity(): Promise<SupabaseConnectivityResult> {
  const checkedAt = new Date().toISOString();

  try {
    const { supabaseUrl, supabasePublishableKey } = getRequiredSupabasePublicEnv();
    const response = await fetch(`${supabaseUrl}/auth/v1/settings`, {
      headers: {
        apikey: supabasePublishableKey,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        ok: false,
        message: `Supabase responded with HTTP ${response.status}. Check the project URL and publishable key.`,
        checkedAt,
      };
    }

    return {
      ok: true,
      message: "Server-side Supabase connectivity check succeeded.",
      checkedAt,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Supabase connectivity error.";

    return {
      ok: false,
      message,
      checkedAt,
    };
  }
}
