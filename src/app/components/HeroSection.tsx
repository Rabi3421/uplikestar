import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const techStack = ['Next.js', 'React', 'Node.js', 'Python', 'PostgreSQL', 'AWS'];

const recentProjects = [
  { name: 'Inventory ERP', status: 'Delivered', color: '#22c55e' },
  { name: 'E-commerce Portal', status: 'Live', color: '#00D4FF' },
  { name: 'CRM System', status: 'In Progress', color: '#a78bfa' },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-gradient-hero px-6 md:px-12"
      style={{ borderBottomLeftRadius: '80px' }}>

      {/* Background image */}
      <AppImage
        src="https://images.unsplash.com/photo-1731534134483-c45d1c8ae3c2"
        alt="Software development company workspace"
        fill
        priority
        className="object-cover opacity-20"
        sizes="100vw" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A2E]/95 via-[#1B1464]/75 to-[#0D0D1A]/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A2E] via-transparent to-transparent" />

      {/* Decorative blobs */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] opacity-15 animate-blob pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6B21A8 0%, transparent 65%)', filter: 'blur(80px)' }}
        aria-hidden="true" />
      <div
        className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] opacity-10 animate-blob pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 65%)', filter: 'blur(90px)', animationDelay: '-5s' }}
        aria-hidden="true" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-25" aria-hidden="true" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto pt-32 pb-20 md:pt-40 md:pb-28 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 w-fit rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-[11px] font-700 uppercase tracking-widest">
                #1 SOFTWARE & WEB SOLUTIONS PARTNER
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.6vw,4.2rem)] font-800 leading-[1.08] tracking-tight text-white mb-5">
              We Build Software{' '}
              <span
                className="inline-block whitespace-nowrap"
                style={{
                  background: 'linear-gradient(90deg, #00D4FF 0%, #a78bfa 60%, #f472b6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline',
                }}>
                That Drives Growth
              </span>
            </h1>

            {/* Sub headline chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['Web Development', 'Custom Software', 'Inventory & ERP', 'Business Automation'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-600 text-white/70 border border-white/15 rounded-full px-3 py-1 bg-white/5">
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-white/55 font-400 leading-relaxed max-w-xl mb-10">
              RNP Tech Solutions helps businesses modernize with scalable websites, custom software,
              inventory management systems, CRM/ERP solutions, and end-to-end automation — built for
              long-term growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="btn-primary px-7 py-3.5 rounded-full text-sm font-700 inline-flex items-center justify-center gap-2 shadow-lg shadow-accent/20">
                <span>Start Your Project</span>
                <Icon name="ArrowRightIcon" size={16} className="text-white" />
              </a>
              <a
                href="#portfolio"
                className="btn-outline px-7 py-3.5 rounded-full text-sm font-700 inline-flex items-center justify-center gap-2">
                <span>View Our Work</span>
                <Icon name="ChevronRightIcon" size={16} />
              </a>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 border-t border-white/10">
              {[
                { value: '150+', label: 'Projects' },
                { value: '80+', label: 'Clients' },
                { value: '6+', label: 'Years' },
                { value: '99%', label: 'Satisfaction' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <span className="block text-2xl font-800 text-white mb-0.5">{s.value}</span>
                  <span className="text-white/40 text-xs font-500 uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — Dashboard Card ── */}
          <div className="hidden lg:block -mt-20">
            <div
              className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40"
              style={{ boxShadow: '0 0 80px rgba(0,212,255,0.08), 0 25px 50px rgba(0,0,0,0.5)' }}>

              {/* Card header bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-white/[0.03]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-white/30 text-xs font-500">rnp-tech dashboard</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-[11px] font-600">LIVE</span>
                </div>
              </div>

              <div className="p-5 space-y-4">
                {/* Availability row */}
                <div className="flex items-center justify-between rounded-2xl bg-white/[0.05] border border-white/10 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Icon name="BoltIcon" size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-600">Available for Projects</p>
                      <p className="text-white/40 text-xs">Response within 24 hours</p>
                    </div>
                  </div>
                  <span className="text-xs font-700 text-emerald-400 bg-emerald-400/10 rounded-full px-3 py-1">Open</span>
                </div>

                {/* Project list */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden">
                  <div className="px-4 py-2.5 border-b border-white/10">
                    <p className="text-white/50 text-xs font-600 uppercase tracking-widest">Recent Deliveries</p>
                  </div>
                  {recentProjects.map((p, i) => (
                    <div key={p.name} className={`flex items-center justify-between px-4 py-3 ${i < recentProjects.length - 1 ? 'border-b border-white/[0.06]' : ''}`}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${p.color}20` }}>
                          <Icon name="CubeIcon" size={14} style={{ color: p.color }} />
                        </div>
                        <span className="text-white text-sm font-500">{p.name}</span>
                      </div>
                      <span
                        className="text-[11px] font-700 rounded-full px-2.5 py-0.5"
                        style={{ color: p.color, background: `${p.color}18` }}>
                        {p.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Metric cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Active Projects', value: '12', icon: 'RocketLaunchIcon', color: '#a78bfa' },
                    { label: 'Delivery Rate', value: '98.5%', icon: 'CheckBadgeIcon', color: '#22c55e' },
                    { label: 'Avg. Timeline', value: '6 wks', icon: 'ClockIcon', color: '#00D4FF' },
                  ].map((m) => (
                    <div key={m.label} className="rounded-2xl bg-white/[0.04] border border-white/10 px-3 py-3 text-center">
                      <Icon name={m.icon as Parameters<typeof Icon>[0]['name']} size={20} className="mx-auto mb-1.5" style={{ color: m.color }} />
                      <p className="text-white text-sm font-800">{m.value}</p>
                      <p className="text-white/40 text-[10px] font-500 mt-0.5 leading-snug">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-3">
                  <p className="text-white/40 text-[10px] font-600 uppercase tracking-widest mb-2.5">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((t) => (
                      <span key={t} className="text-[11px] font-600 text-white/70 bg-white/[0.07] border border-white/10 rounded-lg px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Trust row */}
                <div className="flex items-center justify-between px-1">
                  <div className="flex -space-x-2">
                    {[
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
                      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face',
                      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
                    ].map((src, i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-[#0A0A2E] overflow-hidden">
                        <AppImage src={src} alt="Client" width={28} height={28} className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <p className="text-white/40 text-xs">Trusted by <span className="text-white/70 font-600">80+ businesses</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/25 text-[10px] font-600 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
