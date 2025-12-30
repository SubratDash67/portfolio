"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data";
import { Container, Section } from "@/components/layout";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9] as const,
    },
  },
};

export function About() {
  const { summary, about, education } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="about" className="py-20 md:py-28">
      <Container size="default">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight">
              About
            </h2>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              ...fadeInUpVariants,
              visible: {
                ...fadeInUpVariants.visible,
                transition: { ...fadeInUpVariants.visible.transition, delay: 0.1 },
              },
            }}
            className="mb-20"
          >
            <h3 className="text-lg font-medium text-text-primary mb-4">
              Overview
            </h3>
            <p className="text-base text-text-secondary leading-relaxed mb-8">
              {summary.short}
            </p>

            {/* Focus Areas */}
            <div className="space-y-4">
              <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-widest mb-4">
                Focus Areas
              </h4>
              <ul className="space-y-3">
                {summary.focus_areas.map((area, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <span className="text-text-muted mt-1.5 shrink-0">→</span>
                    <span>{area}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Technical Philosophy */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              ...fadeInUpVariants,
              visible: {
                ...fadeInUpVariants.visible,
                transition: { ...fadeInUpVariants.visible.transition, delay: 0.3 },
              },
            }}
            className="mb-20 p-6 md:p-8 bg-surface rounded-lg"
          >
            <h3 className="text-lg font-medium text-text-primary mb-4">
              Technical Philosophy
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              {about.technical_philosophy}
            </p>

            {/* Learning Style */}
            <div className="space-y-3">
              <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-widest">
                Learning Approach
              </h4>
              <ul className="space-y-2">
                {about.learning_style.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <span className="text-text-muted mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              ...fadeInUpVariants,
              visible: {
                ...fadeInUpVariants.visible,
                transition: { ...fadeInUpVariants.visible.transition, delay: 0.4 },
              },
            }}
          >
            <h3 className="text-lg font-medium text-text-primary mb-6">
              Education
            </h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="border-l-2 border-border pl-6 pb-8 last:pb-0"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-base font-medium text-text-primary">
                      {edu.degree}
                    </h4>
                    <p className="text-text-secondary">{edu.field}</p>
                  </div>
                  <span className="text-sm text-text-tertiary whitespace-nowrap">
                    {edu.start_year} — {edu.end_year}
                  </span>
                </div>
                <p className="text-text-secondary mb-2">
                  {edu.institution}, {edu.location}
                </p>
                <p className="text-sm text-text-muted">
                  CGPA: <span className="text-text-primary font-medium">{edu.cgpa}</span>
                </p>
              </div>
            ))}
          </motion.div>

          {/* Outside Interests */}
          {about.outside_interests.length > 0 && (
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                ...fadeInUpVariants,
                visible: {
                  ...fadeInUpVariants.visible,
                  transition: { ...fadeInUpVariants.visible.transition, delay: 0.5 },
                },
              }}
              className="mt-16 pt-8 border-t border-border-subtle"
            >
              <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-widest mb-4">
                Beyond Code
              </h4>
              <ul className="space-y-2">
                {about.outside_interests.map((interest, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <span className="text-text-muted mt-0.5">•</span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </Container>
    </Section>
  );
}
