"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data";
import { useIsMobile, useHasMounted } from "@/lib/hooks";

// Skill categories organized by context of use
const skillContexts = {
  "Model Development": {
    icon: "◆",
    color: "var(--accent-primary)",
    description: "Building and training ML models",
    skills: ["Python", "PyTorch", "Scikit-learn", "LightGBM"],
  },
  "Data Engineering": {
    icon: "⬡",
    color: "var(--data-cyan)",
    description: "Processing and pipeline design",
    skills: ["Pandas", "NumPy", "SQL", "Data Pipelines"],
  },
  "Backend & APIs": {
    icon: "{ }",
    color: "var(--accent-code)",
    description: "Service architecture and deployment",
    skills: ["FastAPI", "REST APIs", "Docker", "Git"],
  },
  "Analysis & Viz": {
    icon: "◎",
    color: "var(--accent-tertiary)",
    description: "Insights and communication",
    skills: ["Streamlit", "Matplotlib", "Jupyter", "SHAP"],
  },
};

// Project-skill mapping to show real usage
const projectSkillUsage: Record<string, string[]> = {
  "DNS Threat Detection": ["Python", "LightGBM", "BiLSTM", "Ensemble Methods"],
  "Counterfactual Scout": ["PyTorch", "Pandas", "StatsBomb API", "Visualization"],
  "KiitRail": ["Scikit-learn", "FastAPI", "Feature Engineering", "Streamlit"],
};

export function TerminalSkills() {
  const { skills } = portfolioData;
  const isMobile = useIsMobile();
  const hasMounted = useHasMounted();

  // Prevent animation flicker by skipping initial animation state until mounted
  const shouldAnimate = hasMounted && !isMobile;

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

      {/* Main Grid - Skills by Context */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
        {Object.entries(skillContexts).map(([title, data], index) => (
          <motion.div
            key={title}
            initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: shouldAnimate ? index * 0.1 : 0 }}
            className="card p-5 group hover:border-l-2 transition-all"
            style={{ borderLeftColor: data.color }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ color: data.color }}>{data.icon}</span>
                  <h3 className="font-display text-base text-text-primary uppercase">
                    {title}
                  </h3>
                </div>
                <p className="font-mono text-xs text-text-muted">
                  {data.description}
                </p>
              </div>
            </div>

            {/* Skills as Tags */}
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-3 py-1.5 bg-bg border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-default transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills in Action - Project Context */}
      <motion.div
        initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="card p-5 md:p-6"
      >
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border-subtle">
          <span className="text-accent-primary">→</span>
          <h3 className="font-display text-base md:text-lg text-text-primary uppercase">
            Skills in Production
          </h3>
        </div>

        <div className="space-y-4">
          {Object.entries(projectSkillUsage).map(([project, usedSkills]) => (
            <div key={project} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="font-mono text-sm text-text-primary w-[180px] shrink-0">
                {project}
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-text-muted text-xs">→</span>
                {usedSkills.map((skill, j) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-text-muted"
                  >
                    {skill}{j < usedSkills.length - 1 ? "," : ""}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Systems & Concepts */}
      <motion.div
        initial={shouldAnimate ? { opacity: 0 } : false}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {skills.systems_and_concepts.slice(0, 3).map((concept, i) => (
          <div 
            key={i}
            className="p-4 border border-border-subtle bg-bg-elevated"
          >
            <span className="font-mono text-xs text-text-muted block mb-2">
              [{String(i + 1).padStart(2, "0")}]
            </span>
            <p className="font-mono text-sm text-text-secondary leading-relaxed">
              {concept.length > 60 ? concept.substring(0, 60) + "..." : concept}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-border-subtle flex items-center justify-between">
        <span className="font-mono text-xs text-text-muted">
          Demonstrated through production systems
        </span>
        <div className="flex gap-1">
          {["var(--accent-primary)", "var(--data-cyan)", "var(--accent-code)", "var(--accent-tertiary)"].map((color, i) => (
            <div key={i} className="w-2 h-2" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </section>
  );
}
