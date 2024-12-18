"use client";
import { Roboto, Open_Sans, Lora, Poppins, Montserrat } from "next/font/google";
import "./globals.css"; // Import your global styles
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Head from "next/head";
import { METADATA } from "../../share/data";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          content="Discover custom cabinets and closets designed to maximize space, enhance organization, and complement your style. Tailored to your needs with high-quality materials and smart features for ultimate functionality and aesthetic appeal."
        />
      </Head>
      <body className={`${roboto.className} ${openSans.className} ${lora.className} ${poppins.className} ${montserrat.className} antialiased`}>
        <Navbar />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
        <UpdateMetadata />
      </body>
    </html>
  );
}
