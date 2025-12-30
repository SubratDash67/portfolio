"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data";
import { Container, Section } from "@/components/layout";

export function Hero() {
  const { identity, summary } = portfolioData;

  return (
    <Section id="hero" className="min-h-screen flex items-center pt-14">
      <Container>
        {/* Grid Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                Portfolio / 2025
              </span>
            </motion.div>

            {/* Main Heading - Huge Serif */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-serif text-[clamp(3rem,12vw,8rem)] leading-[0.9] tracking-[-0.03em] text-text-primary mb-8"
            >
              {identity.full_name.split(" ")[0]}
              <br />
              <span className="text-text-muted">{identity.full_name.split(" ")[1]}</span>
            </motion.h1>

            {/* Subheading - Italic Serif */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-text-secondary mb-12"
            >
              {identity.headline}
            </motion.h2>

            {/* Divider Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="h-px bg-border mb-8 origin-left"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="font-mono text-sm text-text-secondary max-w-xl leading-relaxed mb-12"
            >
              {summary.short}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              <a href="#projects" className="btn px-6 py-3">
                View Projects
                <span className="text-accent">↓</span>
              </a>
              <a
                href={identity.contact.resume_pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-text-primary/30 font-mono text-xs uppercase tracking-[0.1em] text-text-primary hover:bg-text-primary hover:text-background transition-none"
              >
                <span>Download CV</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Meta Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8"
          >
            <div className="space-y-8">
              {/* Status */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted mb-3">
                  Status
                </h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-success" />
                  <span className="font-mono text-sm text-text-primary">
                    Available for Work
                  </span>
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted mb-3">
                  Location
                </h3>
                <p className="font-mono text-sm text-text-primary">
                  {identity.location.city}, {identity.location.country}
                </p>
                {identity.location.remote_open && (
                  <p className="font-mono text-xs text-text-muted mt-1">
                    Open to Remote
                  </p>
                )}
              </div>

              {/* Focus Areas */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted mb-3">
                  Focus Areas
                </h3>
                <ul className="space-y-2">
                  {summary.focus_areas.slice(0, 3).map((area, index) => (
                    <li key={index} className="font-mono text-xs text-text-secondary">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted mb-3">
                  Contact
                </h3>
                <a
                  href={`mailto:${identity.contact.email}`}
                  className="font-mono text-sm text-text-primary hover:text-accent transition-colors"
                >
                  {identity.contact.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
