"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, ChevronDown } from "lucide-react";
import { personalInfo } from "@/data/cv-data";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 bg-grid overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-6 text-center max-w-2xl"
      >
        {/* Photo */}
        <motion.div variants={fadeUp} className="relative">
          <div className="h-28 w-28 rounded-full overflow-hidden ring-2 ring-white/10 ring-offset-2 ring-offset-[#0a0a0a]">
            <Image
              src={personalInfo.photo}
              alt={personalInfo.name}
              width={112}
              height={112}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-emerald-500 ring-2 ring-[#0a0a0a]" />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-bold tracking-tight"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Tagline */}
        <motion.div variants={fadeUp} className="flex flex-col gap-1">
          <p className="text-lg sm:text-xl font-medium gradient-text">
            {personalInfo.tagline}
          </p>
          <p className="text-base text-neutral-400">{personalInfo.subtitle}</p>
        </motion.div>

        {/* Pitch */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg leading-relaxed text-neutral-300 max-w-lg"
        >
          {personalInfo.pitch}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex gap-3 mt-2">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/20 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-400 hover:scale-105"
          >
            <Mail size={16} />
            Contact
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-neutral-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
