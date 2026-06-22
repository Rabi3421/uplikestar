import type { Metadata } from 'next';

import { faqItems, siteConfig, siteUrl } from '@/app/seo';

export type StaticPageSlug =
  | 'about'
  | 'privacy-policy'
  | 'terms-and-conditions'
  | 'case-studies'
  | 'industries'
  | 'faq';

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
    metaTitle: 'About RNP Tech Solutions | Software and Digital Transformation Company',
    metaDescription:
      'Learn about RNP Tech Solutions, a Noida-based technology company delivering software development, website development, inventory systems, ERP CRM solutions, and business automation.',
    eyebrow: 'About RNP Tech Solutions',
    heroTitle: 'A Technology Partner Focused on Practical Digital Growth',
    heroSubtitle:
      'RNP Tech Solutions helps businesses modernize with custom software, websites, inventory systems, ERP CRM platforms, e-commerce solutions, and business automation services.',
    intro:
      'RNP Tech Solutions is an innovative technology company focused on delivering smart, affordable, and customized digital solutions for businesses of all sizes. We work with traditional businesses, startups, and growing enterprises that want reliable technology partners capable of solving real operational problems.',
    sections: [
      {
        title: 'What We Do',
        paragraphs: [
          'We specialize in software development, website creation, inventory management systems, ERP and CRM development, e-commerce platforms, and business automation tools. Our work is built around business outcomes such as better productivity, cleaner operations, and stronger scalability.',
          'Instead of applying generic templates, we study your process, identify bottlenecks, and build solutions tailored to your workflow, business model, and long-term growth goals.',
        ],
        bullets: [
          'Custom software development for internal operations and business workflows',
          'Website development with strong performance, UX, and SEO structure',
          'Inventory management systems for stock control and reporting',
          'ERP CRM solutions for centralized business visibility',
          'Business automation services to reduce manual work and delays',
        ],
      },
      {
        title: 'Who We Work With',
        paragraphs: [
          'RNP Tech Solutions works with companies that want to improve efficiency, digitize traditional processes, and build stronger operating systems for the future. Our solutions are especially valuable for businesses moving away from spreadsheets, fragmented tools, and manual coordination.',
          'We support local businesses, service companies, distributors, operational teams, and growth-stage organizations that need dependable digital systems backed by long-term support.',
        ],
      },
      {
        title: 'How We Deliver',
        paragraphs: [
          'Our approach combines discovery, planning, implementation, and long-term partnership. We prioritize business clarity before development begins so the final solution solves the right problem and remains scalable as your company grows.',
          'Quality, transparency, affordability, and client satisfaction remain central to every project we take on.',
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
      'Read the RNP Tech Solutions privacy policy to understand how we collect, use, protect, and manage information shared through our website and business enquiries.',
    eyebrow: 'Privacy Policy',
    heroTitle: 'How RNP Tech Solutions Handles Information Shared Through This Website',
    heroSubtitle:
      'This privacy policy explains what information we may collect, how we use it, and the steps we take to protect the data shared with RNP Tech Solutions.',
    intro:
      'RNP Tech Solutions respects your privacy and is committed to protecting the information you share with us. This page outlines the general principles we follow when handling enquiries, contact details, and website usage information.',
    sections: [
      {
        title: 'Information We May Collect',
        paragraphs: [
          'When you contact us through our website, email, or phone, we may collect information such as your name, email address, phone number, company name, service interest, and project requirements. We may also receive general technical data such as browser type, device information, or page usage patterns.',
        ],
        bullets: [
          'Contact details submitted through enquiry forms',
          'Project-related details you voluntarily share',
          'Basic analytics or technical website usage information',
        ],
      },
      {
        title: 'How We Use Information',
        paragraphs: [
          'We use the information you provide to respond to enquiries, assess project requirements, send relevant business communication, improve our services, and maintain the security and performance of our website.',
          'We do not use your information for unrelated purposes and we aim to limit data usage to legitimate business and communication needs.',
        ],
      },
      {
        title: 'Data Protection and Sharing',
        paragraphs: [
          'RNP Tech Solutions takes reasonable measures to protect personal information from unauthorized access, misuse, or disclosure. We do not sell personal information. Information may be shared only when required for operational, legal, or service-delivery reasons.',
          'If third-party tools are used for analytics, hosting, or communication, those tools may process limited data as part of their service functions.',
        ],
      },
      {
        title: 'Your Choices',
        paragraphs: [
          'You may contact RNP Tech Solutions to request clarification about the information you have shared with us or to ask for updates or deletion where reasonably applicable.',
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
      'Read the RNP Tech Solutions terms and conditions covering website use, enquiries, intellectual property, service discussions, and general limitations.',
    eyebrow: 'Terms and Conditions',
    heroTitle: 'Terms for Using the RNP Tech Solutions Website and Interacting With Our Team',
    heroSubtitle:
      'These terms outline the general conditions that apply when using the RNP Tech Solutions website or engaging with us regarding our services.',
    intro:
      'By accessing this website or contacting RNP Tech Solutions through it, you agree to use the site and its content in a lawful and responsible manner. These terms provide a general framework for website use and early-stage business communication.',
    sections: [
      {
        title: 'Website Use',
        paragraphs: [
          'The content on this website is provided for general information about RNP Tech Solutions, our services, and our business profile. You agree not to misuse the website, attempt unauthorized access, or use the content in a way that harms the site or the company.',
        ],
      },
      {
        title: 'Intellectual Property',
        paragraphs: [
          'Website content, branding, design elements, and published materials on this website are owned by or used by RNP Tech Solutions unless otherwise stated. They may not be copied, reused, or redistributed without proper permission.',
        ],
      },
      {
        title: 'Enquiries and Proposals',
        paragraphs: [
          'Submitting an enquiry or discussing a project through this website does not automatically create a formal service agreement. Project scope, timelines, deliverables, pricing, and responsibilities are finalized separately through direct communication and approved commercial terms.',
        ],
      },
      {
        title: 'Limitations',
        paragraphs: [
          'RNP Tech Solutions aims to keep the website accurate and up to date, but we do not guarantee that all information will always remain complete, current, or error-free. The website content should not be interpreted as binding business, legal, or technical advice.',
        ],
      },
      {
        title: 'Updates to These Terms',
        paragraphs: [
          'We may update these terms from time to time to reflect website changes, operational updates, or legal requirements. Continued use of the website after updates indicates acceptance of the revised terms.',
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
      'Explore RNP Tech Solutions case studies across websites, software, ERP CRM systems, inventory management, e-commerce, and automation projects for growing businesses.',
    eyebrow: 'Case Studies',
    heroTitle: 'How RNP Tech Solutions Builds Measurable Digital Outcomes',
    heroSubtitle:
      'Our case study approach focuses on solving operational bottlenecks, improving visibility, and delivering digital systems that create lasting business value.',
    intro:
      'RNP Tech Solutions works on business-critical digital solutions where the goal is not just launch, but measurable operational improvement. Our case studies represent the types of problems we solve through software development, website development, ERP CRM implementation, inventory systems, e-commerce platforms, and workflow automation.',
    sections: [
      {
        title: 'Custom Software and Internal Tools',
        paragraphs: [
          'We help businesses replace spreadsheets, disconnected tools, and manual status tracking with centralized internal software that improves accountability, reporting, and process speed.',
          'Typical outcomes include reduced turnaround time, cleaner approvals, better operational visibility, and fewer manual errors across teams.',
        ],
      },
      {
        title: 'Websites and Lead Generation Platforms',
        paragraphs: [
          'Our website projects focus on mobile usability, speed, SEO structure, and strong conversion paths. These are especially useful for businesses seeking stronger online credibility and more qualified enquiries.',
          'From service websites to conversion-oriented landing systems, we design digital experiences that support growth rather than simply presenting information.',
        ],
      },
      {
        title: 'Operations, ERP CRM, and Automation',
        paragraphs: [
          'For businesses with complex coordination needs, we build systems that connect sales, operations, reporting, inventory, and repetitive workflow steps into one more efficient operating structure.',
        ],
        bullets: [
          'ERP CRM modules for visibility across teams',
          'Inventory systems for stock and reporting control',
          'Automation flows for approvals, reminders, and data movement',
          'Dashboards for leadership and operational decision-making',
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
      'Discover how RNP Tech Solutions supports industries including retail, distribution, professional services, healthcare, education, manufacturing, and growth-stage businesses with tailored digital solutions.',
    eyebrow: 'Industries',
    heroTitle: 'Digital Solutions Tailored to Real Industry Workflows',
    heroSubtitle:
      'RNP Tech Solutions adapts software, website, inventory, ERP CRM, e-commerce, and automation systems to the operational realities of each business environment.',
    intro:
      'Every industry has different workflows, compliance needs, customer journeys, and operational bottlenecks. RNP Tech Solutions builds digital systems that fit these realities so businesses can modernize without forcing teams into unsuitable software patterns.',
    sections: [
      {
        title: 'Retail, Distribution, and Inventory-Heavy Businesses',
        paragraphs: [
          'We support businesses that need better stock control, order management, reporting visibility, and operational coordination across branches, warehouses, or purchase cycles.',
        ],
      },
      {
        title: 'Professional Services and Growing Brands',
        paragraphs: [
          'For service businesses and brand-led companies, we build high-performance websites, customer workflows, lead systems, and internal tools that improve both sales activity and delivery efficiency.',
        ],
      },
      {
        title: 'Operationally Complex Teams',
        paragraphs: [
          'For organizations managing multiple departments or repetitive approvals, we deliver ERP CRM modules, dashboards, and automation systems that help unify fragmented operations.',
        ],
        bullets: [
          'Healthcare and education operations',
          'Manufacturing and supply-linked workflows',
          'Back-office and service coordination teams',
          'Sales and customer management environments',
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
      'Get answers to common questions about RNP Tech Solutions, including software development, website development, ERP CRM, inventory systems, e-commerce, and business automation services.',
    eyebrow: 'FAQ Hub',
    heroTitle: 'Common Questions About RNP Tech Solutions and Our Digital Services',
    heroSubtitle:
      'This page answers frequent questions about our capabilities, engagement approach, and the types of digital systems we build for growing businesses.',
    intro:
      'Businesses often approach RNP Tech Solutions with similar questions about scope, customization, industry fit, and long-term support. This FAQ hub brings together the most common topics to help you understand how we approach software, websites, ERP CRM solutions, inventory systems, e-commerce, and automation projects.',
    sections: [
      {
        title: 'What You Can Expect',
        paragraphs: [
          'We focus on practical digital transformation, meaning we align technology recommendations with actual business workflows, team capacity, and measurable outcomes rather than selling unnecessary complexity.',
        ],
        bullets: [
          'Tailored recommendations based on your workflow',
          'Support for websites, custom software, ERP CRM, inventory, e-commerce, and automation',
          'Business-first planning before implementation begins',
        ],
      },
    ],
    faqEntries: faqItems,
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
