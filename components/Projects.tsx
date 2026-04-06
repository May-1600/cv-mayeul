"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "@/data/cv-data";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

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
          <p className="text-white/50 mb-12 max-w-lg">
            Des outils concrets, livr&eacute;s vite, qui r&egrave;glent de vrais probl&egrave;mes.
            Cliquez pour en savoir plus.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
