import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from '@/lib/auth/config';

function getAccessSecret() {
  const secret = process.env.JWT_ACCESS_SECRET;
  if (!secret) return null;
  return new TextEncoder().encode(secret);
}

async function hasValidAccessToken(request: NextRequest) {
  const token = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;
  const secret = getAccessSecret();

  if (!token || !secret) return false;

  try {
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isDashboardRoute = pathname.startsWith('/dashboard');
  const isLoginRoute = pathname === '/login';
  const validAccessToken = await hasValidAccessToken(request);

  if (isLoginRoute && validAccessToken) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (!isDashboardRoute) {
    return NextResponse.next();
  }

  if (validAccessToken) {
    return NextResponse.next();
  }

  const hasRefreshToken = Boolean(request.cookies.get(REFRESH_TOKEN_COOKIE)?.value);
  if (hasRefreshToken) {
    const refreshUrl = new URL('/api/auth/refresh', request.url);
    refreshUrl.searchParams.set('next', `${pathname}${request.nextUrl.search}`);
    return NextResponse.redirect(refreshUrl);
  }

  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('next', `${pathname}${request.nextUrl.search}`);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/login', '/dashboard/:path*'],
};
