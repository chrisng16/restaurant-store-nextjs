import { MailOptions } from "nodemailer/lib/sendmail-transport";
import nodemailer from "nodemailer"

const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = process.env

export const sendVerificationEmail = async (email: string, token: string) => {
    const verificationLink = `http://localhost:3000/auth/verification?token=${token}`
    const verificationMailOptions: MailOptions = {
        from: `no-reply <${MAIL_USER}>`,
        to: email,
        subject: "Restaurant App: Confirm your email",
        text: "Click here to verify your email. This link will expires in 15 minutes.",
        html: `<p>Click <a href=${verificationLink}>here</a> to verify your email. This link will expires in 15 minutes.</p>`
    };
    const transport = nodemailer.createTransport({
        host: MAIL_HOST,
        port: Number(MAIL_PORT),
        secure: true,
        auth: {
            user: MAIL_USER,
            pass: MAIL_PASS
        },
    });
    await transport.sendMail(verificationMailOptions)
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const passwordResetLink = `http://localhost:3000/auth/reset-password?token=${token}`
    const passwordResetMailOptions: MailOptions = {
        from: `no-reply <${MAIL_USER}>`,
        to: email,
        subject: "Restaurant App: Reset password",
        text: "Click here to reset your password. This link will expires in 15 minutes.",
        html: `<p>Click <a href=${passwordResetLink}>here</a> to reset your password. This link will expires in 15 minutes.</p>`
    };
    const transport = nodemailer.createTransport({
        host: MAIL_HOST,
        port: Number(MAIL_PORT),
        secure: true,
        auth: {
            user: MAIL_USER,
            pass: MAIL_PASS
        },
    });
    await transport.sendMail(passwordResetMailOptions)
}