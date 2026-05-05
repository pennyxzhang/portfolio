"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      className="w-full border-b-[2.5px] border-ink bg-paper sticky top-0 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-1.5 group px-1"
        >
          <span className="font-display font-700 text-xl text-blue leading-none group-hover:rotate-45 transition-transform duration-200 inline-block">
            ✳
          </span>
          <span className="font-display font-700 text-sm tracking-widest leading-none bg-ink text-paper px-3 py-1.5 group-hover:bg-yellow group-hover:text-ink transition-colors duration-150">
            PZ
          </span>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/#work"
            className="font-sans text-sm font-500 hover:underline underline-offset-4"
          >
            Work
          </Link>
          <Link
            href="mailto:pennyxzhang@gmail.com"
            className="font-sans text-sm font-500 bg-blue text-white px-3 py-1 brutal-border brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-100"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
