"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Zap,
  Shield,
  Truck,
  CreditCard,
  Package,
  HeadphonesIcon,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "تحویل سریع",
    description: "ارسال سریع به تمام نقاط کشور با بسته‌بندی اصولی و ایمن",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Shield,
    title: "ضمانت اصالت",
    description: "تضمین اصالت و گارانتی تمامی محصولات",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: CreditCard,
    title: "پرداخت امن",
    description: "پرداخت مطمئن با درگاه‌های معتبر بانکی",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Package,
    title: "تنوع محصولات",
    description: "گسترده‌ترین مجموعه محصولات دیجیتال",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: HeadphonesIcon,
    title: "پشتیبانی ۲۴/۷",
    description: "پاسخگویی و پشتیبانی در تمام ساعات شبانه‌روز",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Truck,
    title: "ارسال رایگان",
    description: "ارسال رایگان برای سفارش‌های بالای ۵ میلیون تومان",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

export default function Features() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section className="py-32 relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
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
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative inline-block mb-4"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              چرا دیدار؟
            </h2>
            <motion.div
              className="absolute -inset-4 border border-primary/20 rounded-2xl -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground"
          >
            مزایای خرید از فروشگاه دیدار
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
