import bcrypt from 'bcryptjs';
import type { NextRequest, NextResponse } from 'next/server';

import {
  ACCESS_TOKEN_COOKIE,
  ACCESS_TOKEN_TTL_SECONDS,
  REFRESH_TOKEN_COOKIE,
  REFRESH_TOKEN_TTL_SECONDS,
  authCookieOptions,
  getAdminEmail,
  getRequiredEnv,
} from './config';
import { getAuthDb } from './db';
import {
  createRefreshTokenId,
  hashRefreshTokenId,
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from './tokens';

const USERS_COLLECTION = 'auth_users';
const REFRESH_TOKENS_COLLECTION = 'auth_refresh_tokens';

export async function ensureAdminUser() {
  const db = await getAuthDb();
  const email = getAdminEmail();
  const password = getRequiredEnv('ADMIN_PASSWORD');
  const users = db.collection(USERS_COLLECTION);
  const existing = await users.findOne<{ passwordHash?: string }>({ email });

  if (existing?.passwordHash) {
    const passwordMatches = await bcrypt.compare(password, existing.passwordHash);
    if (passwordMatches) return;
  }

  const passwordHash = await bcrypt.hash(password, 12);
  await users.updateOne(
    { email },
    {
      $set: {
        email,
        passwordHash,
        role: 'admin',
        updatedAt: new Date(),
      },
      $setOnInsert: {
        createdAt: new Date(),
      },
    },
    { upsert: true },
  );
}

export async function validateAdminCredentials(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase();
  if (normalizedEmail !== getAdminEmail()) return false;

  await ensureAdminUser();

  const db = await getAuthDb();
  const user = await db.collection(USERS_COLLECTION).findOne<{ passwordHash: string }>({
    email: normalizedEmail,
    role: 'admin',
  });

  if (!user?.passwordHash) return false;
  return bcrypt.compare(password, user.passwordHash);
}

export async function createSession(email: string, request: NextRequest, response: NextResponse) {
  const tokenId = createRefreshTokenId();
  const [accessToken, refreshToken] = await Promise.all([
    signAccessToken(email),
    signRefreshToken(email, tokenId),
  ]);

  const db = await getAuthDb();
  await db.collection(REFRESH_TOKENS_COLLECTION).insertOne({
    email,
    tokenHash: hashRefreshTokenId(tokenId),
    userAgent: request.headers.get('user-agent') || 'unknown',
    ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + REFRESH_TOKEN_TTL_SECONDS * 1000),
  });

  response.cookies.set(ACCESS_TOKEN_COOKIE, accessToken, {
    ...authCookieOptions,
    maxAge: ACCESS_TOKEN_TTL_SECONDS,
  });
  response.cookies.set(REFRESH_TOKEN_COOKIE, refreshToken, {
    ...authCookieOptions,
    maxAge: REFRESH_TOKEN_TTL_SECONDS,
  });
}

export async function rotateSession(refreshToken: string, request: NextRequest, response: NextResponse) {
  const payload = await verifyRefreshToken(refreshToken);
  if (payload.email !== getAdminEmail()) return false;

  const db = await getAuthDb();
  const tokens = db.collection(REFRESH_TOKENS_COLLECTION);
  const tokenHash = hashRefreshTokenId(payload.tokenId);
  const storedToken = await tokens.findOne({
    email: payload.email,
    tokenHash,
    expiresAt: { $gt: new Date() },
    revokedAt: { $exists: false },
  });

  if (!storedToken) return false;

  await tokens.updateOne({ _id: storedToken._id }, { $set: { revokedAt: new Date() } });
  await createSession(payload.email, request, response);
  return true;
}

export async function revokeRefreshToken(refreshToken?: string) {
  if (!refreshToken) return;

  try {
    const payload = await verifyRefreshToken(refreshToken);
    const db = await getAuthDb();
    await db.collection(REFRESH_TOKENS_COLLECTION).updateOne(
      {
        email: payload.email,
        tokenHash: hashRefreshTokenId(payload.tokenId),
      },
      { $set: { revokedAt: new Date() } },
    );
  } catch {
    // Logout should clear cookies even if the refresh token is malformed or expired.
  }
}

export function clearAuthCookies(response: NextResponse) {
  response.cookies.set(ACCESS_TOKEN_COOKIE, '', {
    ...authCookieOptions,
    maxAge: 0,
  });
  response.cookies.set(REFRESH_TOKEN_COOKIE, '', {
    ...authCookieOptions,
    maxAge: 0,
  });
}
