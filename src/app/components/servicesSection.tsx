"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SERVICESECTION } from "../../../share/data";
import { responsiveTextClass, transitionClass500 } from "./styles/classes";

export default function ServiceSection() {
  const [itemsPerRow, setItemsPerRow] = useState(4);

  useEffect(() => {
    const updateItemsPerRow = () => {
      setItemsPerRow(window.innerWidth < 768 ? 2 : 4);
    };

    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);
    return () => window.removeEventListener("resize", updateItemsPerRow);
  }, []);

  return (
    <section className="relative text-secondary-900">
      <div className="flex justify-center my-6">
        <div className="flex flex-col justify-center items-center w-[90%] lg:w-auto">
          <h2 className="text-3xl font-bold mb-2">Our Services</h2>
          <p className={`${responsiveTextClass} my-2 text-center`}>
            We offer an extensive selection of services
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {SERVICESECTION.map((service, index) => {
              const rowIndex = Math.floor(index / itemsPerRow);
              const colIndex = index % itemsPerRow;

              const isOddRow = rowIndex % 2 !== 0;
              const startsWithIcon = isOddRow
                ? colIndex % 2 === 0
                : colIndex % 2 !== 0;

              return (
                <Link
                  key={index}
                  href={service.url}
                  className={`flex flex-col items-center justify-center border-2 border-secondary-700 p-4 text-center ${transitionClass500} min-h-[220px] sm:min-h-[180px] w-full flex-grow ${
                    startsWithIcon
                      ? "bg-secondary-500 text-secondary-50 hover:bg-primary-100 hover:text-secondary-500"
                      : ""
                  }`}
                  style={
                    !startsWithIcon && service.imageUrl
                      ? {
                          backgroundImage: `url(${service.imageUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundColor: "#4f0816",
                          backgroundBlendMode: "lighten",
                        }
                      : {}
                  }
                  aria-label={`Service: ${service.label}`}
                >
                  {startsWithIcon ? (
                    <>
                      {service.icon && (
                        <service.icon
                          size={50}
                          aria-label={`Icon for ${service.label}`}
                        />
                      )}
                      {service.label && <p className="mt-2">{service.label}</p>}
                    </>
                  ) : (
                    <div className="w-full h-full"></div>
                  )}
                  {service.label && (
                    <p className="mt-2 hidden">{service.label}</p>
                  )}
                </Link>
              );
            })}
          </div>
          <p className={`${responsiveTextClass} mt-2 text-center`}>
            Furthermore, we provide a 1-year warranty on our services
            post-installation, giving you peace of mind knowing that we stand
            behind our work.
          </p>
        </div>
      </div>
    </section>
  );
}
