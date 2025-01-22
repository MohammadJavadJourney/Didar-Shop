"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SectionHeader from "@/components/ui/section-header";

const contactInfo = [
  {
    icon: MapPin,
    title: "آدرس",
    details: "تهران، خیابان ولیعصر، مرکز خرید دیدار",
    link: "https://maps.google.com",
    linkText: "مشاهده در نقشه",
    gradient: "from-blue-500 to-cyan-500",
    darkGradient: "dark:from-blue-600 dark:to-cyan-600",
    shadowColor: "shadow-blue-500/20",
  },
  {
    icon: Phone,
    title: "تلفن",
    details: "۰۲۱-۲۲۳۳۴۴۵۵",
    copyable: true,
    gradient: "from-violet-500 to-purple-500",
    darkGradient: "dark:from-violet-600 dark:to-purple-600",
    shadowColor: "shadow-violet-500/20",
  },
  {
    icon: Mail,
    title: "ایمیل",
    details: "info@didar.com",
    copyable: true,
    gradient: "from-amber-500 to-orange-500",
    darkGradient: "dark:from-amber-600 dark:to-orange-600",
    shadowColor: "shadow-amber-500/20",
  },
];

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

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
          title="تماس با ما"
          description="در صورت نیاز به راهنمایی با ما در تماس باشید"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden h-full bg-gradient-to-b from-background/50 to-background border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="mb-6 inline-block"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} ${item.darkGradient} ${item.shadowColor} p-3 shadow-lg mx-auto`}
                    >
                      <item.icon className="w-full h-full text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-6">{item.details}</p>

                  {item.link && (
                    <Button
                      className={`rounded-full w-full bg-gradient-to-r ${item.gradient} ${item.darkGradient} border-0 ${item.shadowColor} hover:scale-105 transition-transform duration-300`}
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      {item.linkText}
                      <ExternalLink className="w-4 h-4 mr-2" />
                    </Button>
                  )}

                  {item.copyable && (
                    <Button
                      variant="outline"
                      className={`rounded-full w-full hover:bg-gradient-to-r hover:text-white ${item.gradient} ${item.darkGradient} transition-all duration-300 hover:scale-105 hover:border-transparent`}
                      onClick={() => handleCopy(item.details, item.title)}
                    >
                      {copiedField === item.title ? (
                        <>
                          کپی شد
                          <Check className="w-4 h-4 mr-2 text-green-500" />
                        </>
                      ) : (
                        <>
                          کپی کردن
                          <Copy className="w-4 h-4 mr-2" />
                        </>
                      )}
                    </Button>
                  )}

                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} ${item.darkGradient}`}
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
