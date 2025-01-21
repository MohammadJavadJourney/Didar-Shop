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
  },
  {
    id: 2,
    name: "سارا احمدی",
    role: "طراح گرافیک",
    image: "/pictures/testimonials/2.jpg",
    content:
      "سرعت ارسال و بسته‌بندی محصولات بسیار حرفه‌ای است. قطعاً باز هم خرید خواهم کرد.",
    rating: 5,
  },
  {
    id: 3,
    name: "محمد رضایی",
    role: "عکاس",
    image: "/pictures/testimonials/3.jpg",
    content:
      "پشتیبانی دیدار بسیار عالی است. به تمام سؤالات من با دقت و حوصله پاسخ دادند.",
    rating: 4,
  },
];

export default function Testimonials() {
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
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
