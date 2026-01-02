"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

interface GridLayoutProps {
  children: React.ReactNode;
}

export function GridLayout({ children }: GridLayoutProps) {
  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      <div className="grid-container overflow-x-hidden max-w-full w-full">
        <main className="main-content overflow-x-hidden max-w-full w-full">{children}</main>
        <SidebarNav />
      </div>
    </>
  );
}

// Scroll Progress Indicator
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="scroll-progress">
      <motion.div 
        className="scroll-progress-bar"
        style={{ scaleX }}
      />
    </div>
  );
}

// Sidebar Navigation (Desktop Only)
function SidebarNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  
  const navItems = [
    { id: "hero", label: "HOME", icon: "◈" },
    { id: "projects", label: "WORK", icon: "◇" },
    { id: "skills", label: "STACK", icon: "⚙" },
    { id: "about", label: "INFO", icon: "◎" },
    { id: "contact", label: "CONNECT", icon: "✉" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className="sidebar-nav border-l border-border-subtle flex flex-col items-center justify-center gap-6 bg-bg"
      aria-label="Main navigation"
    >
      {/* Progress indicator line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border-subtle">
        <motion.div 
          className="w-full bg-accent-primary origin-top"
          style={{ scaleY: scrollYProgress }}
        />
      </div>
      
      {navItems.map((item) => (
        <Link
          key={item.id}
          href={`/#${item.id}`}
          className={`vertical-text font-mono text-xs tracking-[0.15em] uppercase transition-colors py-3 flex items-center gap-2 ${
            activeSection === item.id
              ? "text-accent-primary"
              : "text-text-muted hover:text-text-primary"
          }`}
          aria-current={activeSection === item.id ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
      
      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-border-subtle" />
        <span className="font-mono text-xs text-text-muted vertical-text">2026</span>
      </div>
    </nav>
  );
}

// Mobile Bottom Navigation
export function MobileNav() {
  const [activeSection, setActiveSection] = useState("hero");
  
  const navItems = [
    { id: "hero", label: "HOME" },
    { id: "projects", label: "WORK" },
    { id: "skills", label: "SKILLS" },
    { id: "contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "skills", "about", "contact"].map(id => 
        document.getElementById(id)
      );
      const scrollPos = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          const navId = ["hero", "projects", "skills", "about", "contact"][i];
          if (navId === "about") {
            setActiveSection("skills");
          } else {
            setActiveSection(navId);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="mobile-nav lg:hidden" aria-label="Mobile navigation">
      {navItems.map((item) => (
        <Link
          key={item.id}
          href={`/#${item.id}`}
          className={`mobile-nav-item ${activeSection === item.id ? "active" : ""}`}
          aria-current={activeSection === item.id ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

// Velocity-based Skew Effect
export function SkewContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [velocity, setVelocity] = useState(0);
  
  useEffect(() => {
    let lastScrollY = 0;
    let lastTime = Date.now();
    let rafId: number;
    
    const updateVelocity = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime > 0) {
        const newVelocity = deltaY / deltaTime;
        setVelocity(prev => prev * 0.8 + newVelocity * 0.2); // Smooth
      }
      
      lastScrollY = currentScrollY;
      lastTime = currentTime;
      rafId = requestAnimationFrame(updateVelocity);
    };
    
    rafId = requestAnimationFrame(updateVelocity);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const skewValue = Math.max(-3, Math.min(3, velocity * 50));

  return (
    <motion.div
      ref={containerRef}
      className="skew-on-scroll"
      style={{
        transform: `skewY(${skewValue}deg)`,
      }}
    >
      {children}
    </motion.div>
  );
}
