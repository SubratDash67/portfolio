"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { portfolioData } from "@/data";
import { useIsMobile } from "@/lib/hooks";

// Skill proficiency data
const skillProficiency: Record<string, number> = {
  "Python": 95,
  "C": 70,
  "Java": 65,
  "Scikit-learn": 90,
  "LightGBM": 88,
  "PyTorch": 85,
  "Pandas / NumPy": 92,
  "Streamlit": 80,
  "Git / GitHub": 85,
  "FastAPI": 75,
  "Docker": 70,
};

// Radar chart dimensions
const radarDimensions = [
  { label: "ML/AI", value: 92 },
  { label: "Backend", value: 85 },
  { label: "Data Eng", value: 88 },
  { label: "Frontend", value: 65 },
  { label: "DevOps", value: 72 },
];

// Skill acquisition timeline
const skillTimeline = [
  { year: "2022", skills: ["Python", "C"], context: "Started B.Tech" },
  { year: "2023", skills: ["PyTorch", "Scikit-learn"], context: "ML Focus" },
  { year: "2024", skills: ["LightGBM", "FastAPI"], context: "Production Systems" },
  { year: "2025", skills: ["Docker", "Streamlit"], context: "Deployment" },
];

export function TerminalSkills() {
  const { skills } = portfolioData;
  const isMobile = useIsMobile();

  const skillCategories = [
    {
      title: "Languages",
      icon: "{ }",
      color: "var(--accent-code)",
      items: skills.languages.map(l => ({ name: l.name, proficiency: skillProficiency[l.name] || 75 })),
    },
    {
      title: "ML & Data",
      icon: "◆",
      color: "var(--accent-primary)",
      items: skills.frameworks_and_tools.filter(f => 
        ["Scikit-learn", "LightGBM", "PyTorch", "Pandas / NumPy"].includes(f.name)
      ).map(f => ({ name: f.name, proficiency: skillProficiency[f.name] || 80 })),
    },
    {
      title: "Tools & Infra",
      icon: "⚙",
      color: "var(--accent-tertiary)",
      items: skills.frameworks_and_tools.filter(f => 
        ["Streamlit", "Git / GitHub", "FastAPI", "Docker"].includes(f.name) || 
        !["Scikit-learn", "LightGBM", "PyTorch", "Pandas / NumPy"].includes(f.name)
      ).map(f => ({ name: f.name, proficiency: skillProficiency[f.name] || 75 })),
    },
  ];

  return (
    <section 
      id="skills" 
      className="section bg-bg overflow-x-hidden px-4 md:px-6 lg:px-8"
      aria-label="Technical Skills"
    >
      {/* Section Header */}
      <div className="section-header">
        <div className="section-header-title">
          <span className="section-header-badge">[STACK]</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-text-primary">
            TECHNICAL STACK
          </h2>
        </div>
        <span className="section-header-meta">
          TOOLS & EXPERTISE
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
        {/* Left Column - Radar Chart & Timeline (Hidden on mobile) */}
        <div className="hidden md:block lg:col-span-5 space-y-8">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-6"
          >
            <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-6">
              Proficiency Overview
            </h3>
            <RadarChart dimensions={radarDimensions} />
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6"
          >
            <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-6">
              Learning Timeline
            </h3>
            <div className="timeline">
              {skillTimeline.map((item, index) => (
                <div key={item.year} className="timeline-item">
                  <span className="timeline-year">{item.year}</span>
                  <div className="timeline-content">
                    <span className="text-text-primary font-medium">
                      {item.skills.join(", ")}
                    </span>
                    <span className="text-text-muted ml-2 hidden sm:inline">— {item.context}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Skill Categories (Full width on mobile) */}
        <div className="lg:col-span-7 space-y-4 md:space-y-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: isMobile ? 1 : 0, x: isMobile ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: isMobile ? 0 : catIndex * 0.1 }}
              className="card p-4 md:p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5 pb-3 md:pb-4 border-b border-border-subtle">
                <span 
                  className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center border text-sm"
                  style={{ borderColor: category.color, color: category.color }}
                >
                  {category.icon}
                </span>
                <h3 className="font-display text-base md:text-lg text-text-primary uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid - Single column on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {category.items.map((skill) => (
                  <SkillPill 
                    key={skill.name} 
                    name={skill.name} 
                    proficiency={skill.proficiency}
                    color={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}

          {/* Concepts & Systems */}
          <motion.div
            initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="card p-4 md:p-6"
          >
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5 pb-3 md:pb-4 border-b border-border-subtle">
              <span 
                className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center border border-accent-secondary text-accent-secondary text-sm"
              >
                ∞
              </span>
              <h3 className="font-display text-base md:text-lg text-text-primary uppercase">
                Systems & Concepts
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.systems_and_concepts.slice(0, 4).map((concept, i) => (
                <span key={i} className="tech-badge text-xs">
                  {concept.length > 35 ? concept.substring(0, 35) + "..." : concept}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Footer */}
      <motion.div
        initial={{ opacity: isMobile ? 1 : 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 pt-6 border-t border-border-subtle"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-text-muted">
            Proficiency based on project implementation
          </span>
          <div className="flex items-center gap-3">
            {/* Mini decorative bars */}
            <div className="flex items-end gap-1 h-4">
              <motion.div 
                className="w-1 bg-accent-primary"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              />
              <motion.div 
                className="w-1 bg-accent-secondary"
                initial={{ height: 0 }}
                whileInView={{ height: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />
              <motion.div 
                className="w-1 bg-accent-tertiary"
                initial={{ height: 0 }}
                whileInView={{ height: '80%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              />
              <motion.div 
                className="w-1 bg-accent-code"
                initial={{ height: 0 }}
                whileInView={{ height: '40%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Radar Chart Component
function RadarChart({ dimensions }: { dimensions: { label: string; value: number }[] }) {
  const size = 200;
  const center = size / 2;
  const maxRadius = size / 2 - 30;
  const angleStep = (2 * Math.PI) / dimensions.length;

  // Calculate points for the data polygon
  const dataPoints = dimensions.map((dim, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const radius = (dim.value / 100) * maxRadius;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  });

  const dataPath = dataPoints.map((p, i) => 
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ') + ' Z';

  // Grid rings
  const rings = [25, 50, 75, 100];

  return (
    <div className="flex justify-center">
      <svg width={size} height={size} className="overflow-visible">
        {/* Grid rings */}
        {rings.map((ring) => {
          const radius = (ring / 100) * maxRadius;
          const points = dimensions.map((_, i) => {
            const angle = i * angleStep - Math.PI / 2;
            return `${center + radius * Math.cos(angle)},${center + radius * Math.sin(angle)}`;
          }).join(' ');
          return (
            <polygon
              key={ring}
              points={points}
              fill="none"
              stroke="var(--border)"
              strokeWidth="1"
              opacity="0.3"
            />
          );
        })}

        {/* Axis lines */}
        {dimensions.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={center + maxRadius * Math.cos(angle)}
              y2={center + maxRadius * Math.sin(angle)}
              stroke="var(--border)"
              strokeWidth="1"
              opacity="0.3"
            />
          );
        })}

        {/* Data polygon */}
        <motion.path
          d={dataPath}
          fill="var(--accent-primary)"
          fillOpacity="0.15"
          stroke="var(--accent-primary)"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Data points */}
        {dataPoints.map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="var(--accent-primary)"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 * i }}
          />
        ))}

        {/* Labels */}
        {dimensions.map((dim, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const labelRadius = maxRadius + 20;
          const x = center + labelRadius * Math.cos(angle);
          const y = center + labelRadius * Math.sin(angle);
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-mono text-xs fill-text-muted"
            >
              {dim.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

// Skill Pill Component
function SkillPill({ 
  name, 
  proficiency, 
  color 
}: { 
  name: string; 
  proficiency: number;
  color: string;
}) {
  return (
    <div className="skill-pill group">
      <span className="flex-1 text-text-primary group-hover:text-accent-primary transition-colors">
        {name}
      </span>
      <div className="skill-pill-bar">
        <motion.div
          className="skill-pill-fill"
          style={{ background: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
      <span className="font-mono text-xs text-text-muted w-8 text-right">
        {proficiency}
      </span>
    </div>
  );
}
