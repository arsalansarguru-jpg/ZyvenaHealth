import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseAnonKey, getSupabaseUrl, isSupabaseConfigured } from "./config";

/** Server-side Supabase client for API routes and server actions. */
export function createServerClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) return null;

  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? getSupabaseAnonKey();

  if (!key) return null;

  return createClient(getSupabaseUrl(), key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
