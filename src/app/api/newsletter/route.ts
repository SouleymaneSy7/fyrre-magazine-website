import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

import { emailSchema } from "@/validators";
import WelcomeEmail from "@/emails/welcome-email/WelcomeEmail";
import AdminNotificationEmail from "@/emails/admin-notification-email/AdminNotificationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const adminEmail = process.env.NEWSLETTER_TO_EMAIL;

  if (!adminEmail) {
    console.error("[NEWSLETTER ERROR] NEWSLETTER_TO_EMAIL is not defined");
    return NextResponse.json(
      { error: "Server configuration error. Please try again later." },
      { status: 500 },
    );
  }

  try {
    const body = await request.json();
    const result = emailSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.message },
        { status: 400 },
      );
    }

    const { email } = result.data;
    const subscribedAt = new Date().toUTCString();

    await resend.contacts.create({
      email,
      unsubscribed: false,
    });

    const welcomeRecipient = process.env.RESEND_FROM_EMAIL
      ? email
      : (process.env.RESEND_TEST_EMAIL ?? null);

    await Promise.all([
      resend.emails.send({
        from: "Fyrre Magazine <onboarding@resend.dev>",
        to: adminEmail,
        subject: `New subscriber: ${email}`,
        react: AdminNotificationEmail({
          subscriberEmail: email,
          subscribedAt: subscribedAt,
        }),
      }),

      ...(welcomeRecipient
        ? [
            resend.emails.send({
              from: "Fyrre Magazine <onboarding@resend.dev>",
              to: welcomeRecipient,
              subject:
                welcomeRecipient !== email
                  ? `[TEST] Welcome email for: ${email}`
                  : "Welcome to Fyrre Magazine ✦",

              react: WelcomeEmail({ email: email }),
            }),
          ]
        : []),
    ]);

    const isDomainVerified = !!process.env.RESEND_FROM_EMAIL;
    const isTestMode = !isDomainVerified && !!process.env.RESEND_TEST_EMAIL;

    const message = isDomainVerified
      ? "You're on the list! Check your inbox for a welcome email."
      : isTestMode
        ? "You're on the list! Note: this site is in demo mode — welcome emails are currently sent to a test address. Your subscription has been saved."
        : "You're on the list! Your subscription has been saved.";

    return NextResponse.json({ message }, { status: 200 });
  } catch (error) {
    console.error("[NEWSLETTER ERROR]", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
