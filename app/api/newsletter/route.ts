import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

interface NewsletterBody {
  email?: string;
  locale?: string;
  consent?: boolean;
  website?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: NewsletterBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const email = body.email?.trim().toLowerCase();
  const locale = body.locale?.trim() || "en";

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (!body.consent) {
    return NextResponse.json(
      { error: "Consent is required to subscribe." },
      { status: 400 },
    );
  }

  let supabase;
  try {
    supabase = createAdminClient();
  } catch {
    console.error("Newsletter signup attempted but Supabase is not configured.");
    return NextResponse.json(
      { error: "Newsletter is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  const now = new Date().toISOString();

  const { error } = await supabase.from("tolls").upsert(
    {
      email,
      locale,
      consent_given_at: now,
      unsubscribed_at: null,
    },
    { onConflict: "email" },
  );

  if (error) {
    console.error("Newsletter signup failed:", error);
    return NextResponse.json(
      { error: "Could not complete subscription. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
