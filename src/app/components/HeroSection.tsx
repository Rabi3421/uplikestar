'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/app/seo';

const businessTypes = ['Salon', 'School', 'Clinic', 'Pharmacy', 'Gym', 'Restaurant', 'Retail'];

const featureRows = [
  { icon: 'GlobeAltIcon', name: 'Business Website', status: 'Active', color: '#22c55e' },
  { icon: 'InboxArrowDownIcon', name: 'Enquiry System', status: 'Live', color: '#00D4FF' },
  { icon: 'UserGroupIcon', name: 'Staff & Customer Management', status: 'Ready', color: '#a78bfa' },
  { icon: 'ChartBarIcon', name: 'Owner Dashboard', status: 'Setup', color: '#f472b6' },
];

const stats = [
  { value: 'Free', label: 'Demo' },
  { value: '1 Month', label: 'Free Trial*' },
  { value: '₹3,000', label: 'Starting / mo' },
  { value: '24/7', label: 'Support' },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#050516]"
      style={{ height: '100svh', maxHeight: '100svh' }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A2E] via-[#0D0B2A] to-[#050516]" />
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 60% 0%, rgba(107,33,168,0.35) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(0,212,255,0.18) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />

      {/* Main layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="w-full grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_500px] gap-10 xl:gap-16 items-center pt-24 pb-6 md:pt-24 md:pb-8">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-0">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 w-fit rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-[11px] font-700 uppercase tracking-[0.18em]">
                Digital Solutions for Local Businesses
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-800 leading-[1.07] tracking-tight text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3.6rem)' }}>
              Professional{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #00D4FF 0%, #a78bfa 55%, #f472b6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                Websites &amp; Systems
              </span>{' '}
              for Every Local Business
            </h1>

            {/* Sub */}
            <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-[540px] mb-5">
              We set up your business website, enquiry system, and management dashboard — personalised for your business, live in days, on a simple monthly plan. Helping local businesses across India go digital.
            </p>

            {/* Business type chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {businessTypes.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-600 text-white/65 border border-white/12 rounded-full px-3 py-1 bg-white/[0.04] hover:border-accent/40 hover:text-white transition-colors">
                  {tag}
                </span>
              ))}
              <span className="text-xs font-600 text-accent border border-accent/30 rounded-full px-3 py-1 bg-accent/10">
                + More
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <a
                href="/contact"
                className="btn-primary px-7 py-3 rounded-full text-sm font-700 inline-flex items-center justify-center gap-2"
                style={{ boxShadow: '0 0 28px rgba(0,212,255,0.22)' }}>
                <span>Get Free Demo</span>
                <Icon name="ArrowRightIcon" size={16} className="text-white" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20business%20website%20and%20management%20system.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-7 py-3 rounded-full text-sm font-700 inline-flex items-center justify-center gap-2">
                <Icon name="ChatBubbleLeftIcon" size={16} />
                <span>Talk on WhatsApp</span>
              </a>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-center backdrop-blur-sm">
                  <span className="block text-lg font-800 text-white mb-0.5">{s.value}</span>
                  <span className="text-white/40 text-[10px] font-500 uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — Dashboard Mockup ── */}
          <div className="hidden lg:block relative">

            {/* Glow behind card */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(0,212,255,0.12) 0%, transparent 70%)',
                filter: 'blur(24px)',
              }}
              aria-hidden="true"
            />

            {/* Floating badge — top left */}
            <div className="absolute -top-4 -left-8 z-20 flex items-center gap-2.5 rounded-2xl border border-white/12 bg-[#0D1040]/90 backdrop-blur-xl px-4 py-2.5 shadow-xl">
              <div className="w-8 h-8 rounded-xl bg-emerald-400/15 flex items-center justify-center shrink-0">
                <Icon name="CheckBadgeIcon" size={16} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-white text-xs font-700 leading-none mb-0.5">Free Demo</p>
                <p className="text-white/40 text-[10px] leading-none">No commitment needed</p>
              </div>
            </div>

            {/* Floating badge — bottom right */}
            <div className="absolute -bottom-4 -right-5 z-20 flex items-center gap-2.5 rounded-2xl border border-accent/20 bg-[#0D1040]/90 backdrop-blur-xl px-4 py-2.5 shadow-xl">
              <div className="w-8 h-8 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                <Icon name="CurrencyRupeeIcon" size={16} className="text-accent" />
              </div>
              <div>
                <p className="text-accent text-xs font-700 leading-none mb-0.5">₹3,000 / month</p>
                <p className="text-white/40 text-[10px] leading-none">Starting plan</p>
              </div>
            </div>

            {/* Main dashboard card */}
            <div
              className="relative rounded-[28px] border border-white/10 bg-[#080B2A] overflow-hidden"
              style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 32px 64px rgba(0,0,0,0.6)' }}>

              {/* Window chrome */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.07] bg-white/[0.02]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/[0.06] border border-white/[0.08] px-3 py-1">
                  <span className="text-white/35 text-[11px] font-500">rnptechsolutions.com/dashboard</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-[11px] font-600 uppercase tracking-wider">Live</span>
                </div>
              </div>

              <div className="p-4 space-y-2.5">

                {/* Welcome row */}
                <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-accent/[0.12] to-purple-500/[0.08] border border-accent/15 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-accent/20 border border-accent/20 flex items-center justify-center shrink-0">
                      <Icon name="BuildingStorefrontIcon" size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-700 leading-none mb-1">Your Business Dashboard</p>
                      <p className="text-white/40 text-xs">Everything in one place</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-700 text-accent bg-accent/15 border border-accent/20 rounded-full px-3 py-1">Ready</span>
                </div>

                {/* Feature rows */}
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
                  <div className="px-4 py-2 border-b border-white/[0.06]">
                    <p className="text-white/35 text-[10px] font-700 uppercase tracking-[0.18em]">Included Features</p>
                  </div>
                  {featureRows.map((f, i) => (
                    <div
                      key={f.name}
                      className={`flex items-center justify-between px-4 py-2 ${i < featureRows.length - 1 ? 'border-b border-white/[0.05]' : ''}`}>
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: `${f.color}18` }}>
                          <Icon name={f.icon as Parameters<typeof Icon>[0]['name']} size={13} style={{ color: f.color }} />
                        </div>
                        <span className="text-white/80 text-[13px] font-500">{f.name}</span>
                      </div>
                      <span
                        className="text-[11px] font-700 rounded-full px-2.5 py-0.5"
                        style={{ color: f.color, background: `${f.color}15` }}>
                        {f.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Metric row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: 'RocketLaunchIcon', label: 'Quick Setup', val: 'Fast', color: '#a78bfa' },
                    { icon: 'ShieldCheckIcon', label: 'Free Trial', val: '1 Month', color: '#22c55e' },
                    { icon: 'PhoneIcon', label: 'Support', val: '24/7', color: '#00D4FF' },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl bg-white/[0.03] border border-white/[0.08] px-2 py-2.5 text-center flex flex-col items-center gap-1">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: `${m.color}18` }}>
                        <Icon name={m.icon as Parameters<typeof Icon>[0]['name']} size={13} style={{ color: m.color }} />
                      </div>
                      <p className="text-white text-xs font-800 leading-none">{m.val}</p>
                      <p className="text-white/35 text-[10px] font-500 leading-tight">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Business types row */}
                <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] px-4 py-2.5">
                  <p className="text-white/30 text-[10px] font-700 uppercase tracking-[0.18em] mb-2">Works For</p>
                  <div className="flex flex-wrap gap-1.5">
                    {businessTypes.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-600 text-white/60 bg-white/[0.05] border border-white/[0.08] rounded-lg px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom trust strip */}
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white/35 text-xs">Free demo • No commitment</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="LockClosedIcon" size={11} className="text-white/25" />
                    <span className="text-white/30 text-[11px]">Secure & Private</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/20 text-[10px] font-600 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}
