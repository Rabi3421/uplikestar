import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const testimonials = [
{
  name: 'Rajesh Sharma',
  role: 'Director',
  company: 'MegaMart Retail Group, Mumbai',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f3173f12-1776525342722.png",
  review:
  'RNP Tech Solutions delivered our multi-vendor platform in under 3 months — exactly what we envisioned. The team understood our business deeply and the quality is outstanding. We have doubled our vendor base since launch.',
  rating: 5,
  project: 'E-commerce Platform'
},
{
  name: 'Priya Nair',
  role: 'CEO',
  company: 'NexGen HR Solutions, Bangalore',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19bc93ee4-1765276247228.png",
  review:
  'The admin dashboard they built for us handles 50,000+ employee records flawlessly. The UI is so clean that our clients are genuinely impressed. RNP Tech Solutions is now our permanent technology partner.',
  rating: 5,
  project: 'Admin Dashboard'
},
{
  name: 'Amit Gupta',
  role: 'Operations Head',
  company: 'ShriVastu FMCG Distributors, Delhi',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12fe9bac0-1769183759635.png",
  review:
  'Our inventory system was a chaos before RNP Tech Solutions. Now we have real-time visibility across 4 warehouses. Stock discrepancies dropped by 87%. Best investment we have made in the last 5 years.',
  rating: 5,
  project: 'Inventory Management'
}];


export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="px-6 md:px-12 py-24 md:py-32 bg-gradient-hero relative overflow-hidden reveal-on-scroll section-reveal">
      
      {/* Background blobs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10"
        style={{ background: 'radial-gradient(circle, #6B21A8 0%, transparent 70%)', filter: 'blur(100px)' }}
        aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-accent" />
            <span className="text-accent text-xs font-700 uppercase tracking-widest">Client Stories</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-800 tracking-tight leading-tight text-white">
            Trusted by
            <br />
            <span className="text-gradient-cyan">80+ Businesses</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-group">
          {testimonials?.map((t) =>
          <div key={t?.name} className="stagger-child testimonial-card rounded-3xl p-7 opacity-100 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t?.rating })?.map((_, i) =>
              <Icon key={i} name="StarIcon" size={16} variant="solid" className="text-yellow-400" />
              )}
              </div>

              {/* Project badge */}
              <span className="inline-flex items-center gap-1.5 bg-accent/15 text-accent text-xs font-700 px-3 py-1 rounded-full w-fit mb-4">
                <Icon name="CheckBadgeIcon" size={12} variant="solid" className="text-accent" />
                {t?.project}
              </span>

              {/* Quote */}
              <blockquote className="text-white/80 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t?.review}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-accent/30">
                  <AppImage src={t?.avatar} alt={`${t?.name} headshot`} width={44} height={44} className="object-cover" />
                </div>
                <div>
                  <p className="text-white font-700 text-sm">{t?.name}</p>
                  <p className="text-white/50 text-xs">{t?.role}, {t?.company}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Summary stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
          { value: '150', suffix: '+', label: 'Projects Delivered' },
          { value: '80', suffix: '+', label: 'Happy Clients' },
          { value: '98', suffix: '%', label: 'Satisfaction Rate' },
          { value: '6', suffix: '+', label: 'Years of Excellence' }]?.
          map((stat) =>
          <div key={stat?.label} className="glass-card rounded-2xl p-5 text-center">
              <p className="text-3xl font-800 text-white stat-counter">
                <span data-count={stat?.value} data-suffix={stat?.suffix}>
                  {stat?.value}{stat?.suffix}
                </span>
              </p>
              <p className="text-white/50 text-xs font-500 mt-1">{stat?.label}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}
