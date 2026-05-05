"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block brutal-border brutal-shadow bg-paper hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all duration-150"
      >
        <div className="flex flex-col md:flex-row">
          {/* Cover image */}
          <div className="relative md:w-2/5 min-h-[220px] md:min-h-[280px] border-b-[2.5px] md:border-b-0 md:border-r-[2.5px] border-ink overflow-hidden"
            style={{ backgroundColor: project.accentColor === "#FFE000" ? "#1B45F5" : "#E8E8E8" }}
          >
            {(project.thumbnailImage || project.coverImage) ? (
              <Image
                src={project.thumbnailImage ?? project.coverImage!}
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center font-display font-700 text-6xl opacity-10 select-none text-white">
                {num}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-8 flex flex-col justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-ink/40">{num}</span>
              <h3 className="font-display font-700 text-2xl sm:text-3xl mt-2 leading-tight group-hover:underline underline-offset-4">
                {project.title}
              </h3>
              <p className="text-sm text-ink/60 mt-1 font-sans">{project.subtitle}</p>
              <p className="font-sans text-sm leading-relaxed text-ink/70 mt-4 line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-sans font-500 px-2 py-0.5 border-[1.5px] border-ink/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Role + tools */}
              <div className="text-right shrink-0">
                <p className="text-xs font-sans font-600 text-ink flex items-center gap-1 justify-end"><span className="text-blue text-xs">{"✳︎"}</span>{project.role}</p>
                <p className="text-xs font-sans text-ink/50 mt-0.5">{project.tools.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
