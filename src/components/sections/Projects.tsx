"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data";
import { Container, Section } from "@/components/layout";
import { ProjectCard } from "@/components/ui/ProjectCard";

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

export function Projects() {
  const { projects } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="projects" className="py-20 md:py-28">
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
              Selected Projects
            </h2>
            <p className="text-base text-text-secondary max-w-2xl leading-relaxed">
              End-to-end systems emphasizing problem formulation, evaluation
              rigor, and engineering trade-offs under real-world constraints.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View All Projects Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-text-tertiary text-sm">
              Explore detailed case studies, technical breakdowns, and code artifacts
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
