export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rnptechsolutions.com';

export const siteConfig = {
  name: 'RNP Tech Solutions',
  legalName: 'RNP Tech Solutions',
  title: 'Business Website & Management System for Local Businesses | RNP Tech Solutions',
  shortDescription:
    'Professional websites & management systems for salons, clinics, schools, pharmacies & gyms across India. Free demo, plans from ₹3,000/month.',
  longDescription:
    'RNP Tech Solutions sets up professional websites, enquiry systems, and business management dashboards for local businesses across India — salons, schools, clinics, pharmacies, restaurants, gyms, and more — on affordable monthly plans starting at ₹3,000.',
  email: 'info@rnptechsolutions.com',
  phone: '+91 9078148246',
  whatsapp: '919078148246',
  address: {
    streetAddress: 'A-142, Sector 63',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201301',
    addressCountry: 'IN',
  },
  foundingDate: '2018',
  ogImage: '/assets/images/consultation.png',
};

export const targetKeywords = [
  'salon website India',
  'business website monthly plan India',
  'clinic management software India',
  'school management software India',
  'affordable business website India',
  'local business website setup India',
  'business website for salon India',
  'salon management system India',
  'pharmacy management software India',
  'gym management system India',
  'small business website India',
  'website and dashboard for business India',
  'monthly business website plan India',
  'business website Noida',
  'RNP Tech Solutions',
];

export const faqItems = [
  {
    question: 'What does RNP Tech Solutions do?',
    answer:
      'RNP Tech Solutions sets up professional websites and business management systems for local businesses across India — including salons, schools, clinics, pharmacies, restaurants, gyms, and retail shops. We configure your website and dashboard with your business details, services, and contact information so your business is online and receiving customer enquiries from day one.',
  },
  {
    question: 'Do I need technical knowledge to use the system?',
    answer:
      'No technical knowledge is required at all. RNP Tech Solutions handles the complete setup, configuration, and staff access for your website and dashboard. We also provide basic guidance during onboarding so your team can use the system comfortably. The dashboard is designed to be simple and intuitive for any business owner or staff member, regardless of technical background.',
  },
  {
    question: 'How much does a business website cost in India?',
    answer:
      'RNP Tech Solutions offers two affordable monthly plans for local businesses. The Essential Digital Plan starts at ₹3,000 per month and includes a professional website, enquiry system, WhatsApp integration, and basic dashboard. The Complete Business Management Plan is ₹4,000 per month and adds advanced role-based dashboards, staff and customer management, and priority support. Setup and onboarding fees may apply separately.',
  },
  {
    question: 'Can I manage customer enquiries from the dashboard?',
    answer:
      'Yes. Depending on your selected plan, you can manage all customer enquiries, booking requests, appointment submissions, and contact form entries directly from your dashboard. Each enquiry is tracked with the customer name, contact details, date, and status — making follow-up simple and organized without any manual effort.',
  },
  {
    question: 'Is there a free demo or free trial available?',
    answer:
      'Yes. A free demo is available for all businesses where we show you how your website and management dashboard will look and work — with no commitment required. A 1-month free trial may also be available for selected businesses, allowing you to use the full system and evaluate its value before committing to a paid monthly plan.',
  },
  {
    question: 'How long does it take to get my business website live?',
    answer:
      'Once we have all the required information from you — your business name, services, images, contact details, and WhatsApp number — your website setup typically takes a few business days. The full dashboard and management system setup is completed within the first subscription period. We keep you updated throughout the process and provide access as soon as the setup is ready.',
  },
  {
    question: 'Do you provide ongoing support after setup?',
    answer:
      'Yes. Monthly support and maintenance is included with all active subscription plans. This covers technical health checks for your website, dashboard updates, minor content changes, and WhatsApp or email support access. The Complete Business Management Plan includes priority support with faster response times for any technical issues or updates you need.',
  },
  {
    question: 'Can I upgrade my plan or add features later?',
    answer:
      'Yes. You can upgrade from the Essential Digital Plan to the Complete Business Management Plan at any time as your business grows. Custom features beyond the standard plan may also be available with additional charges, which will be discussed and agreed upon before any work begins. We grow with your business.',
  },
];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${siteUrl}/#organization`,
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteUrl,
  logo: `${siteUrl}/assets/images/logo.png`,
  image: `${siteUrl}${siteConfig.ogImage}`,
  description: siteConfig.longDescription,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  foundingDate: siteConfig.foundingDate,
  priceRange: '₹3,000 – ₹4,000/month',
  address: {
    '@type': 'PostalAddress',
    ...siteConfig.address,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.62723,
    longitude: 77.37695,
  },
  hasMap: 'https://maps.app.goo.gl/noida-sector-63',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    {
      '@type': 'Country',
      name: 'India',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: siteConfig.phone,
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  sameAs: [
    'https://www.facebook.com/rnptechsolutions',
    'https://www.instagram.com/rnptechsolutions',
    'https://www.linkedin.com/company/rnptechsolutions',
    'https://twitter.com/rnptechsolutions',
  ],
  knowsAbout: [
    'Business Website Development',
    'Business Management Software',
    'Enquiry and Booking Systems',
    'Role-Based Dashboards',
    'Salon Management System',
    'School Management System',
    'Clinic Management System',
    'Pharmacy Management System',
    'Gym Management System',
    'Local Business Digital Solutions',
    'Monthly Website and Software Service',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Business Website and Management System Plans',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Essential Digital Plan',
        description:
          'Professional business website, enquiry system, WhatsApp integration, owner and staff dashboard, and basic monthly support for local businesses.',
        price: '3000',
        priceCurrency: 'INR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '3000',
          priceCurrency: 'INR',
          billingDuration: 'P1M',
        },
        url: `${siteUrl}/pricing`,
        seller: {
          '@type': 'LocalBusiness',
          name: siteConfig.legalName,
        },
      },
      {
        '@type': 'Offer',
        name: 'Complete Business Management Plan',
        description:
          'Everything in the Essential plan plus advanced role-based dashboards, multi-user access, staff and customer management, business reports, and priority monthly support.',
        price: '4000',
        priceCurrency: 'INR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '4000',
          priceCurrency: 'INR',
          billingDuration: 'P1M',
        },
        url: `${siteUrl}/pricing`,
        seller: {
          '@type': 'LocalBusiness',
          name: siteConfig.legalName,
        },
      },
    ],
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteUrl,
  description: siteConfig.shortDescription,
  inLanguage: 'en-IN',
  publisher: {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: siteConfig.legalName,
    url: siteUrl,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};
