"use client";

import { motion } from "framer-motion";
import { cn } from "./utils";

export default function GlowCard({
  title,
  desc,
  icon,
  className,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex items-start gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-glow">
          {icon}
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
        </div>
      </div>

      <div className="pointer-events-none absolute -left-24 top-0 h-full w-24 rotate-12 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 animate-[shimmer_1.6s_ease-in-out_infinite]" />
    </motion.div>
  );
}
