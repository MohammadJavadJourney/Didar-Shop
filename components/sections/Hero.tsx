"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <motion.section
      style={{ opacity, y }}
      className="relative min-h-[90vh] flex items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="relative">
              <span className="relative z-10">دیدار</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 -z-10 rounded-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              />
            </span>
            <br />
            <span className="text-2xl md:text-4xl text-muted-foreground">
              فروشگاه محصولات دیجیتال
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            خرید مطمئن با ضمانت اصالت کالا و گارانتی معتبر
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4"
          >
            <Button size="lg" className="text-lg px-8">
              شروع خرید
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              درباره ما
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link href="#featured">
          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce rounded-full h-12 w-12"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
}
