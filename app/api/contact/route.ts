import { NextResponse } from "next/server"
import { Resend } from "resend"
import { contactFormSchema } from "@/lib/schema"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const body = contactFormSchema.parse(json)

    // Send email notification
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "shaun.porwal@gmail.com",
      subject: `New Contact Form Message: ${body.subject}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>From:</strong> ${body.name} (${body.email})</p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    })

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending message:", error)
    return NextResponse.json({ message: "Error sending message" }, { status: 500 })
  }
}

