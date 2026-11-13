import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock, Sparkles } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const PRIMARY_URL = 'https://my-protfolio-tawny-seven.vercel.app';

export const metadata: Metadata = {
  title: 'Technical Blog & Engineering Insights | Dinesh V Full Stack Developer',
  description:
    'In-depth technical articles on Next.js 14, React, Node.js, MERN stack, Core Web Vitals, and web architecture by Dinesh V, Full Stack Developer in Tamil Nadu, India.',
  keywords: [
    'Dinesh V Full Stack Developer',
    'Full Stack Developer in Tamil Nadu',
    'Best Full Stack Developer in Tamil Nadu',
    'MERN Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Web Developer India',
    'Core Web Vitals Guide',
  ],
  alternates: {
    canonical: `${PRIMARY_URL}/blog`,
  },
  openGraph: {
    title: 'Technical Blog & Engineering Insights | Dinesh V',
    description:
      'Explore deep-dive technical articles on full-stack development, modern web architecture, and Core Web Vitals optimization.',
    url: `${PRIMARY_URL}/blog`,
    siteName: 'Dinesh V - Full Stack Developer',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Blog | Dinesh V - Full Stack Developer in Tamil Nadu',
    description:
      'Guides and insights on Next.js, Node.js, and Core Web Vitals optimization.',
  },
};

export default function BlogIndexPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${PRIMARY_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Technical Blog',
        item: `${PRIMARY_URL}/blog`,
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Technical Blog & Engineering Insights',
    description:
      'Technical publications on Full Stack Development, Next.js, React, Node.js, and web performance by Dinesh V.',
    url: `${PRIMARY_URL}/blog`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Dinesh V Portfolio',
      url: `${PRIMARY_URL}/`,
    },
    author: {
      '@type': 'Person',
      name: 'Dinesh V',
      jobTitle: 'Full Stack Developer',
      url: `${PRIMARY_URL}/`,
    },
  };

  return (
    <div className="min-h-screen bg-[#FAFAFD] text-slate-900 selection:bg-[#FF5500] selection:text-white flex flex-col justify-between">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Top Header */}
      <header className="sticky top-0 z-50 w-full bg-[#FAFAFD]/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="/dinesh-logo.png"
              alt="Dinesh V - Full Stack Developer Logo"
              width={220}
              height={55}
              priority
              className="h-9 sm:h-11 w-auto object-contain hover:scale-105 transition-transform"
            />
          </Link>

          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#FF5500] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF6600] px-4 py-2 text-xs font-extrabold text-white shadow-md hover:scale-105 transition-all"
            >
              <span>Hire Me</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#FF5500] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#FF5500]">Technical Blog</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFD8C2] bg-[#FFF5EF] mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#FF5500]" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF5500]">
              ENGINEERING INSIGHTS &amp; GUIDES
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Technical <span className="text-[#FF5500]">Articles &amp; Blog</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl font-medium leading-relaxed">
            Written by <strong>Dinesh V</strong>, Full Stack Developer in Tamil Nadu. Practical
            guides on Next.js, React, Node.js, Core Web Vitals optimization, and building scalable
            web applications.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-[#FF5500]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#FFF5EF] text-[#FF5500] border border-[#FFD8C2] font-bold text-[11px]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-lg font-black text-slate-900 tracking-tight leading-snug group-hover:text-[#FF5500] transition-colors mb-2.5">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-4 line-clamp-3">
                  {post.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer with Link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    {new Date(post.datePublished).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#FF5500] group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 bg-gradient-to-r from-[#FFF5EF] via-[#FFF0E6] to-[#FFF5EF] rounded-2xl p-8 border border-[#FFD8C2] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#FFD8C2] text-[#FF5500] text-xs font-extrabold mb-2 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for Hire</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Looking for a Dedicated Full Stack Developer in Tamil Nadu?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 max-w-xl">
              From fast Next.js applications and responsive web systems to custom MERN stack portals,
              I bring ideas to life with high quality and speed.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#FF5500] px-7 py-3.5 text-sm font-extrabold text-white shadow-md hover:bg-[#E04B00] hover:scale-105 transition-all whitespace-nowrap"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-100 bg-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Dinesh V | Full Stack Developer in Tamil Nadu</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-[#FF5500] transition-colors">
              Portfolio Home
            </Link>
            <Link href="/#projects" className="hover:text-[#FF5500] transition-colors">
              Featured Projects
            </Link>
            <Link href="/#contact" className="hover:text-[#FF5500] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
