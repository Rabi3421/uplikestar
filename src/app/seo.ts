export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:4028';

export const siteConfig = {
  name: 'UpLikeStar',
  legalName: 'UpLikeStar',
  title: 'Software Development Company in Noida | Website Development & Automation | UpLikeStar',
  shortDescription:
    'UpLikeStar delivers software development, website development, inventory management systems, ERP/CRM solutions, and business automation for growing businesses.',
  longDescription:
    'UpLikeStar is an innovative technology company focused on delivering smart, affordable, and customized digital solutions for businesses of all sizes. We help businesses modernize with custom software, website development, inventory management systems, ERP/CRM platforms, and business automation tools.',
  email: 'hello@arntech.in',
  phone: '+91 120 400 1234',
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
  'software development company in Noida',
  'custom software development company India',
  'website development company in Noida',
  'web development company for businesses',
  'inventory management software company',
  'business automation services India',
  'ERP CRM development company',
  'digital transformation company India',
  'small business automation solutions',
  'custom business software solutions',
  'ecommerce website development company',
  'affordable software company for small business',
];

export const faqItems = [
  {
    question: 'What services does UpLikeStar offer?',
    answer:
      'UpLikeStar offers custom software development, website development, inventory management systems, ERP and CRM solutions, e-commerce development, and business automation services for startups, SMEs, and growing enterprises.',
  },
  {
    question: 'Do you build custom software for traditional businesses?',
    answer:
      'Yes. We specialize in helping traditional and growing businesses digitize their operations with tailored software, automation workflows, and business management platforms that match their real-world processes.',
  },
  {
    question: 'Can UpLikeStar build SEO-friendly business websites?',
    answer:
      'Yes. We develop fast, mobile-friendly, SEO-ready websites with technical optimization, strong content structure, and conversion-focused design to help businesses improve visibility and generate enquiries.',
  },
  {
    question: 'Do you provide inventory management and automation solutions?',
    answer:
      'Yes. We build inventory management software, reporting dashboards, workflow automation tools, and integrated systems that reduce manual work, improve accuracy, and support operational growth.',
  },
  {
    question: 'Where is UpLikeStar located?',
    answer:
      'UpLikeStar is based in Noida, Uttar Pradesh, India, and works with businesses looking for reliable software development, website development, and automation partners.',
  },
];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareCompany',
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteUrl,
  logo: `${siteUrl}/assets/images/app_logo.png`,
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
    'Custom Software Development',
    'Website Development',
    'Inventory Management Systems',
    'ERP Development',
    'CRM Development',
    'Business Automation',
    'E-commerce Development',
    'Digital Transformation',
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
