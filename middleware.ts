// import { NextRequest, NextResponse } from "next/server";
// import { getSessionCookie } from "better-auth/cookies";

// export async function middleware(request: NextRequest) {
//   console.log(`[Middleware] Incoming request to: ${request.url}`);

//   const sessionCookie = getSessionCookie(request);
//   console.log(
//     "[Middleware] Session cookie:",
//     sessionCookie ? "exists" : "not found"
//   );

//   if (!sessionCookie) {
//     console.log("[Middleware] Redirecting to homepage due to missing session");
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   console.log("[Middleware] Allowing request to proceed");
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/dashboard"],
// };
