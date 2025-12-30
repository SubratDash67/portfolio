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

export function Skills() {
  const { skills, training } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="skills" className="py-16 md:py-24 bg-surface-subtle">
      <Container>
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4 tracking-tight">
              Skills & Experience
            </h2>
            <p className="text-base text-text-secondary max-w-2xl leading-relaxed">
              Evidence-based capabilities demonstrated through projects and
              production systems. No self-assessed ratings—only proven
              applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Languages */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                ...fadeInUpVariants,
                visible: {
                  ...fadeInUpVariants.visible,
                  transition: {
                    ...fadeInUpVariants.visible.transition,
                    delay: 0.1,
                  },
                },
              }}
            >
              <h3 className="text-lg font-medium text-text-primary mb-6">
                Languages
              </h3>
              <div className="space-y-6">
                {skills.languages.map((lang, index) => (
                  <div key={lang.name} className="group">
                    <h4 className="text-base font-medium text-text-primary mb-3">
                      {lang.name}
                    </h4>
                    <ul className="space-y-2">
                      {lang.used_in.map((usage, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="text-text-tertiary mt-1 shrink-0">→</span>
                          <span>{usage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Frameworks & Tools */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                ...fadeInUpVariants,
                visible: {
                  ...fadeInUpVariants.visible,
                  transition: {
                    ...fadeInUpVariants.visible.transition,
                    delay: 0.2,
                  },
                },
              }}
            >
              <h3 className="text-lg font-medium text-text-primary mb-6">
                Frameworks & Tools
              </h3>
              <div className="space-y-6">
                {skills.frameworks_and_tools.map((tool, index) => (
                  <div key={tool.name} className="group">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-base font-medium text-text-primary">
                        {tool.name}
                      </h4>
                      {tool.artifacts.length > 0 && (
                        <a
                          href={tool.artifacts[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-text-primary transition-colors"
                          aria-label={`View ${tool.name} artifact`}
                        >
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-text-secondary">{tool.context}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Systems & Concepts */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              ...fadeInUpVariants,
              visible: {
                ...fadeInUpVariants.visible,
                transition: {
                  ...fadeInUpVariants.visible.transition,
                  delay: 0.3,
                },
              },
            }}
            className="mt-12"
          >
            <h3 className="text-lg font-medium text-text-primary mb-6">
              Systems & Concepts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {skills.systems_and_concepts.map((concept, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <span className="text-text-tertiary mt-1 shrink-0">•</span>
                  <span>{concept}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Data & ML */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              ...fadeInUpVariants,
              visible: {
                ...fadeInUpVariants.visible,
                transition: {
                  ...fadeInUpVariants.visible.transition,
                  delay: 0.4,
                },
              },
            }}
            className="mt-12"
          >
            <h3 className="text-lg font-medium text-text-primary mb-6">
              Data & ML Techniques
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {skills.data_and_ml.map((technique, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <span className="text-text-tertiary mt-1 shrink-0">•</span>
                  <span>{technique}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Training & Certifications */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              ...fadeInUpVariants,
              visible: {
                ...fadeInUpVariants.visible,
                transition: {
                  ...fadeInUpVariants.visible.transition,
                  delay: 0.5,
                },
              },
            }}
            className="mt-16 pt-12 border-t border-border-subtle"
          >
            <h3 className="text-lg font-medium text-text-primary mb-6">
              Training & Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {training.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 bg-surface rounded-lg"
                >
                  <h4 className="text-base font-medium text-text-primary mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
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
