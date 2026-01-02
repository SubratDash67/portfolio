"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioData, socialNavItems, mainNavItems } from "@/data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { identity } = portfolioData;

  return (
    <footer className="relative border-t border-border" role="contentinfo">
      <div className="w-full max-w-(--max-width-content) mx-auto px-6 md:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 md:py-24">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-24">
            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="md:col-span-3"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-6">
                Navigate
              </h3>
              <nav className="space-y-3" aria-label="Footer navigation">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                    className="block font-mono text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="md:col-span-3"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-6">
                Connect
              </h3>
              <div className="space-y-3">
                {socialNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="block font-mono text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Status */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="md:col-span-3"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-6">
                Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500" />
                  <span className="font-mono text-sm text-text-muted">
                    Open to collaborations.
                  </span>
                </div>
                <p className="font-mono text-sm text-text-muted">
                  {identity.location.city}, {identity.location.country}
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="md:col-span-3"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-6">
                Direct
              </h3>
              <a
                href={`mailto:${identity.contact.email}`}
                className="font-mono text-sm text-text-muted hover:text-text-primary transition-colors block break-all"
              >
                {identity.contact.email}
              </a>
            </motion.div>
          </div>

          {/* Signature / Stamp Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="border-t border-border pt-16 md:pt-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              {/* Large Signature Name */}
              <div className="lg:col-span-8">
                <motion.h2
                  className="font-serif text-[clamp(3rem,10vw,7rem)] leading-[0.85] tracking-tight text-text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {identity.preferred_name}
                </motion.h2>
                <p className="font-mono text-sm text-text-muted mt-4 max-w-md">
                  {identity.headline}
                </p>
              </div>

              {/* Stamp */}
              <motion.div
                className="lg:col-span-4 lg:text-right"
                initial={{ opacity: 0, rotate: -3 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="inline-block border-2 border-accent p-4 md:p-6 transform rotate-[-2deg]">
                  <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-accent mb-1">
                    Engineered With Care
                  </div>
                  <div className="font-serif text-xl md:text-2xl text-text-primary">
                    {currentYear}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mt-2">
                    Version 3.0
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-xs text-text-muted">
              © {currentYear} {identity.full_name}. All rights reserved.
            </p>
            <p className="font-mono text-xs text-text-muted">
              Built with precision using Next.js & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
