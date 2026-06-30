export const ACCESS_TOKEN_COOKIE = 'rnp_access_token';
export const REFRESH_TOKEN_COOKIE = 'rnp_refresh_token';

export const ACCESS_TOKEN_TTL_SECONDS = 15 * 60;
export const REFRESH_TOKEN_TTL_SECONDS = 7 * 24 * 60 * 60;

export const authCookieOptions = {
  httpOnly: true,
  sameSite: 'strict' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
};

export function getAdminEmail() {
  return (process.env.ADMIN_EMAIL || 'rabinarayan3421@gmail.com').trim().toLowerCase();
}

export function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is required for authentication.`);
  }
  return value;
}
