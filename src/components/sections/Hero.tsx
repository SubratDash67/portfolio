"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data";
import { Container } from "@/components/layout";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.9] as const,
    },
  },
};

export function Hero() {
  const { identity } = portfolioData;

  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center py-24 md:py-32 lg:py-40">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-text-tertiary text-xs md:text-sm mb-6 tracking-widest uppercase"
          >
            Hi, I&apos;m {identity.preferred_name}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-none tracking-tighter"
          >
            {identity.full_name}
          </motion.h1>

          {/* Headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-10 leading-relaxed max-w-2xl"
          >
            {identity.headline}
          </motion.p>

          {/* Roles */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-12"
          >
            {identity.roles.map((role) => (
              <span
                key={role}
                className="px-4 py-2 bg-surface rounded-lg text-sm text-text-muted"
              >
                {role}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-accent font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200"
              style={{ color: '#09090B' }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-surface text-text-primary font-medium rounded-lg hover:bg-surface-elevated transition-colors duration-200"
            >
              Get in Touch
            </a>
            <a
              href={identity.contact.resume_pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-text-muted font-medium rounded-lg hover:text-text-primary hover:bg-surface transition-all duration-200"
            >
              Resume ↗
            </a>
          </motion.div>

          {/* Location */}
          <motion.p
            variants={itemVariants}
            className="mt-20 text-text-tertiary text-sm flex items-center gap-2"
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
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {identity.location.city}, {identity.location.country}
            {identity.location.remote_open && (
              <>
                <span className="text-text-tertiary">•</span>
                <span>Open to remote work</span>
              </>
            )}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
