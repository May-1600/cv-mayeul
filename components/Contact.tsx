"use client";

import { Mail, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { personalInfo } from "@/data/cv-data";

export default function Contact() {
  return (
    <footer id="contact" className="px-6 py-24 sm:py-32 bg-[#0d0d0d]">
      <div className="mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Parlons-en
          </h2>
          <p className="text-neutral-400 mb-10 max-w-md mx-auto">
            Un projet, une mission, une question ? Je r&eacute;ponds en 24h.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-400 hover:scale-105"
            >
              <Mail size={16} />
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/20 hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/20 hover:scale-105"
            >
              <Phone size={16} />
              {personalInfo.phone}
            </a>
          </div>
        </AnimatedSection>

        {/* Meta proof */}
        <AnimatedSection delay={0.4}>
          <div className="mt-16 pt-8 border-t border-white/5">
            <p className="text-xs text-neutral-600">
              Ce site a &eacute;t&eacute; con&ccedil;u et d&eacute;ploy&eacute; en une soir&eacute;e.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
