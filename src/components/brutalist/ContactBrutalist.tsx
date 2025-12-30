"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data";

export function ContactBrutalist() {
  const { identity } = portfolioData;

  const contactLinks = [
    {
      label: "EMAIL",
      value: identity.contact.email,
      href: `mailto:${identity.contact.email}`,
      type: "internal",
    },
    {
      label: "GITHUB",
      value: "github.com/SubratDash67",
      href: identity.contact.github,
      type: "external",
    },
    {
      label: "LINKEDIN",
      value: "linkedin.com/in/subrat-dash",
      href: identity.contact.linkedin,
      type: "external",
    },
  ];

  return (
    <section id="contact" className="section">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
        <div className="flex items-center gap-4">
          <span className="font-mono text-accent text-xs">[NET]</span>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary">
            CONTACT
          </h2>
        </div>
        <span className="font-mono text-xs text-text-muted">
          ENDPOINTS ACTIVE
        </span>
      </div>

      {/* Large CTA Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="font-display text-4xl md:text-6xl lg:text-7xl text-text-primary leading-[0.9]">
          LET&apos;S BUILD
          <br />
          <span className="text-accent">SOMETHING</span>
        </h3>
      </motion.div>

      {/* Contact Links */}
      <div className="space-y-0 border-t border-border">
        {contactLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.type === "external" ? "_blank" : undefined}
            rel={link.type === "external" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="db-row group"
          >
            <span className="font-mono text-sm text-text-muted group-hover:text-invert-text">
              {String(index + 1).padStart(2, "0")}
            </span>
            
            <div className="flex-1">
              <span className="font-mono text-xs text-accent group-hover:text-invert-text block mb-1">
                {link.label}
              </span>
              <span className="font-mono text-sm text-text-primary group-hover:text-invert-text">
                {link.value}
              </span>
            </div>

            <span className="font-mono text-lg text-text-muted group-hover:text-invert-text">
              {link.type === "external" ? "↗" : "→"}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Status Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 pt-8 border-t border-border"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent animate-pulse" />
            <span className="font-mono text-xs text-text-muted">
              RESPONSE TIME: &lt;24H
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-text-muted">
              {identity.location.city}, {identity.location.country}
            </span>
            <span className="font-mono text-xs text-text-muted">
              // REMOTE AVAILABLE
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Footer Component
export function FooterBrutalist() {
  const currentYear = new Date().getFullYear();
  const { identity } = portfolioData;

  return (
    <footer className="section bg-bg-elevated border-t border-border">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Signature */}
        <div>
          <h4 className="font-display text-2xl text-text-primary mb-2">
            SUBRAT DASH
          </h4>
          <p className="font-mono text-xs text-text-muted">
            ML SYSTEMS ENGINEER // {currentYear}
          </p>
        </div>

        {/* Version Info */}
        <div className="flex items-center gap-6">
          <div className="border border-accent px-4 py-2">
            <span className="font-mono text-[10px] text-accent block">BUILD</span>
            <span className="font-mono text-sm text-text-primary">v3.0</span>
          </div>
          
          <div className="text-right">
            <span className="font-mono text-xs text-text-muted block">
              NEXT.JS + TAILWIND
            </span>
            <span className="font-mono text-xs text-text-muted block">
              DEPLOYED: VERCEL
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
        <span className="font-mono text-[10px] text-text-muted">
          © {currentYear} {identity.full_name}. ALL SYSTEMS NOMINAL.
        </span>
        <span className="font-mono text-[10px] text-text-muted">
          EOF
        </span>
      </div>
    </footer>
  );
}
