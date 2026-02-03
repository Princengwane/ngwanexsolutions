"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "./utils";

type Props = HTMLMotionProps<"button"> & {
  variant?: "primary" | "ghost";
};

export default function Button({
  className,
  variant = "primary",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-space-900";

  const variants = {
    primary:
      "bg-gradient-to-r from-neon-cyan/90 to-neon-green/80 text-space-950 shadow-glow hover:shadow-glowStrong",
    ghost: "border border-white/12 bg-white/0 text-white hover:bg-white/5",
  } as const;

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
}
