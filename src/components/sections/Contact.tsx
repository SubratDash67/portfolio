"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data";
import { Container, Section } from "@/components/layout";

export function Contact() {
  const { identity } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      label: "Email",
      value: identity.contact.email,
      href: `mailto:${identity.contact.email}`,
      description: "For opportunities & collaboration",
    },
    {
      label: "GitHub",
      value: "SubratDash67",
      href: identity.contact.github,
      description: "Open source & projects",
    },
    {
      label: "LinkedIn",
      value: "Subrat Dash",
      href: identity.contact.linkedin,
      description: "Professional network",
    },
  ];

  return (
    <Section id="contact" className="py-32 md:py-40 border-t border-border">
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
              Connect
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-text-primary mb-8">
              Get in Touch
            </h2>
            <p className="font-mono text-sm text-text-secondary max-w-xl leading-relaxed">
              Open to collaboration in ML systems engineering, backend development, 
              and data-driven product work. Let&apos;s build something together.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="border-t border-border">
                {contactLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="list-row group block"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      className="flex items-center justify-between py-6 border-b border-border"
                    >
                      <div className="flex items-start gap-6">
                        <span className="font-mono text-xs text-text-muted w-8 pt-1">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="font-mono text-sm uppercase tracking-widest text-text-primary mb-1 group-hover:text-bg transition-colors duration-0">
                            {link.label}
                          </h3>
                          <p className="font-mono text-xs text-text-muted group-hover:text-bg/70 transition-colors duration-0">
                            {link.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-sm text-text-secondary group-hover:text-bg transition-colors duration-0 hidden md:block">
                          {link.value}
                        </span>
                        <span className="font-mono text-lg text-text-muted group-hover:text-bg transition-colors duration-0">
                          →
                        </span>
                      </div>
                    </motion.div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Sidebar Info - Hide vertical border on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="lg:col-span-5 lg:border-l lg:border-border lg:pl-10"
            >
              {/* Availability */}
              <div className="border-t border-border pt-6 mb-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
                  Status
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500" />
                  <span className="font-mono text-sm text-text-primary">
                    Open to collaborations.
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="border-t border-border pt-6 mb-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
                  Location
                </h3>
                <p className="font-mono text-sm text-text-secondary">
                  {identity.location.city}, {identity.location.country}
                </p>
                <p className="font-mono text-xs text-text-muted mt-1">
                  
                </p>
              </div>

              {/* Preferred Contact */}
              <div className="border-t border-border pt-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
                  Response Time
                </h3>
                <p className="font-mono text-sm text-text-secondary">
                  Usually within 24-48 hours
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <a
              href={`mailto:${identity.contact.email}?subject=Opportunity%20Inquiry`}
              className="btn inline-flex items-center gap-3 group"
            >
              <span>Send a Message</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
