"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const discountedProducts = [
  {
    id: 1,
    name: "MacBook Pro M3",
    originalPrice: "۱۸۵,۰۰۰,۰۰۰",
    discountedPrice: "۱۶۵,۰۰۰,۰۰۰",
    discount: "۱۰٪",
    rating: 4.8,
    image: "/pictures/products/macbook-main.jpg",
    gradient: "from-blue-500 to-cyan-500",
    darkGradient: "dark:from-blue-600 dark:to-cyan-600",
    shadowColor: "shadow-blue-500/20",
  },
  {
    id: 2,
    name: "Samsung S24 Ultra",
    originalPrice: "۸۹,۰۰۰,۰۰۰",
    discountedPrice: "۷۹,۰۰۰,۰۰۰",
    discount: "۱۲٪",
    rating: 4.9,
    image: "/pictures/products/samsung-main.jpg",
    gradient: "from-violet-500 to-purple-500",
    darkGradient: "dark:from-violet-600 dark:to-purple-600",
    shadowColor: "shadow-violet-500/20",
  },
  {
    id: 3,
    name: "Bose QuietComfort",
    originalPrice: "۲۵,۰۰۰,۰۰۰",
    discountedPrice: "۲۱,۰۰۰,۰۰۰",
    discount: "۱۵٪",
    rating: 4.7,
    image: "/pictures/products/bose-main.jpg",
    gradient: "from-pink-500 to-rose-500",
    darkGradient: "dark:from-pink-600 dark:to-rose-600",
    shadowColor: "shadow-pink-500/20",
  },
];

export default function DiscountedProducts() {
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
          title="تخفیف‌های ویژه"
          description="بهترین محصولات با قیمت‌های استثنایی"
        />

        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="!pb-16"
        >
          {discountedProducts.map((product) => (
            <SwiperSlide
              key={product.id}
              className="!w-[380px] sm:!w-[450px] !h-auto"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="p-3"
              >
                <Card className="group relative overflow-hidden h-full bg-gradient-to-b from-background/50 to-background border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-[300px] group">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Badge
                      className={`absolute top-4 right-4 bg-gradient-to-r ${product.gradient} ${product.darkGradient} border-0 ${product.shadowColor}`}
                    >
                      {product.discount} تخفیف
                    </Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star
                          className={`w-5 h-5 fill-current text-yellow-500`}
                        />
                        <span className="text-sm font-medium">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="block text-sm text-muted-foreground line-through">
                          {product.originalPrice} تومان
                        </span>
                        <span className="block text-lg font-bold">
                          {product.discountedPrice} تومان
                        </span>
                      </div>
                      <Button
                        className={`rounded-full bg-gradient-to-r ${product.gradient} ${product.darkGradient} border-0 ${product.shadowColor} hover:scale-105 transition-transform duration-300`}
                      >
                        <ShoppingCart className="w-5 h-5 ml-2" />
                        افزودن به سبد
                      </Button>
                    </div>
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
