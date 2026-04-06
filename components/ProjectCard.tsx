"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/cv-data";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        onClick={onClick}
        className="glass glass-hover group rounded-2xl p-6 block h-full w-full text-left cursor-pointer"
      >
        {/* Title with emoji inline */}
        <h3 className="text-lg font-semibold text-white mb-1">
          <span className="mr-2 emoji-mono">{project.emoji}</span>
          {project.title}
        </h3>

        {/* Company */}
        <p className="text-sm text-white/50 mb-3">{project.company}</p>

        {/* Description */}
        <p className="text-sm leading-relaxed text-white/50 mb-4">
          {project.description}
        </p>

        {/* Metric */}
        {project.metric && (
          <p className="text-sm font-medium gradient-text mb-4">
            {project.metric}
          </p>
        )}

        {/* Tags + expand hint */}
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50 transition-colors group-hover:bg-white/10 group-hover:text-white/70"
            >
              {tag}
            </span>
          ))}
          <span className="ml-auto text-xs text-white/40 group-hover:text-cyan-400 transition-colors flex items-center gap-1">
            D&eacute;tails
            <ExternalLink size={12} />
          </span>
        </div>
      </button>
    </motion.div>
  );
}
