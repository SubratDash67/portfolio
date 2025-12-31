"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data";
import { useIsMobile } from "@/lib/hooks";

// Contact methods data
const contactMethods = [
  {
    icon: "✉",
    label: "Email",
    value: "subratdash2022@gmail.com",
    href: "mailto:subratdash2022@gmail.com",
    description: "Best for opportunities",
    primary: true,
  },
  {
    icon: "◈",
    label: "GitHub",
    value: "@SubratDash67",
    href: "https://github.com/SubratDash67",
    description: "23+ repositories",
    external: true,
  },
  {
    icon: "◇",
    label: "LinkedIn",
    value: "Subrat Dash",
    href: "https://linkedin.com/in/subrat-dash-sd2026",
    description: "Professional network",
    external: true,
  },
];

export function ContactBrutalist() {
  const { identity } = portfolioData;
  const isMobile = useIsMobile();

  return (
    <section 
      id="contact" 
      className="section overflow-x-hidden px-4 md:px-6 lg:px-8"
      aria-label="Contact"
    >
      {/* Section Header */}
      <div className="section-header">
        <div className="section-header-title">
          <span className="section-header-badge">[CONNECT]</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-text-primary">
            CONTACT
          </h2>
        </div>
        <span className="section-header-meta">
          LET&apos;S TALK
        </span>
      </div>

      {/* Large CTA Heading */}
      <motion.div
        initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-text-primary leading-[0.9]">
          LET&apos;S BUILD
          <br />
          <span className="text-accent-primary">SOMETHING GREAT</span>
        </h3>
        <p className="mt-6 text-text-secondary max-w-xl text-lg">
          Open to full-time opportunities, internships, and interesting 
          collaboration projects in ML engineering and backend systems.
        </p>
      </motion.div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {contactMethods.map((method, index) => (
          <ContactCard
            key={method.label}
            {...method}
            delay={isMobile ? 0 : index * 0.1}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* Availability Banner */}
      <motion.div
        initial={{ opacity: isMobile ? 1 : 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="card-accent bg-bg-elevated p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4">
          <div className="status-dot active" aria-hidden="true" />
          <div>
            <span className="font-mono text-xs text-accent-primary uppercase tracking-wider block mb-1">
              Current Status
            </span>
            <span className="text-text-primary font-medium">
              Available for opportunities starting Summer 2026
            </span>
          </div>
        </div>
        <a 
          href={identity.contact.resume_pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
        >
          Download Resume
          <span aria-hidden="true">↗</span>
        </a>
      </motion.div>

      {/* Location Info */}
      <motion.div
        initial={{ opacity: isMobile ? 1 : 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 pt-6 border-t border-border-subtle"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-accent-tertiary" aria-hidden="true" />
            <span className="font-mono text-sm text-text-muted">
              Based in {identity.location.city}, {identity.location.country}
            </span>
          </div>
          <span className="font-mono text-xs text-text-muted">
            Response time: Usually within 24 hours
          </span>
        </div>
      </motion.div>
    </section>
  );
}

// Contact Card Component
function ContactCard({
  icon,
  label,
  value,
  href,
  description,
  primary = false,
  external = false,
  delay,
  isMobile,
}: {
  icon: string;
  label: string;
  value: string;
  href: string;
  description: string;
  primary?: boolean;
  external?: boolean;
  delay: number;
  isMobile: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`contact-card group ${primary ? 'contact-card-primary' : ''}`}
    >
      {/* Icon */}
      <span className="contact-card-icon text-2xl">
        {icon}
      </span>
      
      {/* Label */}
      <span className="contact-card-label">
        {label}
      </span>
      
      {/* Value */}
      <span className="contact-card-value group-hover:text-accent-primary transition-colors">
        {value}
      </span>
      
      {/* Description */}
      <span className="font-mono text-xs text-text-muted mt-3">
        {description}
      </span>
      
      {/* Arrow indicator */}
      <span className="absolute top-4 right-4 text-text-muted group-hover:text-accent-primary transition-colors">
        {external ? '↗' : '→'}
      </span>
    </motion.a>
  );
}

// Simplified Footer Component
export function FooterBrutalist() {
  const currentYear = new Date().getFullYear();
  const { identity } = portfolioData;

  return (
    <footer 
      className="section-compact bg-bg-elevated border-t border-border px-4 md:px-6 lg:px-8 overflow-x-hidden"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-8">
          {/* Brand */}
          <div>
            <h4 className="font-display text-2xl text-text-primary mb-2">
              SUBRAT DASH
            </h4>
            <p className="font-mono text-xs text-text-muted">
              ML Systems • Backend Engineering • Data Pipelines
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              <li>
                <a 
                  href="#projects" 
                  className="font-mono text-xs text-text-muted hover:text-accent-primary transition-colors uppercase"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="font-mono text-xs text-text-muted hover:text-accent-primary transition-colors uppercase"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="font-mono text-xs text-text-muted hover:text-accent-primary transition-colors uppercase"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href={identity.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-text-muted hover:text-accent-primary transition-colors uppercase"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 pb-4 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-text-muted">
              © {currentYear} {identity.full_name}
            </span>
            <span className="font-mono text-xs text-text-muted hidden sm:inline">•</span>
            <span className="font-mono text-xs text-text-muted hidden sm:inline">
              Built with Next.js, Tailwind & Framer Motion
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent-primary">v2.0</span>
            <span className="w-2 h-2 bg-success" aria-hidden="true" />
          </div>
        </div>
      </div>
    </footer>
  );
}
