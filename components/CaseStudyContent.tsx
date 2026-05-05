"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project, projects } from "@/data/projects";
import Lightbox from "@/components/Lightbox";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function SectionHeader({ label }: { label: string }) {
  return (
    <motion.div
      className="flex items-center gap-4 mb-8"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease }}
    >
      <span className="bg-blue text-white px-2 py-0.5 font-display font-700 text-xs tracking-widest uppercase">
        {label}
      </span>
      <motion.div
        className="flex-1 h-[1.5px] bg-ink/20 origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.15, ease }}
      />
    </motion.div>
  );
}

export default function CaseStudyContent({ project }: { project: Project }) {
  const projectIndex = projects.findIndex((p) => p.slug === project.slug);
  const num = String(projectIndex + 1).padStart(2, "0");
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const processImages = project.processImages ?? [];
  const clickableImages = processImages.filter((src) => !src.endsWith(".gif"));

  function openLightbox(src: string) {
    const idx = clickableImages.indexOf(src);
    if (idx !== -1) setLightboxIndex(idx);
  }

  return (
    <main className="max-w-6xl mx-auto px-6">
      {/* Back link */}
      <motion.div
        className="pt-10 pb-6"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease }}
      >
        <Link
          href="/#work"
          className="font-sans text-sm font-500 hover:underline underline-offset-4 flex items-center gap-1 w-fit"
        >
          ← Back to work
        </Link>
      </motion.div>

      {/* Hero card */}
      <motion.div
        className="brutal-border brutal-shadow mb-16 overflow-hidden"
        initial={{ y: 48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
      >
        {/* Cover image area */}
        <div
          className="relative w-full h-[320px] sm:h-[420px] border-b-[2.5px] border-ink overflow-hidden"
          style={{ backgroundColor: project.accentColor === "#FFE000" ? "#1B45F5" : "#E8E8E8" }}
        >
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: project.coverImagePosition ?? "center" }}
              priority
            />
          ) : (
            <motion.span
              className="absolute inset-0 flex items-center justify-center font-display font-700 text-[8rem] opacity-10 select-none text-white"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              {num}
            </motion.span>
          )}
        </div>

        {/* Title block */}
        <div className="p-8 sm:p-12">
          <motion.p
            className="font-sans text-sm text-ink/50 mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45, ease }}
          >
            {project.subtitle}
          </motion.p>
          <motion.h1
            className="font-display font-700 text-4xl sm:text-6xl leading-tight"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease }}
          >
            {project.title}
          </motion.h1>
        </div>
      </motion.div>

      {/* Meta row */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 brutal-border mb-16"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65, ease }}
      >
        {[
          { label: "Role", value: project.role },
          { label: "Tools", value: project.tools.join(", ") },
          { label: "Year", value: project.year },
          { label: "Client", value: project.client ?? "—" },
        ].map((item, i) => (
          <div
            key={item.label}
            className={[
              "px-6 py-6 border-ink",
              i === 0 || i === 2 ? "border-r-[2.5px]" : "",
              i === 1 ? "sm:border-r-[2.5px]" : "",
              i < 2 ? "border-b-[2.5px] sm:border-b-0" : "",
            ].filter(Boolean).join(" ")}
          >
            <p className="font-sans text-xs text-ink/40 uppercase tracking-widest mb-2">
              {item.label}
            </p>
            <p className="font-sans text-sm font-600">{item.value}</p>
          </div>
        ))}
      </motion.div>

      {/* Content sections */}
      <div className="flex flex-col gap-20 pb-16">

        {/* Overview */}
        <section>
          <SectionHeader label="Overview" />
          <motion.p
            className="font-sans text-lg leading-relaxed max-w-3xl text-ink/80"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            {project.overview}
          </motion.p>
        </section>

        {/* Problem */}
        <section>
          <SectionHeader label="Problem" />
          <motion.p
            className="font-sans text-lg leading-relaxed max-w-3xl text-ink/80"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            {project.problem}
          </motion.p>
        </section>

        {/* Process */}
        <section>
          <SectionHeader label="Process" />
          <div className="overflow-hidden">
            {(processImages.length > 0 ? processImages : [null, null, null, null]).map((src, i) => (
              <motion.div
                key={i}
                className="w-full"
                style={project.processBackground ? { backgroundColor: project.processBackground } : {}}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease }}
              >
                {src ? (
                  src.endsWith(".gif") ? (
                    <div className="flex justify-center py-6">
                      <img
                        src={src}
                        alt={`Process image ${i + 1}`}
                        className="h-[600px] w-auto block"
                      />
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="group relative w-full block cursor-zoom-in focus-visible:outline-2 focus-visible:outline-blue focus-visible:outline-offset-0"
                      onClick={() => openLightbox(src)}
                      aria-label={`View image ${i + 1} full size`}
                    >
                      <Image
                        src={src}
                        alt={`Process image ${i + 1}`}
                        width={2880}
                        height={1800}
                        sizes="100vw"
                        className="w-full h-auto block"
                      />
                      {/* Hover overlay hint */}
                      <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-150 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-paper brutal-border px-3 py-1.5 font-mono text-xs text-ink/60">
                          view full size
                        </span>
                      </span>
                    </button>
                  )
                ) : (
                  <div className="h-52 bg-ink/5 flex items-center justify-center">
                    <span className="font-sans text-xs text-ink/30">Image placeholder</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section>
          <SectionHeader label="Outcome" />
          <motion.p
            className="font-sans text-lg leading-relaxed max-w-3xl text-ink/80"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            {project.outcome}
          </motion.p>
        </section>

      </div>

      {/* Live site links */}
      {project.liveUrls && project.liveUrls.length > 0 && (
        <motion.div
          className="brutal-border mb-16 p-8 sm:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="inline-block bg-blue text-white px-2 py-0.5 font-display font-700 text-xs tracking-widest uppercase mb-6">
            Visit Live Site
          </span>
          <div className="flex flex-wrap gap-4">
            {project.liveUrls.map(({ label, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 brutal-border px-5 py-3 bg-paper hover:bg-ink hover:text-paper transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-blue focus-visible:outline-offset-2"
              >
                <span className="font-sans text-sm font-600">{label}</span>
                <span className="font-mono text-xs text-ink/40 group-hover:text-paper/40 transition-colors duration-150">↗</span>
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Prev / Next navigation */}
      <motion.div
        className="brutal-border mb-24 grid grid-cols-2"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease }}
      >
        {prevProject ? (
          <Link
            href={`/work/${prevProject.slug}`}
            className="group p-6 sm:p-8 border-r-[2.5px] border-ink hover:bg-ink hover:text-paper transition-colors duration-150"
          >
            <p className="font-mono text-xs text-ink/40 group-hover:text-paper/40 uppercase tracking-widest mb-2">
              ← Prev
            </p>
            <p className="font-display font-700 text-lg sm:text-xl leading-tight">
              {prevProject.title}
            </p>
          </Link>
        ) : (
          <div className="border-r-[2.5px] border-ink" />
        )}

        {nextProject ? (
          <Link
            href={`/work/${nextProject.slug}`}
            className="group p-6 sm:p-8 text-right hover:bg-ink hover:text-paper transition-colors duration-150"
          >
            <p className="font-mono text-xs text-ink/40 group-hover:text-paper/40 uppercase tracking-widest mb-2">
              Next →
            </p>
            <p className="font-display font-700 text-lg sm:text-xl leading-tight">
              {nextProject.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
      </motion.div>

      {/* Lightbox — AnimatePresence here so exit animation fires before unmount */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            key="lightbox"
            images={clickableImages}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNav={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
