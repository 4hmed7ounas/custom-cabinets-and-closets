import { IMAGES } from "../../share/assets";
import Footer from "./components/footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientLayout from "./components/clientLayout";
import MetaTags from "./components/metaTags";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Discover Luxe Kitchen Cabinets in Calgary, offering custom cabinets, vanities, high-gloss & shaker-style kitchen cabinets, home renovation & tailored storage solutions."
        />
        <meta name="author" content="Ahmed Younas" />
        <link rel="icon" href={IMAGES.favicon} type="image/x-icon" />
        <link rel="icon" href="https://luxekitchencabinets.ca/favicon.ico" />
        <MetaTags />
      </head>
      <body>
        <ClientLayout>
          {children}
          <Analytics />
          <SpeedInsights />
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
