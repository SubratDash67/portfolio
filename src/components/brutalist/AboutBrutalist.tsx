"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data";
import { useIsMobile, useHasMounted } from "@/lib/hooks";

// Focus area data with project counts
const focusAreas = [
  {
    number: "01",
    title: "Applied ML & Modeling",
    description: "Building production-ready models for tabular, time-series, and domain-specific data with emphasis on interpretability.",
    projectsCount: 3,
    color: "var(--accent-primary)",
  },
  {
    number: "02", 
    title: "Backend Systems",
    description: "Designing APIs, model serving infrastructure, data pipelines, and evaluation tooling that scale.",
    projectsCount: 2,
    color: "var(--data-cyan)",
  },
  {
    number: "03",
    title: "Explainable ML",
    description: "Focusing on decision analysis, counterfactual reasoning, and making model predictions actionable.",
    projectsCount: 1,
    color: "var(--accent-code)",
  },
];

export function AboutBrutalist() {
  const { summary, about, education } = portfolioData;
  const isMobile = useIsMobile();
  const hasMounted = useHasMounted();
  const shouldAnimate = hasMounted && !isMobile;

  return (
    <section 
      id="about" 
      className="section overflow-x-hidden px-4 md:px-6 lg:px-8"
      aria-label="About"
    >
      {/* Section Header */}
      <div className="section-header">
        <div className="section-header-title">
          <span className="section-header-badge">[INFO]</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-text-primary">
            ABOUT
          </h2>
        </div>
        <span className="section-header-meta">
          PHILOSOPHY & BACKGROUND
        </span>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Main Content - 2/3 width */}
        <div className="lg:col-span-8 space-y-8">
          {/* Pull Quote */}
          <motion.blockquote
            initial={shouldAnimate ? { opacity: 0, x: -20 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="pull-quote"
          >
            {about.technical_philosophy}
          </motion.blockquote>

          {/* Overview */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: shouldAnimate ? 0.1 : 0 }}
          >
            <p className="text-text-secondary leading-relaxed">
              {summary.short}
            </p>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: shouldAnimate ? 0.2 : 0 }}
          >
            <h3 className="font-display text-lg text-text-primary uppercase mb-6">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {focusAreas.map((area, index) => (
                <FocusCard
                  key={area.number}
                  {...area}
                  delay={shouldAnimate ? index * 0.1 : 0}
                  shouldAnimate={shouldAnimate}
                />
              ))}
            </div>
          </motion.div>

          {/* Methodology */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: shouldAnimate ? 0.3 : 0 }}
            className="card p-6"
          >
            <h3 className="font-display text-lg text-text-primary uppercase mb-4">
              Approach & Methodology
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.learning_style.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center border border-accent-primary text-accent-primary font-mono text-xs shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-text-secondary">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar - 1/3 width */}
        <div className="lg:col-span-4 space-y-6">
          {/* Education Card */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: 20 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: shouldAnimate ? 0.2 : 0 }}
            className="card-elevated p-6"
          >
            <h3 className="font-display text-sm text-text-primary uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-primary" aria-hidden="true" />
              Education
            </h3>
            {education.map((edu, i) => (
              <div key={i} className="pb-4 last:pb-0">
                <h4 className="font-display text-base text-text-primary mb-1">
                  {edu.degree}
                </h4>
                <p className="font-mono text-xs text-text-muted mb-1">
                  {edu.field}
                </p>
                <p className="text-sm text-text-secondary mb-3">
                  {edu.institution}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-mono text-xs text-text-muted">
                    {edu.start_year} – {edu.end_year}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-text-muted">CGPA</span>
                    <span className="font-display text-xl text-accent-primary font-bold">
                      {edu.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quick Facts Card */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: 20 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: shouldAnimate ? 0.3 : 0 }}
            className="card p-6"
          >
            <h3 className="font-display text-sm text-text-primary uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-secondary" aria-hidden="true" />
              Quick Facts
            </h3>
            <div className="space-y-4">
              <QuickFact 
                label="Location" 
                value={`${portfolioData.identity.location.city}, ${portfolioData.identity.location.country}`}
              />
              <QuickFact 
                label="Status" 
                value="Open to Collaboration" 
                highlight
              />
              <QuickFact 
                label="Focus" 
                value="ML Systems Engineering"
              />
              <QuickFact 
                label="Graduation" 
                value="2026"
              />
            </div>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: 20 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: shouldAnimate ? 0.4 : 0 }}
            className="card p-6"
          >
            <h3 className="font-display text-sm text-text-primary uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-tertiary" aria-hidden="true" />
              Current Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {about.outside_interests.map((interest: string, i: number) => (
                <span key={i} className="tech-badge">
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Focus Card Component
function FocusCard({ 
  number, 
  title, 
  description, 
  projectsCount,
  color,
  delay,
  shouldAnimate
}: { 
  number: string;
  title: string;
  description: string;
  projectsCount: number;
  color: string;
  delay: number;
  shouldAnimate: boolean;
}) {
  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay }}
      className="card group hover:border-accent-primary transition-colors p-4 min-h-45 flex flex-col"
      style={{ borderLeftColor: color, borderLeftWidth: '3px' }}
    >
      <span className="font-mono text-xs text-text-muted mb-2 block">
        [{number}]
      </span>
      <h4 className="font-display text-sm text-text-primary mb-2 group-hover:text-accent-primary transition-colors leading-tight">
        {title}
      </h4>
      <p className="text-xs text-text-muted mb-4 leading-relaxed grow overflow-hidden">
        {description}
      </p>
      <div className="flex items-center gap-2 pt-3 border-t border-border-subtle">
        <span className="font-display text-lg font-bold" style={{ color }}>
          {projectsCount}
        </span>
        <span className="font-mono text-xs text-text-muted">
          {projectsCount === 1 ? 'project' : 'projects'}
        </span>
      </div>
    </motion.div>
  );
}

// Quick Fact Component
function QuickFact({ 
  label, 
  value, 
  highlight = false 
}: { 
  label: string; 
  value: string; 
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-mono text-xs text-text-muted uppercase">{label}</span>
      <span className={`text-sm ${highlight ? 'text-accent-primary font-medium' : 'text-text-primary'}`}>
        {value}
      </span>
    </div>
  );
}
