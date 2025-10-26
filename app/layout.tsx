import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | CMS Dashboard",
    default: "CMS Dashboard - Modern Content Management Platform",
  },
  description: "Professional headless CMS platform built with Next.js 14 and TypeScript",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CMS Dashboard",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
