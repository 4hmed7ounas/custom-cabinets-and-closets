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
  display: "swap",
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
  const dynamicTitle =
    ROUTES_TITLES[pathname] ||
    "Luxe Kitchen Cabinets - Custom Cabinets & Closets";

  const posterTitle =
    MAINPOSTERCONTENT[pathname]?.title ||
    "Luxe Kitchen Cabinets - Custom Cabinets & Closets";
  const posterDescription =
    MAINPOSTERCONTENT[pathname]?.description ||
    "At Luxe Kitchen Cabinets, we specialize in creating premium, custom-designed cabinets and closets that reflect your unique style. Our expert craftsmanship and innovative designs are tailored to optimize space and enhance the beauty and functionality of your home.";
  const posterImage =
    MAINPOSTERCONTENT[pathname]?.imageUrl || IMAGES.landingImage;

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
          content="Luxe Kitchen Cabinets offers high-quality, custom cabinets and closets designed to fit your space and style. Our craftsmanship and innovative designs elevate your home's functionality and aesthetic appeal."
        />
        <meta
          name="keywords"
          content="Luxe Kitchen Cabinets, Custom Cabinets, Custom Closets, Home Organization, Kitchen Storage Solutions, Interior Design, Luxury Cabinet Makers, Closet Designers, Premium Storage Systems, Kitchen Remodeling, Bathroom Cabinets, Custom Storage Solutions, Modern Kitchen Cabinets, Luxury Home Cabinets, Custom Closets Design, Built-In Cabinets, Space Optimization, Custom Furniture, Cabinet Installation, Storage Systems, Stylish Kitchen Storage, Elegant Closet Designs, Sustainable Cabinets, Smart Storage Solutions, Kitchen Renovation, Home Storage Ideas, Personalized Cabinet Designs"
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
