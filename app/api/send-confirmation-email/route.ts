import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = process.env;


export async function POST(req: Request) {
    const { email, name, amount } = await req.json();

    if (!email || !name || !amount) {
        return NextResponse.json(
            { error: "Missing required fields." },
            { status: 400 }
        );
    }

    const transport = nodemailer.createTransport({
        host: MAIL_HOST,
        port: Number(MAIL_PORT),
        secure: true,
        auth: {
            user: MAIL_USER,
            pass: MAIL_PASS
        },
    });

    // Email options
    const mailOptions = {
        from: `"Restaurant App" <${MAIL_USER}>`,
        to: email,
        subject: "Payment Confirmation",
        html: `
        <h1>Thank you for your payment, ${name}!</h1>
        <p>We’ve received your payment of <strong>$${(amount / 100).toFixed(
            2
        )}</strong>.</p>
        <p>If you have any questions, feel free to contact us.</p>
        <p>Best regards,<br />The Restaurant Team</p>
      `,
    };

    try {
        // Send the email
        await transport.sendMail(mailOptions);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json(
            { error: "Failed to send confirmation email." },
            { status: 500 }
        );
    }
}
