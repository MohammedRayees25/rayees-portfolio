"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/data";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex h-20 w-20 items-center justify-center"
            >
              <span className="absolute inset-0 animate-spin rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-400 to-violet-500 [animation-duration:2s]" />
              <span className="absolute inset-[3px] rounded-2xl bg-background" />
              <span className="relative font-mono text-2xl font-bold text-gradient">
                MR
              </span>
            </motion.div>
            <div className="h-1 w-44 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-sky-500 to-violet-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {SITE.shortName}.dev
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
