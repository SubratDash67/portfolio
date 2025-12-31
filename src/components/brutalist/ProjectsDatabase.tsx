"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import { portfolioData } from "@/data";
import { useIsMobile, useHasMounted } from "@/lib/hooks";

// Project metrics mapping
const projectMetrics: Record<string, { value: string; label: string; color: string }> = {
  "dns-threat-detection": { value: "99.68%", label: "F1 Score", color: "var(--accent-primary)" },
  "counterfactual-scout": { value: "0.81", label: "AUC Score", color: "var(--data-purple)" },
  "kiitrail": { value: "94.39%", label: "R² Score", color: "var(--data-cyan)" },
};

// Architecture flow for system design visualization
const projectArchitecture: Record<string, { stages: string[]; flow: string }> = {
  "dns-threat-detection": {
    stages: ["DNS Logs", "Feature Eng.", "BiLSTM + LGB", "Ensemble", "Threat Score"],
    flow: "ingestion → processing → inference → output"
  },
  "kiitrail": {
    stages: ["Train Data", "Feature Pipeline", "XGBoost", "FastAPI", "Streamlit"],
    flow: "data → transform → model → serve → display"
  },
  "counterfactual-scout": {
    stages: ["StatsBomb", "Pass Events", "xT Model", "Counterfactual", "Analysis"],
    flow: "source → extract → model → compare → insight"
  },
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
  const hasMounted = useHasMounted();
  const shouldAnimate = hasMounted && !isMobile;

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
            shouldAnimate={shouldAnimate}
            onHover={() => setHoveredProject(project.id)}
            onLeave={() => setHoveredProject(null)}
          />
        ))}
      </div>

      {/* Cursor Preview (Desktop Only) */}
      {!isTouchDevice && shouldAnimate && (
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
  shouldAnimate,
  onHover,
  onLeave
}: { 
  project: typeof portfolioData.projects[0];
  index: number;
  isFeatured: boolean;
  shouldAnimate: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const metric = projectMetrics[project.id];
  const architecture = projectArchitecture[project.id];

  return (
    <Link href={`/projects/${project.id}`}>
      <motion.article
        className={`card-interactive group h-full ${isFeatured ? 'lg:col-span-2' : ''}`}
        initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, delay: shouldAnimate ? index * 0.1 : 0 }}
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
          
          {/* Metric Badge - moved to header */}
          {metric && (
            <div 
              className="metric-badge inline-flex"
              style={{ borderColor: metric.color }}
            >
              <span 
                className="metric-badge-value text-sm"
                style={{ color: metric.color }}
              >
                {metric.value}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="mb-4">
          <h3 className="font-display text-xl md:text-2xl text-text-primary mb-3 group-hover:text-accent-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
            {project.one_liner}
          </p>
        </div>

        {/* Architecture Flow Diagram */}
        {architecture && (
          <div className="mb-4 p-3 bg-bg-elevated border border-border-subtle">
            <span className="font-mono text-xs text-text-muted block mb-2">
              System Flow
            </span>
            <ArchitectureFlow stages={architecture.stages} color={metric?.color || "var(--accent-primary)"} />
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech_stack.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
          {project.tech_stack.length > 4 && (
            <span className="tech-badge">+{project.tech_stack.length - 4}</span>
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

// Architecture Flow Component - SVG-based pipeline visualization
function ArchitectureFlow({ stages, color }: { stages: string[]; color: string }) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto pb-1">
      {stages.map((stage, i) => (
        <div key={i} className="flex items-center shrink-0">
          {/* Stage Box */}
          <div 
            className="px-2 py-1 border text-center min-w-15"
            style={{ 
              borderColor: i === stages.length - 1 ? color : 'var(--border-subtle)',
              backgroundColor: i === stages.length - 1 ? `${color}10` : 'transparent'
            }}
          >
            <span 
              className="font-mono text-xs whitespace-nowrap"
              style={{ color: i === stages.length - 1 ? color : 'var(--text-muted)' }}
            >
              {stage}
            </span>
          </div>
          
          {/* Arrow */}
          {i < stages.length - 1 && (
            <svg width="16" height="12" viewBox="0 0 16 12" className="shrink-0 mx-0.5">
              <path 
                d="M0 6h12M10 2l4 4-4 4" 
                stroke="var(--border-default)" 
                strokeWidth="1.5" 
                fill="none"
              />
            </svg>
          )}
        </div>
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
