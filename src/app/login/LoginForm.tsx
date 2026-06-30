'use client';

import { FormEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import AppLogo from '@/components/ui/AppLogo';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || 'Invalid official credentials.');
        return;
      }

      router.replace(searchParams.get('next') || data.redirectTo || '/dashboard');
      router.refresh();
    } catch {
      setError('Unable to sign in right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F0F2FF] px-6 md:px-12 py-6 md:py-10">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="relative hidden min-h-[680px] overflow-hidden rounded-[32px] bg-gradient-hero shadow-premium lg:block">
          <AppImage
            src="/assets/images/consultation.png"
            alt="Secure technology workspace with analytics dashboard"
            fill
            priority
            sizes="50vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#070822]/95 via-[#1B1464]/86 to-[#0D0D1A]/92" />
          <div className="relative z-10 flex h-full min-h-[680px] flex-col justify-between p-10 xl:p-12">
            <a href="/" aria-label="RNP Tech Solutions home" className="inline-flex w-fit">
              <AppLogo width={270} height={58} imageClassName="h-14 w-auto" />
            </a>

            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
                <Icon name="ShieldCheckIcon" size={16} className="text-accent" />
                <span className="text-accent text-xs font-800 uppercase tracking-widest">Official Access</span>
              </div>
              <h1 className="text-5xl font-800 leading-tight tracking-tight text-white xl:text-6xl">
                Internal dashboard for authorized staff.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-8 text-white/72">
                This sign-in is reserved for RNP Tech Solutions personnel only. It is not a public customer portal.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'HTTP-only cookies', icon: 'LockClosedIcon' },
                { label: 'Token refresh', icon: 'ArrowPathIcon' },
                { label: 'Admin only', icon: 'UserCircleIcon' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/12 bg-white/[0.07] p-4">
                  <Icon name={item.icon} size={20} className="mb-3 text-accent" />
                  <p className="text-sm font-700 text-white">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[520px]">
          <a href="/" aria-label="RNP Tech Solutions home" className="mb-8 inline-flex lg:hidden">
            <AppLogo width={240} height={52} imageClassName="h-12 w-auto" />
          </a>

          <div className="rounded-[28px] border border-border bg-white p-6 shadow-[0_24px_70px_rgba(27,20,100,0.14)] sm:p-8">
            <div className="mb-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-[#F0F2FF] px-4 py-2">
                <Icon name="BuildingOffice2Icon" size={16} className="text-primary" />
                <span className="text-primary text-xs font-800 uppercase tracking-widest">Official Use Only</span>
              </div>
              <h2 className="text-3xl font-800 tracking-tight text-foreground sm:text-4xl">Sign in to dashboard</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Authorized RNP Tech Solutions staff can continue with their official email and password.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-700 text-foreground mb-2">
                Official email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-2xl border border-border bg-[#F8F9FF] px-4 py-4 text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/50 focus:bg-white focus:ring-4 focus:ring-primary/10"
                placeholder="name@rnptechsolutions.com"
                required
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label htmlFor="password" className="block text-sm font-700 text-foreground">
                Password
              </label>
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="text-xs font-700 text-primary hover:text-secondary transition-colors"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-2xl border border-border bg-[#F8F9FF] px-4 py-4 pr-12 text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/50 focus:bg-white focus:ring-4 focus:ring-primary/10"
                placeholder="Enter official password"
                required
              />
                <Icon name="LockClosedIcon" size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            {error ? (
              <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-600 text-red-700">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full rounded-2xl px-5 py-4 text-sm font-800 inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span>{isSubmitting ? 'Verifying access...' : 'Sign in securely'}</span>
              <Icon name="ArrowRightIcon" size={17} className="text-white" />
            </button>
          </form>

            <div className="mt-7 rounded-2xl border border-border bg-[#F8F9FF] p-4">
              <div className="flex items-start gap-3">
                <Icon name="InformationCircleIcon" size={20} className="mt-0.5 text-primary" />
                <p className="text-sm leading-6 text-muted-foreground">
                  If you are not part of the internal RNP Tech Solutions team, return to the public website.
                </p>
              </div>
            </div>
          </div>

          <a
            href="/"
            className="mx-auto mt-6 flex w-fit items-center gap-2 text-sm font-700 text-muted-foreground transition-colors hover:text-primary"
          >
            <Icon name="ArrowLeftIcon" size={16} />
            <span>Back to public website</span>
          </a>
        </section>
      </div>
    </main>
  );
}
