"use client";

import { useSyncExternalStore } from "react";

/**
 * Hook to detect mobile device - hydration safe
 * Returns false during SSR and initial hydration to avoid mismatch
 * Only returns true after client-side check confirms mobile
 */
export function useIsMobile() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback);
    },
    () => window.innerWidth < 768,
    () => false // Server snapshot - always return false for SSR
  );
}

/**
 * Hook to check if component has mounted (client-side)
 */
const emptySubscribe = () => () => {};

export function useHasMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
