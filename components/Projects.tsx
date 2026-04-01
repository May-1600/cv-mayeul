"use client";

import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/cv-data";

export default function Projects() {
  return (
    <section id="projets" className="relative z-10 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-400 mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ce que je construis
          </h2>
          <p className="text-white/40 mb-12 max-w-lg">
            Des outils concrets, livr&eacute;s vite, qui r&egrave;glent de vrais probl&egrave;mes.
            Pas des POC qui prennent la poussi&egrave;re.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
