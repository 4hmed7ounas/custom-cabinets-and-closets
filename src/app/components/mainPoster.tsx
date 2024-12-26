"use client";
import React from "react";
import Image from "next/image";
import Button from "./button";
import { usePathname, useRouter } from "next/navigation";
import { IMAGES } from "../../../share/assets";
import { ROUTES } from "../../../share/routes";

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

  return (
    <div className="mt-12 w-full relative">
      <div
        className="flex flex-col items-center bg-cover bg-center py-10 bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        {!noLogoPaths.includes(pathname) && (
          <>
            <Image
              alt="Main Logo"
              src={IMAGES.logoMain}
              width={100}
              height={400}
              className="w-[90%] sm:w-[45%] md:w-[50%] xl:w-[35%] 2xl:w-[30%]"
              priority
            />
            <div className="bg-primary-50 mt-4 pt-6 pb-3 px-2 bg-opacity-50 shadow-lg text-secondary-950 shadow-secondary-900 w-[90%] md:w-[70%] 2xl:w-[90%]">
              <h1 className="text-3xl font-bold font-lora">{title}</h1>
              <p className="font-normal text-left">{description}</p>
              <Button
                text="Get Your Free Consultation Today!"
                onClick={handleClick}
                className="mt-4"
              />
            </div>
          </>
        )}
        {noLogoPaths.includes(pathname) && (
          <div className="bg-primary-50 mt-24 pt-6 pb-3 px-2 bg-opacity-50 shadow-lg text-secondary-950 shadow-secondary-900 w-[90%] md:w-[70%] 2xl:w-[90%]">
            <h1 className="text-3xl font-bold font-lora">{title}</h1>
            <p className="font-normal text-left">{description}</p>
            <Button
              text="Get Your Free Consultation Today!"
              onClick={handleClick}
              className="mt-4"
            />
          </div>
        )}
      </div>
    </div>
  );
}
