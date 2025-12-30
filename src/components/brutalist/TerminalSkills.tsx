"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { portfolioData } from "@/data";

export function TerminalSkills() {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "LANGUAGES",
      prompt: "$ cat /skills/languages",
      items: skills.languages.map(l => l.name),
    },
    {
      title: "FRAMEWORKS",
      prompt: "$ ls /tools/frameworks",
      items: skills.frameworks_and_tools.map(f => f.name),
    },
    {
      title: "ML/DATA",
      prompt: "$ grep -r 'ml' /expertise",
      items: skills.data_and_ml,
    },
    {
      title: "SYSTEMS",
      prompt: "$ ps aux | grep systems",
      items: skills.systems_and_concepts,
    },
  ];

  return (
    <section id="skills" className="section bg-bg">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-terminal-green/30">
        <div className="flex items-center gap-4">
          <span className="font-mono text-terminal-green text-xs">[TERM]</span>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary">
            TECHNICAL STACK
          </h2>
        </div>
        <span className="font-mono text-xs text-terminal-green">
          OUTPUT: READY
        </span>
      </div>

      {/* Terminal Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, index) => (
          <TerminalBox
            key={category.title}
            title={category.title}
            prompt={category.prompt}
            items={category.items}
            delay={index * 0.15}
          />
        ))}
      </div>

      {/* System Info Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 pt-4 border-t border-terminal-green/30 font-mono text-xs text-terminal-green/60"
      >
        <p>// LAST UPDATED: 2025-01-01 // KERNEL: ML-SYSTEMS v3.0</p>
      </motion.div>
    </section>
  );
}

function TerminalBox({ 
  title, 
  prompt, 
  items, 
  delay 
}: { 
  title: string; 
  prompt: string; 
  items: string[]; 
  delay: number;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;

    const fullText = prompt;
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [inView, prompt]);

  return (
    <motion.div
      className="terminal-box"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      onViewportEnter={() => setInView(true)}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-terminal-green/30">
        <div className="w-2 h-2 bg-terminal-green" />
        <span className="font-mono text-[10px] text-terminal-green uppercase tracking-wider">
          {title}
        </span>
      </div>

      {/* Prompt Line */}
      <div className="mb-3">
        <span className="prompt">
          {displayedText}
          {isTyping && <span className="typing-cursor" />}
        </span>
      </div>

      {/* Output */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isTyping ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="output space-y-1"
      >
        {items.map((item, i) => (
          <div key={item} className="flex items-center gap-2">
            <span className="text-terminal-green/50">→</span>
            <span className="text-terminal-green">{item}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
