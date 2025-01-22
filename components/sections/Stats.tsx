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
    gradient: "from-blue-500 to-cyan-500",
    darkGradient: "dark:from-blue-600 dark:to-cyan-600",
    shadowColor: "shadow-blue-500/20",
  },
  {
    icon: ShoppingBag,
    value: "+۵۰,۰۰۰",
    label: "سفارش موفق",
    gradient: "from-violet-500 to-purple-500",
    darkGradient: "dark:from-violet-600 dark:to-purple-600",
    shadowColor: "shadow-violet-500/20",
  },
  {
    icon: Award,
    value: "۵ سال",
    label: "سابقه فعالیت",
    gradient: "from-amber-500 to-orange-500",
    darkGradient: "dark:from-amber-600 dark:to-orange-600",
    shadowColor: "shadow-amber-500/20",
  },
  {
    icon: Truck,
    value: "۲۴ ساعته",
    label: "ارسال سریع",
    gradient: "from-green-500 to-emerald-500",
    darkGradient: "dark:from-green-600 dark:to-emerald-600",
    shadowColor: "shadow-green-500/20",
  },
];

export default function Stats() {
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
          title="دیدار در یک نگاه"
          description="آمار و ارقام فروشگاه دیدار"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden h-full bg-gradient-to-b from-background/50 to-background border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="mb-6 inline-block"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} ${stat.darkGradient} ${stat.shadowColor} p-3 shadow-lg mx-auto`}
                    >
                      <stat.icon className="w-full h-full text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} ${stat.darkGradient}`}
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
