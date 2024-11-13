import { createPasswordResetToken, deletePasswordResetTokenById, getPasswordResetTokenByEmail } from '@/data/passwordResetToken'
import { createVerificationToken, deleteVerificationTokenById, getVerificationTokenByEmail } from '@/data/verificationToken'


export const generateVerificationToken = async (email: string) => {
    const existingToken = await getVerificationTokenByEmail(email)
    if (existingToken) {
        await deleteVerificationTokenById(existingToken.id)
    }
    const verificationToken = await createVerificationToken(email)

    return verificationToken
}


export const generatePasswordResetToken = async (email: string) => {
    const existingToken = await getPasswordResetTokenByEmail(email)
    if (existingToken) {
        await deletePasswordResetTokenById(existingToken.id)
    }
    const passwordResetToken = await createPasswordResetToken(email)

    return passwordResetToken
}