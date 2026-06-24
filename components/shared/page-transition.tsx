"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

/** Smooth fade-up transition applied on initial page mount. */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      {children}
    </motion.div>
  );
}
