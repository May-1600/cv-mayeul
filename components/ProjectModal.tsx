"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { Project } from "@/data/cv-data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

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
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/60 hover:bg-black/60 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>

            {/* Demo GIF or gradient banner */}
            {project.demo ? (
              <div className="relative w-full border-b border-white/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.demo}
                  alt={`D\u00e9mo ${project.title}`}
                  className="w-full h-auto max-h-96 object-contain bg-black/40"
                />
                <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-[#050510] to-transparent">
                  <p className="text-xs text-white/40 mb-0.5">{project.company}</p>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                </div>
              </div>
            ) : (
              <div className={`relative w-full px-8 pt-12 pb-8 bg-gradient-to-br ${project.gradient} border-b border-white/5`}>
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex-shrink-0 text-3xl">
                    {project.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white/40 mb-1">{project.company}</p>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    {project.metric && (
                      <span className="inline-block rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 text-sm font-medium text-white">
                        {project.metric}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Metric (shown here when demo GIF is present) */}
              {project.demo && project.metric && (
                <p className="text-sm font-medium gradient-text mb-4">
                  {project.metric}
                </p>
              )}

              {/* Long description */}
              <p className="text-sm leading-relaxed text-white/50 mb-6">
                {project.longDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/50 border border-white/5"
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
