import NextAuth, { type DefaultSession } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./lib/db"
import authConfig from "./auth.config"
import { getUserById } from "./data/user"
import { Role } from "@prisma/client"

declare module "next-auth" {
    /**
     * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            roles: Role[]
            firstName: string
            lastName: string
            /**
             * By default, TypeScript merges new interface properties and overwrites existing ones.
             * In this case, the default session user properties will be overwritten,
             * with the new ones defined above. To keep the default session user properties,
             * you need to add them back into the newly declared interface.
             */
        } & DefaultSession["user"]
    }
}


export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: "/auth/sign-in",
        error: "/auth/error"
    },
    events: {
        async linkAccount({ user }) {
            await db.user.update({
                where: {
                    id: user.id,
                }, data: {
                    emailVerified: new Date()
                }
            })
        }
    },
    callbacks: {
        async signIn({ user, account }) {
            // Oauth user can sign in without email verification (email automatically verified)
            if (account?.provider !== 'credentials') return true

            if (user.id && user.email) {
                const existingUser = await getUserById(user?.id)

                if (!existingUser?.emailVerified) {
                    return false
                }
            }
            return true
        },
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub
            }
            if (token.roles && session.user) {
                session.user.roles = token.roles as Role[]
            }
            if (token.firstName && session.user) {
                session.user.firstName = token.firstName as string
            }
            if (token.lastName && session.user) {
                session.user.lastName = token.lastName as string
            }
            return session
        },
        async jwt({ token }) {
            if (!token.sub) return token

            const existingUser = await getUserById(token.sub)
            if (!existingUser) return token

            token.roles = existingUser.roles
            token.firstName = existingUser.firstName
            token.lastName = existingUser.lastName
            return token
        },
    },
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt' },
    ...authConfig,
})