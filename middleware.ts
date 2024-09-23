import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { isPagesAPIRouteMatch } from "next/dist/server/future/route-matches/pages-api-route-match";

const protectedRoutes = createRouteMatcher([
  '/',
  '/upcoming',
  '/previous',
  '/recording',
  '/personal-room',
  '/meeting(.*)'
]);

export default clerkMiddleware((auth, req) => {
  if(protectedRoutes(req)) auth().protect();
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};