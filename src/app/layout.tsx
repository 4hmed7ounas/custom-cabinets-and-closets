"use client";
import { Lora, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Head from "next/head";
import { METADATA } from "../../share/data";
import ServiceNav from "./components/serviceNav";
import MainPoster from "./components/mainPoster";
import { IMAGES } from "../../share/assets";
import ScrollToTop from "./components/scrollToTop";

const lora = Lora({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const pageTitle = METADATA[pathname]?.title || "Custom Cabinets and Closets";
  const description =
    "Discover custom cabinets and closets designed to maximize space, enhance organization, and complement your style. Tailored to your needs with high-quality materials and smart features for ultimate functionality and aesthetic appeal.";
  const pageDescription = METADATA[pathname]?.description || description;

  useEffect(() => {
    document.title = pageTitle;
  }, [pathname]);

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
      ].includes(pathname.split("/")[2]));

  return (
    <html lang="en">
      <Head>
        <meta name="description" content={description} />
        <title>{pageTitle}</title>
        <link rel="preload" href={IMAGES.landingImage} as="image" />
        <link rel="preload" href={IMAGES.logoMain} as="image" />
      </Head>
      <body className={`${lora.className} ${montserrat.className} antialiased`}>
        <Navbar />
        {isServicePage && <ServiceNav />}
        <main className="min-h-[80vh]">
          <MainPoster
            image={IMAGES.landingImage}
            title={pageTitle}
            description={pageDescription}
          />
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
