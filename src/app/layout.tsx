import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dinesh | Premium Full-Stack Web Developer Portfolio",
  description: "Passionate Full-Stack Web Developer building fast, modern, responsive, and user-friendly web applications using React, Next.js, Tailwind CSS, and Node.js.",
  keywords: ["Dinesh", "Full-Stack Developer", "Web Developer", "React", "Next.js", "Tailwind CSS", "Node.js", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#FAFAFD] text-slate-900 selection:bg-[#FF6B00] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
