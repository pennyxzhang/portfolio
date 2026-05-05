"use client";

import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function Tape({
  className = "",
  rotation = -2,
  delay = 0.9,
  color = "yellow",
  width = "w-28",
}: {
  className?: string;
  rotation?: number;
  delay?: number;
  color?: "yellow" | "white";
  width?: string;
}) {
  return (
    <motion.div
      className={`absolute h-6 ${width} z-20 pointer-events-none ${
        color === "yellow" ? "bg-yellow/80" : "bg-white/65"
      } ${className}`}
      style={{ rotate: rotation }}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.35, delay, ease }}
    />
  );
}

export function BadgeSticker({
  text,
  className = "",
  rotation = 3,
  delay = 1.1,
  color = "paper",
}: {
  text: string;
  className?: string;
  rotation?: number;
  delay?: number;
  color?: "paper" | "yellow" | "blue" | "red";
}) {
  const bgMap: Record<string, string> = {
    paper: "bg-paper text-ink",
    yellow: "bg-yellow text-ink",
    blue: "bg-blue text-white",
    red: "bg-red text-white",
  };

  return (
    <motion.div
      className={`absolute z-20 brutal-border px-3 py-1.5 font-display font-700 text-xs tracking-wide cursor-default select-none ${bgMap[color]} ${className}`}
      style={{ rotate: rotation }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 380, damping: 14, delay }}
      whileHover={{ scale: 1.08, rotate: rotation + 4 }}
    >
      {text}
    </motion.div>
  );
}

export function ArrowSticker({
  text,
  arrow = "↓",
  className = "",
  rotation = -5,
  delay = 1.2,
}: {
  text: string;
  arrow?: string;
  className?: string;
  rotation?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute z-20 flex flex-col items-start gap-0.5 cursor-default select-none ${className}`}
      style={{ rotate: rotation }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease }}
    >
      <span className="font-mono text-[10px] text-ink/60 uppercase tracking-widest leading-none">
        {text}
      </span>
      <span className="font-display font-700 text-2xl text-ink leading-none">{arrow}</span>
    </motion.div>
  );
}
