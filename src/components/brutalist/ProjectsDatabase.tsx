"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import { portfolioData } from "@/data";
import { useIsMobile } from "@/lib/hooks";

// Project metrics mapping
const projectMetrics: Record<string, { value: string; label: string; color: string }> = {
  "dns-threat-detection": { value: "99.68%", label: "F1 Score", color: "var(--accent-primary)" },
  "counterfactual-scout": { value: "0.81", label: "AUC Score", color: "var(--data-purple)" },
  "kiitrail": { value: "94.39%", label: "R² Score", color: "var(--data-cyan)" },
};

// Mini visualization data
const projectVizData: Record<string, number[]> = {
  "dns-threat-detection": [96.8, 97.2, 99.68], // F1 scores: BiLSTM, LightGBM, Ensemble
  "counterfactual-scout": [0.75, 0.81, 0.088], // AUC evolution
  "kiitrail": [85, 90, 94.39], // R² improvement
};

export function ProjectsDatabase() {
  const { projects } = portfolioData;
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouchDevice] = useState(() => 
    typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouchDevice) return;
    requestAnimationFrame(() => {
      setMousePos({ x: e.clientX, y: e.clientY });
    });
  };

  return (
    <section 
      id="projects" 
      className="section overflow-x-hidden px-4 md:px-6 lg:px-8"
      aria-label="Projects"
    >
      {/* Section Header */}
      <div className="section-header">
        <div className="section-header-title">
          <span className="section-header-badge">[WORK]</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-text-primary">
            PROJECTS
          </h2>
        </div>
        <span className="section-header-meta">
          {projects.length} CASE STUDIES
        </span>
      </div>

      {/* Project Cards Grid */}
      <div 
        ref={containerRef} 
        onMouseMove={handleMouseMove}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isFeatured={index === 0}
            isMobile={isMobile}
            onHover={() => setHoveredProject(project.id)}
            onLeave={() => setHoveredProject(null)}
          />
        ))}
      </div>

      {/* Cursor Preview (Desktop Only) */}
      {!isTouchDevice && !isMobile && (
        <AnimatePresence>
          {hoveredProject && (
            <CursorPreview
              projectId={hoveredProject}
              mousePos={mousePos}
            />
          )}
        </AnimatePresence>
      )}

      {/* Decorative Footer */}
      <div className="mt-8 pt-6 border-t border-border-subtle">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs text-text-muted">
            Click any project for detailed case study
          </p>
          
          {/* Decorative dots pattern */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 bg-border-default"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  whileHover={{ backgroundColor: 'var(--accent-primary)' }}
                />
              ))}
            </div>
            <span className="font-mono text-xs text-text-muted">
              {portfolioData.projects.length} systems built
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ 
  project, 
  index, 
  isFeatured,
  isMobile,
  onHover,
  onLeave
}: { 
  project: typeof portfolioData.projects[0];
  index: number;
  isFeatured: boolean;
  isMobile: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const metric = projectMetrics[project.id];
  const vizData = projectVizData[project.id] || [70, 80, 90];

  return (
    <Link href={`/projects/${project.id}`}>
      <motion.article
        className={`card-interactive group h-full ${isFeatured ? 'lg:col-span-2' : ''}`}
        initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: isMobile ? 0 : index * 0.1 }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {/* Card Header */}
        <div className="flex items-start justify-between mb-4 pb-4 border-b border-border-subtle">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-text-muted">
              {String(index + 1).padStart(2, "0")}/{String(portfolioData.projects.length).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs text-accent-primary uppercase">
              {project.timeline}
            </span>
          </div>
          
          {/* Mini Bar Chart */}
          <MiniBarChart data={vizData} color={metric?.color || "var(--accent-primary)"} />
        </div>

        {/* Content */}
        <div className="mb-6">
          <h3 className="font-display text-xl md:text-2xl text-text-primary mb-3 group-hover:text-accent-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 md:line-clamp-3">
            {project.one_liner}
          </p>
        </div>

        {/* Metric Badge */}
        {metric && (
          <div className="mb-6">
            <div 
              className="metric-badge inline-flex"
              style={{ borderColor: metric.color }}
            >
              <span 
                className="metric-badge-value"
                style={{ color: metric.color }}
              >
                {metric.value}
              </span>
              <span className="metric-badge-label">{metric.label}</span>
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech_stack.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
          {project.tech_stack.length > 5 && (
            <span className="tech-badge">+{project.tech_stack.length - 5}</span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border-subtle mt-auto">
          <span className="font-mono text-xs text-text-muted uppercase">
            {project.type.split('·')[0].trim()}
          </span>
          <span className="font-mono text-sm text-text-muted group-hover:text-accent-primary transition-colors">
            View Case Study →
          </span>
        </div>
      </motion.article>
    </Link>
  );
}

// Mini Bar Chart Component
function MiniBarChart({ data, color }: { data: number[]; color: string }) {
  const maxValue = Math.max(...data);
  
  return (
    <div className="mini-bar-chart" aria-hidden="true">
      {data.map((value, i) => (
        <div
          key={i}
          className="mini-bar"
          style={{ 
            height: `${(value / maxValue) * 100}%`,
            background: i === data.length - 1 ? color : 'var(--border-default)',
            opacity: i === data.length - 1 ? 1 : 0.5,
          }}
        />
      ))}
    </div>
  );
}

// Cursor Preview Component
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

  const highlights = project.evaluation_and_results?.slice(0, 2) || [];

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
      <div className="h-full flex flex-col justify-between p-5">
        <div>
          <span className="font-mono text-xs text-accent-primary block mb-2">
            {project.type}
          </span>
          <h4 className="font-display text-base text-text-primary leading-tight mb-3">
            {project.title}
          </h4>
          {highlights.length > 0 && (
            <ul className="space-y-1">
              {highlights.map((h, i) => (
                <li key={i} className="font-mono text-xs text-text-muted flex items-start gap-2">
                  <span className="text-accent-primary shrink-0">•</span>
                  <span className="line-clamp-1">{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="flex flex-wrap gap-1 pt-3 border-t border-border-subtle">
          {project.tech_stack.slice(0, 3).map((tech) => (
            <span key={tech} className="font-mono text-xs text-text-muted">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Corner Decorations */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent-primary" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent-primary" />
    </motion.div>
  );
}
