"use client";

import { usePathname } from "next/navigation";
import MainPoster from "./mainPoster";
import Navbar from "./navbar";
import ServiceNav from "./serviceNav";
import { ScrollToTopButton } from "./scrollToTopButton";
import { MAINPOSTERCONTENT } from "../../../share/data";
import { IMAGES } from "../../../share/assets";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const posterTitle = MAINPOSTERCONTENT[pathname]?.title || "Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets";
    const posterDescription = MAINPOSTERCONTENT[pathname]?.description || "Luxe Kitchen Cabinets is specialized in creating premium, custom-designed cabinets and closets that reflect your unique style.";
    const posterImage = MAINPOSTERCONTENT[pathname]?.imageUrl || IMAGES.landingImage;

    const isServicePage = pathname === "/services" || (pathname.startsWith("/services/") && [
        "kitchen", "cabinets", "closets", "bathroom-storage",
        "built-in", "home-organization", "laundry-storage", "wet-bars"
    ].includes(pathname.split("/")[2]));

    return (
        <>
            {isServicePage && <ServiceNav />}
            <main className="min-h-[80vh]">
                <MainPoster
                    image={posterImage}
                    title={posterTitle}
                    description={posterDescription}
                />
                <Navbar />
                {children}
                <ScrollToTopButton />
            </main>
        </>
    );
}