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
  { label: 'Overview', icon: 'Squares2X2Icon', href: '/dashboard', active: true },
  { label: 'Enquiries', icon: 'InboxStackIcon', href: '/dashboard/enquiries' },
  { label: 'Projects', icon: 'FolderOpenIcon', href: '#' },
  { label: 'Clients', icon: 'UserGroupIcon', href: '#' },
  { label: 'Reports', icon: 'ChartBarIcon', href: '#' },
  { label: 'Settings', icon: 'Cog6ToothIcon', href: '#' },
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
    <main className="min-h-screen overflow-x-hidden bg-[#EEF2F8]">
      <div className="min-h-screen w-full overflow-x-hidden lg:pl-[280px]">
        <aside className="fixed inset-y-0 left-0 z-50 hidden w-[280px] border-r border-[#20234A] bg-[#070A20] lg:flex lg:flex-col">
          <div className="border-b border-[#20234A] px-7 py-6">
            <a href="/" aria-label="RNP Tech Solutions home" className="inline-flex">
              <AppLogo width={230} height={50} imageClassName="h-11 w-auto" />
            </a>
          </div>

          <nav className="min-h-0 flex-1 overflow-y-auto px-4 py-6" aria-label="Dashboard navigation">
            <p className="px-3 pb-3 text-[11px] font-800 uppercase tracking-widest text-[#AEB7D3]">Workspace</p>
            <div className="space-y-1.5">
              {sidebarLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={link.active ? 'page' : undefined}
                  className={`flex items-center gap-3 rounded-[8px] px-4 py-3 text-sm font-700 transition ${
                    link.active
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-[#D7DDF0] hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  <Icon name={link.icon as Parameters<typeof Icon>[0]['name']} size={19} className={link.active ? 'text-primary' : 'text-[#AEB7D3]'} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </nav>

        </aside>

        <section className="min-w-0 overflow-x-hidden">
          <header className="sticky top-0 z-40 border-b border-[#D5DCEB] bg-white/95 px-5 py-4 backdrop-blur-xl md:px-8">
            <div className="flex items-center justify-between gap-4">
              <a href="/" aria-label="RNP Tech Solutions home" className="inline-flex lg:hidden">
                <AppLogo width={210} height={46} imageClassName="h-10 w-auto" />
              </a>
              <div className="hidden min-w-0 flex-1 items-center gap-3 rounded-[8px] border border-[#CCD5E6] bg-[#F8FAFC] px-4 py-3 lg:flex">
                <Icon name="MagnifyingGlassIcon" size={18} className="text-[#475569]" />
                <span className="text-sm font-600 text-[#64748B]">Search enquiries, projects, clients...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-3 rounded-[8px] border border-[#CCD5E6] bg-white px-4 py-2 shadow-sm md:flex">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  <span className="text-sm font-700 text-foreground">Online</span>
                </div>
                <LogoutButton variant="light" />
              </div>
            </div>
          </header>

          <div className="w-full max-w-full px-5 py-8 md:px-8 md:py-10">
            <div className="mx-auto w-full max-w-[1440px] min-w-0">
              <div className="mb-7 flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-[8px] border border-[#D7D3EA] bg-white px-4 py-2 shadow-sm">
                    <Icon name="ShieldCheckIcon" size={16} className="text-primary" />
                    <span className="text-primary text-xs font-800 uppercase tracking-widest">Authenticated Admin</span>
                  </div>
                  <h1 className="mb-3 text-4xl font-800 tracking-tight text-foreground md:text-[44px]">
                    Dashboard Overview
                  </h1>
                  <p className="max-w-2xl text-base font-600 leading-8 text-[#52627A]">
                    Welcome, {email}. Monitor enquiries, projects, and internal activity from one protected workspace.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#CCD5E6] bg-white px-5 py-3 text-sm font-800 text-foreground shadow-sm hover:border-[#8F86C7] hover:text-primary">
                    <Icon name="EyeIcon" size={17} />
                    <span>View public contact</span>
                  </a>
                  <button type="button" className="btn-primary inline-flex items-center justify-center gap-2 rounded-[8px] px-5 py-3 text-sm font-800">
                    <span>New internal note</span>
                    <Icon name="PlusIcon" size={17} className="text-white" />
                  </button>
                </div>
              </div>

              <div className="grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {dashboardCards.map((card) => (
                  <article key={card.label} className="rounded-[8px] border border-[#D7DEEA] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-gradient-primary">
                        <Icon name={card.icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-white" />
                      </div>
                      <span className="rounded-[6px] bg-green-50 px-3 py-1 text-xs font-800 text-green-700">{card.helper}</span>
                    </div>
                    <p className="text-3xl font-800 text-[#111827]">{card.value}</p>
                    <p className="mt-1 text-sm font-700 text-[#52627A]">{card.label}</p>
                  </article>
                ))}
              </div>

              <div className="mt-6 grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_360px] 2xl:grid-cols-[minmax(0,1fr)_380px]">
                <article className="min-w-0 rounded-[8px] border border-[#D7DEEA] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-800 text-foreground">Project Pipeline</h2>
                      <p className="mt-1 text-sm font-600 text-[#52627A]">Demo project records for the internal workspace.</p>
                    </div>
                    <Icon name="EllipsisHorizontalIcon" size={22} className="text-[#52627A]" />
                  </div>

                  <div className="max-w-full overflow-x-auto rounded-[8px] border border-[#D7DEEA]">
                    <div className="min-w-[640px]">
                      <div className="grid grid-cols-[1.1fr_1fr_140px_90px] bg-[#F1F5F9] px-4 py-3 text-xs font-800 uppercase tracking-widest text-[#52627A]">
                        <span>Client</span>
                        <span>Service</span>
                        <span>Status</span>
                        <span>Due</span>
                      </div>
                      {projectRows.map((row) => (
                        <div key={row.client} className="grid grid-cols-[1.1fr_1fr_140px_90px] items-center border-t border-[#D7DEEA] px-4 py-4 text-sm">
                          <span className="font-800 text-[#111827]">{row.client}</span>
                          <span className="font-600 text-[#52627A]">{row.service}</span>
                          <span>
                            <span className="rounded-[6px] bg-[#ECEAF7] px-3 py-1 text-xs font-800 text-primary">{row.status}</span>
                          </span>
                          <span className="font-700 text-[#52627A]">{row.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>

                <div className="grid min-w-0 gap-4">
                  <article className="rounded-[8px] border border-[#D7DEEA] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                    <h2 className="mb-5 text-2xl font-800 text-foreground">Recent Activity</h2>
                    <div className="space-y-3">
                      {activityItems.map((item) => (
                        <div key={item.title} className="flex items-start gap-3 rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-white shadow-sm">
                            <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-800 leading-6 text-[#111827]">{item.title}</p>
                            <p className="mt-0.5 text-xs font-700 text-[#52627A]">{item.meta}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="rounded-[8px] border border-[#3D367A] bg-gradient-hero p-6 shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#241C68]">
                      <Icon name="LockClosedIcon" size={21} className="text-accent" />
                    </div>
                    <h2 className="mb-3 text-2xl font-800 text-white">Access Policy</h2>
                    <p className="text-sm font-600 leading-7 text-[#DCE6FF]">
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
