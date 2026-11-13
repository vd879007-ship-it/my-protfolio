import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const PRIMARY_URL = "https://my-protfolio-tawny-seven.vercel.app";
const isPreview = process.env.VERCEL_ENV === "preview";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const viewport: Viewport = {
  themeColor: "#FF5500",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(PRIMARY_URL),
  applicationName: "Dinesh V.",
  title: {
    default: "Best Full Stack Developer | Dinesh V. - Skillstar Digital Solutions",
    template: "%s | Dinesh V. - Best Full Stack Developer",
  },
  description:
    "Dinesh V. - Best Full Stack Developer currently working at Skillstar Digital Solutions company. Expert in Next.js, React, Node.js, and high-performance MERN web development.",
  keywords: [
    "best full stack developer",
    "best fullstack developer",
    "Best Full Stack Developer",
    "best fullstack developer in tamilnadu",
    "best full stack developer in tamil nadu",
    "best full stack developer tamil nadu",
    "best full stack developer india",
    "who is the best full stack developer in tamil nadu",
    "full stack developer in skillstar digital solutions",
    "fullstack developer in skillstar digital solutions",
    "full stack developer skillstar digital solutions",
    "who is the full stack developer of skillstar digital solutions",
    "Skillstar Digital Solutions Full Stack Developer",
    "skillstar digital solutions fullstack developer",
    "Skillstar Digital Solutions company full stack developer",
    "Skillstar Digital Solutions Web Developer",
    "skillstar digital solutions",
    "Skillstar Digital Solutions Dinesh",
    "Skillstar Digital Solutions Dinesh V",
    "Dinesh V",
    "Dinesh V.",
    "Dinesh V Full Stack Developer",
    "Full Stack Developer Tamil Nadu",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "top full stack developer tamil nadu",
    "Web Developer India",
    "Full Stack Developer Sivaganga",
  ],
  authors: [{ name: "Dinesh V.", url: PRIMARY_URL }],
  creator: "Dinesh V.",
  publisher: "Dinesh V.",
  alternates: {
    canonical: PRIMARY_URL,
  },
  robots: isPreview
    ? {
        index: false,
        follow: false,
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
  openGraph: {
    title: "Best Full Stack Developer | Dinesh V. - Skillstar Digital Solutions",
    description:
      "Dinesh V. - Best Full Stack Developer currently working at Skillstar Digital Solutions company. Expert in Next.js, React, Node.js, and high-performance MERN web development.",
    url: PRIMARY_URL,
    siteName: "Dinesh V.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${PRIMARY_URL}/d-emblem.png`,
        width: 1200,
        height: 630,
        alt: "Dinesh V. - Best Full Stack Developer at Skillstar Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Full Stack Developer | Dinesh V. - Skillstar Digital Solutions",
    description:
      "Dinesh V. - Best Full Stack Developer currently working at Skillstar Digital Solutions company. Expert in Next.js, React, Node.js, and high-performance MERN web development.",
    images: [`${PRIMARY_URL}/d-emblem.png`],
    creator: "@dinesh",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "T3VLBwarv-ycsvo543eo8aW2BbYHWqnYME3ZDgqdwaQ",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/icon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/icon-144x144.png', type: 'image/png', sizes: '144x144' },
      { url: '/icon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512x512.png', type: 'image/png', sizes: '512x512' },
      { url: '/icon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${PRIMARY_URL}/#person`,
    name: "Dinesh V.",
    alternateName: [
      "Dinesh",
      "Dinesh V",
      "Best Full Stack Developer",
      "Dinesh Full Stack Developer",
      "Best Full Stack Developer in Tamil Nadu",
      "Skillstar Digital Solutions Full Stack Developer",
      "Dinesh V Skillstar",
    ],
    jobTitle: "Best Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Skillstar Digital Solutions",
      alternateName: ["Skillstar", "Skillstar Digital Solutions Company"],
      url: PRIMARY_URL,
      address: {
        "@type": "PostalAddress",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
    description:
      "Dinesh V. is the best Full Stack Developer currently working at Skillstar Digital Solutions company in Tamil Nadu, India, specializing in Next.js 14, React 18, Node.js, and high-performance MERN web development.",
    url: PRIMARY_URL,
    image: `${PRIMARY_URL}/image.png`,
    email: "mailto:dineshcse142@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Murukkapatti, Sivaganga",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Bachelor of Engineering in Computer Science",
    },
    sameAs: [
      "https://github.com/vd879007-ship-it",
      "https://www.linkedin.com/in/dinesh-v-2207ba377",
    ],
    knowsAbout: [
      "Best Full Stack Developer",
      "Best Full Stack Developer in Tamil Nadu",
      "Skillstar Digital Solutions Full Stack Developer",
      "Skillstar Digital Solutions Company",
      "Dinesh V Full Stack Developer",
      "Next.js Development",
      "React.js",
      "MERN Stack",
      "Node.js Backend Architecture",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Core Web Vitals",
      "SEO Optimization",
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${PRIMARY_URL}/#website`,
    url: PRIMARY_URL,
    name: "Dinesh V.",
    alternateName: ["Dinesh V", "Dinesh", "Best Full Stack Developer", "Dinesh Portfolio"],
    description:
      "Official portfolio of Dinesh V., the best Full Stack Developer currently working at Skillstar Digital Solutions company in Tamil Nadu, India.",
    inLanguage: "en-US",
    publisher: {
      "@id": `${PRIMARY_URL}/#person`,
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${PRIMARY_URL}/#profilepage`,
    url: PRIMARY_URL,
    name: "Dinesh V - Full Stack Developer Profile | Skillstar Digital Solutions",
    isPartOf: {
      "@id": `${PRIMARY_URL}/#website`,
    },
    mainEntity: {
      "@id": `${PRIMARY_URL}/#person`,
    },
    dateCreated: "2024-01-01T00:00:00+05:30",
    dateModified: "2026-11-13T00:00:00+05:30",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is the full stack developer of Skillstar Digital Solutions company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dinesh V is the official Full Stack Developer at Skillstar Digital Solutions company in Tamil Nadu, India. He designs and builds scalable, modern web applications using React, Next.js 14, Node.js, and the MERN stack.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the best full stack developer in Tamil Nadu for Next.js & MERN stack?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dinesh V is recognized as one of the best Full Stack Developers in Tamil Nadu, India. Currently working at Skillstar Digital Solutions, he specializes in high-performance React, Next.js 14 App Router, Node.js, and Core Web Vitals optimization.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Dinesh V at Skillstar Digital Solutions specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dinesh V specializes in the modern web stack: Next.js 14, React 18, Node.js, Express, MongoDB, TypeScript, Tailwind CSS, REST APIs, Core Web Vitals, and Generative Engine Optimization (GEO/AEO).",
        },
      },
      {
        "@type": "Question",
        name: "What services does Dinesh V provide for businesses and startups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dinesh V provides end-to-end full stack engineering, including responsive frontend interfaces in Next.js/React, RESTful backend APIs in Node.js/Express, database architecture with MongoDB, and Core Web Vitals SEO optimization.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact or hire the Full Stack Developer of Skillstar Digital Solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can connect with Dinesh V directly via email at dineshcse142@gmail.com, through his LinkedIn profile at linkedin.com/in/dinesh-v-2207ba377, or via his official portfolio at https://my-protfolio-tawny-seven.vercel.app/.",
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon & Touch Icon Links compliant with Googlebot-Image & Web Standards */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/icon-144x144.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* AI & LLM Standard Discovery Link (AEO / GEO) */}
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLMs.txt" />

        {/* Core Web Vitals Preconnect Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Structured Data: WebSite, Person, ProfilePage JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-[#FAFAFD] text-slate-900 selection:bg-[#FF6B00] selection:text-white`}
      >
        {/* Google Analytics 4 (GA4) Integration */}
        {gaMeasurementId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaMeasurementId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {children}
      </body>
    </html>
  );
}
