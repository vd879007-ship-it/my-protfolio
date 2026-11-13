import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Share2, Sparkles, User, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const PRIMARY_URL = 'https://my-protfolio-tawny-seven.vercel.app';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Article Not Found | Dinesh V',
    };
  }

  const postUrl = `${PRIMARY_URL}/blog/${post.slug}`;

  return {
    title: `${post.title} | Dinesh V - Full Stack Developer`,
    description: post.summary,
    keywords: [
      ...post.tags,
      'Dinesh V Full Stack Developer',
      'Full Stack Developer in Tamil Nadu',
      'MERN Stack Developer',
      'React Developer',
      'Next.js Developer',
      'Node.js Developer',
    ],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: postUrl,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author.name],
      tags: post.tags,
      siteName: 'Dinesh V - Full Stack Developer Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${PRIMARY_URL}/blog/${post.slug}`;

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
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    headline: post.title,
    description: post.summary,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      url: `${PRIMARY_URL}/`,
    },
    publisher: {
      '@type': 'Person',
      name: 'Dinesh V',
      url: `${PRIMARY_URL}/`,
    },
    keywords: post.tags.join(', '),
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <div className="min-h-screen bg-[#FAFAFD] text-slate-900 selection:bg-[#FF5500] selection:text-white flex flex-col justify-between">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Top Header */}
      <header className="sticky top-0 z-50 w-full bg-[#FAFAFD]/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="/dinesh-logo.png"
              alt="Dinesh V - Full Stack Developer Logo"
              width={200}
              height={50}
              priority
              className="h-9 sm:h-10 w-auto object-contain hover:scale-105 transition-transform"
            />
          </Link>

          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#FF5500] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Articles</span>
            </Link>
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF6600] px-4 py-2 text-xs font-extrabold text-white shadow-md hover:scale-105 transition-all"
            >
              <span>Hire Dinesh</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center flex-wrap gap-2 text-xs font-semibold text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#FF5500] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-[#FF5500] transition-colors">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#FF5500] truncate max-w-[200px] sm:max-w-md">{post.title}</li>
          </ol>
        </nav>

        {/* Article Meta Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500 mb-4">
          <span className="px-3 py-1 rounded-full bg-[#FFF5EF] text-[#FF5500] border border-[#FFD8C2]">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-slate-500">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.datePublished).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1 text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
        </div>

        {/* Article Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.2] mb-6">
          {post.title}
        </h1>

        {/* Summary Lead */}
        <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed bg-white p-5 rounded-2xl border border-slate-200/80 mb-8 shadow-xs">
          {post.summary}
        </p>

        {/* Author Badge */}
        <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#FAFAFD] border border-slate-200/70 mb-10">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-[#FFF5EF] border border-[#FFD8C2] shrink-0">
            <Image
              src="/image.png"
              alt="Dinesh V - Full Stack Developer"
              width={60}
              height={60}
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="text-sm font-extrabold text-slate-900">{post.author.name}</p>
            <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
              <span>{post.author.role}</span>
              <span>•</span>
              <MapPin className="w-3 h-3 text-[#FF5500]" />
              <span>{post.author.location}</span>
            </p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-slate max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight prose-a:text-[#FF5500] prose-a:font-bold prose-code:bg-slate-100 prose-code:text-[#FF5500] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl">
          <div
            className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed font-normal whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/^### (.*$)/gim, '<h3 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-3">$1</h3>')
                .replace(/^## (.*$)/gim, '<h2 class="text-2xl sm:text-3xl font-black text-slate-900 mt-10 mb-4">$1</h2>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/```tsx([\s\S]*?)```/g, '<pre class="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto text-xs font-mono my-4"><code>$1</code></pre>')
                .replace(/```ts([\s\S]*?)```/g, '<pre class="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto text-xs font-mono my-4"><code>$1</code></pre>')
                .replace(/```([\s\S]*?)```/g, '<pre class="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto text-xs font-mono my-4"><code>$1</code></pre>')
                .replace(/`([^`]+)`/g, '<code class="bg-[#FFF5EF] text-[#FF5500] px-1.5 py-0.5 rounded text-xs font-mono font-bold border border-[#FFD8C2]">$1</code>'),
            }}
          />
        </article>

        {/* Tags Section */}
        <div className="mt-12 pt-6 border-t border-slate-200">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-[#FF5500]" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-bold bg-[#FFF5EF] text-[#FF5500] border border-[#FFD8C2]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="mt-10 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#FFF5EF] border-2 border-[#FF5500]/30 shrink-0">
            <Image
              src="/image.png"
              alt="Dinesh V - Best Full Stack Developer in Tamil Nadu"
              width={100}
              height={100}
              className="object-cover object-top"
            />
          </div>
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-lg font-black text-slate-900">
              Written by Dinesh V
            </h3>
            <p className="text-xs font-bold text-[#FF5500] mt-0.5">
              Full Stack Developer at Skillstar Digital Solutions • Tamil Nadu, India
            </p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mt-2">
              Passionate web architect creating enterprise-grade applications, high-converting portals, and fast React/Next.js systems. Based in Sivaganga, Tamil Nadu.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FF5500] text-white font-extrabold text-xs shadow-md hover:bg-[#E04B00] transition-all"
              >
                <span>Hire Dinesh</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 text-slate-800 font-extrabold text-xs hover:bg-slate-200 transition-all"
              >
                <span>View My Portfolio Projects</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Other Articles Section */}
        {otherPosts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-slate-200">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">
              More Engineering Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs hover:border-[#FF5500]/50 hover:shadow-md transition-all group"
                >
                  <span className="text-[11px] font-extrabold text-[#FF5500] uppercase tracking-wider block mb-1.5">
                    {other.category}
                  </span>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-[#FF5500] transition-colors line-clamp-2">
                    {other.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium line-clamp-2 mt-2">
                    {other.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-100 bg-white py-6 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Dinesh V | Full Stack Developer</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-[#FF5500] transition-colors">
              Home
            </Link>
            <Link href="/blog" className="hover:text-[#FF5500] transition-colors">
              All Articles
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
