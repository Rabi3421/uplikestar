'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Icon from '@/components/ui/AppIcon';

interface LogoutButtonProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export default function LogoutButton({ variant = 'dark', className = '' }: LogoutButtonProps) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } finally {
      router.replace('/login');
      router.refresh();
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isLoggingOut}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-700 transition disabled:cursor-not-allowed disabled:opacity-70 ${
        variant === 'light'
          ? 'border border-border bg-white text-foreground shadow-sm hover:border-[#8F86C7] hover:text-primary'
          : 'border border-[#3D367A] bg-[#17134A] text-white hover:border-[#00BEE5] hover:bg-[#211B64]'
      } ${className}`}
    >
      <Icon name="ArrowLeftOnRectangleIcon" size={17} className={variant === 'light' ? 'text-primary' : 'text-accent'} />
      <span>{isLoggingOut ? 'Signing out...' : 'Logout'}</span>
    </button>
  );
}
