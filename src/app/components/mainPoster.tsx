"use client";
import React from "react";
import Image from "next/image";
import Button from "./button";
import { usePathname, useRouter } from "next/navigation";
import { IMAGES } from "../../../share/assets";
import { ROUTES } from "../../../share/routes";
import { responsiveTextClass } from "./styles/classes";

interface MainPosterProps {
  image: string;
  title: string;
  description: string;
}

export default function MainPoster({
  image,
  title,
  description,
}: MainPosterProps) {
  const pathname = usePathname();

  const noLogoPaths = [
    "/services",
    "/services/kitchen",
    "/services/cabinets",
    "/services/closets",
    "/services/bathroom-storage",
    "/services/built-in",
    "/services/home-organization",
    "/services/laundry-storage",
    "/services/wet-bars",
  ];

  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.contactUs);
  };

  const handleContactUs = () => {
    router.push(ROUTES.makeConnect);
  };

  return (
    <div className="mt-12 w-full relative text-primary-950">
      {!noLogoPaths.includes(pathname) && (
        <>
          <div
            className="pt-4 lg:py-10 flex flex-col bg-gradient-to-tr from-tertiary-900 to-secondary-950 bg-blend-luminosity items-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          >
            <Image
              alt="Main Logo"
              src={IMAGES.logoMain}
              width={100}
              height={400}
              className="w-[75%] sm:w-[45%] xl:w-[35%] 2xl:w-[30%]"
              priority
            />
            <div className="bg-secondary-50 bg-opacity-60 mt-6 p-4 shadow-secondary-900 w-full lg:w-[70%] 2xl:w-[90%]">
              <h1 className="text-3xl font-bold font-calibri">{title}</h1>
              <p className={`text-left ${responsiveTextClass}`}>
                {description}
              </p>
              {pathname !== ROUTES.contactUs && (
                <Button
                  text="Get Your Free Consultation Today!"
                  onClick={handleClick}
                  className="mt-4"
                />
              )}
              {pathname === ROUTES.contactUs && (
                <Button
                  text="Get in Touch"
                  onClick={handleContactUs}
                  className="mt-4"
                />
              )}
            </div>
          </div>
        </>
      )}
      {noLogoPaths.includes(pathname) && (
        <div
          className="py-4 lg:pt-28 flex flex-col bg-gradient-to-tr from-tertiary-900 to-secondary-950 bg-blend-luminosity items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <div className=" mt-6 p-4 text-secondary-50 w-full lg:w-[70%] 2xl:w-[90%]">
            <h1 className="text-3xl font-bold font-calibri">{title}</h1>
            <p className={`text-left ${responsiveTextClass}`}>{description}</p>
            <Button
              text="Get Your Free Consultation Today!"
              onClick={handleClick}
              className="mt-4"
            />
          </div>
        </div>
      )}
    </div>
  );
}
