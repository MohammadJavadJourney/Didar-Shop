"use client";

import { motion } from "framer-motion";
import { Users, ShoppingBag, Award, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/ui/section-header";

const stats = [
  {
    icon: Users,
    value: "+۱۰,۰۰۰",
    label: "مشتری راضی",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: ShoppingBag,
    value: "+۵۰,۰۰۰",
    label: "سفارش موفق",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Award,
    value: "۵ سال",
    label: "سابقه فعالیت",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Truck,
    value: "۲۴ ساعته",
    label: "ارسال سریع",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

export default function Stats() {
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
          title="دیدار در یک نگاه"
          description="آمار و ارقام فروشگاه دیدار"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 text-center h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mb-4 inline-block"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl ${stat.bgColor} flex items-center justify-center mx-auto`}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </motion.div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
