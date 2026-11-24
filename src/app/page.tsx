import * as React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Process } from "@/components/Process";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent selection:text-accent-ink flex flex-col overflow-x-hidden w-full">
      {/* Sticky Header with Accessible Mobile Menu */}
      <Header />

      {/* Main Content Landmark */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none overflow-x-hidden w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Selected Projects Section */}
        <Projects />

        {/* 3. About Section */}
        <About />

        {/* 4. Skills Section ("what I do") */}
        <Skills />

        {/* 5. How I Work Section ("process") */}
        <Process />

        {/* 6. Experience Section */}
        <Experience />

        {/* 7. Education & Certifications (Compact Row) */}
        <Education />
      </main>

      {/* 8. Contact CTA + Footer */}
      <Footer />
    </div>
  );
}
