import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'


const isPublicRoute = createRouteMatcher([
    "/sign-in",
    "/sign-up",
    "/",
    "/home"
])

const publicApiRoute = createRouteMatcher([
    "/api/videos"
])

export default clerkMiddleware(async(auth, req) => {
    const {userId} = await auth()
    const currentUrl = new URL(req.url)
    const isAccessingDashboard = currentUrl.pathname === "/home"
    const isApiRequest = currentUrl.pathname.startsWith("/api")

    //if user is logged in and accessing a public route but not the dashboard
    if(userId && isPublicRoute(req) && !isAccessingDashboard) {
        return NextResponse.redirect(new URL("/home", req.url))
    }

    //not logged in
    if(!userId) {
        //if the user is not logged in and trying to access a protected route
        if(!isPublicRoute(req) && !publicApiRoute(req)) {
            return NextResponse.redirect(new URL("/sign-in", req.url))
        }

        // if the request is for a protected API and the user is not logged in
        if(isApiRequest && !publicApiRoute(req)) {
            return NextResponse.redirect(new URL("/sign-in", req.url))
        }
    }

    return NextResponse.next()
})

export const config = {
    matcher: [
        "/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)",
    ],
}