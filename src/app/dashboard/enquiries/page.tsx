import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { ACCESS_TOKEN_COOKIE } from '@/lib/auth/config';
import { verifyAccessToken } from '@/lib/auth/tokens';
import { getRecentContactEnquiries } from '@/lib/enquiries';
import EnquiryStatusSelect from './EnquiryStatusSelect';
import LogoutButton from '../LogoutButton';

export const metadata: Metadata = {
  title: 'Enquiries | RNP Tech Solutions Dashboard',
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = 'force-dynamic';

const sidebarLinks = [
  { label: 'Overview', icon: 'Squares2X2Icon', href: '/dashboard' },
  { label: 'Enquiries', icon: 'InboxStackIcon', href: '/dashboard/enquiries', active: true },
  { label: 'Projects', icon: 'FolderOpenIcon', href: '#' },
  { label: 'Clients', icon: 'UserGroupIcon', href: '#' },
  { label: 'Reports', icon: 'ChartBarIcon', href: '#' },
  { label: 'Settings', icon: 'Cog6ToothIcon', href: '#' },
];

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  }).format(new Date(value));
}

export default async function EnquiriesPage() {
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

  const enquiries = await getRecentContactEnquiries(100);

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
                  <Icon name={link.icon} size={19} className={link.active ? 'text-primary' : 'text-[#AEB7D3]'} />
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
              <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-[8px] border border-[#D7D3EA] bg-white px-4 py-2 shadow-sm">
                    <Icon name="InboxStackIcon" size={16} className="text-primary" />
                    <span className="text-primary text-xs font-800 uppercase tracking-widest">Website Leads</span>
                  </div>
                  <h1 className="mb-3 text-4xl font-800 tracking-tight text-foreground md:text-[44px]">Enquiries</h1>
                  <p className="max-w-2xl text-base font-600 leading-8 text-[#52627A]">
                    Logged in as {email}. New contact form submissions will appear here automatically.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#CCD5E6] bg-white px-5 py-3 text-sm font-800 text-foreground shadow-sm hover:border-[#8F86C7] hover:text-primary"
                >
                  <Icon name="EyeIcon" size={17} />
                  <span>Open public contact form</span>
                </a>
              </div>

              <section className="rounded-[8px] border border-[#D7DEEA] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] md:p-6">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-800 text-foreground">Recent Enquiries</h2>
                    <p className="mt-1 text-sm font-600 text-[#52627A]">{enquiries.length} submissions stored in the workspace.</p>
                  </div>
                  <span className="w-fit rounded-[6px] bg-[#ECFDF3] px-3 py-1 text-xs font-800 text-green-700">
                    Live from contact form
                  </span>
                </div>
                <div className="mb-5 grid gap-2 rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC] p-3 text-xs font-700 text-[#52627A] md:grid-cols-4">
                  <span><strong className="text-[#111827]">New Lead:</strong> freshly submitted</span>
                  <span><strong className="text-[#111827]">Contacted:</strong> first reply or call done</span>
                  <span><strong className="text-[#111827]">In Review:</strong> requirement is being checked</span>
                  <span><strong className="text-[#111827]">Closed:</strong> completed, won, or not moving ahead</span>
                </div>

                {enquiries.length ? (
                  <div className="grid gap-4">
                    {enquiries.map((enquiry) => (
                      <article key={enquiry.id} className="rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                          <div className="min-w-0">
                            <div className="mb-2 flex flex-wrap items-center gap-2">
                              <h3 className="text-lg font-800 text-[#111827]">{enquiry.name}</h3>
                            </div>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-700 text-[#52627A]">
                              <a href={`mailto:${enquiry.email}`} className="hover:text-primary">{enquiry.email}</a>
                              {enquiry.phone !== '-' ? (
                                <a href={`tel:${enquiry.phone.replace(/\s+/g, '')}`} className="hover:text-primary">{enquiry.phone}</a>
                              ) : null}
                              <span>{enquiry.company}</span>
                              <span>{enquiry.service}</span>
                            </div>
                            <p className="mt-3 whitespace-pre-wrap text-sm font-600 leading-7 text-[#1F2937]">{enquiry.message}</p>
                          </div>
                          <div className="shrink-0 text-left xl:w-[260px] xl:text-right">
                            <p className="text-sm font-800 text-[#111827]">{formatDate(enquiry.createdAt)}</p>
                            <div className="mt-3 xl:text-left">
                              <EnquiryStatusSelect
                                enquiryId={enquiry.id}
                                initialStatus={enquiry.status}
                                initialStatusUpdatedAt={enquiry.statusUpdatedAt}
                                initialStatusUpdatedBy={enquiry.statusUpdatedBy}
                              />
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2 xl:justify-end">
                              <span className={`rounded-[6px] px-3 py-1 text-xs font-800 ${enquiry.emailSent ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
                                Email {enquiry.emailSent ? 'sent' : 'pending'}
                              </span>
                              <span className={`rounded-[6px] px-3 py-1 text-xs font-800 ${enquiry.sheetSaved ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
                                Sheet {enquiry.sheetSaved ? 'saved' : 'pending'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-[8px] border border-dashed border-[#CCD5E6] bg-[#F8FAFC] px-6 py-14 text-center">
                    <Icon name="InboxStackIcon" size={36} className="mx-auto text-[#8A96AD]" />
                    <h3 className="mt-4 text-xl font-800 text-[#111827]">No enquiries yet</h3>
                    <p className="mx-auto mt-2 max-w-md text-sm font-600 leading-7 text-[#52627A]">
                      Submit the public contact form once, and the enquiry will show here immediately.
                    </p>
                  </div>
                )}
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
