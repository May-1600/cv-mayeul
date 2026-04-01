"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { experiences } from "@/data/cv-data";

export default function Timeline() {
  return (
    <section id="parcours" className="relative z-10 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <p className="text-sm font-medium uppercase tracking-widest text-violet-400 mb-3">
            Parcours
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Exp&eacute;riences cl&eacute;s
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent origin-top hidden sm:block"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-6"
              >
                {/* Dot */}
                <div className="relative hidden sm:flex flex-col items-center">
                  <div
                    className={`h-6 w-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      exp.highlight
                        ? "border-cyan-400 bg-cyan-400/20 shadow-lg shadow-cyan-400/20"
                        : "border-white/20 bg-white/5"
                    }`}
                  >
                    {exp.highlight && (
                      <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.role}
                    </h3>
                    {exp.highlight && (
                      <span className="rounded-full bg-cyan-400/10 px-2.5 py-0.5 text-xs font-medium text-cyan-400 border border-cyan-400/20">
                        {exp.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-white/40 mb-1">
                    {exp.company}
                    <span className="mx-2 text-white/20">&middot;</span>
                    {exp.period}
                  </p>
                  <p className="text-sm leading-relaxed text-white/35">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Side projects hint */}
          <AnimatedSection delay={0.4} className="mt-10 ml-0 sm:ml-12">
            <p className="text-sm text-white/20 italic">
              + side projects IA en cours &mdash; automatisations, RAG,
              prospection data-driven
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
