"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "آدرس",
    details: "تهران، خیابان ولیعصر، مرکز خرید دیدار",
    link: "https://maps.google.com",
    linkText: "مشاهده در نقشه",
  },
  {
    icon: Phone,
    title: "تلفن",
    details: "۰۲۱-۲۲۳۳۴۴۵۵",
    copyable: true,
  },
  {
    icon: Mail,
    title: "ایمیل",
    details: "info@didar.com",
    copyable: true,
  },
];

export default function Contact() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative inline-block mb-4"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              تماس با ما
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
            در صورت نیاز به راهنمایی با ما در تماس باشید
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mb-4 inline-block"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.details}</p>
                {item.link && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full w-full glass-hover"
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    {item.linkText}
                    <ExternalLink className="w-4 h-4 mr-2" />
                  </Button>
                )}
                {item.copyable && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full w-full glass-hover"
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
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
