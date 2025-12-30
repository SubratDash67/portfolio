"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data";

export function ProjectsDatabase() {
  const { projects } = portfolioData;
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouchDevice) return;
    
    // Throttle updates
    requestAnimationFrame(() => {
      setMousePos({ x: e.clientX, y: e.clientY });
    });
  };

  return (
    <section id="projects" className="section">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
        <div className="flex items-center gap-4">
          <span className="font-mono text-accent text-xs">[DB]</span>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary">
            PROJECTS
          </h2>
        </div>
        <span className="font-mono text-xs text-text-muted">
          {projects.length} RECORDS
        </span>
      </div>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-[60px_1fr_200px_80px] gap-4 px-4 py-3 border-b border-border-strong">
        <span className="font-mono text-[10px] text-text-muted uppercase">ID</span>
        <span className="font-mono text-[10px] text-text-muted uppercase">PROJECT</span>
        <span className="font-mono text-[10px] text-text-muted uppercase">STACK</span>
        <span className="font-mono text-[10px] text-text-muted uppercase">LINK</span>
      </div>

      {/* Project Rows */}
      <div ref={containerRef} onMouseMove={handleMouseMove}>
        {projects.map((project, index) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <motion.div
              className="db-row group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* ID */}
              <span className="font-mono text-sm text-text-muted group-hover:text-invert-text">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Project Info */}
              <div className="min-w-0">
                <h3 className="font-display text-lg md:text-xl text-text-primary group-hover:text-invert-text truncate">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-text-muted group-hover:text-invert-text/70 truncate mt-1">
                  {project.one_liner}
                </p>
              </div>

              {/* Tech Stack (Desktop) */}
              <div className="hidden md:flex flex-wrap gap-1">
                {project.tech_stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] px-2 py-1 border border-border group-hover:border-invert-text/30 text-text-muted group-hover:text-invert-text/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <span className="font-mono text-lg text-text-muted group-hover:text-invert-text hidden md:block">
                →
              </span>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Cursor Preview (Desktop Only) */}
      {!isTouchDevice && (
        <AnimatePresence>
          {hoveredProject && (
            <CursorPreview
              projectId={hoveredProject}
              mousePos={mousePos}
            />
          )}
        </AnimatePresence>
      )}

      {/* Footer Note */}
      <div className="mt-8 pt-4 border-t border-border">
        <p className="font-mono text-xs text-text-muted">
          SELECT ROW FOR DETAILED CASE STUDY // HOVER FOR PREVIEW
        </p>
      </div>
    </section>
  );
}

function CursorPreview({ 
  projectId, 
  mousePos 
}: { 
  projectId: string; 
  mousePos: { x: number; y: number };
}) {
  const { projects } = portfolioData;
  const project = projects.find(p => p.id === projectId);
  
  if (!project) return null;

  return (
    <motion.div
      className="cursor-preview"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.15 }}
      style={{
        left: mousePos.x + 20,
        top: mousePos.y - 100,
      }}
    >
      <div className="h-full flex flex-col justify-between p-4">
        <div>
          <span className="font-mono text-[10px] text-accent block mb-2">
            {project.type}
          </span>
          <h4 className="font-display text-lg text-text-primary leading-tight">
            {project.title}
          </h4>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {project.tech_stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent" />
    </motion.div>
  );
}
