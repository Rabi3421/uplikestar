import { NextRequest, NextResponse } from 'next/server';

import { REFRESH_TOKEN_COOKIE } from '@/lib/auth/config';
import { clearAuthCookies, revokeRefreshToken } from '@/lib/auth/server';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const refreshToken = request.cookies.get(REFRESH_TOKEN_COOKIE)?.value;
  await revokeRefreshToken(refreshToken);

  const response = NextResponse.json({ success: true, redirectTo: '/login' });
  clearAuthCookies(response);
  return response;
}
