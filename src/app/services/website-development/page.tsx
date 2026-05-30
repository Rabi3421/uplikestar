import React from 'react';

import ServiceLandingPage from '@/app/components/ServiceLandingPage';
import { getServiceMetadata, getServiceSchema, servicePagesBySlug } from '@/app/services/servicePages';

const service = servicePagesBySlug['website-development'];

export const metadata = getServiceMetadata(service);

export default function WebsiteDevelopmentPage() {
  const schema = getServiceSchema(service);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServiceLandingPage service={service} />
    </>
  );
}
