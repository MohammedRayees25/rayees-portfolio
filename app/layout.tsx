import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const keywords = [
  "Data Engineer",
  "Analytics Engineer",
  "AI Engineer",
  "GenAI Engineer",
  "Databricks Developer",
  "Azure Data Engineer",
  "Python Developer",
  "Mohammed Rayees",
  "PySpark",
  "Airflow",
  "dbt",
  "LangChain",
  "RAG",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.brand} — ${SITE.brandTagline}`,
    template: `%s · ${SITE.brand}`,
  },
  description:
    "Mohammed Rayees — Data Engineer, Analytics Engineer and AI Engineer. Building scalable data platforms, cloud analytics and GenAI-powered applications with Databricks, PySpark, Azure and the modern LLM stack.",
  keywords,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    title: `${SITE.brand} — ${SITE.brandTagline}`,
    description:
      "Scalable data platforms, cloud analytics and GenAI applications. Databricks · PySpark · Azure · LangChain.",
    siteName: SITE.brand,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.brand} — ${SITE.brandTagline}`,
    description:
      "Scalable data platforms, cloud analytics and GenAI applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE.url },
};

export const viewport: Viewport = {
  themeColor: "#040711",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.brand,
    alternateName: SITE.name,
    url: SITE.url,
    email: SITE.email,
    jobTitle: "Data Engineer / Analytics Engineer / AI Engineer",
    sameAs: [SITE.social.github, SITE.social.linkedin],
    knowsAbout: keywords,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.brand,
    url: SITE.url,
    description: SITE.brandTagline,
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
