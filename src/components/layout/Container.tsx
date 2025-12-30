/**
 * Layout wrapper components
 */

import { cn } from "@/lib";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "prose" | "narrow";
}

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-(--max-width-content)",
    prose: "max-w-(--max-width-prose)",
    narrow: "max-w-(--max-width-narrow)",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-6 md:px-8 lg:px-12",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 lg:py-32", className)}
    >
      {children}
    </section>
  );
}

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
}

export function Grid({ children, className, cols = 2 }: GridProps) {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-6 md:gap-8", colClasses[cols], className)}>
      {children}
    </div>
  );
}
