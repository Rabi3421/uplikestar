export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:4028';

export const siteConfig = {
  name: 'RNP Tech Solutions',
  legalName: 'RNP Tech Solutions',
  title: 'RNP Tech Solutions | Websites & Business Management Systems for Local Businesses',
  shortDescription:
    'RNP Tech Solutions provides professional websites and business management systems for salons, schools, clinics, pharmacies, restaurants, gyms, and other local businesses across India.',
  longDescription:
    'RNP Tech Solutions helps local and small businesses go online, get more enquiries, and manage daily operations through professional websites, enquiry systems, role-based dashboards, and business management tools — all on affordable monthly plans.',
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
  'business website development for local businesses',
  'business management software for small business',
  'website and dashboard for business India',
  'salon website and management system',
  'school website and management system',
  'clinic website and appointment system',
  'pharmacy management software India',
  'local business digital solution India',
  'small business website India',
  'affordable business website monthly plan',
  'monthly website and software service India',
  'RNP Tech Solutions',
];

export const faqItems = [
  {
    question: 'What does RNP Tech Solutions do?',
    answer:
      'RNP Tech Solutions provides professional websites and business management systems for local and small businesses including salons, schools, clinics, pharmacies, restaurants, gyms, retail shops, and other service-based businesses.',
  },
  {
    question: 'Do I need technical knowledge to use the system?',
    answer:
      'No. We handle the complete setup and provide a simple dashboard that business owners and staff can use easily without any technical background.',
  },
  {
    question: 'Can I get a website for my business?',
    answer:
      'Yes. We create and set up professional websites for salons, schools, clinics, pharmacies, restaurants, gyms, retail shops, travel agencies, real estate agencies, and other local businesses.',
  },
  {
    question: 'Can I manage enquiries from the dashboard?',
    answer:
      'Yes. Depending on your selected plan, you can manage customer enquiries, booking requests, contact requests, and business data directly from your dashboard.',
  },
  {
    question: 'Is there a monthly plan available?',
    answer:
      'Yes. We offer affordable monthly subscription plans so businesses can start without a heavy upfront investment and continue only when the system is useful for them.',
  },
  {
    question: 'Can I start with a demo or free trial?',
    answer:
      'Yes. A free demo is available, and a 1-month free trial may be available for selected businesses. You can experience the system before committing to a paid plan.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes. We provide monthly support, maintenance, and assistance for your website and business dashboard so your system remains running and up to date.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer:
      'Yes. You can upgrade to the Complete Business Management Plan at any time based on your growing business requirements.',
  },
];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteUrl,
  logo: `${siteUrl}/assets/images/logo.png`,
  image: `${siteUrl}${siteConfig.ogImage}`,
  description: siteConfig.longDescription,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  foundingDate: siteConfig.foundingDate,
  address: {
    '@type': 'PostalAddress',
    ...siteConfig.address,
  },
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
    'Local Business Digital Solutions',
    'Monthly Website and Software Service',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteUrl,
  description: siteConfig.shortDescription,
  inLanguage: 'en-IN',
  publisher: {
    '@type': 'Organization',
    name: siteConfig.legalName,
    url: siteUrl,
  },
};
