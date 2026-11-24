import type { Metadata } from "next";
import { departureMono, jetbrainsMono } from "./fonts";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
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
      <body className="bg-bg text-text font-mono antialiased selection:bg-accent selection:text-accent-ink min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
