import { NextRequest, NextResponse } from 'next/server';

import { REFRESH_TOKEN_COOKIE } from '@/lib/auth/config';
import { clearAuthCookies, rotateSession } from '@/lib/auth/server';

export const runtime = 'nodejs';

function authFailureResponse(request: NextRequest, shouldRedirect: boolean, message: string) {
  const response = shouldRedirect
    ? NextResponse.redirect(new URL('/login', request.url))
    : NextResponse.json({ success: false, message }, { status: 401 });
  clearAuthCookies(response);
  return response;
}

async function handleRefresh(request: NextRequest, shouldRedirect: boolean) {
  const refreshToken = request.cookies.get(REFRESH_TOKEN_COOKIE)?.value;
  const nextPath = request.nextUrl.searchParams.get('next') || '/dashboard';
  const response = shouldRedirect
    ? NextResponse.redirect(new URL(nextPath, request.url))
    : NextResponse.json({ success: true });

  if (!refreshToken) {
    return authFailureResponse(request, shouldRedirect, 'Refresh token missing.');
  }

  try {
    const refreshed = await rotateSession(refreshToken, request, response);
    if (!refreshed) {
      return authFailureResponse(request, shouldRedirect, 'Refresh token invalid.');
    }

    return response;
  } catch (error) {
    console.error('Refresh failed:', error);
    return authFailureResponse(request, shouldRedirect, 'Unable to refresh session.');
  }
}

export async function GET(request: NextRequest) {
  return handleRefresh(request, true);
}

export async function POST(request: NextRequest) {
  return handleRefresh(request, false);
}
