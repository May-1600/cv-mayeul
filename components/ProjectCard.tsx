"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BarChart3,
  Globe,
  Workflow,
} from "lucide-react";
import type { Project } from "@/data/cv-data";

const iconMap: Record<string, typeof Bot> = {
  bot: Bot,
  chart: BarChart3,
  globe: Globe,
  workflow: Workflow,
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = iconMap[project.icon] || Bot;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-glow group rounded-2xl bg-[#141414] p-6 transition-all duration-300 hover:bg-[#1a1a1a]"
    >
      {/* Icon + gradient background */}
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient}`}
      >
        <Icon size={22} className="text-white" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-1">
        {project.title}
      </h3>

      {/* Company */}
      <p className="text-sm text-neutral-500 mb-3">{project.company}</p>

      {/* Description */}
      <p className="text-sm leading-relaxed text-neutral-400 mb-4">
        {project.description}
      </p>

      {/* Metric */}
      {project.metric && (
        <p className="text-sm font-medium gradient-text mb-4">
          {project.metric}
        </p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/5 px-3 py-1 text-xs text-neutral-400 transition-colors group-hover:bg-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
