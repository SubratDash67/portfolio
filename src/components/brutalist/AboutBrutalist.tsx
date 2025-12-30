"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data";

export function AboutBrutalist() {
  const { summary, about, education } = portfolioData;

  return (
    <section id="about" className="section">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
        <div className="flex items-center gap-4">
          <span className="font-mono text-accent text-xs">[SYS]</span>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary">
            ABOUT
          </h2>
        </div>
        <span className="font-mono text-xs text-text-muted">
          PROFILE DATA
        </span>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-8 space-y-8">
          {/* Overview */}
          <DataBlock
            label="OVERVIEW"
            index="01"
            delay={0}
          >
            <p className="font-mono text-sm text-text-secondary leading-relaxed">
              {summary.short}
            </p>
          </DataBlock>

          {/* Technical Philosophy */}
          <DataBlock
            label="TECHNICAL PHILOSOPHY"
            index="02"
            delay={0.1}
          >
            <p className="font-mono text-sm text-text-secondary leading-relaxed">
              {about.technical_philosophy}
            </p>
          </DataBlock>

          {/* Focus Areas */}
          <DataBlock
            label="FOCUS AREAS"
            index="03"
            delay={0.2}
          >
            <div className="space-y-2">
              {summary.focus_areas.map((area, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-accent flex-shrink-0">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <span className="font-mono text-sm text-text-secondary">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </DataBlock>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8 space-y-8">
          {/* Education */}
          <DataBlock
            label="EDUCATION"
            index="04"
            delay={0.3}
          >
            {education.map((edu, i) => (
              <div key={i} className="mb-4 last:mb-0 pb-4 last:pb-0 border-b border-border last:border-b-0">
                <h4 className="font-display text-sm text-text-primary mb-1">
                  {edu.degree}
                </h4>
                <p className="font-mono text-xs text-text-muted mb-1">
                  {edu.field}
                </p>
                <p className="font-mono text-xs text-text-muted">
                  {edu.institution}  {edu.start_year}–{edu.end_year}
                </p>
                <p className="font-mono text-xs text-accent mt-2">
                  CGPA: {edu.cgpa}
                </p>
              </div>
            ))}
          </DataBlock>

          {/* Learning Style */}
          <DataBlock
            label="METHODOLOGY"
            index="05"
            delay={0.4}
          >
            <div className="space-y-2">
              {about.learning_style.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="font-mono text-accent text-xs">→</span>
                  <span className="font-mono text-xs text-text-muted">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </DataBlock>
        </div>
      </div>
    </section>
  );
}

function DataBlock({ 
  label, 
  index, 
  children, 
  delay = 0 
}: { 
  label: string; 
  index: string; 
  children: React.ReactNode; 
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="border border-border p-4"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 pb-2 border-b border-border">
        <span className="font-mono text-xs text-text-muted">[{index}]</span>
        <span className="font-mono text-xs text-accent uppercase tracking-wider">
          {label}
        </span>
      </div>
      
      {/* Content */}
      {children}
    </motion.div>
  );
}
