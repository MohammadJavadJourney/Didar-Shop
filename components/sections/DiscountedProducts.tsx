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
  },
  {
    id: 2,
    name: "Samsung S24 Ultra",
    originalPrice: "۸۹,۰۰۰,۰۰۰",
    discountedPrice: "۷۹,۰۰۰,۰۰۰",
    discount: "۱۲٪",
    rating: 4.9,
    image: "/pictures/products/samsung-main.jpg",
  },
  {
    id: 3,
    name: "Bose QuietComfort",
    originalPrice: "۲۵,۰۰۰,۰۰۰",
    discountedPrice: "۲۱,۰۰۰,۰۰۰",
    discount: "۱۵٪",
    rating: 4.7,
    image: "/pictures/products/bose-main.jpg",
  },
];

export default function DiscountedProducts() {
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
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

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
              تخفیف‌های ویژه
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
            بهترین محصولات با قیمت‌های استثنایی
          </motion.p>
        </div>

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
                <Card className="overflow-hidden h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                  <div className="relative h-[300px] group">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Badge
                      variant="destructive"
                      className="absolute top-4 right-4 animate-pulse"
                    >
                      {product.discount} تخفیف
                    </Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="space-y-1">
                        <span className="line-through text-sm text-muted-foreground">
                          {product.originalPrice}
                        </span>
                        <div className="text-lg font-bold text-primary">
                          {product.discountedPrice}
                        </div>
                      </div>
                      <Button size="sm" className="rounded-full">
                        <ShoppingCart className="w-4 h-4 ml-2" />
                        افزودن به سبد
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
