"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        <div className="h-16 w-16">
          <motion.span
            className="absolute h-full w-full rounded-full border-2 border-primary"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
              rotate: 360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.span
            className="absolute h-full w-full rounded-full border-2 border-primary"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 1, 0.5],
              rotate: -360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.25,
            }}
          />
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          لطفاً صبر کنید...
        </div>
      </motion.div>
    </div>
  );
}
