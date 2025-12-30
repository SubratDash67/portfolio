"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TextScrambleProps {
  texts: string[];
  className?: string;
  scrambleSpeed?: number;
  holdDuration?: number;
}

const chars = "!<>-_\\/[]{}—=+*^?#_ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function TextScramble({
  texts,
  className = "",
  scrambleSpeed = 30,
  holdDuration = 3000,
}: TextScrambleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_isScrambling, setIsScrambling] = useState(false);

  const scrambleText = useCallback((targetText: string) => {
    setIsScrambling(true);
    let iteration = 0;
    const maxIterations = targetText.length;

    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split("")
          .map((char, idx) => {
            if (idx < iteration) {
              return char;
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setIsScrambling(false);
        setDisplayText(targetText);
      }

      iteration += 1 / 3;
    }, scrambleSpeed);

    return () => clearInterval(interval);
  }, [scrambleSpeed]);

  // Effect to scramble text when currentIndex changes
  useEffect(() => {
    const cleanup = scrambleText(texts[currentIndex]);
    return cleanup;
  }, [currentIndex, texts, scrambleText]);

  // Effect to set up rotation interval
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, holdDuration);

    return () => {
      clearInterval(rotationInterval);
    };
  }, [texts.length, holdDuration]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        className={`inline-block font-mono ${className}`}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
      >
        {displayText}
        <span className="animate-pulse text-accent">_</span>
      </motion.span>
    </AnimatePresence>
  );
}
