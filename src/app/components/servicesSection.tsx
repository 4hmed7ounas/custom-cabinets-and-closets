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
    <div className="flex justify-center my-6">
      <div className="flex flex-col justify-center items-center w-[90%] lg:w-auto">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
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
                    ? "bg-secondary-500 text-secondary-50 hover:bg-secondary-50 hover:text-secondary-500"
                    : ""
                }`}
                style={
                  !startsWithIcon && service.imageUrl
                    ? {
                        backgroundImage: `url(${service.imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
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
          Additionally, we offer a 2-year warranty on our work after
          installation so you can feel secure knowing that we have your back.
        </p>
      </div>
    </div>
  );
}
