'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const contactInfo = [
  {
    icon: 'MapPinIcon',
    label: 'Office Address',
    value: 'A-142, Sector 63, Noida, Uttar Pradesh 201301, India',
  },
  {
    icon: 'PhoneIcon',
    label: 'Phone',
    value: '+91 120 400 1234',
    href: 'tel:+911204001234',
  },
  {
    icon: 'EnvelopeIcon',
    label: 'Email',
    value: 'hello@rnptechsolutions.com',
    href: 'mailto:hello@rnptechsolutions.com',
  },
  {
    icon: 'ClockIcon',
    label: 'Business Hours',
    value: 'Mon – Sat, 9:00 AM – 7:00 PM IST',
  },
];

const socialLinks = [
  { icon: 'LinkIcon', label: 'LinkedIn', href: '#' },
  { icon: 'LinkIcon', label: 'Twitter', href: '#' },
  { icon: 'LinkIcon', label: 'Instagram', href: '#' },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
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
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit form');
      }

      setSubmitted(true);
      setForm({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      });
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F0F2FF] reveal-on-scroll section-reveal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary" />
            <span className="text-muted-foreground text-xs font-700 uppercase tracking-widest">Get In Touch</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-800 tracking-tight leading-tight text-foreground">
            Talk to a
            <br />
            <span className="text-gradient-primary">Software Strategy Team</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Tell us about your website, software, ERP, inventory, or automation requirement and we will get back to you within 24 hours with a tailored plan.
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
                <h3 className="text-2xl font-800 text-foreground">Message Received!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. Our team will contact you within 24 hours with a tailored proposal.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary px-6 py-2.5 rounded-full text-sm font-600 mt-2"
                >
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-600 text-foreground mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahul Verma"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-600 text-foreground mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@company.in"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-600 text-foreground mb-2">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Pvt Ltd"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-600 text-foreground mb-2">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="custom-software">Custom Software Development</option>
                      <option value="website">Website Development</option>
                      <option value="inventory">Inventory Management System</option>
                      <option value="erp-crm">ERP / CRM Solution</option>
                      <option value="ecommerce">E-commerce Platform</option>
                      <option value="automation">Business Automation</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-600 text-foreground mb-2">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project — what you need, your timeline, and any specific requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 rounded-xl text-base font-600 inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Icon name="PaperAirplaneIcon" size={18} className="text-white" />
                </button>

                {errorMessage ? (
                  <p className="text-sm text-red-600 text-center font-500" role="alert">
                    {errorMessage}
                  </p>
                ) : null}

                <p className="text-center text-muted-foreground text-xs">
                  We respect your privacy. No spam, ever.
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
                      <a href={info.href} className="text-foreground text-sm font-600 hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground text-sm font-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Dark promo card */}
            <div className="bg-gradient-hero rounded-3xl p-7 relative overflow-hidden flex-1">
              <div
                className="absolute top-0 right-0 w-40 h-40 opacity-20"
                style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 70%)', filter: 'blur(30px)' }}
                aria-hidden="true"
              />
              <Icon name="RocketLaunchIcon" size={28} className="text-accent mb-4" />
              <h3 className="text-white font-800 text-lg mb-2">Fast-Track Your Project</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Get a detailed proposal, timeline, and cost estimate within 48 hours — completely free.
              </p>
              <div className="space-y-2">
                {['Free discovery call', 'Technical assessment', 'Detailed proposal', 'No obligation'].map((item) => (
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