import type { Metadata } from 'next';
import { Suspense } from 'react';

import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Official Login | RNP Tech Solutions',
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
