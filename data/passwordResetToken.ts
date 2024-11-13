import { db } from "@/lib/db";
import { v4 as uuid } from 'uuid'


export const getPasswordResetTokenByEmail = async (email: string) => {
    try {
        const passwordResetToken = await db.passwordResetToken.findFirst({
            where: {
                email
            }
        })

        return passwordResetToken
    } catch {
        return null
    }
}
export const getPasswordResetTokenByToken = async (token: string) => {
    try {
        const passwordResetToken = await db.passwordResetToken.findUnique({
            where: {
                token
            }
        })

        return passwordResetToken
    } catch {
        return null
    }
}

export const deletePasswordResetTokenById = async (id: string) => {
    await db.passwordResetToken.delete({ where: { id } })
}

export const createPasswordResetToken = async (email: string) => {
    const token = uuid()
    // Expires in 15 minutes
    const expiresAt = new Date(new Date().getTime() + 15 * 60 * 1000)
    const passwordResetToken = await db.passwordResetToken.create({ data: { email, token, expiresAt } })
    return passwordResetToken
}