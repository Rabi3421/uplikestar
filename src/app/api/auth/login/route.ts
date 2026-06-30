import { NextRequest, NextResponse } from 'next/server';

import { createSession, validateAdminCredentials } from '@/lib/auth/server';
import { getAdminEmail } from '@/lib/auth/config';
import { isMongoConnectionError } from '@/lib/auth/db';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required.' },
        { status: 400 },
      );
    }

    const isValid = await validateAdminCredentials(email, password);
    if (!isValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid official credentials.' },
        { status: 401 },
      );
    }

    const response = NextResponse.json({
      success: true,
      redirectTo: '/dashboard',
    });

    await createSession(getAdminEmail(), request, response);
    return response;
  } catch (error) {
    console.error('Login failed:', error);
    if (isMongoConnectionError(error)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Database connection failed. Check MongoDB Atlas network access and connection string.',
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { success: false, message: 'Unable to complete login right now.' },
      { status: 500 },
    );
  }
}
