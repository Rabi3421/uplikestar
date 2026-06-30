import { NextRequest, NextResponse } from 'next/server';

import { ACCESS_TOKEN_COOKIE } from '@/lib/auth/config';
import { verifyAccessToken } from '@/lib/auth/tokens';
import { isValidEnquiryStatus } from '@/lib/enquiry-status';
import { updateContactEnquiryStatus } from '@/lib/enquiries';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(request: NextRequest, context: RouteContext) {
  const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;
  if (!accessToken) {
    return NextResponse.json({ success: false, message: 'Authentication required.' }, { status: 401 });
  }

  let adminEmail = '';
  try {
    const payload = await verifyAccessToken(accessToken);
    adminEmail = payload.email;
  } catch {
    return NextResponse.json({ success: false, message: 'Session expired. Please sign in again.' }, { status: 401 });
  }

  const { id } = await context.params;
  let body: { status?: unknown };

  try {
    body = (await request.json()) as { status?: unknown };
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request body.' }, { status: 400 });
  }

  if (!isValidEnquiryStatus(body.status)) {
    return NextResponse.json({ success: false, message: 'Unsupported enquiry status.' }, { status: 400 });
  }

  const enquiry = await updateContactEnquiryStatus(id, body.status, adminEmail);
  if (!enquiry) {
    return NextResponse.json({ success: false, message: 'Enquiry not found.' }, { status: 404 });
  }

  return NextResponse.json({ success: true, enquiry });
}
