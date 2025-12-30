"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data";

export function HeroBrutalist() {
  const { identity } = portfolioData;
  const nameParts = identity.full_name.toUpperCase().split(" ");

  return (
    <section id="hero" className="section min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Grid Reference Lines (Decorative) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-border opacity-30" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border opacity-30" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-border opacity-30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Status Line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-2 h-2 bg-accent animate-pulse" />
          <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
            SYSTEM ONLINE // AVAILABLE FOR WORK
          </span>
        </motion.div>

        {/* Giant Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-[clamp(4rem,18vw,14rem)] leading-[0.85] tracking-[-0.03em] text-text-primary mb-4"
        >
          {nameParts[0]}
          <br />
          <span className="text-text-muted">{nameParts[1]}</span>
        </motion.h1>

        {/* Role Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center gap-4 mt-8"
        >
          <div className="h-px flex-1 max-w-[100px] bg-border" />
          <span className="font-mono text-sm text-text-secondary uppercase tracking-[0.1em]">
            ML SYSTEMS ENGINEER
          </span>
        </motion.div>

        {/* Coordinates / Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl"
        >
          <MetaBlock label="LOC" value={`${identity.location.city}, ${identity.location.country}`} />
          <MetaBlock label="STATUS" value="AVAILABLE" />
          <MetaBlock label="FOCUS" value="ML/BACKEND" />
          <MetaBlock label="YEAR" value="2025" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a href="#projects" className="btn-brutal">
            VIEW PROJECTS
            <span className="text-accent">↓</span>
          </a>
          <a
            href={identity.contact.resume_pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brutal"
          >
            DOWNLOAD CV
            <span>↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-border p-3">
      <span className="font-mono text-[10px] text-text-muted block mb-1">{label}</span>
      <span className="font-mono text-xs text-text-primary uppercase">{value}</span>
    </div>
  );
}

// Infinite Marquee
export function MarqueeBanner() {
  const text = "ML SYSTEMS ENGINEER // BACKEND ARCHITECTURE // DATA PIPELINES // PYTHON // PYTORCH // DEPLOYMENT // ";
  
  return (
    <div className="marquee-container py-4 bg-accent">
      <div className="marquee-content">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-display text-lg md:text-xl text-bg uppercase tracking-[0.1em] px-8"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
