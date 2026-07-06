import { NextResponse } from "next/server";

// This is a placeholder handler. Right now it just validates the input
// and returns success without actually sending an email.
//
// To make it real, wire it up to an email service such as Resend:
//   1. npm install resend
//   2. Add RESEND_API_KEY to your environment variables (.env.local + Vercel)
//   3. Uncomment the Resend code below and remove the console.log line
//
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // await resend.emails.send({
    //   from: "Portfolio <onboarding@yourdomain.com>",
    //   to: "hello@yourdomain.com",
    //   subject: `New message from ${name}`,
    //   text: `From: ${name} (${email})\n\n${message}`,
    // });

    console.log("New contact form submission:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
