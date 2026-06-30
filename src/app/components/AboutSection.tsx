import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const highlights = [
  { year: 'Website', label: 'Professional website with your branding, services, and contact details' },
  { year: 'Dashboard', label: 'Simple business dashboard to manage enquiries, customers, and staff' },
  { year: 'Support', label: 'Monthly maintenance and support so your system always runs well' },
  { year: 'Growth', label: 'More online visibility, more enquiries, and better business management' },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 md:py-32 bg-background grid-bg reveal-on-scroll section-reveal">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
          <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">About RNP Tech Solutions</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative reveal-on-scroll section-reveal">
            <div className="relative overflow-hidden rounded-4xl shadow-premium">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_130d53363-1769451772821.png"
                alt="Local business owner managing operations through a digital dashboard"
                width={700}
                height={500}
                className="object-cover w-full aspect-[4/3]" />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:right-8 glass-card-light rounded-3xl p-5 shadow-card-hover">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <Icon name="CheckBadgeIcon" size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-foreground text-lg font-800">Free Demo</p>
                  <p className="text-muted-foreground text-xs font-500">No Commitment Required</p>
                </div>
              </div>
            </div>

            {/* Status pill */}
            <div className="absolute -top-4 left-4 glass-card-light rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-foreground text-xs font-600">Serving Local Businesses Across India</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 reveal-on-scroll section-reveal">
            <div>
              <h2 className="text-4xl md:text-5xl font-800 tracking-tight leading-tight text-foreground mb-5">
                A Complete Digital System
                <br />
                <span className="text-gradient-primary">for Your Business</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                RNP Tech Solutions helps local business owners go online, receive more customer enquiries,
                and manage daily operations — all through a simple website and business management system
                on an affordable monthly plan.
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              Whether you run a salon, school, clinic, pharmacy, restaurant, gym, retail shop, or any other
              local business, we prepare a personalized digital solution for your business — with your
              branding, services, contact details, WhatsApp integration, and dashboard access configured
              specifically for your business category.
            </p>

            {/* Highlights */}
            <div className="space-y-4 stagger-group">
              {highlights?.map((m) =>
              <div key={m?.year} className="stagger-child flex items-start gap-4 opacity-100">
                  <span className="text-accent font-800 text-sm w-20 shrink-0 pt-0.5">{m?.year}</span>
                  <div className="flex-1 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-foreground text-sm font-500 leading-relaxed">{m?.label}</span>
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              href="/about"
              className="inline-flex items-center gap-3 border border-border rounded-full pl-6 pr-2 py-2 hover:border-accent hover:shadow-glow-cyan transition-all group">

              <span className="text-sm font-600 text-foreground">Learn More About Us</span>
              <span className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="ArrowUpRightIcon" size={16} className="text-white" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>);

}
