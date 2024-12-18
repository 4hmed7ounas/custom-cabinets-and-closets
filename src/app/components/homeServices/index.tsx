"use client";
import React from "react";
import Link from "next/link";
import { transitionClass500 } from "../styles/classes";
import { SERVICESECTION } from "../../../../share/data";
import { IMAGES } from "../../../../share/assets";

export default function HomeServices() {
  return (
    <div className="flex justify-center my-6">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <div className="w-[90%] h-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 mt-2">
          {SERVICESECTION.map((service, index) => (
            <Link
              key={index}
              href={service.url}
              className={`flex flex-col items-center justify-center border-2 border-secondary-700 bg-secondary-500 p-4 text-center ${transitionClass500} text-secondary-50 hover:text-secondary-500 hover:bg-secondary-50 min-h-[220px] sm:min-h-[180px] w-full flex-grow`}
              style={{
                backgroundImage: `url(${IMAGES.cardImg1})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
              }}
            >
              <service.icon size={50} />
              <p className="mt-2">{service.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
