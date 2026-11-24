import type { Metadata } from "next";
import { departureMono, jetbrainsMono } from "./fonts";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorEffect } from "@/components/CursorEffect";
import { siteConfig } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.meta.url),
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: [
    "Meet Sojitra",
    "Full Stack Developer",
    "Python Developer",
    "Django",
    "FastAPI",
    "React",
    "TypeScript",
    "PostgreSQL",
    "PickWise",
    "BugSence",
    "Ahmedabad",
    "Software Engineer",
  ],
  authors: [{ name: siteConfig.identity.name, url: siteConfig.meta.url }],
  creator: siteConfig.identity.name,
  alternates: {
    canonical: siteConfig.meta.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.meta.url,
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    siteName: `${siteConfig.identity.name} Portfolio`,
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.identity.name} — ${siteConfig.identity.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: ["/images/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.identity.name,
  jobTitle: siteConfig.identity.title,
  url: siteConfig.meta.url,
  email: `mailto:${siteConfig.identity.email}`,
  sameAs: [siteConfig.identity.github, siteConfig.identity.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressCountry: "India",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: siteConfig.education.institution,
  },
  knowsAbout: [
    "Python",
    "FastAPI",
    "Django",
    "Django REST Framework",
    "React",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "Redis",
    "Ruby on Rails",
    "REST APIs",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${departureMono.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-text font-mono antialiased selection:bg-accent selection:text-accent-ink min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CursorEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
