import type { Metadata } from 'next';

import { siteConfig, siteUrl } from '@/app/seo';

export type ServicePageSlug =
  | 'website-development'
  | 'custom-software-development'
  | 'customer-staff-management'
  | 'business-automation'
  | 'role-based-dashboards'
  | 'monthly-support-maintenance';

export interface ServicePageData {
  slug: ServicePageSlug;
  path: string;
  shortLabel: string;
  navLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  deliverables: string[];
  benefits: string[];
  process: string[];
  industries: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export const servicePages: ServicePageData[] = [
  {
    slug: 'website-development',
    path: '/services/website-development',
    shortLabel: 'Business Website Setup',
    navLabel: 'Business Website',
    title: 'Professional Business Website for Local Businesses in India',
    metaTitle: 'Professional Business Website Setup for Local Businesses | RNP Tech Solutions',
    metaDescription:
      'Get a professional business website for your salon, clinic, school, pharmacy, or local business in India. Mobile-friendly design, enquiry form, WhatsApp integration. Starting ₹3,000/month.',
    heroTitle: 'Get a Professional Business Website Set Up for Your Business',
    heroSubtitle:
      'We create and configure a professional website for your business — with your name, services, contact details, WhatsApp button, and enquiry form — so customers across India can find and contact you easily.',
    intro:
      'A professional website is the first step to building trust with customers online. RNP Tech Solutions creates and sets up business websites tailored to your business category — whether you run a salon, school, clinic, pharmacy, restaurant, gym, retail shop, or any other local business in India. We handle everything from setup to configuration so your business is online and receiving enquiries right from the start. Our websites are mobile-friendly, SEO-ready, and designed to work for Indian local business owners who want results without technical complexity. You focus on your business — we handle your digital presence on a simple monthly plan starting at ₹3,000.',
    primaryKeyword: 'professional business website for local business India',
    secondaryKeywords: [
      'salon website setup India',
      'school website development India',
      'clinic website setup India',
      'affordable business website monthly plan India',
      'business website Noida',
    ],
    deliverables: [
      'Professional business website with your branding and business details',
      'Mobile-friendly design that works on all devices',
      'Services or product display page',
      'Customer enquiry and contact form',
      'WhatsApp button and contact integration',
      'Gallery section for images or work samples',
      'Google Maps location integration',
      'Basic on-page SEO structure for search visibility',
    ],
    benefits: [
      'Build a professional online presence that earns customer trust',
      'Receive customer enquiries directly through your website',
      'Make it easy for customers to find and contact your business',
      'Display your services, pricing, and business information professionally',
    ],
    process: [
      'We collect your business details, services, images, and contact information',
      'We design and configure your website according to your business category',
      'We integrate your WhatsApp contact, enquiry form, and location details',
      'We test across devices and provide access with guidance and support',
    ],
    industries: ['Salon', 'School', 'Clinic', 'Pharmacy', 'Restaurant', 'Gym', 'Retail Shop', 'Travel Agency', 'Real Estate', 'Local Business'],
    faqs: [
      {
        question: 'What information do you need to set up my business website?',
        answer:
          'We need your business name, contact number, email address, WhatsApp number, business address, list of services with descriptions, photos or images of your business or work, and any other details you want displayed. We will guide you through providing this information step by step during the onboarding process — no technical knowledge required from your side.',
      },
      {
        question: 'How long does it take to get my business website live?',
        answer:
          'Once we have all the required information and content from you, the website setup typically takes 3–5 business days. We keep you updated throughout the process and share the website with you for review before it goes live. For urgent requirements, please contact us to discuss the timeline.',
      },
      {
        question: 'Will my website work on mobile phones?',
        answer:
          'Yes. Every website we set up is fully mobile-friendly and tested on both Android and iOS devices. In India, most customers search for local businesses on their mobile phone, so mobile-friendly design is a standard part of every website we build — not an add-on.',
      },
      {
        question: 'Will my business appear on Google after getting a website?',
        answer:
          'A website is a critical foundation for Google visibility. We include basic on-page SEO structure in every website — proper headings, meta tags, and business information — to help search engines discover your business. Ranking on Google also depends on factors like content quality, location, and time. We do not guarantee specific rankings but set you up with the right foundation.',
      },
      {
        question: 'Does the website include a domain name and hosting?',
        answer:
          'Domain registration and hosting costs may be charged separately depending on your plan and requirements. We will clarify all costs transparently before any work begins. Your monthly subscription covers the website setup, maintenance, and support — we will advise on domain and hosting options that best suit your business.',
      },
      {
        question: 'Can I update the content on my website myself?',
        answer:
          'Minor content updates — such as changes to your service list, contact number, or photos — are covered as part of your monthly support. For more significant changes, we handle updates on your behalf. Our goal is to make your digital presence maintenance-free so you can focus entirely on running your business.',
      },
    ],
  },
  {
    slug: 'custom-software-development',
    path: '/services/custom-software-development',
    shortLabel: 'Business Management Software',
    navLabel: 'Management Software',
    title: 'Industry-Specific Business Management Software for Local Businesses in India',
    metaTitle: 'Business Management Software for Local Businesses India | RNP Tech Solutions',
    metaDescription:
      'Industry-specific business management software for salons, schools, clinics, pharmacies, and gyms across India. Dashboards, enquiry management, and daily operations tools on monthly plans.',
    heroTitle: 'Business Management Software Designed for Your Industry',
    heroSubtitle:
      'We provide industry-specific management software for local businesses in India — giving you digital tools to manage enquiries, customers, staff, and daily operations easily from your dashboard.',
    intro:
      'Every business category has different operational needs. A salon needs appointment and customer management. A school needs admission and student tracking. A clinic needs patient records and appointment scheduling. A pharmacy needs prescription and stock management. RNP Tech Solutions provides business management software designed specifically for your industry in India — so the tools you get are relevant, practical, and simple to use from day one. Unlike generic software that requires hours of configuration, our system is configured for your specific business type and is ready to use from the moment we hand it over. No technical knowledge, no long setup periods, no expensive IT consultants. Just a clean, organized dashboard that helps you run your business better — on an affordable monthly plan.',
    primaryKeyword: 'business management software for local business India',
    secondaryKeywords: [
      'salon management software India',
      'school management software India',
      'clinic management software India',
      'pharmacy management software India',
      'gym management system India',
    ],
    deliverables: [
      'Industry-specific business management dashboard',
      'Business profile and settings configuration',
      'Enquiry and booking management module',
      'Customer, patient, or student record management',
      'Staff and team management',
      'Service or product management section',
      'Reports and basic business insights depending on plan',
    ],
    benefits: [
      'Manage all your business operations from one simple dashboard',
      'Reduce manual record-keeping and paper-based systems',
      'Track customer enquiries, bookings, and history in one place',
      'Improve staff coordination and overall business visibility',
    ],
    process: [
      'We understand your business category and operational requirements',
      'We configure the management software according to your business type',
      'We set up your business profile, services, staff, and access levels',
      'We provide access and basic guidance for you and your team to get started',
    ],
    industries: ['Salon', 'School', 'Clinic', 'Pharmacy', 'Gym', 'Restaurant', 'Retail Shop', 'Real Estate', 'Travel Agency'],
    faqs: [
      {
        question: 'Is this management software specific to my type of business?',
        answer:
          'Yes. The software is configured specifically for your business category. A salon gets appointment and customer management tools. A school gets admission and student management. A clinic gets patient records and appointment scheduling. A pharmacy gets prescription and inventory management. We do not hand you a generic system — we configure it for your industry before you receive access.',
      },
      {
        question: 'Does my staff need technical training to use the software?',
        answer:
          'No. The software is designed to be simple and intuitive. We provide a basic onboarding walkthrough during setup, and the dashboards are built for non-technical users. Staff members like receptionists, managers, and attendants are typically comfortable using the system within a day or two of starting.',
      },
      {
        question: 'How is this different from WhatsApp or spreadsheets?',
        answer:
          'WhatsApp and spreadsheets work but create scattered, unorganized records that are hard to track and report on. Our business management software gives you a single organized dashboard where every enquiry, customer record, booking, and staff detail is structured, searchable, and always available — without the manual effort of maintaining spreadsheets or scrolling through chats.',
      },
      {
        question: 'Can I see reports and business performance data?',
        answer:
          'Yes. Depending on your plan, the dashboard includes basic business reports — such as enquiry volume, customer history, and operational summaries. The Complete Business Management Plan includes more detailed reporting and business insights. These reports help you make better decisions without needing a separate analytics tool.',
      },
      {
        question: 'Can multiple staff members use the system at the same time?',
        answer:
          'Yes. Multiple team members can use the system simultaneously, each with their own login and role-based access. The owner can see everything while staff members only see what is relevant to their role. This keeps your data organized and secure without restricting day-to-day operations.',
      },
      {
        question: 'What happens to my data if I stop the subscription?',
        answer:
          'Your business data remains accessible to you and we will provide an export of your records on request before the service is paused. We recommend maintaining your subscription to avoid interruptions to your operations. Please refer to our Refund and Cancellation Policy for full details on data handling after cancellation.',
      },
    ],
  },
  {
    slug: 'customer-staff-management',
    path: '/services/customer-staff-management',
    shortLabel: 'Customer & Staff Management',
    navLabel: 'Customer & Staff',
    title: 'Customer and Staff Management System for Local Businesses in India',
    metaTitle: 'Customer and Staff Management System for Local Businesses | RNP Tech Solutions',
    metaDescription:
      'Organized customer and staff management for salons, clinics, schools, and local businesses across India. Maintain records, track service history, manage schedules — all from one dashboard.',
    heroTitle: 'Manage Your Customers and Staff in One Simple System',
    heroSubtitle:
      'Our customer and staff management module gives you organized records for every customer and team member — helping your business across India run more smoothly every day.',
    intro:
      'Managing customers and staff manually leads to missed follow-ups, poor coordination, and operational confusion. RNP Tech Solutions provides a simple customer and staff management system where you can maintain customer records, track service history, manage staff details, and coordinate your team from your business dashboard. Whether you run a salon with 5 stylists, a clinic with 3 doctors and a receptionist, or a school with multiple staff and hundreds of students — every record is organized, searchable, and always available when you need it. Stop relying on diaries, scattered WhatsApp messages, and paper registers. Move your customer and staff management online with a system designed for Indian local businesses.',
    primaryKeyword: 'customer and staff management system for local business India',
    secondaryKeywords: [
      'salon customer management India',
      'clinic patient management system India',
      'school student management India',
      'staff management software for small business India',
    ],
    deliverables: [
      'Customer, patient, or student record management',
      'Service history and visit tracking per customer',
      'Staff profile and contact management',
      'Staff schedule management depending on plan',
      'Customer communication and follow-up tracking',
      'Customer profile and full interaction history',
    ],
    benefits: [
      'Maintain organized customer records with full service history',
      'Manage staff details, roles, and schedules from one dashboard',
      'Improve customer retention through better follow-up and records',
      'Reduce coordination confusion with a clear team management system',
    ],
    process: [
      'We configure the customer and staff management module for your business type',
      'We set up your staff profiles and customer record structure',
      'We integrate the module with your enquiry and booking system',
      'We provide access to team members based on their assigned role',
    ],
    industries: ['Salon', 'Clinic', 'School', 'Pharmacy', 'Gym', 'Restaurant', 'Retail Shop', 'Travel Agency'],
    faqs: [
      {
        question: 'What customer information can I store in the system?',
        answer:
          'You can store customer name, contact details, service history, visit dates, notes, preferences, and other details relevant to your business type. For clinics, this includes patient records and appointment history. For schools, this includes student profiles, parent contact details, and admission records. For salons, this includes service history and preferences per customer.',
      },
      {
        question: 'Can I manage multiple staff members with different schedules?',
        answer:
          'Yes. The staff management module allows you to maintain profiles for multiple staff members, assign roles, and manage basic scheduling depending on your plan. This is useful for salons with multiple stylists, clinics with multiple doctors, and gyms with multiple trainers. Each staff member gets their own access without seeing each other\'s full records.',
      },
      {
        question: 'Can I search and find a specific customer quickly?',
        answer:
          'Yes. The customer management module includes search functionality so you can find any customer record by name, phone number, or other details instantly. This is far faster than scrolling through paper registers or WhatsApp chats, especially for businesses that serve hundreds of customers every month.',
      },
      {
        question: 'Is customer data kept private and secure?',
        answer:
          'Yes. Customer data stored in the system is private to your business and accessible only by authorized team members based on their role. Staff members only see the data their role permits. We take data privacy seriously and handle all information in accordance with our Privacy Policy and applicable Indian data protection guidelines.',
      },
      {
        question: 'Can I track which services each customer has taken?',
        answer:
          'Yes. The customer record includes a full service history so you can see every visit, every service taken, and any notes added over time. This helps with follow-up — for example, reminding a salon customer about a hair treatment due, or contacting a clinic patient for a follow-up appointment.',
      },
      {
        question: 'Does this work for businesses with just one or two staff members?',
        answer:
          'Absolutely. The system works for businesses of any size — from a solo practitioner with one assistant to a salon with 10 stylists. You only pay for the plan that fits your business size and needs. Small businesses benefit just as much from having organized digital records as larger ones.',
      },
    ],
  },
  {
    slug: 'business-automation',
    path: '/services/business-automation',
    shortLabel: 'Enquiry & Booking System',
    navLabel: 'Enquiry System',
    title: 'Enquiry and Booking Management System for Local Businesses in India',
    metaTitle: 'Enquiry and Booking System for Local Businesses India | RNP Tech Solutions',
    metaDescription:
      'Never miss a customer enquiry again. RNP Tech Solutions provides enquiry and booking management systems for salons, clinics, schools, and other local businesses across India.',
    heroTitle: 'Never Miss a Customer Enquiry or Booking Request Again',
    heroSubtitle:
      'Our enquiry and booking management system captures every customer request from your website, organizes them in your dashboard, and helps you track and respond to every enquiry — faster and more professionally.',
    intro:
      'Missing customer enquiries is one of the biggest losses for any local business in India. When a potential customer fills out your contact form or sends a message and does not hear back quickly — they move on to a competitor. RNP Tech Solutions provides an integrated enquiry and booking management system that captures all customer enquiries from your website and delivers them to your dashboard for easy tracking and follow-up. Whether it is an appointment request, a service inquiry, or a contact form submission — every enquiry is captured, organized, and actionable. No more scattered WhatsApp messages, missed calls, or lost enquiries buried in an inbox. Your business deserves a proper system — and our enquiry management module gives you exactly that.',
    primaryKeyword: 'enquiry and booking management system for local business India',
    secondaryKeywords: [
      'appointment booking system for salon India',
      'patient appointment system for clinic India',
      'admission enquiry management for school India',
      'customer enquiry management system India',
    ],
    deliverables: [
      'Customer enquiry capture from website contact form',
      'WhatsApp enquiry and booking integration',
      'Booking request and appointment management',
      'Enquiry dashboard with status tracking',
      'Enquiry notification and follow-up tools',
      'Customer contact history and enquiry records',
    ],
    benefits: [
      'Capture every customer enquiry from your website automatically',
      'Track and manage all enquiries and bookings from one dashboard',
      'Never miss a customer call or contact request again',
      'Respond to enquiries faster and convert more customers into clients',
    ],
    process: [
      'We integrate an enquiry and booking form into your website',
      'We connect your WhatsApp contact for direct customer messaging',
      'We configure your dashboard to receive and display all enquiries',
      'We set up notification alerts so you are informed when a new enquiry arrives',
    ],
    industries: ['Salon', 'Clinic', 'School', 'Gym', 'Restaurant', 'Travel Agency', 'Real Estate', 'Retail Shop'],
    faqs: [
      {
        question: 'How will I receive customer enquiries from the website?',
        answer:
          'Customer enquiries submitted through your website form are captured directly in your business dashboard. You will also receive a WhatsApp or email notification so you can follow up quickly. This means you never have to manually check your website for new messages — the system brings every enquiry to your attention instantly.',
      },
      {
        question: 'Can customers book appointments through the system?',
        answer:
          'Yes. Depending on your plan, customers can submit appointment booking requests with their preferred date, time, and service details. You can then confirm, reschedule, or respond from your management dashboard. This replaces the need for manual phone-based booking for your business.',
      },
      {
        question: 'How is this different from just using WhatsApp?',
        answer:
          'WhatsApp is great for quick communication but it is not a management system. Enquiries get lost in chats, there is no organized record, no status tracking, and no reporting. Our enquiry system gives you an organized dashboard where every enquiry has a name, contact detail, date, status, and notes — so nothing falls through the cracks and you have a full history of every customer interaction.',
      },
      {
        question: 'Will I be notified immediately when a new enquiry comes in?',
        answer:
          'Yes. The system sends you a notification when a new enquiry is received. Depending on configuration, this can be a WhatsApp message or email alert. Quick notification means faster response times, and faster response times directly improve the chances of converting a new enquiry into a paying customer.',
      },
      {
        question: 'Can I track the status of each enquiry — like new, contacted, confirmed?',
        answer:
          'Yes. Each enquiry in your dashboard has a status that you can update — for example, New, Contacted, Confirmed, or Completed. This helps you and your team stay organized, know which enquiries need follow-up, and report on how many enquiries convert into actual bookings or sales.',
      },
      {
        question: 'Can multiple staff members manage enquiries from the same dashboard?',
        answer:
          'Yes. Depending on your plan and role configuration, multiple staff members — such as a receptionist and an owner — can access and manage enquiries from the same dashboard with appropriate permissions. The owner can see all enquiries while the receptionist handles follow-ups. This keeps your team coordinated without duplication of effort.',
      },
    ],
  },
  {
    slug: 'role-based-dashboards',
    path: '/services/role-based-dashboards',
    shortLabel: 'Role-Based Dashboards',
    navLabel: 'Dashboards',
    title: 'Role-Based Business Dashboards for Local Business Teams in India',
    metaTitle: 'Role-Based Business Dashboards for Local Businesses India | RNP Tech Solutions',
    metaDescription:
      'Role-based dashboards for business owners, staff, receptionists, managers, and customers across India. Each role gets the right access and tools — no more, no less.',
    heroTitle: 'The Right Dashboard Access for Every Role in Your Business',
    heroSubtitle:
      'We configure role-based dashboards so your business owner, staff, receptionist, manager, accountant, and customers each have access to the information and tools relevant to their specific role.',
    intro:
      'Not everyone in your business needs to see everything. A receptionist at a salon does not need access to financial reports. A student at a school does not need access to staff management. A junior staff member at a clinic does not need access to all patient records. RNP Tech Solutions provides role-based dashboard access for local businesses across India — where each person sees only what is relevant and appropriate for their role. This keeps your operations organized, secure, and efficient. It also reduces confusion for team members who might be overwhelmed by seeing everything at once. Whether you are managing a 2-person salon or a 15-person school with teachers, a principal, an accountant, and student parents — role-based dashboards give everyone the right access without compromising security or clarity.',
    primaryKeyword: 'role-based business dashboard for local business India',
    secondaryKeywords: [
      'owner dashboard for local business India',
      'staff management dashboard India',
      'multi-user business management system India',
      'business role access control India',
    ],
    deliverables: [
      'Owner dashboard with full business overview and control',
      'Staff or receptionist dashboard for daily operations',
      'Manager dashboard for team and operations oversight depending on plan',
      'Accountant dashboard for billing and financial records depending on plan',
      'Customer, patient, or student dashboard depending on business type',
      'Role-specific access control and data visibility settings',
    ],
    benefits: [
      'Keep each team member focused on their specific responsibilities',
      'Improve operational security with controlled access for each role',
      'Reduce confusion by showing only relevant information per role',
      'Enable better team coordination without unnecessary information sharing',
    ],
    process: [
      'We identify the roles and team members in your business',
      'We configure dashboard access for each role according to your plan',
      'We set up user accounts with appropriate permissions for each team member',
      'We provide guidance on how each role uses their dashboard effectively',
    ],
    industries: ['Salon', 'Clinic', 'Hospital', 'School', 'Coaching Center', 'Pharmacy', 'Gym', 'Restaurant', 'Real Estate', 'Travel Agency'],
    faqs: [
      {
        question: 'Which roles can have separate dashboard access?',
        answer:
          'Depending on your business type and selected plan, roles can include: business owner, manager, staff, receptionist, accountant, customer, patient, student, parent, and others. We configure the roles that are relevant to your specific business category. A salon might have owner, stylist, and receptionist roles. A school might have principal, teacher, accountant, student, and parent roles.',
      },
      {
        question: 'Can I control what my staff can see or edit in the dashboard?',
        answer:
          'Yes. Each role is configured with specific access permissions. A receptionist can see appointment records but may not have access to financial data. A manager can see reports but may not have full system settings access. We configure these permissions based on your specific requirements during the onboarding process.',
      },
      {
        question: 'Can customers or students have their own dashboard access?',
        answer:
          'Yes. Depending on your business type and plan, customers or clients can have their own login to view their records, booking history, or other relevant information. For schools, students and parents can log in to see results, fee status, or announcements. For clinics, patients can view their appointment history. This improves the professional experience you offer.',
      },
      {
        question: 'What if I want to change role permissions after setup?',
        answer:
          'Role permissions can be adjusted through your monthly support. If you want to give a new staff member access, remove a previous employee, or modify what a role can see — contact our support team and we will make the changes. Major role restructuring requests are handled as part of your ongoing support plan.',
      },
      {
        question: 'Is role-based access available in the Essential Digital Plan?',
        answer:
          'The Essential Digital Plan includes basic dashboard access for the owner and staff. The Complete Business Management Plan includes advanced role-based access with multiple roles such as manager, receptionist, accountant, and customer/student dashboards. We will help you decide which plan fits your team structure during your free demo.',
      },
      {
        question: 'Is it safe to give my staff access to the business dashboard?',
        answer:
          'Yes. Role-based access is specifically designed for this. Staff members only see the data and functions assigned to their role — they cannot access the owner dashboard, financial records, or settings they are not authorized for. All access is logged and can be reviewed by the business owner.',
      },
    ],
  },
  {
    slug: 'monthly-support-maintenance',
    path: '/services/monthly-support-maintenance',
    shortLabel: 'Monthly Support & Maintenance',
    navLabel: 'Monthly Support',
    title: 'Monthly Website and Dashboard Support for Local Businesses in India',
    metaTitle: 'Monthly Website Support and Maintenance Service India | RNP Tech Solutions',
    metaDescription:
      'Monthly website maintenance, dashboard support, content updates, and technical assistance for local businesses across India. Included with all RNP Tech Solutions subscription plans.',
    heroTitle: 'Ongoing Monthly Support So Your Business System Always Runs Smoothly',
    heroSubtitle:
      'We provide monthly maintenance, updates, and technical support for your website and business dashboard — so you never have to worry about technical issues getting in the way of running your business in India.',
    intro:
      'Setting up a website is only the beginning. To keep your business running well online, you need regular maintenance, timely updates, and reliable technical support. RNP Tech Solutions provides monthly support for all clients across India, ensuring your website stays functional, your dashboard is updated, and any technical issues are resolved promptly. Many local businesses in India work with developers who disappear after the initial setup, leaving business owners to deal with broken websites, outdated content, and no one to call when something stops working. We are different. Monthly support is built into every subscription plan so you always have a team available to help — whether it is a content update, a technical issue, or a question about your dashboard. You focus on running your business. We handle everything else.',
    primaryKeyword: 'monthly website support and maintenance for local business India',
    secondaryKeywords: [
      'website maintenance service India',
      'business dashboard support India',
      'monthly tech support for small business India',
      'website update and maintenance plan India',
    ],
    deliverables: [
      'Monthly website maintenance and technical health checks',
      'Dashboard updates and feature adjustments as needed',
      'Content updates such as service changes or business information',
      'Technical issue resolution and bug fixes',
      'WhatsApp and email support access',
      'Priority support with faster response times on the Complete Plan',
    ],
    benefits: [
      'Keep your website and dashboard running without technical interruptions',
      'Get help quickly when something needs updating or fixing',
      'Focus on running your business while we handle the technical side',
      'Avoid missed enquiries or customer loss due to technical downtime',
    ],
    process: [
      'Monthly support is included with all active subscription plans',
      'Report any issue through WhatsApp, email, or phone to our team',
      'Our team reviews and resolves issues within agreed response timeframes',
      'Regular maintenance checks are performed to keep the system healthy and up to date',
    ],
    industries: ['All Local Businesses', 'Salon', 'School', 'Clinic', 'Pharmacy', 'Restaurant', 'Gym', 'Retail Shop'],
    faqs: [
      {
        question: 'What is included in monthly support?',
        answer:
          'Monthly support includes technical maintenance and health checks for your website and dashboard, resolution of any technical issues, minor content updates such as service list or contact information changes, and WhatsApp or email support access. The Complete Business Management Plan includes priority support with faster response times and a dedicated support contact for your business.',
      },
      {
        question: 'How do I report a problem with my website or dashboard?',
        answer:
          'You can reach us through WhatsApp, email, or phone. Share a brief description of the issue or a screenshot if applicable. Our team will acknowledge your request and begin resolving it based on the support level included in your plan. Essential plan clients can expect resolution within 24–48 business hours. Complete plan clients receive priority response within 4–8 business hours.',
      },
      {
        question: 'What counts as a minor content update?',
        answer:
          'Minor content updates include changes to your service list, updating your contact number or address, replacing existing photos, updating business hours, or similar small changes to existing content. Adding entirely new sections, pages, or features is handled as a separate update request and may involve additional effort depending on the scope.',
      },
      {
        question: 'Is monthly support available on weekends?',
        answer:
          'Our standard support hours are Monday to Saturday, 9 AM to 6 PM IST. For urgent issues affecting your business operations — such as the website going down or the dashboard becoming inaccessible — we do our best to respond even outside standard hours, particularly for Complete Business Management Plan clients.',
      },
      {
        question: 'What if I need the same support if I pause my subscription?',
        answer:
          'Monthly support is tied to your active subscription. If your subscription is paused due to non-payment or cancellation, support services are paused as well. We recommend maintaining your subscription to ensure uninterrupted access to support and to avoid any operational disruptions to your business.',
      },
      {
        question: 'Can I request a new feature or section for my website as part of support?',
        answer:
          'New features, new pages, or significant functionality additions are beyond standard monthly support and may be handled as a separate project with agreed additional charges. Minor enhancements within the existing setup are covered in support. We discuss the scope before starting any additional work so there are no surprises on cost.',
      },
    ],
  },
];

export const servicePagesBySlug = Object.fromEntries(
  servicePages.map((service) => [service.slug, service]),
) as Record<ServicePageSlug, ServicePageData>;

export function getServiceSchema(service: ServicePageData) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        serviceType: service.shortLabel,
        provider: {
          '@type': ['LocalBusiness', 'ProfessionalService'],
          name: siteConfig.legalName,
          url: siteUrl,
          telephone: siteConfig.phone,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Noida',
            addressRegion: 'Uttar Pradesh',
            addressCountry: 'IN',
          },
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        description: service.metaDescription,
        url: `${siteUrl}${service.path}`,
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '3000',
          highPrice: '4000',
          priceCurrency: 'INR',
          offerCount: '2',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${siteUrl}/services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.shortLabel,
            item: `${siteUrl}${service.path}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function getServiceMetadata(service: ServicePageData): Metadata {
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
    alternates: {
      canonical: service.path,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteUrl}${service.path}`,
      siteName: siteConfig.legalName,
      type: 'article',
      images: [siteConfig.ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [siteConfig.ogImage],
    },
  };
}
