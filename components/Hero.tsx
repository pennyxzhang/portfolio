"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Tape, ArrowSticker } from "./Decorations";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

// Small decorative mark overlapping the hero text
function Mark({
  className,
  delay,
  children,
  rotation = 0,
}: {
  className: string;
  delay: number;
  children: React.ReactNode;
  rotation?: number;
}) {
  return (
    <motion.div
      className={`absolute z-20 pointer-events-none select-none ${className}`}
      style={{ rotate: rotation }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 420, damping: 14, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 sm:pt-20 pb-24">
      <div className="relative flex flex-col gap-8">

        {/* White tape — top right, angled */}
        <Tape className="-top-6 right-12" rotation={4} delay={1.0} color="white" width="w-32" />

        {/* Name block */}
        <div className="relative overflow-hidden">
          <h1 className="font-display font-700 text-[clamp(5.5rem,12vw,9rem)] leading-[0.9] tracking-tight text-ink">
            {/* PENNY */}
            <motion.span
              className="block"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.1, ease }}
            >
              PENNY
            </motion.span>

            {/* ZHANG + dot + red dot */}
            <motion.span
              className="relative inline-block"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.22, ease }}
            >
              ZHANG
              {/* red dot */}
              <motion.span
                className="absolute -top-2 -right-4 w-3 h-3 rounded-full bg-red"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 10, delay: 0.7 }}
              />
            </motion.span>

            {/* blue period — bouncy */}
            <motion.span
              className="text-blue inline-block"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.55 }}
            >
              .
            </motion.span>
          </h1>
        </div>

        {/* Decorative marks — positioned over the name block area */}
        {/* Yellow ✦ star — sits over the "NN" in PENNY */}
        <Mark className="block top-[4%] left-[52%] sm:top-[6%] sm:left-[28%]" delay={0.85} rotation={15}>
          <motion.span
            className="text-yellow font-display font-700 text-3xl sm:text-5xl leading-none drop-shadow-[0_0_0_#0A0A0A] block"
            style={{ WebkitTextStroke: "1.5px #0A0A0A" }}
            animate={{ rotate: reduceMotion ? 0 : 360 }}
            transition={{ repeat: reduceMotion ? 0 : Infinity, duration: 5, ease: "linear" }}
          >
            {"✦︎"}
          </motion.span>
        </Mark>

        {/* Blue filled square — cuts into the "H" of ZHANG */}
        <Mark className="hidden sm:block top-[52%] left-[40%]" delay={0.95} rotation={-8}>
          <div className="w-5 h-5 sm:w-7 sm:h-7 bg-blue brutal-border" />
        </Mark>

        {/* Divider — with yellow tape overlay */}
        <div className="relative">
          <motion.div
            className="h-[2.5px] bg-ink w-full origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.55, ease }}
          />
          <Tape className="-top-[10px] left-[22%]" rotation={-2} delay={1.0} color="yellow" width="w-24" />
        </div>

        {/* Tagline row */}
        <motion.div
          className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.72, ease }}
        >
          <div>
            <p className="font-sans text-xl sm:text-2xl font-500 leading-snug max-w-lg">
              Product Designer crafting intuitive digital experiences —{" "}
              <span className="bg-yellow px-1">from research to pixel.</span>
            </p>
            <p className="font-sans text-sm text-ink/50 mt-3">Based in Sydney, AU</p>
          </div>

          <div className="relative shrink-0">
            <ArrowSticker
              text="my work"
              arrow="↓"
              className="-top-10 right-2"
              rotation={-4}
              delay={1.35}
            />
            <motion.a
              href="#work"
              className="inline-flex items-center gap-2 font-sans text-sm font-600 bg-blue text-white px-5 py-3 brutal-border brutal-shadow hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-100 w-fit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              View Work ↓
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
