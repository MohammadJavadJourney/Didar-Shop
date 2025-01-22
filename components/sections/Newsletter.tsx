"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

export default function Newsletter() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative">
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
              className="h-14 pr-6 pl-36 text-lg rounded-full bg-gradient-to-b from-background/50 to-background border-0 shadow-xl hover:shadow-2xl transition-all duration-500"
            />
            <Button
              size="lg"
              className="absolute left-2 top-2 rounded-full px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 border-0 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
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
