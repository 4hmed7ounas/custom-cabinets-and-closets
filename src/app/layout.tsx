"use client";
// import { Geist, Geist_Mono, Jockey_One } from "next/font/google";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Head from "next/head";
import { METADATA } from "../../share/data";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  weight: ["400", "500", "700"],
});

// const jockey_one = Jockey_One({
//   subsets: ["latin"],
//   variable: "--font-kanit",
//   weight: "400",
// });

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
      <body className={`${kanit.variable} antialiased`}>
        <Navbar />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
        <UpdateMetadata />
      </body>
    </html>
  );
}
