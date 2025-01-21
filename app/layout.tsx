import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import "./globals.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: {
    default: "دیدار | فروشگاه محصولات دیجیتال",
    template: "%s | دیدار",
  },
  description:
    "فروشگاه اینترنتی محصولات دیجیتال با ضمانت اصالت کالا و گارانتی معتبر",
  keywords: [
    "فروشگاه آنلاین",
    "محصولات دیجیتال",
    "لپ تاپ",
    "گوشی هوشمند",
    "هدفون",
    "گارانتی",
    "خرید آنلاین",
  ],
  authors: [{ name: "دیدار" }],
  creator: "دیدار",
  publisher: "دیدار",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://didar.com"),
  openGraph: {
    title: "دیدار | فروشگاه محصولات دیجیتال",
    description:
      "فروشگاه اینترنتی محصولات دیجیتال با ضمانت اصالت کالا و گارانتی معتبر",
    url: "https://didar.com",
    siteName: "دیدار",
    locale: "fa_IR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: "دیدار | فروشگاه محصولات دیجیتال",
    description:
      "فروشگاه اینترنتی محصولات دیجیتال با ضمانت اصالت کالا و گارانتی معتبر",
    creator: "@didar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirmatn.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
