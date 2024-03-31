import AuthServices from "@/modules/auth/services/auth-services";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  AuthServices.destroySession();
  console.log(req.url);

  return NextResponse.redirect(new URL("/portal/signin", req.url));
}
