"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Send } from "lucide-react";

const footerLinks = [
  {
    title: "دسترسی سریع",
    links: [
      { name: "محصولات", href: "#" },
      { name: "درباره ما", href: "#" },
      { name: "تماس با ما", href: "#" },
      { name: "وبلاگ", href: "#" },
    ],
  },
  {
    title: "خدمات مشتریان",
    links: [
      { name: "راهنمای خرید", href: "#" },
      { name: "شیوه‌های پرداخت", href: "#" },
      { name: "شرایط ارسال", href: "#" },
      { name: "گارانتی محصولات", href: "#" },
    ],
  },
  {
    title: "اطلاعات تماس",
    links: [
      { name: "تهران، خیابان ولیعصر", href: "#" },
      { name: "۰۲۱-۲۲۳۳۴۴۵۵", href: "tel:02122334455" },
      { name: "info@didar.com", href: "mailto:info@didar.com" },
    ],
  },
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-card">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />

      <div className="relative pt-16 pb-6 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gradient">دیدار</h2>
              <p className="text-muted-foreground">
                فروشگاه اینترنتی محصولات دیجیتال با ضمانت اصالت کالا و گارانتی
                معتبر
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link key={social.name} href={social.href}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full glass-hover"
                    >
                      <social.icon className="w-4 h-4" />
                    </Button>
                  </Link>
                ))}
              </div>
            </motion.div>

            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-bold">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-sm text-muted-foreground"
              >
                © ۱۴۰۲ دیدار. تمامی حقوق محفوظ است.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="relative flex-1">
                  <Input
                    type="email"
                    placeholder="عضویت در خبرنامه"
                    className="pr-4 pl-12 rounded-full glass-hover"
                  />
                  <Button
                    size="icon"
                    className="absolute left-1 top-1 rounded-full"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
