import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { ACCESS_TOKEN_COOKIE } from '@/lib/auth/config';
import { verifyAccessToken } from '@/lib/auth/tokens';
import LogoutButton from './LogoutButton';

export const metadata: Metadata = {
  title: 'Demo Dashboard | RNP Tech Solutions',
  robots: {
    index: false,
    follow: false,
  },
};

const dashboardCards = [
  { label: 'New enquiries', value: '24', helper: '+6 this week', icon: 'InboxStackIcon' },
  { label: 'Active projects', value: '08', helper: '3 in review', icon: 'RectangleStackIcon' },
  { label: 'Pending tasks', value: '17', helper: '5 high priority', icon: 'ClockIcon' },
  { label: 'System status', value: 'Live', helper: 'All checks passing', icon: 'SignalIcon' },
];

const sidebarLinks = [
  { label: 'Overview', icon: 'Squares2X2Icon', active: true },
  { label: 'Enquiries', icon: 'InboxStackIcon' },
  { label: 'Projects', icon: 'FolderOpenIcon' },
  { label: 'Clients', icon: 'UserGroupIcon' },
  { label: 'Reports', icon: 'ChartBarIcon' },
  { label: 'Settings', icon: 'Cog6ToothIcon' },
];

const projectRows = [
  { client: 'NexGen HR Solutions', service: 'Admin dashboard', status: 'In review', date: 'Jun 30' },
  { client: 'MegaMart Retail Group', service: 'E-commerce platform', status: 'Discovery', date: 'Jul 02' },
  { client: 'ShriVastu FMCG', service: 'Inventory system', status: 'Development', date: 'Jul 08' },
];

const activityItems = [
  { title: 'Website development enquiry received', meta: '12 min ago', icon: 'GlobeAltIcon' },
  { title: 'ERP consultation marked for follow-up', meta: '1 hr ago', icon: 'ArrowPathRoundedSquareIcon' },
  { title: 'Portfolio demo content reviewed', meta: 'Today', icon: 'CheckBadgeIcon' },
];

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;

  if (!accessToken) {
    redirect('/login');
  }

  let email = '';
  try {
    const payload = await verifyAccessToken(accessToken);
    email = payload.email;
  } catch {
    redirect('/login');
  }

  return (
    <main className="min-h-screen bg-[#F4F6FF]">
      <div className="min-h-screen lg:pl-[280px]">
        <aside className="fixed inset-y-0 left-0 z-50 hidden w-[280px] border-r border-white/10 bg-[#070822] lg:flex lg:flex-col">
          <div className="border-b border-white/10 px-7 py-6">
            <a href="/" aria-label="RNP Tech Solutions home" className="inline-flex">
              <AppLogo width={230} height={50} imageClassName="h-11 w-auto" />
            </a>
          </div>

          <nav className="min-h-0 flex-1 overflow-y-auto px-4 py-6" aria-label="Dashboard navigation">
            <p className="px-3 pb-3 text-[11px] font-800 uppercase tracking-widest text-white/55">Workspace</p>
            <div className="space-y-1">
              {sidebarLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.active ? '/dashboard' : '#'}
                  aria-current={link.active ? 'page' : undefined}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-700 transition ${
                    link.active
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-white/82 hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  <Icon name={link.icon as Parameters<typeof Icon>[0]['name']} size={19} className={link.active ? 'text-primary' : 'text-white/68'} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </nav>

          <div className="shrink-0 p-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/15">
                <Icon name="ShieldCheckIcon" size={20} className="text-accent" />
              </div>
              <p className="text-sm font-800 text-white">Admin session</p>
              <p className="mt-1 break-all text-xs leading-5 text-white/50">{email}</p>
              <LogoutButton className="mt-4 w-full" />
            </div>
          </div>
        </aside>

        <section className="min-w-0">
          <header className="sticky top-0 z-40 border-b border-border bg-white/90 px-5 py-4 backdrop-blur-xl md:px-8">
            <div className="flex items-center justify-between gap-4">
              <a href="/" aria-label="RNP Tech Solutions home" className="inline-flex lg:hidden">
                <AppLogo width={210} height={46} imageClassName="h-10 w-auto" />
              </a>
              <div className="hidden min-w-0 flex-1 items-center gap-3 rounded-full border border-border bg-[#F8F9FF] px-4 py-3 lg:flex">
                <Icon name="MagnifyingGlassIcon" size={18} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Search enquiries, projects, clients...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-3 rounded-full border border-border bg-white px-4 py-2 shadow-sm md:flex">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  <span className="text-sm font-700 text-foreground">Online</span>
                </div>
                <LogoutButton variant="light" className="hidden sm:inline-flex" />
              </div>
            </div>
          </header>

          <div className="px-5 py-8 md:px-8 md:py-10">
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 shadow-sm">
                    <Icon name="ShieldCheckIcon" size={16} className="text-primary" />
                    <span className="text-primary text-xs font-800 uppercase tracking-widest">Authenticated Admin</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-800 tracking-tight text-foreground mb-3">
                    Dashboard Overview
                  </h1>
                  <p className="max-w-2xl text-muted-foreground leading-relaxed">
                    Welcome, {email}. Monitor enquiries, projects, and internal activity from one protected workspace.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-800 text-foreground shadow-sm hover:border-primary/35 hover:text-primary">
                    <Icon name="EyeIcon" size={17} />
                    <span>View public contact</span>
                  </a>
                  <button type="button" className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-800">
                    <span>New internal note</span>
                    <Icon name="PlusIcon" size={17} className="text-white" />
                  </button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {dashboardCards.map((card) => (
                  <article key={card.label} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary">
                        <Icon name={card.icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-white" />
                      </div>
                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-800 text-green-700">{card.helper}</span>
                    </div>
                    <p className="text-3xl font-800 text-foreground">{card.value}</p>
                    <p className="mt-1 text-sm font-600 text-muted-foreground">{card.label}</p>
                  </article>
                ))}
              </div>

              <div className="mt-6 grid gap-4 xl:grid-cols-[1fr_380px]">
                <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-800 text-foreground">Project Pipeline</h2>
                      <p className="mt-1 text-sm text-muted-foreground">Demo project records for the internal workspace.</p>
                    </div>
                    <Icon name="EllipsisHorizontalIcon" size={22} className="text-muted-foreground" />
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-border">
                    <div className="grid grid-cols-[1.1fr_1fr_140px_90px] bg-[#F8F9FF] px-4 py-3 text-xs font-800 uppercase tracking-widest text-muted-foreground">
                      <span>Client</span>
                      <span>Service</span>
                      <span>Status</span>
                      <span>Due</span>
                    </div>
                    {projectRows.map((row) => (
                      <div key={row.client} className="grid grid-cols-[1.1fr_1fr_140px_90px] items-center border-t border-border px-4 py-4 text-sm">
                        <span className="font-800 text-foreground">{row.client}</span>
                        <span className="text-muted-foreground">{row.service}</span>
                        <span>
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-800 text-primary">{row.status}</span>
                        </span>
                        <span className="font-700 text-muted-foreground">{row.date}</span>
                      </div>
                    ))}
                  </div>
                </article>

                <div className="grid gap-4">
                  <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                    <h2 className="text-2xl font-800 text-foreground mb-5">Recent Activity</h2>
                    <div className="space-y-3">
                      {activityItems.map((item) => (
                        <div key={item.title} className="flex items-start gap-3 rounded-2xl bg-[#F8F9FF] px-4 py-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                            <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-800 text-foreground">{item.title}</p>
                            <p className="mt-0.5 text-xs font-600 text-muted-foreground">{item.meta}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="rounded-3xl border border-white/10 bg-gradient-hero p-6 shadow-premium">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                      <Icon name="LockClosedIcon" size={21} className="text-accent" />
                    </div>
                    <h2 className="text-2xl font-800 text-white mb-3">Access Policy</h2>
                    <p className="text-white/68 text-sm leading-relaxed">
                      This dashboard is protected by HTTP-only access and refresh cookies. Tokens are not stored in browser storage.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
