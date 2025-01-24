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
  const baseUrl = "https://luxekitchencabinets.ca";
  const dynamicTitle =
    ROUTES_TITLES[pathname] ||
    "Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation";

  const posterTitle =
    MAINPOSTERCONTENT[pathname]?.title ||
    "Luxe Kitchen Cabinets - Custom Closets, Vanities & Kitchen Renovation";
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
        <meta
          name="google-site-verification"
          content="cdTSMqlmtw9BJzEQEYkvpSMNME7DjolssocY0hxBGWg"
        />
        <meta name="msvalidate.01" content="219244B7E668A9DA617369C3FFE71406" />
        <title>{dynamicTitle}</title>
        <meta
          name="description"
          content="At Luxe Kitchen Cabinets discover best custom cabinets, vanities, wet bars, high-gloss cabinets, and pre-finished kitchen cabinets in Calgary, Alberta, Canada. Specializing in kitchen renovation, bathroom renovation, and home renovation, we offer white shaker kitchens, shaker-style kitchen cabinets, and custom storage solutions tailored to your needs."
        />
        <meta
          name="keywords"
          content="Luxe, Luxe Kitchen, Luxe Cabinets, Luxe Kitchen Cabinets, Luxe Kitchen Cabinets Calgary, Alberta, Canada, Luxe Kitchen Cabinets Calgary Canada, Custom Cabinets Calgary, Custom Closets Calgary, Custom cabinets, Custom closets, Home Organization Calgary, Kitchen Storage Solutions Calgary, Interior Design Calgary, Luxury Cabinet Makers Calgary, Closet Designers Calgary, Premium Storage Systems Calgary, Kitchen Remodeling Calgary, Bathroom Cabinets Calgary, Custom Storage Solutions Calgary, Modern Kitchen Cabinets Calgary, kitchen cabinets calgary, kitchen cabinets in calgary alberta, bathroom cabinets calgary, alberta cabinets calgary, cabinet makers calgary alberta, cabinets calgary, office cabinets calgary, cabinet builders calgary, cabinet makers calgary, cabinet painting calgary, calgary kitchen cabinets,   Luxury Home Cabinets Calgary, Custom Closets Design Calgary, Built-In Cabinets Calgary, Space Optimization Calgary, Custom Furniture Calgary, Cabinet Installation Calgary, Storage Systems Calgary, Stylish Kitchen Storage Calgary, Elegant Closet Designs Calgary, Sustainable Cabinets Calgary, Smart Storage Solutions Calgary, Kitchen Renovation Calgary, Home Storage Ideas Calgary, Personalized Cabinet Designs Calgary, Tailored storage solutions, Premium cabinetry, Bespoke cabinets, Kitchen design, Closet organization, Modern cabinets, Luxury storage solutions, Vanity, Vanities, Wet bars, Closets, Custom closets, High gloss cabinets, Painted kitchen cabinets, Custom kitchen cabinets, Kitchen renovation, Bathroom renovation, Home renovation, White Shaker kitchen, Shaker style kitchen cabinets, Pre finished kitchen, Pre finished kitchen cabinets"
        />
        <meta property="og:title" content={dynamicTitle} />
        <meta
          property="og:description"
          content={
            MAINPOSTERCONTENT[pathname]?.description ||
            "At Luxe Kitchen Cabinets discover best custom cabinets, vanities, wet bars, high-gloss cabinets, and pre-finished kitchen cabinets in Calgary, Alberta, Canada. Specializing in kitchen renovation, bathroom renovation, and home renovation, we offer white shaker kitchens, shaker-style kitchen cabinets, and custom storage solutions tailored to your needs."
          }
        />
        <meta
          property="og:image"
          content={
            posterImage ||
            IMAGES.landingImage ||
            IMAGES.logo ||
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
        <link rel="icon" href={IMAGES.logo} type="image/x-icon" />
        <link rel="icon" href="https://luxekitchencabinets.ca/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Luxe Kitchen Cabinets",
              url: "https://luxekitchencabinets.ca",
              logo: "https://luxekitchencabinets.ca/logo.svg",
              description:
                "At Luxe Kitchen Cabinets discover best custom cabinets, vanities, wet bars, high-gloss cabinets, and pre-finished kitchen cabinets in Calgary, Alberta, Canada. Specializing in kitchen renovation, bathroom renovation, and home renovation, we offer white shaker kitchens, shaker-style kitchen cabinets, and custom storage solutions tailored to your needs.",
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
      <body className={`${lora.className} ${montserrat.className} antialiased`}>
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
