import React from 'react';

import StaticContentPage from '@/app/components/StaticContentPage';
import { getStaticPageMetadata, getStaticPageSchema, staticPagesBySlug } from '@/app/staticPages';

const page = staticPagesBySlug.about;

export const metadata = getStaticPageMetadata(page);

export default function AboutPage() {
  const schema = getStaticPageSchema(page);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <StaticContentPage page={page} />
    </>
  );
}
