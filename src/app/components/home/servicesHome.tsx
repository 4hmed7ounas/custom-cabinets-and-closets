"use client";
import React, { useEffect, useState } from "react";
import { IMAGES } from "../../../../share/assets";
import { responsiveTextClass } from "../styles/classes";
import { SERVICESHOME } from "../../../../share/data";

export const ServicesHome = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex justify-center mt-4 text-secondary-900">
      <div className="w-[95%] md:w-[89%] my-2">
        <div className="flex flex-col-reverse md:flex-row gap-3">
          <div
            className={`lg:w-full h-auto bg-cover md:bg-fixed bg-center py-40 lg:py-10 bg-no-repeat bg-secondary-950 bg-blend-luminosity`}
            style={{
              backgroundImage: `url(${
                isMobile ? IMAGES.aboutImage : IMAGES.serviceImage
              })`,
            }}
          ></div>
          <div className="p-0 md:pr-5">
            {SERVICESHOME.map((service, index) => (
              <div key={index}>
                <h3 className="text-2xl md:text-3xl font-bold mt-2">
                  {service.title}
                </h3>
                <p className={`${responsiveTextClass} text-justify`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div
            className={`w-full h-auto bg-cover md:bg-fixed bg-center py-40 lg:py-10 bg-no-repeat bg-secondary-500 bg-blend-darken`}
            style={{
              backgroundImage: `url(${
                isMobile ? IMAGES.serviceImage : IMAGES.serviceImage
              })`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};