import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

// BENTO AUDIT:
// 4 cards: Inventory Platform, Corporate Website, E-commerce Store, Admin Dashboard
// Grid: grid-cols-2 on desktop
// Row 1: [col-1: Inventory Platform cs-1] [col-2: Corporate Website cs-1]
// Row 2: [col-1: E-commerce Store cs-1] [col-2: Admin Dashboard cs-1]
// Placed 4/4 ✓

const projects = [
{
  title: 'Inventory Management Platform',
  category: 'Enterprise Software',
  description: 'Real-time multi-warehouse inventory system with barcode scanning, purchase orders, and analytics for a Delhi-based FMCG distributor.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1be73c795-1768403083307.png",
  imageAlt: 'Bright warehouse with organised shelving and inventory management screens, clean industrial lighting, modern logistics environment',
  tags: ['React', 'Node.js', 'PostgreSQL'],
  color: 'from-[#1B1464] to-[#6B21A8]'
},
{
  title: 'Corporate Business Website',
  category: 'Web Development',
  description: 'Award-winning corporate portal for a Mumbai-based infrastructure firm — multilingual, SEO-optimised, and integrated with a custom CMS.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e5559215-1776431470666.png",
  imageAlt: 'Bright modern corporate office lobby with glass walls, clean white interior, professional business environment with natural light',
  tags: ['Next.js', 'Headless CMS', 'SEO'],
  color: 'from-[#0D0D1A] to-[#1B1464]'
},
{
  title: 'Multi-Vendor E-commerce Store',
  category: 'E-commerce Platform',
  description: 'Full-featured marketplace with 200+ vendors, Razorpay integration, vendor dashboards, and real-time order tracking for a Bangalore retail group.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ee2019a8-1764663797867.png",
  imageAlt: 'Bright e-commerce warehouse with packaged goods on conveyor belts, warm lighting, clean retail fulfilment centre',
  tags: ['React', 'Razorpay', 'Multi-vendor'],
  color: 'from-[#6B21A8] to-[#00D4FF]'
},
{
  title: 'Admin Dashboard System',
  category: 'Business Intelligence',
  description: 'Comprehensive analytics dashboard with real-time KPIs, user management, report generation, and role-based access for an HR tech company.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dce3f628-1772832763694.png",
  imageAlt: 'Bright modern data analytics workspace with multiple monitors showing dashboards, clean desk setup, airy office with natural light',
  tags: ['React', 'Recharts', 'REST API'],
  color: 'from-[#1B1464] to-[#0D0D1A]'
}];


export default function PortfolioSection() {
  return (
    <section id="portfolio" className="px-6 md:px-12 py-24 md:py-32 bg-background reveal-on-scroll section-reveal">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
              <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-800 tracking-tight leading-tight text-foreground">
              Portfolio
              <br />
              <span className="text-gradient-primary">Showcase</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
            Real projects, real results — built with precision for businesses across India.
          </p>
        </div>

        {/* Grid — 2 cols desktop, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger-group">
          {projects?.map((project) => (
          /* card: project.title */
          <div
            key={project?.title}
            className="stagger-child portfolio-card rounded-3xl overflow-hidden relative group cursor-pointer opacity-100">
            
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <AppImage
                src={project?.image}
                alt={project?.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw" />
              

                {/* Overlay */}
                <div className={`portfolio-overlay absolute inset-0 bg-gradient-to-t ${project?.color}`} />

                {/* Overlay content */}
                <div className="absolute inset-0 p-7 flex flex-col justify-end portfolio-overlay opacity-0">
                  <h3 className="text-xl font-700 text-white mb-2">{project?.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{project?.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project?.tags?.map((tag) =>
                  <span key={tag} className="bg-white/15 text-white text-xs font-600 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                  )}
                  </div>
                </div>

                {/* Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="ArrowUpRightIcon" size={18} className="text-white" />
                </div>
              </div>
              {/* Card footer */}
              <div className="bg-card border border-border p-5 flex items-center justify-between">
                <div>
                  <p className="text-foreground font-700 text-base">{project?.title}</p>
                  <p className="text-muted-foreground text-xs font-500 mt-0.5">{project?.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
                  <Icon name="ArrowUpRightIcon" size={16} className="text-white" />
                </div>
              </div>
            </div>)
          )}
        </div>
      </div>
    </section>);

}
