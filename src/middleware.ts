import { NextRequest, NextResponse } from "next/server";
import AuthServices from "./modules/auth/services/auth-services";

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};

const publicRoutes = ["/", "/portal/signup", "/portal/signin"];

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const session = await AuthServices.isSessionValid();
  if (!session) {
    const isAPIRouter = pathname.startsWith("/api");

    if (isAPIRouter) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    return NextResponse.redirect(new URL("/portal/signin", req.url));
  }

  return NextResponse.next();
}
