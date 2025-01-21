"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

export default function Newsletter() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-1/4 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-1/4 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <SectionHeader
          title="خبرنامه دیدار"
          description="برای اطلاع از آخرین تخفیف‌ها و محصولات جدید در خبرنامه ما عضو شوید"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="relative">
            <Input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="pr-4 pl-12 h-14 text-lg rounded-full glass-hover"
            />
            <Button
              size="lg"
              className="absolute left-1 top-1 rounded-full px-8"
            >
              عضویت
              <Send className="w-5 h-5 mr-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
