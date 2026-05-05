"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Tape } from "./Decorations";

export default function FeaturedProjects() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 pb-24">
      {/* Section header */}
      <div className="relative">
        <Tape className="-top-3 left-[140px]" rotation={2} delay={0.3} color="white" width="w-20" />
      <motion.div
        className="flex items-center gap-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className="font-display font-700 text-base text-blue leading-none">✳</span>
        <h2 className="font-display font-700 text-sm tracking-widest uppercase">
          Selected Work
        </h2>
        <div className="flex-1 h-[2.5px] bg-ink" />
        <span className="font-mono text-xs text-ink/40">{projects.length} projects</span>
      </motion.div>
      </div>

      {/* Project cards */}
      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
