import React from "react";
import Image from "next/image";
import { IMAGES } from "../../../share/assets";
import { responsiveTextClass } from "./styles/classes";
import { SERVICESHOME } from "../../../share/data";

export const ServicesHome = () => {
  return (
    <section className="flex justify-center mt-4 text-secondary-900">
      <div className="w-[95%] md:w-[89%] my-2">
        <div className="flex flex-col-reverse md:flex-row gap-3">
          <div className="p-0 md:pr-5">
            {SERVICESHOME.map((service, index) => (
              <div key={index} className="text-justify">
                <h3 className="text-2xl md:text-3xl font-bold mt-2">
                  {service.title}
                </h3>
                <p className={`${responsiveTextClass}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <Image
            src={IMAGES.cardImg1}
            alt=""
            width={500}
            height={500}
            className="md:w-[40%] hidden md:block h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};
