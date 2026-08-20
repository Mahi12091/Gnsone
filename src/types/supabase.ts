export type SupabaseConnectivityResult =
  | {
      ok: true;
      message: string;
      checkedAt: string;
    }
  | {
      ok: false;
      message: string;
      checkedAt: string;
    };
