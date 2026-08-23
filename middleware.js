import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

async function verifyJWT(token) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (err) {
    console.error("❌ JWT Verify Error:", err.message);
    return null;
  }
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow login page
  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  const token = request.cookies.get("auth-cookie")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  const decoded = await verifyJWT(token);

  if (!decoded) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }


  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
