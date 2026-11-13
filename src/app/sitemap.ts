import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';

const PRIMARY_URL = 'https://my-protfolio-tawny-seven.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${PRIMARY_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified || post.datePublished),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: `${PRIMARY_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${PRIMARY_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts,
  ];
}
