"use client";

import { motion } from "framer-motion";

export default function SideProjects() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      {/* Section header */}
      <motion.div
        className="flex items-center gap-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className="font-display font-700 text-base text-blue leading-none">{"✳︎"}</span>
        <h2 className="font-display font-700 text-sm tracking-widest uppercase">
          Side Projects
        </h2>
        <div className="flex-1 h-[2.5px] bg-ink" />
        <span className="font-mono text-xs text-ink/40">coming soon</span>
      </motion.div>

      {/* Placeholder grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[0].map((i) => (
          <motion.div
            key={i}
            className="brutal-border h-48 flex flex-col items-center justify-center gap-2 bg-paper opacity-40"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 0.4, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              delay: i * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <span className="font-display font-700 text-3xl text-blue/20">{"✳︎"}</span>
            <span className="font-sans text-xs text-ink/40">Vibe coding experiment</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="font-sans text-sm text-ink/40 mt-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Side projects dropping soon — vibe coding & experiments in progress.
      </motion.p>
    </section>
  );
}
