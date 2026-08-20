const supabasePublicEnv = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabasePublishableKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
};

export function getPublicEnv() {
  return supabasePublicEnv;
}

export function getRequiredSupabasePublicEnv() {
  const { supabaseUrl, supabasePublishableKey } = supabasePublicEnv;

  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error(
      "Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.",
    );
  }

  return { supabaseUrl, supabasePublishableKey };
}
