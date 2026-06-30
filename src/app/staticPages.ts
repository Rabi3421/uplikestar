import type { Metadata } from 'next';

import { faqItems, siteConfig, siteUrl } from '@/app/seo';

export type StaticPageSlug =
  | 'about'
  | 'privacy-policy'
  | 'terms-and-conditions'
  | 'case-studies'
  | 'industries'
  | 'faq'
  | 'refund-policy'
  | 'payment-policy'
  | 'disclaimer'
  | 'cookie-policy';

export interface StaticPageSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface StaticPageData {
  slug: StaticPageSlug;
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  sections: StaticPageSection[];
  faqEntries?: Array<{ question: string; answer: string }>;
}

export const staticPages: StaticPageData[] = [
  {
    slug: 'about',
    path: '/about',
    title: 'About RNP Tech Solutions',
    metaTitle: 'About RNP Tech Solutions | Digital Solutions for Local and Small Businesses',
    metaDescription:
      'Learn about RNP Tech Solutions, a technology company helping salons, schools, clinics, pharmacies, restaurants, gyms, and local businesses go online and manage operations digitally.',
    eyebrow: 'About RNP Tech Solutions',
    heroTitle: 'A Practical Technology Partner for Local and Small Businesses',
    heroSubtitle:
      'RNP Tech Solutions helps business owners go online, get more enquiries, and manage daily operations through professional websites and easy-to-use business management systems.',
    intro:
      'RNP Tech Solutions is a technology company focused on one goal: helping local and small businesses grow digitally. We provide professional websites, business dashboards, enquiry systems, and management tools that are simple to use, affordable to maintain, and built specifically for the needs of Indian service-based businesses.',
    sections: [
      {
        title: 'Who We Are',
        paragraphs: [
          'RNP Tech Solutions is a digital solutions company serving local and small business owners across India. We work with salon owners, school managers, clinic operators, pharmacy owners, restaurant managers, gym owners, retail shop owners, travel agencies, real estate agencies, and other service-based businesses.',
          'Our team understands that most local business owners are not looking for complicated software. They need a professional online presence, a way to receive and manage enquiries, and a simple system to handle daily operations without needing a technical background.',
        ],
      },
      {
        title: 'Why We Started',
        paragraphs: [
          'Many local business owners struggle with basic challenges: no online presence, missed customer enquiries, manual record-keeping, poor customer communication, and no system to manage staff or bookings. These problems are common across salons, schools, clinics, pharmacies, and other service businesses.',
          'RNP Tech Solutions was started to solve exactly these problems. We built a practical system that gives every local business a professional website, an enquiry management tool, and a simple business dashboard — without requiring technical knowledge or heavy investment.',
        ],
      },
      {
        title: 'What Problem We Solve',
        paragraphs: [
          'The average local business owner manages everything manually — from customer calls to appointment bookings, staff coordination to daily records. This results in missed enquiries, poor customer experience, operational confusion, and slow business growth.',
        ],
        bullets: [
          'No professional online presence to attract new customers',
          'Missed customer enquiries and booking requests',
          'Manual operations with no proper management system',
          'No way to track customer history, bookings, or staff records',
          'Poor visibility on Google and online platforms',
          'No digital tool to manage daily business activities',
        ],
      },
      {
        title: 'Our Mission',
        paragraphs: [
          'Our mission is to make digital transformation simple and affordable for every local business in India. We believe that every salon, school, clinic, pharmacy, and small business deserves a professional online presence and an easy-to-use system to manage operations.',
          'We want business owners to focus on their work while we handle the digital side — from website setup and enquiry management to dashboard access, staff management, and monthly support.',
        ],
      },
      {
        title: 'Our Approach',
        paragraphs: [
          'We do not just hand over a website and disappear. Our approach is to understand your business, set up a system that fits your needs, configure it with your business details, and stay with you as a monthly support partner.',
          'We set up your website with your business name, services, contact details, WhatsApp button, enquiry form, and dashboard access. We configure your dashboard based on your business category and provide you with simple training so your team can use it from day one.',
        ],
        bullets: [
          'We understand your business type and requirements',
          'We prepare your website and dashboard according to your business details',
          'We configure business information, services, contact, and WhatsApp integration',
          'We provide dashboard access for owner, staff, and customers based on your plan',
          'We provide monthly support, updates, and maintenance',
        ],
      },
      {
        title: 'Why Local Businesses Choose Us',
        paragraphs: [
          'Business owners choose RNP Tech Solutions because we make it simple. There is no technical complexity, no heavy upfront payment, and no confusing setup process. You tell us about your business, we set everything up, and you get a working system ready to use.',
          'Our affordable monthly plans, free demo option, and risk-free trial make it easy for any business owner to start without hesitation.',
        ],
        bullets: [
          'Affordable monthly plans with no heavy upfront cost',
          'Free demo available before commitment',
          '1-month free trial available for selected businesses',
          'Simple dashboard that any business owner can use',
          'Industry-specific setup for salons, schools, clinics, pharmacies, and more',
          'Ongoing monthly support, maintenance, and updates',
          'Professional online presence that builds customer trust',
        ],
      },
    ],
  },
  {
    slug: 'privacy-policy',
    path: '/privacy-policy',
    title: 'Privacy Policy',
    metaTitle: 'Privacy Policy | RNP Tech Solutions',
    metaDescription:
      'Read the RNP Tech Solutions privacy policy to understand how we collect, use, protect, and manage information shared by clients and website visitors.',
    eyebrow: 'Privacy Policy',
    heroTitle: 'How RNP Tech Solutions Collects and Protects Your Information',
    heroSubtitle:
      'This privacy policy explains what information we collect, how we use it, how we protect it, and your rights regarding the data you share with RNP Tech Solutions.',
    intro:
      'RNP Tech Solutions is committed to protecting the privacy of every client and website visitor. This policy outlines how we collect, use, store, share, and protect information provided through our website, enquiry forms, service interactions, and business communications. By using our website or engaging with our services, you agree to the practices described in this policy.',
    sections: [
      {
        title: 'Information We Collect',
        paragraphs: [
          'We may collect the following types of information when you visit our website, submit an enquiry, sign up for a free demo, or engage with our services:',
        ],
        bullets: [
          'Personal details: name, phone number, email address',
          'Business details: business name, business type, business address, city',
          'Enquiry and communication details: messages, service requirements, project details',
          'Payment details where applicable: billing information, transaction references',
          'Usage data: pages visited, time spent on site, browser type, device information',
          'Communication records: emails, WhatsApp messages, and call notes shared with our team',
        ],
      },
      {
        title: 'How We Use Your Information',
        paragraphs: [
          'The information you share with us is used strictly for legitimate business purposes related to delivering and improving our services:',
        ],
        bullets: [
          'To respond to your enquiries and demo requests',
          'To set up your website and business management system',
          'To configure your dashboard and business profile',
          'To send important service updates, billing reminders, and support communications',
          'To process monthly subscription payments and billing records',
          'To improve our services, website, and user experience',
          'To send marketing or promotional communication, only with your consent',
          'To comply with legal and regulatory obligations',
        ],
      },
      {
        title: 'Data Sharing and Third Parties',
        paragraphs: [
          'RNP Tech Solutions does not sell, rent, or trade your personal information. We may share limited information with trusted third-party service providers only when required to deliver our services:',
        ],
        bullets: [
          'Hosting and cloud infrastructure providers',
          'Payment processing services',
          'Email and communication platforms',
          'Analytics and website performance tools',
          'Legal and compliance authorities when required by law',
        ],
      },
      {
        title: 'Data Security',
        paragraphs: [
          'We take reasonable technical and organizational steps to protect your personal information from unauthorized access, misuse, loss, or disclosure. However, no method of data transmission or storage is completely secure. While we implement industry-standard safeguards, we cannot guarantee absolute security.',
          'We store client data only as long as necessary for service delivery, billing, and legal compliance purposes.',
        ],
      },
      {
        title: 'Your Rights',
        paragraphs: [
          'You have the right to request access to, correction of, or deletion of your personal information held by RNP Tech Solutions. To make such a request, please contact us using the details provided on the Contact page.',
          'We will respond to data-related requests within a reasonable timeframe and in accordance with applicable laws.',
        ],
      },
      {
        title: 'Cookies',
        paragraphs: [
          'Our website may use cookies and similar tracking technologies to improve user experience, analyze website traffic, and understand visitor behaviour. You may control cookie settings through your browser preferences. Please refer to our Cookie Policy for detailed information.',
        ],
      },
      {
        title: 'Updates to This Policy',
        paragraphs: [
          'RNP Tech Solutions may update this privacy policy from time to time. When significant changes are made, we will update the date on this page. Continued use of our website or services after updates constitutes acceptance of the revised policy.',
          'For questions about this privacy policy, please contact us at info@rnptechsolutions.com or call +91 9078148246.',
        ],
      },
    ],
  },
  {
    slug: 'terms-and-conditions',
    path: '/terms-and-conditions',
    title: 'Terms and Conditions',
    metaTitle: 'Terms and Conditions | RNP Tech Solutions',
    metaDescription:
      'Read the RNP Tech Solutions terms and conditions covering service subscriptions, payment policies, client responsibilities, intellectual property, and limitations of liability.',
    eyebrow: 'Terms and Conditions',
    heroTitle: 'Terms for Using RNP Tech Solutions Services',
    heroSubtitle:
      'These terms govern the use of our website and services, your subscription, payment obligations, and the relationship between you and RNP Tech Solutions.',
    intro:
      'By accessing the RNP Tech Solutions website, submitting an enquiry, signing up for a free demo, or subscribing to any of our services, you agree to these terms and conditions. Please read them carefully. These terms apply to all clients, visitors, and users of our website and services.',
    sections: [
      {
        title: 'Acceptance of Terms',
        paragraphs: [
          'By using this website or engaging with RNP Tech Solutions for any service, you confirm that you have read, understood, and agreed to these terms and conditions. If you do not agree with any part of these terms, please do not use our website or services.',
        ],
      },
      {
        title: 'Services Provided',
        paragraphs: [
          'RNP Tech Solutions provides professional websites, business management dashboards, enquiry systems, booking systems, role-based access tools, and related digital services for local and small businesses on a monthly subscription basis.',
          'The specific features, modules, and access levels available to each client depend on the subscription plan selected and any agreed customizations.',
        ],
      },
      {
        title: 'Subscription and Billing',
        paragraphs: [
          'Our services are provided on a monthly subscription basis. The applicable plan and monthly fee are agreed upon at the time of signup or service activation.',
          'Monthly subscription fees are due by the 5th of every month. A grace period may be provided until the 10th of the month. If payment is not received after the grace period, services may be temporarily paused. Services will be resumed after the pending payment is cleared.',
          'RNP Tech Solutions reserves the right to update pricing or plan details with prior communication to the client.',
        ],
      },
      {
        title: 'Client Responsibilities',
        paragraphs: [
          'As a client of RNP Tech Solutions, you are responsible for the following:',
        ],
        bullets: [
          'Providing accurate business information, content, images, and contact details for your website and dashboard setup',
          'Ensuring that content provided does not violate any laws, third-party rights, or platform policies',
          'Making timely monthly payments as per the agreed plan',
          'Keeping your dashboard login credentials confidential and secure',
          'Notifying RNP Tech Solutions promptly of any issues with your website or dashboard',
          'Using the system in a lawful and responsible manner',
        ],
      },
      {
        title: 'Business Information Responsibility',
        paragraphs: [
          'All business information, service descriptions, pricing, images, legal claims, offers, promotions, and content displayed on your website are your responsibility as the business owner. RNP Tech Solutions sets up and maintains the system but is not responsible for the accuracy or legality of business content provided by the client.',
        ],
      },
      {
        title: 'Service Activation, Support, and Updates',
        paragraphs: [
          'Service activation timelines depend on the plan selected and the information provided by the client. Monthly support covers maintenance, minor updates, and technical assistance as per the agreed plan. Major customization requests beyond the standard plan scope may involve additional charges.',
        ],
      },
      {
        title: 'Free Demo and Free Trial',
        paragraphs: [
          'A free demo may be offered at RNP Tech Solutions\'s discretion to allow potential clients to understand our services. A 1-month free trial may be available for selected businesses. The free trial does not create a paid subscription obligation unless the client expressly agrees to continue with a paid plan.',
        ],
      },
      {
        title: 'Third-Party Services',
        paragraphs: [
          'RNP Tech Solutions may use or recommend third-party services such as hosting providers, payment gateways, WhatsApp API, SMS services, Google services, and other platforms. Charges for such third-party services, if applicable, are separate from our subscription fees and are the client\'s responsibility unless otherwise agreed.',
        ],
      },
      {
        title: 'Intellectual Property',
        paragraphs: [
          'The RNP Tech Solutions brand, website design, platform code, proprietary tools, and system architecture remain the intellectual property of RNP Tech Solutions. Clients are provided access to the system for their business use only. Reproduction, reverse engineering, or redistribution of our system is not permitted.',
          'Content provided by the client (business name, images, services, logos) remains the property of the client.',
        ],
      },
      {
        title: 'Limitation of Liability',
        paragraphs: [
          'RNP Tech Solutions is not liable for any direct, indirect, incidental, or consequential losses arising from the use or inability to use our services, including but not limited to lost business, missed enquiries, technical downtime, or third-party service failures.',
          'Our liability in any case is limited to the subscription fees paid by the client in the relevant billing period.',
        ],
      },
      {
        title: 'No Guarantee of Leads or Revenue',
        paragraphs: [
          'RNP Tech Solutions provides websites, dashboards, and digital tools to support your business. We do not guarantee a specific number of leads, customer enquiries, bookings, sales, or revenue growth. Results depend on your business quality, market demand, customer response, advertising activity, and other external factors outside our control.',
        ],
      },
      {
        title: 'Service Suspension and Termination',
        paragraphs: [
          'RNP Tech Solutions may suspend or terminate services for non-payment beyond the grace period, violation of these terms, misuse of the system, or provision of false information. The client may cancel the subscription at any time by providing written notice before the next billing cycle.',
        ],
      },
      {
        title: 'Governing Law',
        paragraphs: [
          'These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the jurisdiction of courts in Noida, Uttar Pradesh, India.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [
          'For questions, disputes, or clarifications regarding these terms, please contact us at info@rnptechsolutions.com or call +91 9078148246.',
        ],
      },
    ],
  },
  {
    slug: 'case-studies',
    path: '/case-studies',
    title: 'Case Studies',
    metaTitle: 'Case Studies | RNP Tech Solutions',
    metaDescription:
      'Explore RNP Tech Solutions case studies showing how we have helped salons, schools, clinics, pharmacies, and other local businesses go online and manage operations digitally.',
    eyebrow: 'Case Studies',
    heroTitle: 'How RNP Tech Solutions Helps Local Businesses Go Digital',
    heroSubtitle:
      'Our work focuses on helping salon owners, school managers, clinic operators, and other local business owners build a professional online presence and manage daily operations more easily.',
    intro:
      'RNP Tech Solutions works with local and small business owners who want to go online, receive more customer enquiries, and manage their business operations without complex software or heavy investment. Our case study approach highlights the types of problems we solve and the outcomes business owners typically experience.',
    sections: [
      {
        title: 'Salon and Beauty Businesses',
        paragraphs: [
          'Salon owners often struggle with managing appointments manually, missing customer calls, and having no professional online presence. We help them set up a salon website with a service menu, gallery, appointment enquiry form, WhatsApp booking button, and a simple dashboard to manage bookings and customer records.',
          'The result is a professional salon that customers can find online, contact easily, and book appointments with — all without the owner needing any technical knowledge.',
        ],
      },
      {
        title: 'Schools and Coaching Centers',
        paragraphs: [
          'School and coaching center owners often rely on word-of-mouth and manual admission processes. We help them set up an educational website with admission enquiry forms, course information, notice sections, and dashboards for admin, teachers, students, and parents depending on the selected plan.',
          'Parents and students can visit the website, submit admission enquiries, and stay updated — while school admins manage enquiries and records from a simple dashboard.',
        ],
      },
      {
        title: 'Clinics, Hospitals, and Healthcare',
        paragraphs: [
          'Clinic and hospital operators manage patient appointments, doctor schedules, and reception work manually. We help them set up a professional clinic or hospital website with doctor profiles, department pages, appointment request forms, and dashboards for reception staff, doctors, and management depending on the plan.',
        ],
        bullets: [
          'Professional clinic or hospital website with doctor profiles',
          'Patient appointment request and enquiry system',
          'Reception dashboard to manage patient records',
          'Doctor and accountant dashboards depending on plan',
          'WhatsApp contact and enquiry integration',
        ],
      },
      {
        title: 'Pharmacies, Restaurants, Gyms, and Retail Shops',
        paragraphs: [
          'Local businesses in categories like pharmacy, restaurant, gym, and retail shop benefit from having a professional website that builds customer trust, displays their services or products, and provides a way for customers to contact them online.',
          'We set up business-specific websites and dashboards that match each category. A pharmacy gets a product and service information page with customer enquiry management. A restaurant gets a menu display, gallery, and table enquiry system. A gym gets a membership enquiry form, trainer profiles, and class details.',
        ],
      },
    ],
  },
  {
    slug: 'industries',
    path: '/industries',
    title: 'Industries We Serve',
    metaTitle: 'Industries We Serve | RNP Tech Solutions',
    metaDescription:
      'RNP Tech Solutions serves salons, schools, clinics, pharmacies, restaurants, gyms, retail shops, real estate agencies, travel agencies, and other local businesses with professional websites and management systems.',
    eyebrow: 'Industries',
    heroTitle: 'Industry-Specific Digital Solutions for Local Businesses',
    heroSubtitle:
      'RNP Tech Solutions prepares professional websites and business management systems customized for different business categories — from salons and schools to clinics, pharmacies, and retail shops.',
    intro:
      'Every local business has different needs. A salon needs appointment booking. A school needs admission enquiry management. A clinic needs patient appointment and doctor management. RNP Tech Solutions builds digital systems that are specific to each business category, ensuring the website and dashboard are relevant, useful, and easy to use for your industry.',
    sections: [
      {
        title: 'Salon and Beauty Parlour',
        paragraphs: [
          'We prepare a professional salon or beauty parlour website with a services page, gallery, appointment enquiry form, WhatsApp booking button, and contact details. The management dashboard includes booking and enquiry management, customer records, staff management, and owner access.',
        ],
        bullets: [
          'Professional salon or beauty parlour website',
          'Services display, gallery, and pricing information',
          'Appointment enquiry form and WhatsApp booking',
          'Owner dashboard with booking and enquiry management',
          'Customer and staff management',
        ],
      },
      {
        title: 'School and Coaching Center',
        paragraphs: [
          'We set up a professional school or coaching center website with admission enquiry forms, course and fee information, notice or announcement sections, gallery, staff or teacher profiles, and parent-friendly contact options. Dashboards can be configured for admin, teachers, students, and parents depending on the plan.',
        ],
        bullets: [
          'School or coaching website with course and fee details',
          'Admission enquiry form and contact management',
          'Notice and announcement section',
          'Gallery and staff or teacher profiles',
          'Admin, teacher, student, and parent dashboards depending on plan',
        ],
      },
      {
        title: 'Clinic and Hospital',
        paragraphs: [
          'We prepare a professional clinic or hospital website with doctor profiles, department or specialty pages, appointment request forms, patient enquiry management, and contact information. Role-based dashboards can be configured for reception staff, doctors, management, and accountants depending on the plan.',
        ],
        bullets: [
          'Professional clinic or hospital website with doctor profiles',
          'Department or specialty pages',
          'Patient appointment request and enquiry management',
          'Reception, doctor, and accountant dashboards depending on plan',
          'WhatsApp integration and contact management',
        ],
      },
      {
        title: 'Pharmacy and Medicine Shop',
        paragraphs: [
          'We create a pharmacy or medicine shop website with product or service information, customer enquiry form, WhatsApp contact, and business contact details. The dashboard can be configured for owner and staff management with basic inventory and billing modules depending on the plan.',
        ],
        bullets: [
          'Pharmacy website with product and service information',
          'Customer enquiry and contact form',
          'Owner and staff dashboard',
          'Basic inventory and billing modules depending on plan',
        ],
      },
      {
        title: 'Restaurant and Cafe',
        paragraphs: [
          'We set up a restaurant or cafe website with a menu display, gallery, location details, table or order enquiry form, WhatsApp contact, and business contact information. The dashboard covers enquiry management and basic business operations.',
        ],
        bullets: [
          'Restaurant or cafe website with menu and gallery',
          'Table reservation or order enquiry form',
          'Location, contact, and WhatsApp integration',
          'Enquiry and basic operations dashboard',
        ],
      },
      {
        title: 'Gym and Fitness Center',
        paragraphs: [
          'We prepare a gym or fitness center website with membership enquiry form, trainer profiles, class or program details, gallery, and contact information. Dashboards can include member and staff management depending on the plan.',
        ],
        bullets: [
          'Gym website with trainer profiles and class details',
          'Membership enquiry form and WhatsApp contact',
          'Gallery and program information',
          'Member and staff management depending on plan',
        ],
      },
      {
        title: 'Retail Shop',
        paragraphs: [
          'We create a retail shop website with product or category display, customer enquiry form, WhatsApp contact, business profile, and contact details. The dashboard includes basic customer and enquiry management for the shop owner and staff.',
        ],
        bullets: [
          'Retail shop website with product display',
          'Customer enquiry form and WhatsApp contact',
          'Basic customer and staff management',
          'Owner dashboard for enquiry and business operations',
        ],
      },
      {
        title: 'Real Estate Agency',
        paragraphs: [
          'We set up a real estate agency website with property listing sections, lead enquiry form, WhatsApp contact, agent profiles, and business details. The dashboard helps manage leads and customer follow-ups.',
        ],
        bullets: [
          'Real estate website with property listing sections',
          'Lead enquiry form and WhatsApp integration',
          'Agent profiles and contact information',
          'Lead and customer management dashboard',
        ],
      },
      {
        title: 'Travel Agency',
        paragraphs: [
          'We prepare a travel agency website with destination or package display, package enquiry form, WhatsApp contact, and business information. The dashboard supports lead management and customer enquiry tracking.',
        ],
        bullets: [
          'Travel agency website with package and destination display',
          'Package enquiry form and WhatsApp contact',
          'Lead and enquiry management dashboard',
        ],
      },
      {
        title: 'Other Local and Service Businesses',
        paragraphs: [
          'RNP Tech Solutions can also create professional websites and management systems for other service-based and local businesses that are not listed above. If you run any type of local business and need a professional online presence, enquiry management system, or business dashboard, get in touch with us for a free consultation.',
        ],
        bullets: [
          'Professional business website with your branding and services',
          'Customer enquiry and contact management',
          'WhatsApp integration and booking system',
          'Role-based dashboards based on your business requirements',
          'Monthly support and maintenance',
        ],
      },
    ],
  },
  {
    slug: 'faq',
    path: '/faq',
    title: 'Frequently Asked Questions',
    metaTitle: 'FAQ | RNP Tech Solutions',
    metaDescription:
      'Get answers to common questions about RNP Tech Solutions services, monthly plans, free demo, free trial, support, pricing, and how we help local businesses go digital.',
    eyebrow: 'FAQ',
    heroTitle: 'Answers to Common Questions About RNP Tech Solutions',
    heroSubtitle:
      'Find clear answers about our services, monthly plans, free demo, free trial, support, and how we help local businesses set up professional websites and management systems.',
    intro:
      'Business owners often have similar questions before getting started with RNP Tech Solutions. This FAQ page covers the most common topics about our services, plans, support, and how we work — so you can make an informed decision before reaching out.',
    sections: [
      {
        title: 'About Our Services',
        paragraphs: [
          'RNP Tech Solutions provides professional websites and business management systems for local and small businesses. We serve salons, schools, clinics, pharmacies, restaurants, gyms, retail shops, travel agencies, real estate agencies, and other service-based businesses.',
        ],
      },
    ],
    faqEntries: [
      {
        question: 'What does RNP Tech Solutions do?',
        answer:
          'RNP Tech Solutions provides professional websites and business management systems for local and small businesses. We help salons, schools, clinics, pharmacies, restaurants, gyms, retail shops, travel agencies, and other local businesses go online, get more enquiries, and manage daily operations easily.',
      },
      {
        question: 'Do I need technical knowledge to use the system?',
        answer:
          'No. We handle the complete setup and provide a simple dashboard that business owners and staff can use easily without any technical background. We also provide basic guidance and training during setup.',
      },
      {
        question: 'Can I get a website for my business?',
        answer:
          'Yes. We create and set up professional websites for salons, schools, clinics, pharmacies, restaurants, gyms, retail shops, travel agencies, real estate agencies, and other local businesses — configured with your business name, services, contact details, WhatsApp button, and enquiry form.',
      },
      {
        question: 'Can I manage enquiries from the dashboard?',
        answer:
          'Yes. Depending on your selected plan, you can manage customer enquiries, booking requests, contact requests, and business data directly from your dashboard. You will receive enquiries from your website and be able to view, track, and respond to them from one place.',
      },
      {
        question: 'Do you provide ongoing support?',
        answer:
          'Yes. We provide monthly support, maintenance, and assistance for your website and business dashboard so your system remains running and up to date. Support is included in both monthly plans.',
      },
      {
        question: 'Is there a monthly plan?',
        answer:
          'Yes. We offer affordable monthly subscription plans so businesses can start without a heavy upfront investment. You pay monthly and can continue only as long as the system is useful for your business.',
      },
      {
        question: 'Can I start with a demo or free trial?',
        answer:
          'Yes. A free demo is available so you can see how the system works before making any commitment. A 1-month free trial may also be available for selected businesses, allowing you to use the website and dashboard, receive enquiries, and understand the value before deciding to continue on a paid plan.',
      },
      {
        question: 'What happens if I miss a payment?',
        answer:
          'Monthly payment is due by the 5th of every month. A grace period may be provided until the 10th. If payment is not received after the grace period, services may be temporarily paused. Services will be resumed after the pending payment is cleared.',
      },
      {
        question: 'Can I upgrade my plan later?',
        answer:
          'Yes. You can upgrade from the Essential Digital Plan to the Complete Business Management Plan at any time based on your growing business needs.',
      },
      {
        question: 'Do you work with salons, schools, clinics, and pharmacies?',
        answer:
          'Yes. We provide business-specific digital solutions for these categories and many other local businesses. Each industry gets a website and dashboard configured specifically for their business type.',
      },
      {
        question: 'Can you customize features for my business?',
        answer:
          'Yes. Customization may be available depending on your requirements. Standard plans include the features listed in each plan. Custom requirements beyond the standard scope may involve additional charges, which will be discussed and agreed upon before any work begins.',
      },
      {
        question: 'Do you guarantee leads or sales?',
        answer:
          'No. We provide digital systems, websites, and management tools to help your business manage enquiries and improve your online presence. Actual leads, sales, and revenue depend on market demand, your business quality, advertising, customer response, and other factors beyond our control.',
      },
    ],
  },
  {
    slug: 'refund-policy',
    path: '/refund-policy',
    title: 'Refund and Cancellation Policy',
    metaTitle: 'Refund and Cancellation Policy | RNP Tech Solutions',
    metaDescription:
      'Read the RNP Tech Solutions refund and cancellation policy covering subscription refunds, setup charges, third-party fees, and how to cancel your service.',
    eyebrow: 'Refund and Cancellation Policy',
    heroTitle: 'Refund and Cancellation Policy for RNP Tech Solutions Services',
    heroSubtitle:
      'This policy explains our position on refunds, cancellations, and third-party charges for clients subscribed to RNP Tech Solutions services.',
    intro:
      'RNP Tech Solutions is committed to delivering value through our website and business management system services. This refund and cancellation policy outlines the conditions under which refunds may or may not be applicable, how to cancel your subscription, and important notes regarding third-party service charges.',
    sections: [
      {
        title: 'Setup and Customization Charges',
        paragraphs: [
          'Any one-time setup fees, onboarding charges, or customization fees agreed upon at the time of service activation are generally non-refundable once work has commenced. This includes website configuration, dashboard setup, custom feature development, and content integration services.',
          'If work has not yet begun, please contact us immediately to discuss your situation. We will handle such cases on a case-by-case basis.',
        ],
      },
      {
        title: 'Monthly Subscription Fees',
        paragraphs: [
          'Monthly subscription fees are generally non-refundable once a billing cycle has commenced and services have been activated or made accessible to the client.',
          'If you believe there has been an error in billing or a service disruption caused by RNP Tech Solutions, please contact us within 7 days of the billing date. We will review the matter and handle it appropriately.',
        ],
      },
      {
        title: 'Cancellation of Subscription',
        paragraphs: [
          'You may cancel your monthly subscription at any time by informing RNP Tech Solutions in writing before the start of the next billing cycle. Written communication can be sent to info@rnptechsolutions.com or through WhatsApp.',
          'If cancellation notice is received before the next billing date, you will not be charged for the following month. Access to the website and dashboard may continue until the end of the current paid period, after which services will be suspended.',
        ],
      },
      {
        title: 'Third-Party Service Charges',
        paragraphs: [
          'Charges related to third-party services such as domain registration, hosting, paid advertising (Meta Ads, Google Ads), SMS services, WhatsApp Business API, payment gateways, or other external platforms are generally non-refundable. These charges are governed by the respective third-party service providers.',
          'RNP Tech Solutions is not responsible for refunds on third-party service fees paid to external providers on behalf of the client.',
        ],
      },
      {
        title: 'Service Suspension and Access After Cancellation',
        paragraphs: [
          'Upon cancellation, your access to the business management dashboard and website services will be suspended after the current billing period ends. RNP Tech Solutions is not responsible for any loss of data, leads, or business activity following cancellation.',
          'If you wish to resume services after cancellation, please contact us and we will assess reactivation based on availability.',
        ],
      },
      {
        title: 'Approved Refunds',
        paragraphs: [
          'In exceptional cases where RNP Tech Solutions determines that a refund is warranted due to a service failure, billing error, or agreed circumstances, refunds will be processed within 7 to 14 business days to the original payment method.',
          'Refunds are approved solely at the discretion of RNP Tech Solutions management after reviewing the matter.',
        ],
      },
      {
        title: 'Contact for Refund or Cancellation Requests',
        paragraphs: [
          'To raise a refund or cancellation request, please contact us at info@rnptechsolutions.com or call +91 9078148246. Please provide your business name, registered contact details, and the reason for your request.',
        ],
      },
    ],
  },
  {
    slug: 'payment-policy',
    path: '/payment-policy',
    title: 'Payment Policy',
    metaTitle: 'Payment Policy | RNP Tech Solutions',
    metaDescription:
      'Read the RNP Tech Solutions payment policy covering monthly subscription due dates, grace periods, service pause conditions, and billing terms.',
    eyebrow: 'Payment Policy',
    heroTitle: 'Payment Policy for RNP Tech Solutions Monthly Services',
    heroSubtitle:
      'This policy explains our billing cycle, payment due dates, grace period, and what happens when payment is delayed or missed.',
    intro:
      'RNP Tech Solutions provides services on a monthly subscription basis. This payment policy outlines the billing schedule, payment expectations, grace period terms, and the consequences of delayed or missed payments. By subscribing to our services, you agree to this payment policy.',
    sections: [
      {
        title: 'Monthly Payment Due Date',
        paragraphs: [
          'Monthly subscription fees are due on or before the 5th of every calendar month. Timely payment ensures uninterrupted access to your website, business management dashboard, and monthly support services.',
          'Clients will receive a reminder communication prior to the due date. It is the client\'s responsibility to ensure payment is made on time.',
        ],
      },
      {
        title: 'Grace Period',
        paragraphs: [
          'A grace period of five additional days may be provided until the 10th of each month. During the grace period, services will continue to operate normally while the outstanding payment is expected.',
          'The grace period is provided as a courtesy and is not a guaranteed extension of the payment deadline. Repeated late payments beyond the grace period may affect service continuity.',
        ],
      },
      {
        title: 'Service Pause for Non-Payment',
        paragraphs: [
          'If payment is not received by the 10th of the month (including the grace period), RNP Tech Solutions reserves the right to temporarily pause services. A paused service means that website access, dashboard functionality, and support may be suspended until the outstanding payment is cleared.',
          'Clients will be notified before services are paused. RNP Tech Solutions is not responsible for any business losses, missed enquiries, or operational disruptions caused by a service pause resulting from non-payment.',
        ],
      },
      {
        title: 'Service Resumption After Payment',
        paragraphs: [
          'Once the pending monthly payment is received and confirmed, services will be resumed within a reasonable timeframe. Resume times may vary depending on our team availability and the extent of the service pause.',
        ],
      },
      {
        title: 'Late Payment Impact',
        paragraphs: [
          'Consistent late payments beyond the grace period may affect the priority and quality of support services provided. RNP Tech Solutions reserves the right to review the service agreement of clients with repeated late payments.',
        ],
      },
      {
        title: 'Accepted Payment Methods',
        paragraphs: [
          'Payments can be made through UPI, bank transfer, or other payment methods as agreed with our team. Payment details will be shared at the time of service activation and in monthly billing communications.',
        ],
      },
      {
        title: 'Third-Party Charges',
        paragraphs: [
          'Any applicable charges for third-party services such as domain registration, paid advertising, SMS services, WhatsApp API, hosting upgrades, or external tools will be billed separately and are not included in the standard monthly subscription fee unless explicitly agreed otherwise.',
        ],
      },
      {
        title: 'Pricing Updates',
        paragraphs: [
          'RNP Tech Solutions may update subscription pricing or billing terms with prior communication. Any pricing changes will be communicated at least 15 days in advance, giving clients the opportunity to review and decide on continuation.',
          'For payment-related queries, please contact us at info@rnptechsolutions.com or call +91 9078148246.',
        ],
      },
    ],
  },
  {
    slug: 'disclaimer',
    path: '/disclaimer',
    title: 'Disclaimer',
    metaTitle: 'Disclaimer | RNP Tech Solutions',
    metaDescription:
      'Read the RNP Tech Solutions disclaimer covering service limitations, no guarantees on leads or revenue, client content responsibility, and third-party service limitations.',
    eyebrow: 'Disclaimer',
    heroTitle: 'Disclaimer for RNP Tech Solutions Website and Services',
    heroSubtitle:
      'This disclaimer explains the limitations of our services, what we are responsible for, and what falls outside the scope of our guarantees.',
    intro:
      'RNP Tech Solutions provides professional websites, business management systems, and digital support services for local and small businesses. This disclaimer outlines the boundaries of our service responsibilities and the factors that are outside our control or guarantee.',
    sections: [
      {
        title: 'Nature of Our Services',
        paragraphs: [
          'RNP Tech Solutions provides website setup, business dashboard access, enquiry management tools, role-based access systems, and monthly digital support services. We act as a technology service provider and are not a marketing agency, business consulting firm, or financial advisory service.',
          'Our role is to provide and maintain the digital tools and systems agreed upon in the service plan. Business decisions, growth strategies, customer interactions, and operational outcomes remain the responsibility of the client.',
        ],
      },
      {
        title: 'No Guarantee of Leads, Sales, or Revenue',
        paragraphs: [
          'RNP Tech Solutions does not guarantee a specific number of leads, customer enquiries, bookings, sales, revenue, or business growth as a result of using our services.',
          'The performance of your website in terms of search rankings, visitor traffic, enquiry volume, and customer conversions depends on multiple factors including but not limited to:',
        ],
        bullets: [
          'Market demand and local competition in your area',
          'Business quality, reputation, and customer reviews',
          'The quality and accuracy of business information and content',
          'Advertising and marketing efforts outside our platform',
          'Customer response, market trends, and seasonal factors',
          'Google algorithms, search rankings, and platform changes',
        ],
      },
      {
        title: 'Client Content Responsibility',
        paragraphs: [
          'All business information, service descriptions, images, pricing, offers, legal claims, testimonials, and other content displayed on the client\'s website are provided by the client and remain the client\'s full responsibility.',
          'RNP Tech Solutions is not responsible for incorrect, misleading, outdated, or legally non-compliant content provided by the client. Clients are advised to ensure that all content complies with applicable laws, regulations, and consumer protection guidelines.',
        ],
      },
      {
        title: 'Third-Party Services and External Factors',
        paragraphs: [
          'RNP Tech Solutions may use or recommend third-party platforms and services such as hosting providers, domain registrars, payment gateways, WhatsApp Business API, SMS services, Google platforms, and advertising tools. We are not responsible for:',
        ],
        bullets: [
          'Outages, errors, or disruptions caused by third-party service providers',
          'Changes in third-party platform policies, pricing, or availability',
          'Data loss or security incidents caused by third-party platforms',
          'Google algorithm changes affecting website search rankings',
          'WhatsApp, SMS, or email delivery failures caused by external providers',
          'Internet connectivity issues or device-related access problems',
        ],
      },
      {
        title: 'Website Accuracy and Availability',
        paragraphs: [
          'While we take reasonable steps to ensure our website and client systems remain accurate, functional, and available, we do not guarantee uninterrupted, error-free service at all times. Scheduled maintenance, technical upgrades, and unexpected outages may temporarily affect service availability.',
          'RNP Tech Solutions will make reasonable efforts to restore services promptly in the event of disruptions.',
        ],
      },
      {
        title: 'Limitation of Liability',
        paragraphs: [
          'To the maximum extent permitted by applicable law, RNP Tech Solutions shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use or inability to use our services, including but not limited to loss of business, missed enquiries, revenue loss, or data loss.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [
          'If you have any questions or concerns about this disclaimer, please contact us at info@rnptechsolutions.com or call +91 9078148246.',
        ],
      },
    ],
  },
  {
    slug: 'cookie-policy',
    path: '/cookie-policy',
    title: 'Cookie Policy',
    metaTitle: 'Cookie Policy | RNP Tech Solutions',
    metaDescription:
      'Read the RNP Tech Solutions cookie policy to understand how we use cookies, what types of cookies we use, and how you can control them.',
    eyebrow: 'Cookie Policy',
    heroTitle: 'Cookie Policy for the RNP Tech Solutions Website',
    heroSubtitle:
      'This cookie policy explains what cookies are, how we use them on our website, and the choices you have regarding cookies.',
    intro:
      'RNP Tech Solutions uses cookies and similar tracking technologies on our website to improve your browsing experience, understand how visitors interact with our site, and support service delivery. This cookie policy explains what cookies are, the types we use, and how you can manage your cookie preferences.',
    sections: [
      {
        title: 'What Are Cookies',
        paragraphs: [
          'Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit a website. They allow the website to remember your actions and preferences over time so you do not have to re-enter them every time you visit.',
          'Cookies are widely used across the internet and generally do not harm your device or identify you personally unless combined with other information.',
        ],
      },
      {
        title: 'Why We Use Cookies',
        paragraphs: [
          'We use cookies to improve your experience on the RNP Tech Solutions website. Cookies help us understand how visitors navigate our site, which pages are most visited, where visitors come from, and how they interact with our content.',
          'This information helps us improve the website, provide better information to potential clients, and ensure our service pages work correctly across different devices and browsers.',
        ],
      },
      {
        title: 'Types of Cookies We Use',
        paragraphs: ['RNP Tech Solutions may use the following types of cookies:'],
        bullets: [
          'Essential Cookies: These are necessary for the website to function correctly. They enable core features such as page navigation, form submissions, and contact enquiries. These cookies cannot be disabled without affecting site functionality.',
          'Analytics and Performance Cookies: These cookies help us understand how visitors interact with the website. We may use tools like Google Analytics to collect data such as pages visited, time spent on pages, and traffic sources. This data is used in aggregate form and does not identify individual visitors.',
          'Preference Cookies: These cookies remember your choices and preferences, such as language settings or previously visited pages, to provide a more personalized experience on return visits.',
          'Third-Party Cookies: Our website may include embedded content or links from third-party platforms such as Google Maps or WhatsApp. These platforms may set their own cookies in accordance with their own privacy policies.',
        ],
      },
      {
        title: 'How to Control Cookies',
        paragraphs: [
          'You can control and manage cookies through your browser settings. Most web browsers allow you to view, block, or delete cookies. Please note that blocking certain cookies may affect your experience on our website and some features may not work as intended.',
          'To manage cookies, visit the settings or preferences section of your browser. The following links provide guidance for popular browsers:',
        ],
        bullets: [
          'Google Chrome: Settings → Privacy and Security → Cookies and other site data',
          'Mozilla Firefox: Settings → Privacy and Security → Cookies and Site Data',
          'Safari: Preferences → Privacy → Cookies and website data',
          'Microsoft Edge: Settings → Cookies and site permissions',
        ],
      },
      {
        title: 'Third-Party Analytics',
        paragraphs: [
          'We may use Google Analytics or similar services to track website usage patterns. These services collect anonymized data about visitor behaviour. You can opt out of Google Analytics tracking by installing the Google Analytics opt-out browser add-on available at tools.google.com/dlpage/gaoptout.',
        ],
      },
      {
        title: 'Updates to This Cookie Policy',
        paragraphs: [
          'RNP Tech Solutions may update this cookie policy from time to time. Any changes will be reflected on this page with an updated date. Continued use of our website after changes to this policy constitutes acceptance of the updated policy.',
          'For questions about our use of cookies, please contact us at info@rnptechsolutions.com or call +91 9078148246.',
        ],
      },
    ],
  },
];

export const staticPagesBySlug = Object.fromEntries(
  staticPages.map((page) => [page.slug, page]),
) as Record<StaticPageSlug, StaticPageData>;

export function getStaticPageSchema(page: StaticPageData) {
  const schemaType = page.slug === 'about' ? 'AboutPage' : page.slug === 'faq' ? 'FAQPage' : 'WebPage';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': schemaType,
        name: page.title,
        url: `${siteUrl}${page.path}`,
        description: page.metaDescription,
        about: {
          '@type': 'Organization',
          name: siteConfig.legalName,
          url: siteUrl,
        },
        ...(page.faqEntries
          ? {
              mainEntity: page.faqEntries.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }
          : {}),
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
            name: page.title,
            item: `${siteUrl}${page.path}`,
          },
        ],
      },
    ],
  };
}

export function getStaticPageMetadata(page: StaticPageData): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${siteUrl}${page.path}`,
      siteName: siteConfig.legalName,
      type: 'article',
      images: [siteConfig.ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
      images: [siteConfig.ogImage],
    },
  };
}
