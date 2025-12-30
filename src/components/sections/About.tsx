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
    <Section id="about" className="py-32 md:py-40 border-t border-border">
      <Container>
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-20"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted block mb-4">
              Background
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-text-primary">
              About
            </h2>
          </motion.div>

          {/* Definition List Layout */}
          <div className="space-y-0">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 border-t border-border"
            >
              <dt className="md:col-span-4 lg:col-span-3">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted opacity-60">
                  Overview
                </span>
              </dt>
              <dd className="md:col-span-8 lg:col-span-9">
                <p className="font-serif text-lg md:text-xl text-text-primary leading-relaxed">
                  {summary.short}
                </p>
              </dd>
            </motion.div>

            {/* Technical Philosophy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 border-t border-border"
            >
              <dt className="md:col-span-4 lg:col-span-3">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted opacity-60">
                  Technical Philosophy
                </span>
              </dt>
              <dd className="md:col-span-8 lg:col-span-9">
                <p className="font-serif text-lg md:text-xl text-text-secondary leading-relaxed">
                  {about.technical_philosophy}
                </p>
              </dd>
            </motion.div>

            {/* Learning Approach */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 border-t border-border"
            >
              <dt className="md:col-span-4 lg:col-span-3">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted opacity-60">
                  Learning Approach
                </span>
              </dt>
              <dd className="md:col-span-8 lg:col-span-9">
                <ul className="space-y-4">
                  {about.learning_style.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="font-mono text-xs text-text-muted opacity-60 pt-1">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-base md:text-lg text-text-secondary leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </dd>
            </motion.div>

            {/* Focus Areas */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 border-t border-border"
            >
              <dt className="md:col-span-4 lg:col-span-3">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted opacity-60">
                  Focus Areas
                </span>
              </dt>
              <dd className="md:col-span-8 lg:col-span-9">
                <ul className="space-y-4">
                  {summary.focus_areas.map((area, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="font-mono text-xs text-accent pt-1">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-base md:text-lg text-text-primary leading-relaxed">
                        {area}
                      </span>
                    </li>
                  ))}
                </ul>
              </dd>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 border-t border-border"
            >
              <dt className="md:col-span-4 lg:col-span-3">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted opacity-60">
                  Education
                </span>
              </dt>
              <dd className="md:col-span-8 lg:col-span-9 space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="pb-6 border-b border-border last:border-b-0 last:pb-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <h4 className="font-serif text-lg md:text-xl text-text-primary">
                        {edu.degree}
                      </h4>
                      <span className="font-mono text-xs text-text-muted opacity-60 shrink-0">
                        {edu.start_year}—{edu.end_year}
                      </span>
                    </div>
                    <p className="font-serif text-base text-text-secondary mb-1">
                      {edu.field}
                    </p>
                    <p className="font-mono text-xs text-text-muted opacity-60 mb-2">
                      {edu.institution}, {edu.location}
                    </p>
                    <p className="font-mono text-xs text-accent">
                      CGPA: {edu.cgpa}
                    </p>
                  </div>
                ))}
              </dd>
            </motion.div>

            {/* Beyond Code */}
            {about.outside_interests.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 border-t border-b border-border"
              >
                <dt className="md:col-span-4 lg:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted opacity-60">
                    Beyond Code
                  </span>
                </dt>
                <dd className="md:col-span-8 lg:col-span-9">
                  <div className="flex flex-wrap gap-3">
                    {about.outside_interests.map((interest, index) => (
                      <span key={index} className="tag">
                        {interest}
                      </span>
                    ))}
                  </div>
                </dd>
              </motion.div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
