"use client";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const baseUrl = "https://luxekitchencabinets.ca";
  const dynamicTitle =
    ROUTES_TITLES[pathname] ||
    "Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets";

  const posterTitle =
    MAINPOSTERCONTENT[pathname]?.title ||
    "Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets";
  const posterDescription =
    MAINPOSTERCONTENT[pathname]?.description ||
    "Luxe Kitchen Cabinets is specialized in creating premium, custom-designed cabinets and closets that reflect your unique style. Our expert craftsmanship and innovative designs are tailored to optimize space and enhance the beauty and functionality of your home.";
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
        {/* <meta
          name="google-site-verification"
          content="cdTSMqlmtw9BJzEQEYkvpSMNME7DjolssocY0hxBGWg"
        /> */}

        <meta
          name="google-site-verification"
          content="jPjajA69QjGVLKYn-cfOeBw9DokhSb8Jjgi4f9rYnCE"
        />
        <meta name="msvalidate.01" content="219244B7E668A9DA617369C3FFE71406" />
        <title>{dynamicTitle}</title>
        <meta
          name="description"
          content="Discover Luxe Kitchen Cabinets in Calgary, offering custom cabinets, vanities, high-gloss & shaker-style kitchen cabinets, home renovation & tailored storage solutions."
        />
        <meta
          name="keywords"
          content="Custom Cabinets Calgary, Kitchen Cabinets Calgary, Bathroom Cabinets Calgary, Cabinet Makers Calgary, Kitchen Renovation Calgary, Custom Closets Calgary, Kitchen Remodeling Calgary, Cabinet Installation Calgary, Modern Kitchen Cabinets Calgary, Custom Storage Solutions Calgary, Luxe Kitchen, Luxe Cabinets, Luxe Kitchen Cabinets, Luxury Home Cabinets Calgary, Shaker Style Kitchen Cabinets, High Gloss Cabinets, Custom Kitchen Cabinets, Wet Bars, Vanities, Pre-finished Kitchen Cabinets, Home Renovation Alberta, Custom Cabinets Alberta, Kitchen Renovation Alberta, Bathroom Cabinets Alberta, Cabinet Installation Alberta, Custom Closets Alberta"
        />

        <meta property="og:title" content={dynamicTitle} />
        <meta
          property="og:description"
          content={
            "Discover Luxe Kitchen Cabinets in Calgary, offering custom cabinets, vanities, high-gloss & shaker-style kitchen cabinets, home renovation & tailored storage solutions."
          }
        />
        <meta
          property="og:image"
          content={
            posterImage ||
            IMAGES.landingImage ||
            "https://luxekitchencabinets.ca/logo.svg"
          }
        />
        <meta property="og:url" content={`${baseUrl}${pathname}`} />
        <meta
          property="og:type"
          content={isServicePage ? "product" : "website"}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Luxe Kitchen Cabinets" />
        <meta property="og:updated_time" content={new Date().toISOString()} />
        <meta name="author" content="Ahmed Younas" />
        <link rel="icon" href={IMAGES.favicon} type="image/x-icon" />
        <link rel="icon" href="https://luxekitchencabinets.ca/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Luxe Kitchen Cabinets",
              url: "https://luxekitchencabinets.ca",
              logo: "https://luxekitchencabinets.ca/favicon.svg",
              description:
                "Discover Luxe Kitchen Cabinets in Calgary, offering custom cabinets, vanities, high-gloss & shaker-style kitchen cabinets, home renovation & tailored storage solutions.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "#116 - 8 heatherglen pl, Rocky View AB",
                addressLocality: "Calgary",
                addressRegion: "Alberta",
                postalCode: "T1X 1X1",
                addressCountry: "CA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-403-796-7399",
                contactType: "customer service",
                areaServed: "CA",
                availableLanguage: ["English"],
              },
              sameAs: [
                "https://www.facebook.com/share/HxGstcCJkD1h5TqB/?mibextid=wwXIfr",
                "https://www.instagram.com/bellacraftsofficial?igsh=ZDNoaW15ZmFjNXVy&utm_source=qr",
                "https://x.com/bellacrafts01?s=11",
              ],
            }),
          }}
        />
      </head>
      <body className={`antialiased`}>
        {isServicePage && <ServiceNav />}
        <main className="min-h-[80vh]">
          <MainPoster
            image={posterImage}
            title={posterTitle}
            description={posterDescription}
          />
          <Navbar />
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
