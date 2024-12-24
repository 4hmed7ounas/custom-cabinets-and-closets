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

function UpdateMetadata() {
  const pathname = usePathname();

  useEffect(() => {
    const meta = METADATA[pathname] || {
      title: "Custom Cabinets and Closets",
      description:
        "Discover custom cabinets and closets designed to maximize space, enhance organization, and complement your style. Tailored to your needs with high-quality materials and smart features for ultimate functionality and aesthetic appeal.",
    };
    document.title = meta.title;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", meta.description);
    } else {
      const newMetaDescription = document.createElement("meta");
      newMetaDescription.name = "description";
      newMetaDescription.content = meta.description;
      document.head.appendChild(newMetaDescription);
    }
  }, [pathname]);

  return null;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const pageMetadata = METADATA[pathname] || METADATA["/"];

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
        <meta name="description" content={pageMetadata.description} />
        <title>{pageMetadata.title}</title>
        <link rel="preload" href={IMAGES.landingImage} as="image" />
        <link rel="preload" href={IMAGES.logoMain} as="image" />
      </Head>
      <body className={`${lora.className} ${montserrat.className} antialiased`}>
        <Navbar />
        {isServicePage && <ServiceNav />}
        <main className="min-h-[80vh]">
          <MainPoster
            image={IMAGES.landingImage}
            title={pageMetadata.title}
            description={pageMetadata.description}
          />
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <UpdateMetadata />
      </body>
    </html>
  );
}
