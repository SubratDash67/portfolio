"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/types";
import { useIsMobile } from "@/lib/hooks";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-bg overflow-x-hidden">
      {/* Noise Overlay - Hidden on mobile for performance */}
      <div className="noise-overlay hidden md:block" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 overflow-x-hidden">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: isMobile ? 1 : 0, x: isMobile ? 0 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 md:mb-12"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs md:text-sm text-text-muted hover:text-accent transition-none group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: isMobile ? 0 : 0.1 }}
          className="mb-6 md:mb-8 pb-4 md:pb-6 border-b border-border"
        >
          {/* Meta Line */}
          <p className="font-mono text-[10px] md:text-xs text-text-muted uppercase tracking-widest md:tracking-[0.15em] mb-2 md:mb-3">
            {project.type} • {project.timeline}
          </p>
          
          {/* Title - Compact Size */}
          <h1 className="font-display text-lg md:text-xl lg:text-2xl xl:text-3xl text-text-primary uppercase leading-[1.1] tracking-[-0.01em] mb-3 md:mb-4 break-all">
            {project.title}
          </h1>
          
          {/* One Liner */}
          <p className="font-mono text-[10px] md:text-xs text-text-secondary leading-relaxed max-w-3xl break-all">
            {project.one_liner}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-6">
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal justify-center text-center"
              >
                <svg width="14" height="14" className="md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Repository
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 md:py-3 font-mono text-[10px] md:text-xs uppercase tracking-widest bg-accent text-[#050505] border border-accent hover:bg-transparent hover:text-accent transition-none"
              >
                <svg width="14" height="14" className="md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </motion.header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8 md:space-y-10">
            {/* Problem Statement */}
            <ContentSection title="PROBLEM STATEMENT" index="01" delay={isMobile ? 0 : 0.2} isMobile={isMobile}>
              <p className="font-mono text-xs md:text-sm text-text-secondary leading-[1.8] break-all">
                {project.problem_statement}
              </p>
            </ContentSection>

            {/* Technical Approach */}
            <ContentSection title="TECHNICAL APPROACH" index="02" delay={isMobile ? 0 : 0.3} isMobile={isMobile}>
              <ul className="space-y-3 md:space-y-4">
                {project.technical_approach.map((approach, index) => (
                  <li key={index} className="flex items-start gap-3 md:gap-4">
                    <span className="font-mono text-[10px] md:text-xs text-accent shrink-0 mt-0.5">
                      [{String(index + 1).padStart(2, "0")}]
                    </span>
                    <span className="font-mono text-xs md:text-sm text-text-secondary leading-[1.7] break-all">
                      {approach}
                    </span>
                  </li>
                ))}
              </ul>
            </ContentSection>

            {/* Results & Evaluation - Redesigned */}
            <ContentSection title="RESULTS & METRICS" index="03" delay={isMobile ? 0 : 0.4} isMobile={isMobile}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {project.evaluation_and_results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: isMobile ? 1 : 0, scale: isMobile ? 1 : 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: isMobile ? 0 : index * 0.1 }}
                    className="border border-accent/30 bg-accent/5 p-3 md:p-4 relative group hover:border-accent hover:bg-accent/10 transition-none"
                  >
                    {/* Corner Accent */}
                    <div className="absolute top-0 left-0 w-2 h-2 md:w-3 md:h-3 border-t-2 border-l-2 border-accent" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 border-b-2 border-r-2 border-accent" />
                    
                    <span className="font-mono text-xs md:text-sm text-text-primary leading-relaxed break-all">
                      {result}
                    </span>
                  </motion.div>
                ))}
              </div>
            </ContentSection>

            {/* Engineering Notes */}
            {project.engineering_depth.length > 0 && (
              <ContentSection title="ENGINEERING NOTES" index="04" delay={isMobile ? 0 : 0.5} isMobile={isMobile}>
                <div className="space-y-2 md:space-y-3">
                  {project.engineering_depth.map((note, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3 p-2 md:p-3 border-l-2 border-border hover:border-accent transition-none">
                      <span className="font-mono text-[10px] md:text-xs text-text-muted">•</span>
                      <span className="font-mono text-[10px] md:text-xs text-text-muted leading-[1.7] break-all">
                        {note}
                      </span>
                    </div>
                  ))}
                </div>
              </ContentSection>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-4 md:space-y-6">
            {/* Tech Stack - With Effects */}
            <motion.div
              initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: isMobile ? 0 : 0.3 }}
              className="border border-border p-4 md:p-5"
            >
              <h3 className="font-display text-xs md:text-sm text-text-primary uppercase tracking-wider mb-3 md:mb-4 flex items-center gap-2">
                <span className="text-accent">[</span>
                STACK
                <span className="text-accent">]</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech_stack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: isMobile ? 0 : 0.4 + index * 0.05 }}
                    className="font-mono text-[10px] md:text-xs px-2 md:px-3 py-1.5 md:py-2 border border-border text-text-secondary cursor-default transition-none hover:border-accent"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Status - Compact */}
            <motion.div
              initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: isMobile ? 0 : 0.4 }}
              className="border border-border p-4 md:p-5"
            >
              <h3 className="font-display text-xs md:text-sm text-text-primary uppercase tracking-wider mb-2 md:mb-3 flex items-center gap-2">
                <span className="text-accent">[</span>
                STATUS
                <span className="text-accent">]</span>
              </h3>
              <div className="flex items-center gap-2 md:gap-3">
                <div className={`w-2 h-2 ${project.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                <span className="font-mono text-[10px] md:text-xs text-text-secondary uppercase">
                  {project.status}
                </span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: isMobile ? 0 : 0.5 }}
              className="border border-border p-4 md:p-5"
            >
              <h3 className="font-display text-xs md:text-sm text-text-primary uppercase tracking-wider mb-3 md:mb-4 flex items-center gap-2">
                <span className="text-accent">[</span>
                LINKS
                <span className="text-accent">]</span>
              </h3>
              <div className="space-y-2">
                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 border-b border-border font-mono text-[10px] md:text-xs text-text-muted hover:text-accent transition-none group"
                  >
                    <span>GitHub</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 border-b border-border font-mono text-[10px] md:text-xs text-text-muted hover:text-accent transition-none group"
                  >
                    <span>Live Demo</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Navigation */}
        <motion.footer
          initial={{ opacity: isMobile ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: isMobile ? 0 : 0.6 }}
          className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-border"
        >
          <div className="flex justify-between items-center">
            <Link
              href="/#projects"
              className="font-mono text-[10px] md:text-xs text-text-muted hover:text-accent transition-none"
            >
              ← ALL PROJECTS
            </Link>
            <Link
              href="/#contact"
              className="font-mono text-[10px] md:text-xs text-text-muted hover:text-accent transition-none"
            >
              CONTACT →
            </Link>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

function ContentSection({ 
  title, 
  index, 
  children, 
  delay = 0,
  isMobile = false
}: { 
  title: string; 
  index: string; 
  children: React.ReactNode; 
  delay?: number;
  isMobile?: boolean;
}) {
  return (
    <motion.section
      initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="border-t border-border pt-4 md:pt-6"
    >
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">
        <span className="font-mono text-[10px] md:text-xs text-text-muted">[{index}]</span>
        <h2 className="font-display text-sm md:text-lg text-text-primary uppercase tracking-wide">
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
}
