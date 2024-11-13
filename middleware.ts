import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { protectedRoutes, authRoutes } from "./lib/routes"

const { auth } = NextAuth(authConfig)


export default auth((req) => {
    const { nextUrl } = req
    const isLoggedIn = !!req.auth

    if (!isLoggedIn && protectedRoutes.includes(nextUrl.pathname)) {
        return Response.redirect(new URL('/auth/sign-in', nextUrl))
    }

    if (isLoggedIn && authRoutes.includes(nextUrl.pathname)) {
        return Response.redirect(new URL('/', nextUrl))
    }

})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}