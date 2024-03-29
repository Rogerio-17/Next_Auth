import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};

const publicRoutes = ["/", "/portal/signup", "/portal/signin"];

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const session = null;
  if (!session) {
    return NextResponse.redirect(new URL("/portal/signin", req.url));
  }

  return NextResponse.next();
}
