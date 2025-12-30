"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { portfolioData } from "@/data";
import { Container, Section } from "@/components/layout";

export function Projects() {
  const { projects } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="projects" className="py-32 md:py-40">
      <Container>
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-20"
          >
            {/* Section Label */}
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted block mb-4">
              Selected Work
            </span>
            
            {/* Section Title - Italic Serif */}
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-text-primary mb-8">
              Projects
            </h2>
            
            <p className="font-mono text-sm text-text-muted max-w-xl leading-relaxed">
              End-to-end systems emphasizing problem formulation, evaluation
              rigor, and engineering trade-offs.
            </p>
          </motion.div>

          {/* Projects List - Row Based */}
          <div className="border-t border-border">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="list-row group">
                    {/* Project Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-4 md:gap-6 mb-2">
                        <span className="font-mono text-xs text-text-muted flex-shrink-0 w-6">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-serif text-lg md:text-2xl text-text-primary group-hover:text-background transition-none">
                          {project.title}
                        </h3>
                      </div>
                      <p className="font-mono text-xs text-text-muted group-hover:text-background/70 ml-10 md:ml-12 max-w-xl leading-relaxed">
                        {project.one_liner}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="hidden md:flex items-center gap-2 shrink-0">
                      {project.tech_stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="tag group-hover:border-background/30 group-hover:text-background/70"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech_stack.length > 3 && (
                        <span className="font-mono text-xs text-text-muted group-hover:text-background/70">
                          +{project.tech_stack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Arrow */}
                    <div className="shrink-0">
                      <span className="font-mono text-lg text-text-muted group-hover:text-background transition-none">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <p className="font-mono text-xs text-text-muted uppercase tracking-wider">
              Click any project to view detailed case study
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
