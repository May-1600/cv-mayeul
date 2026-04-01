"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { skillCategories } from "@/data/cv-data";

export default function Skills() {
  return (
    <section id="competences" className="relative z-10 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <p className="text-sm font-medium uppercase tracking-widest text-pink-400 mb-3">
            Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Comp&eacute;tences
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, catIdx) => (
            <AnimatedSection key={category.name} delay={catIdx * 0.1}>
              <div className="glass glass-hover rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.emoji}</span>
                  <h3 className="text-base font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: catIdx * 0.1 + skillIdx * 0.05,
                      }}
                      className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-white/50 transition-colors hover:bg-white/10 hover:text-white/80"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
