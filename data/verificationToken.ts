import { db } from "@/lib/db";
import { v4 as uuid } from 'uuid'


export const getVerificationTokenByEmail = async (email: string) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: {
                email
            }
        })

        return verificationToken
    } catch {
        return null
    }
}
export const getVerificationTokenByToken = async (token: string) => {
    try {
        const verificationToken = await db.verificationToken.findUnique({
            where: {
                token}
        })

        return verificationToken
    } catch {
        return null
    }
}

export const deleteVerificationTokenById = async (id: string) => {
    await db.verificationToken.delete({ where: { id } })
}

export const createVerificationToken = async (email: string) => {
    const token = uuid()
    // Expires in 15 minutes
    const expiresAt = new Date(new Date().getTime() + 15 * 60 * 1000)
    const verificationToken = await db.verificationToken.create({ data: { email, token, expiresAt } })

    return verificationToken
}