"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { portfolioData } from "@/data";
import { useRef } from "react";
import { useIsMobile } from "@/lib/hooks";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function HeroBrutalist() {
  const { identity } = portfolioData;
  const nameParts = identity.full_name.toUpperCase().split(" ");
  const isMobile = useIsMobile();

  return (
    <section 
      id="hero" 
      className="section-hero relative overflow-hidden px-4 md:px-6 lg:px-8"
      aria-label="Introduction"
    >
      {/* Decorative Grid Lines - Desktop Only */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
        <div className="absolute left-[20%] top-0 bottom-0 w-px bg-border-subtle opacity-40" />
        <div className="absolute left-[40%] top-0 bottom-0 w-px bg-border-subtle opacity-40" />
        <div className="absolute left-[60%] top-0 bottom-0 w-px bg-border-subtle opacity-40" />
        <div className="absolute left-[80%] top-0 bottom-0 w-px bg-border-subtle opacity-40" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-full"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Status Badge */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="status-dot active" aria-hidden="true" />
          <span className="font-mono text-xs text-accent-primary uppercase tracking-[0.15em]">
            PORTFOLIO V2.0 // ONLINE
          </span>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - Name & Info */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Giant Name */}
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3rem,10vw,10rem)] leading-[0.85] tracking-[-0.03em] text-text-primary mb-6"
            >
              {nameParts[0]}
              <br />
              <span className="text-accent-primary">{nameParts[1]}</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-text-secondary max-w-xl mb-8 leading-relaxed"
            >
              Building ML systems that scale from{" "}
              <span className="text-text-primary font-medium">prototype to production</span>.
              <br className="hidden md:block" />
              {" "}Focused on data pipelines, model serving, and deployment-aware design.
            </motion.p>

            {/* Meta Info Row */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-6 mb-10 text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-primary" aria-hidden="true" />
                <span className="font-mono text-text-muted">
                  {identity.location.city}, {identity.location.country}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-secondary" aria-hidden="true" />
                <span className="font-mono text-text-muted">B.Tech CSE • 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-tertiary" aria-hidden="true" />
                <span className="font-mono text-text-muted">Open to Opportunities</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton href="#projects" variant="primary" disabled={isMobile}>
                View Projects
                <span className="ml-2" aria-hidden="true">↓</span>
              </MagneticButton>
              <MagneticButton 
                href={identity.contact.resume_pdf}
                variant="secondary"
                external
                disabled={isMobile}
              >
                Download CV
                <span className="ml-2" aria-hidden="true">↗</span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column - Featured Metric & Terminal */}
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-5 xl:col-span-4 space-y-6"
          >
            {/* Featured Metric Card */}
            <FeaturedMetric
              value="99.68%"
              label="Peak F1 Score"
              context="DNS Threat Detection"
              trend="+12.3%"
            />

            {/* Mini Terminal / Stats */}
            <div className="card-elevated p-5">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <div className="w-2 h-2 bg-accent-primary" aria-hidden="true" />
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  Quick Stats
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <StatItem label="Systems" value="3" />
                <StatItem label="Models" value="7+" />
                <StatItem label="Data Points" value="1.5M+" />
                <StatItem label="Projects" value="3" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Desktop Only */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="font-mono text-xs text-text-muted">Scroll</span>
        <motion.div
          className="w-px h-8 bg-border-default"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
          aria-hidden="true"
        />
      </motion.div>
    </section>
  );
}

// Featured Metric Component
function FeaturedMetric({ 
  value, 
  label, 
  context, 
  trend 
}: { 
  value: string; 
  label: string; 
  context: string;
  trend?: string;
}) {
  return (
    <div className="card-accent bg-bg-elevated p-6">
      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
          Featured Result
        </span>
        {trend && (
          <span className="font-mono text-xs text-success flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            {trend}
          </span>
        )}
      </div>
      <div className="mb-3">
        <span className="font-display text-4xl md:text-5xl font-bold text-accent-primary leading-none">
          {value}
        </span>
      </div>
      <div className="space-y-1">
        <p className="font-mono text-sm text-text-primary">{label}</p>
        <p className="font-mono text-xs text-text-muted">{context}</p>
      </div>
    </div>
  );
}

// Stat Item Component
function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="font-display text-xl md:text-2xl font-bold text-text-primary block">
        {value}
      </span>
      <span className="font-mono text-xs text-text-muted uppercase">{label}</span>
    </div>
  );
}

// Magnetic Button Component
function MagneticButton({ 
  children, 
  href, 
  variant = "primary",
  external = false,
  disabled = false,
}: { 
  children: React.ReactNode; 
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  disabled?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 15 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = "relative inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.1em] transition-colors";
  const variantClasses = variant === "primary" 
    ? "px-8 py-4 bg-accent-primary text-text-inverse border border-accent-primary hover:bg-transparent hover:text-accent-primary"
    : "px-8 py-4 bg-transparent text-text-primary border border-border-default hover:border-accent-primary hover:text-accent-primary";

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${variantClasses}`}
      style={{ x: disabled ? 0 : springX, y: disabled ? 0 : springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.a>
  );
}

// Decorative Section Divider
export function MarqueeBanner() {
  return (
    <div 
      className="w-full border-y border-border-default py-4 md:py-6 overflow-hidden"
      role="presentation"
      aria-hidden="true"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Left geometric pattern */}
          <div className="flex items-center gap-2 text-border-default">
            <span className="w-2 h-2 bg-accent-primary" />
            <span className="w-8 h-px bg-border-default" />
            <span className="w-1 h-1 bg-border-default" />
            <span className="w-4 h-px bg-border-default hidden sm:block" />
          </div>
          
          {/* Center pattern */}
          <div className="flex items-center gap-1 font-mono text-xs text-text-muted tracking-[0.5em]">
            <span className="hidden md:inline">◇</span>
            <span>—</span>
            <span className="text-accent-primary">●</span>
            <span>—</span>
            <span className="hidden md:inline">◇</span>
          </div>
          
          {/* Right geometric pattern */}
          <div className="flex items-center gap-2 text-border-default">
            <span className="w-4 h-px bg-border-default hidden sm:block" />
            <span className="w-1 h-1 bg-border-default" />
            <span className="w-8 h-px bg-border-default" />
            <span className="w-2 h-2 bg-accent-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
