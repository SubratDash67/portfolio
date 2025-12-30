"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface GridLayoutProps {
  children: React.ReactNode;
}

export function GridLayout({ children }: GridLayoutProps) {
  return (
    <div className="grid-container">
      <main className="main-content">{children}</main>
      <SidebarNav />
    </div>
  );
}

// Sidebar Navigation (Desktop Only)
function SidebarNav() {
  const [activeSection, setActiveSection] = useState("hero");
  
  const navItems = [
    { id: "hero", label: "HOME" },
    { id: "projects", label: "PROJECTS" },
    { id: "skills", label: "SKILLS" },
    { id: "about", label: "ABOUT" },
    { id: "contact", label: "CONTACT" },
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
    <nav className="sidebar-nav border-l border-border flex flex-col items-center justify-center gap-8 bg-bg">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`vertical-text font-mono text-xs tracking-[0.2em] uppercase transition-none py-4 ${
            activeSection === item.id
              ? "text-accent"
              : "text-text-muted hover:text-text-primary"
          }`}
        >
          {item.label}
        </a>
      ))}
      
      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-16 bg-border" />
        <span className="font-mono text-[10px] text-text-muted vertical-text">2025</span>
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
    <nav className="mobile-nav lg:hidden">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`mobile-nav-item ${activeSection === item.id ? "active" : ""}`}
        >
          {item.label}
        </a>
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
