import Credentials from "next-auth/providers/credentials"
import Google, { GoogleProfile } from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
import { SignInFormSchema } from "./lib/schemas"
import { getUserByEmail } from "./data/user"
import bcrypt from 'bcryptjs'

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile: (_profile: GoogleProfile) => {
        return {
          id: _profile.sub,
          firstName: _profile.given_name,
          lastName: _profile.family_name,
          email: _profile.email,
          image: _profile.picture
        };
      },
    }),
    Credentials({
      async authorize(credentials) {
        const validateFields = SignInFormSchema.safeParse(credentials)
        if (validateFields.success) {
          const { email, password } = validateFields.data
          const user = await getUserByEmail(email)

          if (!user || !user.password) return null

          const passwordMatch = await bcrypt.compare(password, user.password)

          if (passwordMatch) return user
        }
        return null
      }
    })],
} satisfies NextAuthConfig