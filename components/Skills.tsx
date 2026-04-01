"use client";

import { motion } from "framer-motion";
import { Brain, Database, Code, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { skillCategories } from "@/data/cv-data";

const iconMap: Record<string, typeof Brain> = {
  brain: Brain,
  database: Database,
  code: Code,
  briefcase: Briefcase,
};

export default function Skills() {
  return (
    <section id="competences" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-3">
            Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Comp&eacute;tences
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, catIdx) => {
            const Icon = iconMap[category.icon] || Brain;
            return (
              <AnimatedSection key={category.name} delay={catIdx * 0.1}>
                <div className="rounded-2xl bg-[#141414] p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                      <Icon size={18} className="text-blue-400" />
                    </div>
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
                        className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
