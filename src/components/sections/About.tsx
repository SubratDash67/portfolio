"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data";
import { Container, Section } from "@/components/layout";

export function About() {
  const { summary, about, education } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="about" className="py-24 md:py-32 border-t border-border">
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
              Background
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-text-primary">
              About
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="lg:col-span-7"
            >
              {/* Overview */}
              <div className="border-t border-border pt-6 mb-12">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
                  Overview
                </h3>
                <p className="font-mono text-sm text-text-secondary leading-relaxed">
                  {summary.short}
                </p>
              </div>

              {/* Technical Philosophy */}
              <div className="border-t border-border pt-6 mb-12">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
                  Technical Philosophy
                </h3>
                <p className="font-mono text-sm text-text-secondary leading-relaxed mb-6">
                  {about.technical_philosophy}
                </p>
                
                <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-text-muted mb-3">
                  Learning Approach
                </h4>
                <ul className="space-y-2">
                  {about.learning_style.map((item, index) => (
                    <li key={index} className="font-mono text-xs text-text-muted">
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Focus Areas */}
              <div className="border-t border-border pt-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
                  Focus Areas
                </h3>
                <div className="space-y-3">
                  {summary.focus_areas.map((area, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="font-mono text-xs text-text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="font-mono text-sm text-text-secondary">
                        {area}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="lg:col-span-5 lg:border-l lg:border-border lg:pl-8"
            >
              {/* Education */}
              <div className="border-t border-border pt-6 mb-12">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-6">
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className="mb-6 pb-6 border-b border-border last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-mono text-sm text-text-primary">
                        {edu.degree}
                      </h4>
                      <span className="font-mono text-xs text-text-muted shrink-0">
                        {edu.start_year}—{edu.end_year}
                      </span>
                    </div>
                    <p className="font-mono text-xs text-text-muted mb-1">
                      {edu.field}
                    </p>
                    <p className="font-mono text-xs text-text-muted mb-2">
                      {edu.institution}, {edu.location}
                    </p>
                    <p className="font-mono text-xs text-text-primary">
                      CGPA: {edu.cgpa}
                    </p>
                  </div>
                ))}
              </div>

              {/* Outside Interests */}
              {about.outside_interests.length > 0 && (
                <div className="border-t border-border pt-6">
                  <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
                    Beyond Code
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {about.outside_interests.map((interest, index) => (
                      <span key={index} className="tag">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
