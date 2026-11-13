import { MetadataRoute } from 'next';

const PRIMARY_URL = 'https://my-protfolio-tawny-seven.vercel.app';

export default function robots(): MetadataRoute.Robots {
  // Disallow crawling on Vercel preview / staging branch deployments to prevent duplicate content
  const isPreview = process.env.VERCEL_ENV === 'preview';

  if (isPreview) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${PRIMARY_URL}/sitemap.xml`,
  };
}
