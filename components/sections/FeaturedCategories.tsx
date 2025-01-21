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
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-500",
  },
  {
    icon: Smartphone,
    title: "گوشی هوشمند",
    description: "جدیدترین گوشی‌های هوشمند",
    color: "from-green-500/20 to-green-500/5",
    iconColor: "text-green-500",
  },
  {
    icon: Headphones,
    title: "هدفون و هندزفری",
    description: "محصولات صوتی با کیفیت",
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-500",
  },
];

export default function FeaturedCategories() {
  return (
    <section id="featured" className="py-32">
      <div className="container">
        <SectionHeader
          title="دسته‌بندی‌های محبوب"
          description="محصولات ما را در دسته‌بندی‌های مختلف مشاهده کنید"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-primary/10 hover:border-primary/20 transition-all duration-500">
                <div className="p-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`}
                  >
                    <category.icon
                      className={`w-8 h-8 ${category.iconColor}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
