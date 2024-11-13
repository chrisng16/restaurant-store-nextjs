"use server";
import { z } from "zod";
import { PasswordResetFormSchema, SetNewPasswordFormSchema, SignInFormSchema, SignUpFormSchema } from "@/lib/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { generatePasswordResetToken, generateVerificationToken } from "@/lib/tokens";
import { sendPasswordResetEmail, sendVerificationEmail } from "@/lib/email";
import { deleteVerificationTokenById, getVerificationTokenByToken } from "@/data/verificationToken";
import { deletePasswordResetTokenById, getPasswordResetTokenByToken } from "@/data/passwordResetToken";

export async function signup(values: z.infer<typeof SignUpFormSchema>) {
    const validatedFields = SignUpFormSchema.safeParse(values);
    console.log(validatedFields);

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
            success: false,
            message: "Invalid Fields!",
        };
    }

    const { email, password, firstName, lastName } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return {
            success: false,
            message: "Email already in use!",
        };
    }

    await db.user.create({
        data: {
            firstName,
            lastName,
            email,
            password: hashedPassword,
        },
    });

    //TODO: Send verification token email
    const verificationToken = await generateVerificationToken(email);
    sendVerificationEmail(verificationToken.email, verificationToken.token);

    return { message: "A verification email has been sent", success: true };
}

export async function signin(values: z.infer<typeof SignInFormSchema>) {
    const validatedFields = SignInFormSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
            success: false,
            message: "Invalid Fields!",
        };
    }

    const { email, password } = validatedFields.data;

    const existingUser = await getUserByEmail(email);
    if (!existingUser || !existingUser.password)
        return { success: false, message: "Email does not exist" };
    if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(
            existingUser.email,
        );
        sendVerificationEmail(verificationToken.email, verificationToken.token);
        return {
            success: false,
            message: "Account not verified. A verification email has been sent",
        };
    }

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: '/'
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { success: false, message: "Wrong email or password." };
                default:
                    return { success: false, message: "Something went wrong" };
            }
        }
        throw error;
    }
    return { message: "Succesfully Signed In", success: true };
}

export const verification = async (token: string) => {
    const existingToken = await getVerificationTokenByToken(token);
    if (!existingToken)
        return { message: "Token does not exist!", success: false };

    const tokenExpired = new Date(existingToken.expiresAt) < new Date();

    if (tokenExpired) return { message: "Token expired", success: false };

    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser)
        return { message: "Email does not exist!", success: false };

    await db.user.update({
        where: { id: existingUser.id },
        data: { emailVerified: new Date(), email: existingToken.email },
    });

    await deleteVerificationTokenById(existingToken.id)

    return { message: "Account verified", success: true };

};
export const setNewPassword = async (values: z.infer<typeof SetNewPasswordFormSchema>, token: string) => {
    // Check if the passwordResetToken is valid
    if (!token) return { message: "No token!", success: false };
    const existingToken = await getPasswordResetTokenByToken(token);
    if (!existingToken)
        return { message: "Token does not exist!", success: false };

    const tokenExpired = new Date(existingToken.expiresAt) < new Date();

    if (tokenExpired) return { message: "Token expired", success: false };


    // Check if the user exist
    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser)
        return { message: "Email does not exist!", success: false };

    const validatedFields = SetNewPasswordFormSchema.safeParse(values)
    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
            success: false,
            message: "Invalid Email!",
        };
    }
    const { password } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)

    await db.user.update({
        where: { id: existingUser.id },
        data: { password: hashedPassword },
    });

    await deletePasswordResetTokenById(existingToken.id)

    return { message: "Password Updated", success: true };

};

export const resetPassword = async (values: z.infer<typeof PasswordResetFormSchema>) => {
    const validatedFields = PasswordResetFormSchema.safeParse(values)

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
            success: false,
            message: "Invalid Email!",
        };
    }

    const { email } = validatedFields.data
    const existingUser = await getUserByEmail(email)

    if (!existingUser) return { success: false, message: "User not found!" }

    const passwordResetToken = await generatePasswordResetToken(email)

    await sendPasswordResetEmail(passwordResetToken.email, passwordResetToken.token)

    return { success: true, message: "Reset email was sent!" }

}