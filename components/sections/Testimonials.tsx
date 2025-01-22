"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SectionHeader from "@/components/ui/section-header";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "علی محمدی",
    role: "برنامه‌نویس",
    image: "/pictures/testimonials/1.jpg",
    content:
      "تجربه خرید از دیدار عالی بود. کیفیت محصولات و خدمات پس از فروش فوق‌العاده است.",
    rating: 5,
    gradient: "from-blue-500 to-cyan-500",
    darkGradient: "dark:from-blue-600 dark:to-cyan-600",
    shadowColor: "shadow-blue-500/20",
  },
  {
    id: 2,
    name: "سارا احمدی",
    role: "طراح گرافیک",
    image: "/pictures/testimonials/2.jpg",
    content:
      "سرعت ارسال و بسته‌بندی محصولات بسیار حرفه‌ای است. قطعاً باز هم خرید خواهم کرد.",
    rating: 5,
    gradient: "from-violet-500 to-purple-500",
    darkGradient: "dark:from-violet-600 dark:to-purple-600",
    shadowColor: "shadow-violet-500/20",
  },
  {
    id: 3,
    name: "محمد رضایی",
    role: "عکاس",
    image: "/pictures/testimonials/3.jpg",
    content:
      "پشتیبانی دیدار بسیار عالی است. به تمام سؤالات من با دقت و حوصله پاسخ دادند.",
    rating: 4,
    gradient: "from-amber-500 to-orange-500",
    darkGradient: "dark:from-amber-600 dark:to-orange-600",
    shadowColor: "shadow-amber-500/20",
  },
];

export default function Testimonials() {
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
          title="نظرات مشتریان"
          description="آنچه مشتریان درباره دیدار می‌گویند"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          dir="rtl"
          className="!pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="group relative overflow-hidden h-full bg-gradient-to-b from-background/50 to-background border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Avatar className="h-14 w-14 ring-2 ring-border">
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <AvatarFallback
                            className={`bg-gradient-to-br ${testimonial.gradient} ${testimonial.darkGradient}`}
                          >
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div>
                        <div className="font-bold text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 fill-current text-yellow-500`}
                          />
                        )
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {testimonial.content}
                    </p>

                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.1 }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} ${testimonial.darkGradient}`}
                      />
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
