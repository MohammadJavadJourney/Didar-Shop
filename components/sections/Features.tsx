"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Zap,
  Shield,
  Truck,
  CreditCard,
  Package,
  HeadphonesIcon,
} from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

const features = [
  {
    icon: Zap,
    title: "تحویل سریع",
    description: "ارسال سریع به تمام نقاط کشور با بسته‌بندی اصولی و ایمن",
    gradient: "from-amber-500 to-yellow-500",
    darkGradient: "dark:from-amber-600 dark:to-yellow-600",
    shadowColor: "shadow-amber-500/20",
  },
  {
    icon: Shield,
    title: "ضمانت اصالت",
    description: "تضمین اصالت و گارانتی تمامی محصولات",
    gradient: "from-green-500 to-emerald-500",
    darkGradient: "dark:from-green-600 dark:to-emerald-600",
    shadowColor: "shadow-green-500/20",
  },
  {
    icon: CreditCard,
    title: "پرداخت امن",
    description: "پرداخت مطمئن با درگاه‌های معتبر بانکی",
    gradient: "from-blue-500 to-cyan-500",
    darkGradient: "dark:from-blue-600 dark:to-cyan-600",
    shadowColor: "shadow-blue-500/20",
  },
  {
    icon: Package,
    title: "تنوع محصولات",
    description: "گسترده‌ترین مجموعه محصولات دیجیتال",
    gradient: "from-violet-500 to-purple-500",
    darkGradient: "dark:from-violet-600 dark:to-purple-600",
    shadowColor: "shadow-violet-500/20",
  },
  {
    icon: HeadphonesIcon,
    title: "پشتیبانی ۲۴/۷",
    description: "پاسخگویی و پشتیبانی در تمام ساعات شبانه‌روز",
    gradient: "from-pink-500 to-rose-500",
    darkGradient: "dark:from-pink-600 dark:to-rose-600",
    shadowColor: "shadow-pink-500/20",
  },
  {
    icon: Truck,
    title: "ارسال رایگان",
    description: "ارسال رایگان برای سفارش‌های بالای ۵ میلیون تومان",
    gradient: "from-orange-500 to-red-500",
    darkGradient: "dark:from-orange-600 dark:to-red-600",
    shadowColor: "shadow-orange-500/20",
  },
];

export default function Features() {
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
          title="چرا دیدار؟"
          description="مزایای خرید از فروشگاه دیدار"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden h-full bg-gradient-to-b from-background/50 to-background border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="mb-6 inline-block"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} ${feature.darkGradient} ${feature.shadowColor} p-3 shadow-lg`}
                    >
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>

                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} ${feature.darkGradient}`}
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
