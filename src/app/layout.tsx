"use client";
import { Lora, Montserrat } from "next/font/google";
import { IMAGES } from "../../share/assets";
import { MAINPOSTERCONTENT, ROUTES_TITLES } from "../../share/data";
import Footer from "./components/footer";
import MainPoster from "./components/mainPoster";
import Navbar from "./components/navbar";
import ServiceNav from "./components/serviceNav";
import "./globals.css";
import { usePathname } from "next/navigation";
import { ScrollToTopButton } from "./components/scrollToTopButton";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const lora = Lora({
  subsets: ["latin"],
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const dynamicTitle = ROUTES_TITLES[pathname] || "Custom Cabinets and Closets";

  const posterTitle =
    MAINPOSTERCONTENT[pathname]?.title || "Custom Cabinets and Closets";
  const posterDescription =
    MAINPOSTERCONTENT[pathname]?.description ||
    "Explore premium custom cabinets and closets designed to fit your style and space. Crafted with precision and innovation to elevate your home's functionality and aesthetic appeal.";
  const posterImage = MAINPOSTERCONTENT[pathname]?.imageUrl || IMAGES.landingImage;

  const isServicePage =
    pathname === "/services" ||
    (pathname.startsWith("/services/") &&
      [
        "kitchen",
        "cabinets",
        "closets",
        "bathroom-storage",
        "built-in",
        "home-organization",
        "laundry-storage",
        "wet-bars",
      ].includes(pathname.split("/")[2]));

  return (
    <html lang="en">
      <head>
        <title>{dynamicTitle}</title>
        <meta
          name="description"
          content="Discover high-quality custom cabinets and closets tailored to your style and space. Expert craftsmanship and innovative designs to enhance your home."
        />
        <meta
          name="keywords"
          content="Custom Cabinets, Custom Closets, Home Organization, Interior Design, Storage Solutions, Cabinet Makers, Closet Designers, Custom Furniture"
        />
        <meta name="author" content="Ahmed Younas" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${lora.className} ${montserrat.className} antialiased`}>
        <Navbar />
        {isServicePage && <ServiceNav />}
        <main className="min-h-[80vh]">
          <MainPoster
            image={posterImage}
            title={posterTitle}
            description={posterDescription}
          />
          {children}
          <Analytics />
          <SpeedInsights />
          <ScrollToTopButton />
        </main>
        <Footer />
      </body>
    </html>
  );
}
