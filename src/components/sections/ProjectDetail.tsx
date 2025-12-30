"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/types";
import { Container, Section } from "@/components/layout";

interface ProjectDetailProps {
  project: Project;
}

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

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-8 md:pt-12">
        <Container size="prose">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {/* Back Link */}
            <motion.div variants={fadeInUpVariants} className="mb-8">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
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
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to projects
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div variants={fadeInUpVariants} className="mb-8">
              <p className="text-sm text-text-tertiary mb-4 uppercase tracking-wide">
                {project.type} • {project.timeline}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed">
                {project.one_liner}
              </p>
            </motion.div>

            {/* External Links */}
            <motion.div
              variants={fadeInUpVariants}
              className="flex flex-wrap gap-3 mb-12 pb-12 border-b border-border-subtle"
            >
              {project.links.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-surface text-text-primary rounded-lg hover:bg-surface-elevated transition-all duration-200 flex items-center gap-2"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Repository
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-accent rounded-lg hover:bg-accent-hover transition-all duration-200 flex items-center gap-2 font-medium"
                  style={{ color: '#0A0A0B' }}
                >
                  <svg
                    width="18"
                    height="18"
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
                  Live Demo
                </a>
              )}
            </motion.div>

            {/* Problem Statement */}
            <motion.section variants={fadeInUpVariants} className="mb-12">
              <h2 className="text-xl font-semibold text-text-primary mb-4 tracking-tight">
                Problem Statement
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {project.problem_statement}
              </p>
            </motion.section>

            {/* Technical Approach */}
            <motion.section variants={fadeInUpVariants} className="mb-12">
              <h2 className="text-xl font-semibold text-text-primary mb-4 tracking-tight">
                Technical Approach
              </h2>
              <ul className="space-y-3">
                {project.technical_approach.map((approach, index) => (
                  <li key={index} className="flex items-start gap-3 text-text-secondary">
                    <span className="text-text-tertiary mt-1.5 shrink-0">→</span>
                    <span>{approach}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Tech Stack */}
            <motion.section variants={fadeInUpVariants} className="mb-12">
              <h2 className="text-xl font-semibold text-text-primary mb-4 tracking-tight">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-surface text-text-secondary rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Results & Evaluation */}
            <motion.section
              variants={fadeInUpVariants}
              className="mb-12 p-6 md:p-8 bg-surface rounded-lg"
            >
              <h2 className="text-xl font-semibold text-text-primary mb-4 tracking-tight">
                Results & Evaluation
              </h2>
              <ul className="space-y-3 mb-6">
                {project.evaluation_and_results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-text-muted mt-1 shrink-0">✓</span>
                    <span className="text-text-secondary">{result}</span>
                  </li>
                ))}
              </ul>

              {/* Engineering Depth */}
              {project.engineering_depth.length > 0 && (
                <div className="pt-6 border-t border-border-subtle">
                  <h3 className="text-sm font-medium text-text-tertiary uppercase tracking-wide mb-3">
                    Engineering Notes
                  </h3>
                  <ul className="space-y-2">
                    {project.engineering_depth.map((note, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <span className="text-text-tertiary mt-0.5">•</span>
                        <span className="text-text-secondary">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.section>

            {/* Status */}
            <motion.div variants={fadeInUpVariants} className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-lg">
                <div className="w-2 h-2 bg-text-muted rounded-full" />
                <span className="text-sm text-text-secondary font-medium">
                  Status: {project.status}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Navigation to other projects */}
      <Section className="pt-0">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-12 border-t border-border-subtle"
          >
            <div className="flex justify-between items-center">
              <Link
                href="/#projects"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                ← All Projects
              </Link>
              <Link
                href="/#contact"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                Get in Touch →
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
