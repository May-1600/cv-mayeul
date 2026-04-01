"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/cv-data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-2xl sm:max-h-[85vh] z-50 overflow-y-auto rounded-2xl glass border border-white/10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>

            {/* Image area */}
            {project.images && project.images.length > 0 && (
              <div className={`relative w-full h-48 sm:h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden rounded-t-2xl`}>
                {project.images[0].endsWith(".svg") ? (
                  <div className="text-center text-white/40">
                    <div className="text-4xl mb-2">
                      {project.icon === "bot" ? "\u{1F916}" : project.icon === "workflow" ? "\u{2699}\uFE0F" : project.icon === "globe" ? "\u{1F310}" : "\u{1F4CA}"}
                    </div>
                    <p className="text-xs uppercase tracking-widest">Screenshots bient\u00f4t disponibles</p>
                  </div>
                ) : (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            )}

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="mb-4">
                <p className="text-sm text-white/30 mb-1">{project.company}</p>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                {project.metric && (
                  <p className="text-sm font-medium gradient-text">
                    {project.metric}
                  </p>
                )}
              </div>

              {/* Long description */}
              <p className="text-sm leading-relaxed text-white/50 mb-6">
                {project.longDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Voir le projet
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
