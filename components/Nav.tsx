"use client";

import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-3 flex items-center justify-between rounded-3xl border border-white/10 bg-space-900/70 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image src="/logo.png" alt="NgwaneXSolutions logo" fill className="object-contain p-1.5" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold">NgwaneXSolutions</div>
              <div className="text-[11px] text-white/60">Technology Solutions & IT Consulting</div>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a className="px-3 py-2 text-xs text-white/70 hover:text-white" href="#solutions">Solutions</a>
            <a className="px-3 py-2 text-xs text-white/70 hover:text-white" href="#impact">Impact</a>
            <a className="px-3 py-2 text-xs text-white/70 hover:text-white" href="#contact">Contact</a>
            <Button onClick={() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}>
              Start a Project
            </Button>
          </div>

          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="md:hidden rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80"
            href="#contact"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </div>
  );
}
