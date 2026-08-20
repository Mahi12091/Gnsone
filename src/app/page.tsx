import { LandingPage } from "@/components/landing/landing-page";
import { testSupabaseConnectivity } from "@/server/supabase/connectivity";

export default async function Home() {
  const connectivity = await testSupabaseConnectivity();

  return <LandingPage connectivity={connectivity} />;
}
