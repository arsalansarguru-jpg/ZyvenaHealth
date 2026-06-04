import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseAnonKey, getSupabaseUrl, isSupabaseConfigured } from "./config";

let browserClient: SupabaseClient | null = null;

/** Browser-safe Supabase client (anon key). Returns null if not configured. */
export function createBrowserClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) return null;

  if (!browserClient) {
    browserClient = createClient(getSupabaseUrl(), getSupabaseAnonKey()!, {
      auth: { persistSession: false },
    });
  }

  return browserClient;
}
