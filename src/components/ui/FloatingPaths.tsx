"use client";

import { motion } from "framer-motion";
import { prefersReducedMotion } from "@/lib/utils";

function FloatingPaths({ position }: { position: number }) {
  const reduce = prefersReducedMotion();
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.8 + i * 0.04,
  }));

  return (
    <svg className="bg-paths__svg" viewBox="0 0 696 316" fill="none">
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={0.1 + path.id * 0.03}
          initial={{ pathLength: 0.3, opacity: 0.6 }}
          animate={
            reduce
              ? { pathLength: 1, opacity: 0.5 }
              : { pathLength: 1, opacity: [0.3, 0.6, 0.3], pathOffset: [0, 1, 0] }
          }
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 20 + Math.random() * 10, repeat: Infinity, ease: "linear" }
          }
        />
      ))}
    </svg>
  );
}

/**
 * Fondo de trazos animados (adaptado de background-paths) en el color de
 * marca. Pensado como fondo absoluto de una sección.
 */
export function BackgroundPaths() {
  return (
    <div className="bg-paths" aria-hidden="true">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}

export default BackgroundPaths;
