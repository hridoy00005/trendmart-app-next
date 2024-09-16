import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("auth-token");
  const pathname = request.nextUrl.pathname;

  // Auth paths
  const authPaths = ["/login", "/registration", "/forget-password", "/reset-password"];

  // Protected paths
  const protectedPaths = [
    "/account",
    "/account/orders",
    "/account/favourites",
    "/account/address",
    "/account/profile",
    "/checkout",
  ];

  const isProtected = protectedPaths.some(path => pathname.startsWith(path)) ||
    pathname.match(/\/account\/orders\/.+/) ||
    pathname.match(/\/order-confirmation\/.+/);

  // Redirect if trying to access protected paths without token
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect if logged in and trying to access auth pages
  if (authPaths.includes(pathname) && token) {
    console.log('Redirecting to home page because user is already logged in');
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Apply middleware to these routes
export const config = {
  matcher: [
    "/login",
    "/registration",
    "/forget-password",
    "/reset-password",
    "/account/:path*",
    "/checkout",
    "/order-confirmation/:orderId",
  ],
};
