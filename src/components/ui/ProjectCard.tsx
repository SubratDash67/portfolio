"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.6, 0.05, 0.01, 0.9] as const,
      }}
      className="group relative"
    >
      <Link href={`/projects/${project.id}`} className="block">
        <div className="h-full p-6 md:p-8 bg-surface rounded-lg hover:bg-surface-elevated transition-all duration-300">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-medium text-text-primary mb-2 group-hover:text-text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-text-tertiary">{project.type}</p>
            </div>
            <span className="text-text-muted group-hover:text-text-primary transition-colors">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </div>

          {/* One-liner */}
          <p className="text-text-secondary mb-6 leading-relaxed text-sm">
            {project.one_liner}
          </p>

          {/* Key Results */}
          {project.evaluation_and_results.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wide mb-3">
                Key Results
              </h4>
              <ul className="space-y-2">
                {project.evaluation_and_results.slice(0, 2).map((result, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="text-text-tertiary mt-0.5 shrink-0">•</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech_stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-background text-text-muted text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.tech_stack.length > 4 && (
              <span className="px-3 py-1 text-text-tertiary text-xs">
                +{project.tech_stack.length - 4} more
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-4 pt-4 border-t border-border-subtle">
            <span className="text-sm text-text-muted group-hover:text-text-secondary transition-colors">
              Read case study →
            </span>
            <div className="flex-1" />
            <div className="flex gap-3">
              {project.links.repo && (
                <button
                  onClick={(e) => handleExternalLink(project.links.repo, e)}
                  className="text-text-muted hover:text-text-primary transition-colors"
                  aria-label="View repository"
                >
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </button>
              )}
              {project.links.demo && (
                <button
                  onClick={(e) => handleExternalLink(project.links.demo!, e)}
                  className="text-text-muted hover:text-text-primary transition-colors"
                  aria-label="View demo"
                >
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
