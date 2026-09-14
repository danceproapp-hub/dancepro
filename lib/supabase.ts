import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (client) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables."
    );
  }

  client = createClient(url, anonKey);
  return client;
}

export interface WaitlistStatus {
  position: number;
  total: number;
  referrals: number;
  profileComplete: boolean;
}

export async function joinWaitlist(input: {
  firstName: string;
  email: string;
  ref: string | null;
}): Promise<string> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase.rpc("join_waitlist", {
    p_first_name: input.firstName,
    p_email: input.email,
    p_ref: input.ref,
  });

  if (error) throw error;
  return data as string;
}

export async function updateWaitlistProfile(input: {
  code: string;
  city: string;
  country: string;
  role: string;
  level: string;
  styles: string[];
  lookingFor: string[];
}): Promise<void> {
  const supabase = getSupabaseClient();
  const { error } = await supabase.rpc("update_waitlist_profile", {
    p_code: input.code,
    p_city: input.city,
    p_country: input.country,
    p_role: input.role,
    p_level: input.level,
    p_styles: input.styles,
    p_looking_for: input.lookingFor,
  });

  if (error) throw error;
}

export async function getWaitlistStatus(code: string): Promise<WaitlistStatus | null> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase.rpc("waitlist_status", { p_code: code });

  if (error) throw error;
  if (!data || (Array.isArray(data) && data.length === 0)) return null;

  const row = Array.isArray(data) ? data[0] : data;
  if (!row) return null;

  return {
    position: Number(row.position),
    total: Number(row.total),
    referrals: Number(row.referrals),
    profileComplete: Boolean(row.profile_complete),
  };
}

export async function getWaitlistCount(): Promise<number> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase.rpc("waitlist_count");
  if (error) throw error;
  return Number(data ?? 0);
}
