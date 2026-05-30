'use client';

import React, { useMemo, useState } from 'react';

import { servicePages } from '@/app/services/servicePages';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const primaryLinks = [
//   { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
//   { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

const pageLinks = [
  { label: 'About Us', href: '/about', description: 'Company overview and delivery approach' },
  { label: 'Case Studies', href: '/case-studies', description: 'Examples of project outcomes and impact' },
  { label: 'Industries', href: '/industries', description: 'How we tailor solutions for different sectors' },
  { label: 'FAQ', href: '/faq', description: 'Answers to common service and process questions' },
  { label: 'Privacy Policy', href: '/privacy-policy', description: 'Information handling and privacy practices' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions', description: 'General website and engagement terms' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const serviceLinks = useMemo(
    () => [{ label: 'All Services', href: '/services', description: 'Browse all UpLikeStar service categories' }, ...servicePages.map((service) => ({
      label: service.shortLabel,
      href: service.path,
      description: service.metaDescription,
    }))],
    [],
  );

  const handleLinkClick = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const closeDropdowns = () => setActiveDropdown(null);

  return (
    <>
      <style>{`
        #main-nav {
          background: transparent;
          transition: background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease;
        }
        #main-nav.nav-scrolled {
          background: rgba(10, 10, 46, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 2px 32px rgba(0,0,0,0.3);
        }
      `}</style>
      <nav
        id="main-nav"
        className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-5 flex justify-between items-center"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5" aria-label="UpLikeStar Home">
          <AppLogo width={228} height={57} imageClassName="h-[48px] w-auto sm:h-[57px]" />
        </a>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-8" onMouseLeave={closeDropdowns}>
          {primaryLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              className="text-sm font-500 text-white/70 hover:text-white transition-colors duration-200 relative group"
            >
              {link?.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          <div className="relative">
            <button
              type="button"
              onMouseEnter={() => setActiveDropdown('services')}
              onClick={() => handleDropdownToggle('services')}
              className="text-sm font-500 text-white/70 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5"
              aria-expanded={activeDropdown === 'services'}
              aria-haspopup="true"
            >
              <span>Services</span>
              <Icon name="ChevronDownIcon" size={16} className={`transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'services' ? (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                <div className="w-[640px] rounded-[28px] border border-white/10 bg-[#0B1030]/92 backdrop-blur-2xl shadow-[0_24px_70px_rgba(0,0,0,0.35)] p-4">
                  <div className="grid grid-cols-[220px_1fr] gap-4">
                    <div className="rounded-2xl bg-white/[0.03] border border-white/8 p-5">
                      <p className="text-accent text-[11px] font-700 uppercase tracking-[0.24em] mb-3">Services</p>
                      <h3 className="text-white text-lg font-700 leading-snug mb-2">Explore what UpLikeStar builds</h3>
                      <p className="text-white/55 text-sm leading-relaxed mb-4">
                        Dedicated pages for websites, software, ERP CRM, inventory systems, e-commerce, and automation.
                      </p>
                      <a
                        href="/services"
                        onClick={closeDropdowns}
                        className="inline-flex items-center gap-2 text-sm font-600 text-accent hover:text-white transition-colors"
                      >
                        View all services
                        <Icon name="ArrowRightIcon" size={14} className="text-accent" />
                      </a>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {serviceLinks.slice(1).map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={closeDropdowns}
                          className="rounded-xl border border-transparent px-4 py-3 hover:border-white/10 hover:bg-white/[0.035] transition-all"
                        >
                          <p className="text-white text-sm font-700 mb-1">{link.label}</p>
                          <p className="text-white/50 text-[11px] leading-relaxed line-clamp-2">{link.description}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {/* <div className="relative">
            <button
              type="button"
              onMouseEnter={() => setActiveDropdown('pages')}
              onClick={() => handleDropdownToggle('pages')}
              className="text-sm font-500 text-white/70 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5"
              aria-expanded={activeDropdown === 'pages'}
              aria-haspopup="true"
            >
              <span>Pages</span>
              <Icon name="ChevronDownIcon" size={16} className={`transition-transform ${activeDropdown === 'pages' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'pages' ? (
              <div className="absolute top-full right-0 pt-4">
                <div className="w-[360px] rounded-[28px] border border-white/10 bg-[#0B1030]/92 backdrop-blur-2xl shadow-[0_24px_70px_rgba(0,0,0,0.35)] p-4">
                  <div className="mb-3 px-2">
                    <p className="text-accent text-[11px] font-700 uppercase tracking-[0.24em] mb-2">Pages</p>
                    <p className="text-white/55 text-sm leading-relaxed">Company, resource, and policy pages in one place.</p>
                  </div>

                  <div className="space-y-1">
                    {pageLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={closeDropdowns}
                        className="block rounded-xl px-4 py-3 hover:bg-white/[0.04] transition-all"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-white text-sm font-700 mb-1">{link.label}</p>
                            <p className="text-white/50 text-[11px] leading-relaxed">{link.description}</p>
                          </div>
                          <Icon name="ArrowUpRightIcon" size={14} className="text-white/35 shrink-0 mt-0.5" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div> */}
        </div>

        {/* CTA */}
        <div className="hidden xl:flex items-center gap-3">
          <a
            href="/contact"
            className="btn-primary px-6 py-2.5 rounded-full text-sm font-600 inline-flex items-center gap-2"
          >
            <span>Start Project</span>
            <Icon name="ArrowUpRightIcon" size={16} className="text-white" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden text-white p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
        </button>
      </nav>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[99] bg-gradient-hero backdrop-blur-xl overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-5 right-6 text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <Icon name="XMarkIcon" size={28} />
          </button>
          <div className="min-h-full px-6 pt-24 pb-10 flex flex-col gap-8">
            <div>
              <p className="text-white/40 text-xs font-700 uppercase tracking-[0.24em] mb-4">Main Navigation</p>
              <div className="grid gap-3">
                {primaryLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-2xl font-700 text-white hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white/40 text-xs font-700 uppercase tracking-[0.24em] mb-4">Services</p>
              <div className="grid gap-3">
                {serviceLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="rounded-2xl border border-white/10 px-4 py-4 text-white hover:border-accent/40 transition-all"
                  >
                    <p className="text-base font-700 mb-1">{link.label}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{link.description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* <div>
              <p className="text-white/40 text-xs font-700 uppercase tracking-[0.24em] mb-4">Pages</p>
              <div className="grid gap-3">
                {pageLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="rounded-2xl border border-white/10 px-4 py-4 text-white hover:border-accent/40 transition-all"
                  >
                    <p className="text-base font-700 mb-1">{link.label}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{link.description}</p>
                  </a>
                ))}
              </div>
            </div> */}

            <a
              href="/contact"
              onClick={handleLinkClick}
              className="btn-primary px-8 py-3 rounded-full text-base font-600 mt-2 inline-flex items-center justify-center gap-2"
            >
              <span>Start Project</span>
              <Icon name="ArrowUpRightIcon" size={18} className="text-white" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
