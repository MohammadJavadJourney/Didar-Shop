"use client";

import { motion } from "framer-motion";
import { Laptop, Smartphone, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/ui/section-header";

const categories = [
  {
    icon: Laptop,
    title: "لپ‌تاپ",
    description: "انواع لپ‌تاپ‌های حرفه‌ای و گیمینگ",
    gradient: "from-blue-500 to-cyan-500",
    darkGradient: "dark:from-blue-600 dark:to-cyan-600",
    shadowColor: "shadow-blue-500/20",
  },
  {
    icon: Smartphone,
    title: "گوشی هوشمند",
    description: "جدیدترین گوشی‌های هوشمند",
    gradient: "from-violet-500 to-purple-500",
    darkGradient: "dark:from-violet-600 dark:to-purple-600",
    shadowColor: "shadow-violet-500/20",
  },
  {
    icon: Headphones,
    title: "هدفون و هندزفری",
    description: "محصولات صوتی با کیفیت",
    gradient: "from-pink-500 to-rose-500",
    darkGradient: "dark:from-pink-600 dark:to-rose-600",
    shadowColor: "shadow-pink-500/20",
  },
];

export default function FeaturedCategories() {
  return (
    <section id="featured" className="section-padding relative overflow-hidden">
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
          title="دسته‌بندی‌های محبوب"
          description="محصولات ما را در دسته‌بندی‌های مختلف مشاهده کنید"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative h-[400px] overflow-hidden border-0 bg-gradient-to-b from-background/50 to-background shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                <div className="relative h-full p-8 flex flex-col items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="mb-8"
                  >
                    <div
                      className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${category.gradient} ${category.darkGradient} ${category.shadowColor} p-6 shadow-lg`}
                    >
                      <category.icon className="w-full h-full text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    <h3 className="text-2xl font-bold mb-4">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      {category.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-2 rounded-full bg-gradient-to-r ${category.gradient} ${category.darkGradient} text-white shadow-lg ${category.shadowColor} transition-all duration-300`}
                    >
                      مشاهده محصولات
                    </motion.button>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} ${category.darkGradient}`}
                    />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
