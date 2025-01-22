"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const y = useTransform(scrollY, [0, 400], [0, 50]);

  return (
    <motion.section
      style={{ opacity, scale, y }}
      className="relative min-h-[90vh] flex items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background/80" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-primary/30 to-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            <span className="relative inline-block">
              <span className="relative z-10">دیدار</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent -z-10 rounded-2xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-muted-foreground mt-4 block">
              فروشگاه محصولات دیجیتال
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12"
          >
            خرید مطمئن با ضمانت اصالت کالا و گارانتی معتبر
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            <Button
              size="lg"
              className="text-lg h-14 px-8 sm:px-12 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105"
            >
              شروع خرید
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg h-14 px-8 sm:px-12 rounded-full border-2 hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
            >
              درباره ما
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <Link href="#featured">
          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce rounded-full h-12 w-12 bg-background/50 backdrop-blur-sm hover:bg-background/80"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
}
