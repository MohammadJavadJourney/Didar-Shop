import Hero from "@/components/sections/Hero";
import FeaturedCategories from "@/components/sections/FeaturedCategories";
import DiscountedProducts from "@/components/sections/DiscountedProducts";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <DiscountedProducts />
      <Features />
      <Stats />
      <Testimonials />
      <Newsletter />
      <Contact />
    </main>
  );
}
