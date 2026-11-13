'use client';

import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPreview() {
  return (
    <section id="blog" className="relative py-20 bg-[#FAFAFD] border-t border-slate-100 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            {/* Small Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFD8C2] bg-[#FFF5EF] mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#FF5500]" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF5500]">
                Engineering Insights
              </span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Technical <span className="text-[#FF5500]">Articles</span>
              </h2>
              <div className="w-12 h-1 bg-[#FF5500] rounded-full mt-2" />
            </div>
            <p className="mt-3 text-sm text-slate-600 max-w-xl font-medium">
              In-depth engineering guides on Next.js, Node.js, Core Web Vitals optimization, and modern web architecture written by Dinesh V.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#FF5500] hover:text-[#E04B00] transition-colors group self-start md:self-auto"
          >
            <span>View All Publications</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
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
                <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug group-hover:text-[#FF5500] transition-colors mb-2.5">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-4 line-clamp-3">
                  {post.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.slice(0, 3).map((tag) => (
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
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
