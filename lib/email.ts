import nodemailer from "nodemailer";
import { getDictionary, fill, type Locale } from "@/lib/i18n";

/**
 * Gmail SMTP rather than an API provider: sending to an arbitrary parent
 * address needs either a verified sending domain or a real mailbox, and
 * DancePro has a mailbox before it has a domain. Swap this out for a
 * provider once the domain exists — nothing else has to change.
 */
export function emailConfigured(): boolean {
  return Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
}

export async function sendParentConsentEmail(options: {
  to: string;
  dancerName: string;
  confirmUrl: string;
  locale: Locale;
}): Promise<boolean> {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return false;

  const t = getDictionary(options.locale).consent;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const body = [
    fill(t.emailIntro, { name: options.dancerName }),
    "",
    options.confirmUrl,
    "",
    t.emailIgnore,
  ].join("\n");

  try {
    await transport.sendMail({
      from: `DancePro <${user}>`,
      to: options.to,
      subject: fill(t.emailSubject, { name: options.dancerName }),
      text: body,
    });
    return true;
  } catch {
    // The signup stays pending; nothing is confirmed without the click.
    return false;
  }
}
