import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Icon from '@/components/ui/AppIcon';
import type { StaticPageData } from '@/app/staticPages';

interface StaticContentPageProps {
  page: StaticPageData;
}

export default function StaticContentPage({ page }: StaticContentPageProps) {
  return (
    <main className="relative overflow-x-hidden bg-background">
      <Header />

      <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A2E]/95 via-[#1B1464]/80 to-[#0D0D1A]/90" />
        <div className="absolute inset-0 grid-bg opacity-25" aria-hidden="true" />
        <div
          className="absolute top-24 right-12 w-[320px] h-[320px] opacity-20 animate-blob"
          style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 65%)', filter: 'blur(70px)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-700 uppercase tracking-widest">{page.eyebrow}</span>
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,4.8rem)] font-800 leading-[1.05] tracking-tight text-white mb-6">
              {page.heroTitle}
            </h1>

            <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-3xl">
              {page.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-card border border-border rounded-[32px] p-8 md:p-10 shadow-card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
              <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">Overview</span>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{page.intro}</p>
          </div>

          <div className="space-y-8 mt-10">
            {page.sections.map((section) => (
              <article key={section.title} className="bg-card border border-border rounded-[32px] p-8 md:p-10 shadow-sm">
                <h2 className="text-3xl md:text-4xl font-800 text-foreground mb-5">{section.title}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 ? (
                  <div className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-accent mt-0.5" />
                        <p className="text-base text-muted-foreground leading-relaxed">{bullet}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          {page.faqEntries && page.faqEntries.length > 0 ? (
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
                <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">Questions & Answers</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {page.faqEntries.map((entry) => (
                  <article key={entry.question} className="bg-card border border-border rounded-[28px] p-6 shadow-sm">
                    <h2 className="text-xl font-700 text-foreground mb-3">{entry.question}</h2>
                    <p className="text-base text-muted-foreground leading-relaxed">{entry.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-10 bg-gradient-hero rounded-[32px] p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-800 text-white mb-4">Need to speak with RNP Tech Solutions directly?</h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mb-6">
              If you have questions about our services, policies, or business process, reach out to RNP Tech Solutions and our team will guide you further.
            </p>
            <a href="/contact" className="btn-primary px-8 py-4 rounded-full text-base font-600 inline-flex items-center justify-center gap-2">
              <span>Contact Our Team</span>
              <Icon name="ArrowRightIcon" size={18} className="text-white" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
