import { createHash, randomBytes } from 'crypto';
import { jwtVerify, SignJWT, type JWTPayload } from 'jose';

import {
  ACCESS_TOKEN_TTL_SECONDS,
  REFRESH_TOKEN_TTL_SECONDS,
  getRequiredEnv,
} from './config';

export interface AuthTokenPayload extends JWTPayload {
  email: string;
  role: 'admin';
}

function getSecret(name: 'JWT_ACCESS_SECRET' | 'JWT_REFRESH_SECRET') {
  return new TextEncoder().encode(getRequiredEnv(name));
}

export async function signAccessToken(email: string) {
  return new SignJWT({ email, role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${ACCESS_TOKEN_TTL_SECONDS}s`)
    .sign(getSecret('JWT_ACCESS_SECRET'));
}

export async function signRefreshToken(email: string, tokenId: string) {
  return new SignJWT({ email, role: 'admin', tokenId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${REFRESH_TOKEN_TTL_SECONDS}s`)
    .sign(getSecret('JWT_REFRESH_SECRET'));
}

export async function verifyAccessToken(token: string) {
  const { payload } = await jwtVerify(token, getSecret('JWT_ACCESS_SECRET'));
  return payload as AuthTokenPayload;
}

export async function verifyRefreshToken(token: string) {
  const { payload } = await jwtVerify(token, getSecret('JWT_REFRESH_SECRET'));
  return payload as AuthTokenPayload & { tokenId: string };
}

export function createRefreshTokenId() {
  return randomBytes(48).toString('base64url');
}

export function hashRefreshTokenId(tokenId: string) {
  return createHash('sha256').update(tokenId).digest('hex');
}
