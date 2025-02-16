"use client";

import { usePathname } from "next/navigation";
import { ROUTES_TITLES } from "../../../share/data";

export default function MetaTags() {
    const pathname = usePathname();
    const baseUrl = "https://luxekitchencabinets.ca";
    const title = ROUTES_TITLES[pathname] || "Luxe Kitchen Cabinets Calgary - Custom Cabinetry and Closets";

    return (
        <>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:url" content={`${baseUrl}${pathname}`} />
            <meta property="og:type" content="website" />
            <meta property="og:updated_time" content={new Date().toISOString()} />
        </>
    );
}
