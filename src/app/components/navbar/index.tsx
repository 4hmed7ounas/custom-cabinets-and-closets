"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IMAGES } from "../../../../share/assets";
import Link from "next/link";
import { ROUTES } from "../../../../share/routes";
import { NAVLINKS } from "../../../../share/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-10">
      <nav className="w-full bg-secondary-500 flex justify-center items-center p-2 border-b-4 border-primary-100">
        <div className="flex items-center justify-between w-[90%]">
          <Link href={ROUTES.home} className="text-primary-50 transition-all duration-500 ease-in-out">
            <Image
              alt="Custom Cabinets and Closets"
              src={IMAGES.logo}
              width={41}
              height={40}
              className="w-[28px] sm:w-[31px] md:w-[34px] lg:w-[48px] xl:w-[41px] h-auto"
            />
          </Link>

          <button
            className="lg:hidden flex flex-col gap-1 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`h-1 w-6 bg-secondary-100 transform transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-6 bg-secondary-100 transition-opacity duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-6 bg-secondary-100 transform transition-transform duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          <div
            className={`absolute -z-10 p-1 lg:z-10 lg:static top-full left-0 w-full lg:w-auto bg-secondary-500 lg:p-0 shadow-lg lg:shadow-none transform transition-all duration-500 ease-in-out ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            } lg:translate-y-0 lg:opacity-100`}
          >
            <ul className="flex flex-col lg:flex-row lg:justify-between lg:gap-10">
              {NAVLINKS.map((link, index) => (
                <li key={index} className="text-primary-50 p-2 rounded-md hover:bg-primary-50 hover:text-secondary-500 transition-all md:duration-500 ease-in-out">
                  <Link
                    href={link.route}
                    className=""
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      <link.icon /> {link.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
