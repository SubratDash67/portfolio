"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data";
import { Container, Section } from "@/components/layout";

export function Skills() {
  const { skills, training } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="skills" className="py-24 md:py-32 border-t border-border">
      <Container>
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-16"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted block mb-4">
              Technical Expertise
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6">
              Skills
            </h2>
            <p className="font-mono text-sm text-text-muted max-w-xl">
              Evidence-based capabilities demonstrated through projects and production systems.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="border-t border-border pt-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-6">
                Languages
              </h3>
              <div className="space-y-6">
                {skills.languages.map((lang) => (
                  <div key={lang.name} className="border-b border-border pb-4">
                    <h4 className="font-mono text-sm text-text-primary mb-2">
                      {lang.name}
                    </h4>
                    <ul className="space-y-1">
                      {lang.used_in.map((usage, idx) => (
                        <li key={idx} className="font-mono text-xs text-text-muted">
                          — {usage}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Frameworks & Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="border-t border-border pt-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-6">
                Frameworks & Tools
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.frameworks_and_tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="border border-border p-3 hover:bg-text-primary hover:text-background transition-none group"
                  >
                    <h4 className="font-mono text-xs text-text-primary group-hover:text-background mb-1">
                      {tool.name}
                    </h4>
                    <p className="font-mono text-[10px] text-text-muted group-hover:text-background/70 line-clamp-2">
                      {tool.context}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Systems & Concepts + Data & ML */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
            {/* Systems & Concepts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="border-t border-border pt-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-6">
                Systems & Concepts
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.systems_and_concepts.map((concept, index) => (
                  <span key={index} className="tag">
                    {concept}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Data & ML */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="border-t border-border pt-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-6">
                Data & ML Techniques
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.data_and_ml.map((technique, index) => (
                  <span key={index} className="tag">
                    {technique}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Training & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="mt-16 pt-12 border-t border-border"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-8">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {training.map((cert, index) => (
                <div
                  key={index}
                  className="border border-border p-4 hover:bg-text-primary hover:text-background transition-none group"
                >
                  <h4 className="font-mono text-sm text-text-primary group-hover:text-background mb-2">
                    {cert.title}
                  </h4>
                  <p className="font-mono text-xs text-text-muted group-hover:text-background/70">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
