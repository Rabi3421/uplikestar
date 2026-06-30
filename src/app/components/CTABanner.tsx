import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/app/seo';

export default function CTABanner() {
  return (
    <section className="px-6 md:px-12 py-12 bg-background reveal-on-scroll section-reveal">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-hero rounded-[40px] md:rounded-[60px] overflow-hidden min-h-[400px] md:min-h-[480px] flex items-center">
          {/* Background image */}
          <AppImage
            src="/assets/images/consultation.png"
            alt="Business owner reviewing their digital management dashboard"
            fill
            className="object-cover opacity-20"
            sizes="100vw" />


          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A2E]/95 via-[#1B1464]/80 to-transparent" />

          {/* Animated blob */}
          <div
            className="absolute right-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-30 animate-blob hidden md:block"
            style={{ background: 'radial-gradient(circle, #00D4FF 0%, #6B21A8 60%, transparent 100%)', filter: 'blur(40px)' }}
            aria-hidden="true" />


          {/* Content */}
          <div className="relative z-10 p-10 md:p-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-700 uppercase tracking-widest">Free Demo Available</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-800 tracking-tight leading-tight text-white mb-6">
              Ready to Take Your
              <br />
              <span className="text-gradient-cyan">Business</span>
              <br />
              <span className="text-white">Online?</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
              Get a free demo of our website and business management system. See how it works for your business type before making any commitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="btn-primary px-8 py-4 rounded-full text-base font-600 inline-flex items-center justify-center gap-2">

                <span>Get Free Demo</span>
                <Icon name="ArrowRightIcon" size={18} className="text-white" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20business%20website%20and%20management%20system.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-8 py-4 rounded-full text-base font-600 inline-flex items-center justify-center gap-2">

                <Icon name="ChatBubbleLeftIcon" size={18} />
                <span>Talk on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
