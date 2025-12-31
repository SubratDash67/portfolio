"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { mainNavItems, socialNavItems } from "@/data";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-100 ${
        isScrolled ? "bg-background" : "bg-transparent"
      }`}
      role="banner"
    >
      {/* Main Nav Bar */}
      <div className="border-b border-border">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link
              href="/"
              className="font-mono text-xs uppercase tracking-[0.2em] text-text-primary hover:text-accent transition-colors"
            >
              Subrat Dash
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {mainNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Separator */}
              <span className="w-px h-4 bg-border" />
              
              {/* Social Links */}
              {socialNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="nav-link"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="font-mono text-xs uppercase tracking-wider">
                {mobileMenuOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="md:hidden bg-background border-b border-border"
          >
            <nav className="px-6 py-6 space-y-4">
              {mainNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-mono text-sm uppercase tracking-wider text-text-secondary hover:text-text-primary py-2 border-b border-border"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-4 flex gap-6">
                {socialNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="font-mono text-xs uppercase tracking-wider text-text-muted hover:text-text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
