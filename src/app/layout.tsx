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
  title: {
    default: "Dinesh V. | best Full Stack Developer at SkillStar Digital Solutions",
    template: "%s | Dinesh V. - Full Stack Developer",
  },
  description:
    "Dinesh V. - Full Stack Developer at SkillStar Digital Solutions, specializing in MERN Stack, React.js, Next.js, Node.js and modern web development in Tamil Nadu, India.",
  keywords: [
    "Dinesh V",
    "Dinesh V.",
    "Full Stack Developer Tamil Nadu",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "best fullstack ddeveloper",
    "SkillStar Digital Solutions Web Developer",
    "skillstar digital solutions",
    "Dinesh V Full Stack Developer",
    "Skillstar Digital Solutions Full Stack Developer",
    "Skillstar Digital Solutions company full stack developer",
    "Who is the full stack developer of Skillstar Digital Solutions",
    "Skillstar Digital Solutions Dinesh",
    "Skillstar Digital Solutions Dinesh V",
    "Best Full Stack Developer in Tamil Nadu",
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
    title: "Dinesh V. | best Full Stack Developer at SkillStar Digital Solutions",
    description:
      "Dinesh V. - Full Stack Developer at SkillStar Digital Solutions, specializing in MERN Stack, React.js, Next.js, Node.js and modern web development in Tamil Nadu, India.",
    url: PRIMARY_URL,
    siteName: "Dinesh V. Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${PRIMARY_URL}/d-emblem.png`,
        width: 1200,
        height: 630,
        alt: "Dinesh V. - Full Stack Developer at SkillStar Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinesh V. | best Full Stack Developer at SkillStar Digital Solutions",
    description:
      "Dinesh V. - Full Stack Developer at SkillStar Digital Solutions, specializing in MERN Stack, React.js, Next.js, Node.js and modern web development in Tamil Nadu, India.",
    images: [`${PRIMARY_URL}/d-emblem.png`],
    creator: "@dinesh",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "T3VLBwarv-ycsvo543eo8aW2BbYHWqnYME3ZDgqdwaQ",
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=3', sizes: 'any' },
      { url: '/icon-32x32.png?v=3', type: 'image/png', sizes: '32x32' },
      { url: '/icon-16x16.png?v=3', type: 'image/png', sizes: '16x16' },
      { url: '/icon-48x48.png?v=3', type: 'image/png', sizes: '48x48' },
      { url: '/icon-192x192.png?v=3', type: 'image/png', sizes: '192x192' },
      { url: '/icon.png?v=3', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=3', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=3',
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
    alternateName: ["Dinesh", "Dinesh V", "Dinesh Full Stack Developer", "Dinesh V Skillstar"],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Skillstar Digital Solutions",
      alternateName: ["Skillstar", "Skillstar Digital Solutions Company"],
      url: PRIMARY_URL,
    },
    description:
      "Full Stack Developer at Skillstar Digital Solutions company based in Sivaganga, Tamil Nadu, India specializing in React, Next.js, and Node.js web applications.",
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
      "Dinesh V Full Stack Developer",
      "Skillstar Digital Solutions Full Stack Developer",
      "Skillstar Digital Solutions Company",
      "Full Stack Development",
      "MERN Stack",
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Core Web Vitals",
      "SEO Optimization",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${PRIMARY_URL}/#website`,
    url: PRIMARY_URL,
    name: "Dinesh V | Full Stack Developer at Skillstar Digital Solutions",
    description:
      "Official portfolio and technical blog of Dinesh V, Full Stack Developer at Skillstar Digital Solutions company in Tamil Nadu, India.",
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
          text: "Dinesh V is the Full Stack Developer at Skillstar Digital Solutions company. He designs and builds scalable, modern web applications using React, Next.js, Node.js, and the MERN stack.",
        },
      },
      {
        "@type": "Question",
        name: "What does the Full Stack Developer at Skillstar Digital Solutions do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At Skillstar Digital Solutions, Dinesh V leads end-to-end full stack engineering, including responsive frontend interfaces in Next.js and React, RESTful backend APIs in Node.js/Express, database architecture with MongoDB, and Core Web Vitals optimization.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact the Full Stack Developer of Skillstar Digital Solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can connect with Dinesh V (Full Stack Developer at Skillstar Digital Solutions) directly via email at dineshcse142@gmail.com, through his LinkedIn profile at linkedin.com/in/dinesh-v-2207ba377, or via his official portfolio at https://my-protfolio-tawny-seven.vercel.app/.",
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon & Touch Icon Links with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=3" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />

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
