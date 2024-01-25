import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt"

const protectedRoutes = ["/shop/checkout", '/admin'];

export default async function middleware(req:NextRequest) {
  const session = await getToken({ req })
  const pathOrigin = req.nextUrl.origin
  const pathName = req.nextUrl.pathname
  
  if (!session && protectedRoutes.some((path) => pathName.startsWith(path))) {
    const absoluteURL = new URL("/login", pathOrigin);
    return NextResponse.redirect(absoluteURL.toString());
  } else if(session && pathName.startsWith('/admin') && !session.isAdmin) {
    const absoluteURL = new URL("/", pathOrigin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
