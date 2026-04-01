"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/cv-data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [imgIdx, setImgIdx] = useState(0);

  const images = project?.images ?? [];
  const isPlaceholder = images.length === 0 || images[0].endsWith(".svg");

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

            {/* Image area */}
            <div className="relative w-full h-64 sm:h-96 overflow-hidden rounded-t-2xl">
              {isPlaceholder ? (
                <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <div className="text-center text-white/40">
                    <div className="text-4xl mb-2">
                      {project.icon === "bot" ? "\u{1F916}" : project.icon === "workflow" ? "\u{2699}\uFE0F" : project.icon === "globe" ? "\u{1F310}" : "\u{1F4CA}"}
                    </div>
                    <p className="text-xs uppercase tracking-widest">Projet confidentiel</p>
                  </div>
                </div>
              ) : (
                <>
                  <Image
                    src={images[imgIdx] || images[0]}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                  />
                  {/* Subtle bottom fade only */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050510]/80 to-transparent" />

                  {/* Navigation arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setImgIdx((prev) => (prev - 1 + images.length) % images.length);
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/60 hover:bg-black/60 hover:text-white transition-colors"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setImgIdx((prev) => (prev + 1) % images.length);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/60 hover:bg-black/60 hover:text-white transition-colors"
                      >
                        <ChevronRight size={16} />
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation();
                              setImgIdx(i);
                            }}
                            className={`h-1.5 rounded-full transition-all ${
                              i === imgIdx ? "w-4 bg-white" : "w-1.5 bg-white/30"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>

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
