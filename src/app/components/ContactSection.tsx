'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/app/seo';

const contactInfo = [
  {
    icon: 'MapPinIcon',
    label: 'Office Address',
    value: 'A-142, Sector 63, Noida, Uttar Pradesh 201301, India',
  },
  {
    icon: 'PhoneIcon',
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
  },
  {
    icon: 'EnvelopeIcon',
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: 'ChatBubbleLeftIcon',
    label: 'WhatsApp',
    value: 'Chat with us on WhatsApp',
    href: `https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20business%20website%20and%20management%20system.`,
  },
];

const businessTypes = [
  'Salon / Beauty Parlour',
  'School / Coaching Center',
  'Clinic / Hospital',
  'Pharmacy / Medicine Shop',
  'Restaurant / Cafe',
  'Gym / Fitness Center',
  'Retail Shop',
  'Real Estate Agency',
  'Travel Agency',
  'Other Local Business',
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    businessType: '',
    city: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          company: form.businessName,
          service: form.businessType,
          city: form.city,
          message: form.message,
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit form');
      }

      setSubmitted(true);
      setForm({
        name: '',
        phone: '',
        email: '',
        businessName: '',
        businessType: '',
        city: '',
        message: '',
      });
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-24 md:py-32 bg-[#F0F2FF] reveal-on-scroll section-reveal">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary" />
            <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">Get In Touch</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-800 tracking-tight leading-tight text-foreground">
            Let&apos;s Build Your
            <br />
            <span className="text-gradient-primary">Business Digital System</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Tell us about your business and we will suggest the right website and management solution for you. Free demo available.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3 bg-card rounded-3xl p-8 md:p-10 shadow-card-hover border border-border">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center animate-pulse-glow">
                  <Icon name="CheckIcon" size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-800 text-foreground">Enquiry Received!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. Our team will contact you within 24 hours to discuss the best digital solution for your business.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary px-6 py-2.5 rounded-full text-sm font-600 mt-2"
                >
                  <span>Send Another Enquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-600 text-foreground mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-600 text-foreground mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-600 text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-600 text-foreground mb-2">
                      Business Name
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      value={form.businessName}
                      onChange={handleChange}
                      placeholder="Your business name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-600 text-foreground mb-2">
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={form.businessType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    >
                      <option value="">Select your business type</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-600 text-foreground mb-2">
                      City
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Your city"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-600 text-foreground mb-2">
                    Tell Us About Your Business <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business, what you need, and any specific requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 rounded-xl text-base font-600 inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Request Free Demo'}</span>
                  <Icon name="PaperAirplaneIcon" size={18} className="text-white" />
                </button>

                {errorMessage ? (
                  <p className="text-sm text-red-600 text-center font-500" role="alert">
                    {errorMessage}
                  </p>
                ) : null}

                <p className="text-center text-muted-foreground text-xs">
                  We respect your privacy. Your information will only be used to contact you about our services.
                </p>
              </form>
            )}
          </div>

          {/* Info panel — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Contact info cards */}
            <div className="bg-card rounded-3xl p-7 border border-border shadow-sm flex flex-col gap-5">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-primary flex items-center justify-center shrink-0">
                    <Icon name={info.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs font-600 uppercase tracking-wider mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('https') ? '_blank' : undefined}
                        rel={info.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                        className="text-foreground text-sm font-600 hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground text-sm font-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps embed */}
            <div className="rounded-3xl overflow-hidden border border-border shadow-sm" style={{ minHeight: '180px' }}>
              <iframe
                title="RNP Tech Solutions office — A-142 Sector 63 Noida"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.37695!3d28.62723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sA-142%2C+Sector+63%2C+Noida%2C+Uttar+Pradesh+201301!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing RNP Tech Solutions office location in Sector 63, Noida"
              />
            </div>

            {/* Dark promo card */}
            <div className="bg-gradient-hero rounded-3xl p-7 relative overflow-hidden flex-1">
              <div
                className="absolute top-0 right-0 w-40 h-40 opacity-20"
                style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 70%)', filter: 'blur(30px)' }}
                aria-hidden="true"
              />
              <Icon name="RocketLaunchIcon" size={28} className="text-accent mb-4" />
              <h3 className="text-white font-800 text-lg mb-2">Start with a Free Demo</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                We will show you exactly how your business website and management system will look and work — completely free, no obligation.
              </p>
              <div className="space-y-2">
                {['Free demo call', 'Website preview', 'Dashboard walkthrough', 'No commitment required'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-accent" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
