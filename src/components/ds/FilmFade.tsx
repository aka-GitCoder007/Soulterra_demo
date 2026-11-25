import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FilmFadeProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

const EASE_FILM = [0.22, 1, 0.36, 1] as const;

export function FilmFade({
  children,
  delay = 0,
  y = 14,
  className,
}: FilmFadeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, delay, ease: EASE_FILM }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

