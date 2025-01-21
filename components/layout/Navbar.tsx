"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theme-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "محصولات",
    items: [
      {
        title: "لپ‌تاپ",
        description: "انواع لپ‌تاپ‌های حرفه‌ای و گیمینگ",
        href: "#",
      },
      {
        title: "گوشی هوشمند",
        description: "جدیدترین گوشی‌های هوشمند",
        href: "#",
      },
      {
        title: "هدفون و هندزفری",
        description: "محصولات صوتی با کیفیت",
        href: "#",
      },
    ],
  },
  {
    title: "خدمات",
    href: "#",
  },
  {
    title: "درباره ما",
    href: "#",
  },
  {
    title: "تماس با ما",
    href: "#",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="relative">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
        <div className="container mx-auto px-4">
          <div className="relative z-10 flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-gradient">
                دیدار
              </Link>
              <div className="hidden lg:block">
                <NavigationMenu>
                  <NavigationMenuList>
                    {menuItems.map((item) => (
                      <NavigationMenuItem key={item.title}>
                        {item.items ? (
                          <>
                            <NavigationMenuTrigger className="bg-transparent">
                              {item.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className="grid w-[400px] gap-3 p-4">
                                {item.items.map((subItem) => (
                                  <li key={subItem.title}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        href={subItem.href}
                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                      >
                                        <div className="text-sm font-medium leading-none">
                                          {subItem.title}
                                        </div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                          {subItem.description}
                                        </p>
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </>
                        ) : (
                          <Link
                            href={item.href || "#"}
                            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                          >
                            {item.title}
                          </Link>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button
                variant="outline"
                size="icon"
                className="relative glass-hover"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  ۳
                </span>
              </Button>
              <Button
                className="lg:hidden glass-hover"
                variant="outline"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { height: "auto", opacity: 1 },
            closed: { height: 0, opacity: 0 },
          }}
          className="lg:hidden overflow-hidden bg-background/80 backdrop-blur-xl"
        >
          <div className="container px-4 py-4">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.title}>
                  {item.items ? (
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between py-2 text-lg font-medium">
                        {item.title}
                        <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                      </summary>
                      <ul className="mr-4 mt-2 space-y-2 border-r border-border pr-4">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <Link
                              href={subItem.href}
                              className="block py-2 text-muted-foreground hover:text-foreground"
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="block py-2 text-lg font-medium hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
