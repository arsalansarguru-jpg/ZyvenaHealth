/** Supabase project base URL (not the /rest/v1 path). */
export const SUPABASE_PROJECT_URL =
  "https://nsmmyvtchwlpolaantex.supabase.co";

/** REST API root — use with fetch + apikey header if not using the JS client. */
export const SUPABASE_REST_URL = `${SUPABASE_PROJECT_URL}/rest/v1`;

export function getSupabaseUrl(): string {
  return process.env.NEXT_PUBLIC_SUPABASE_URL ?? SUPABASE_PROJECT_URL;
}

export function getSupabaseAnonKey(): string | undefined {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
}

export function isSupabaseConfigured(): boolean {
  return Boolean(getSupabaseUrl() && getSupabaseAnonKey());
}
