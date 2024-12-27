"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { IMAGES } from "../../../../share/assets";
import Link from "next/link";
import { ROUTES } from "../../../../share/routes";
import { NAVLINKS } from "../../../../share/data";
import {
  responsiveTextClass,
  transitionClass500,
  transitionClass300,
} from "../styles/classes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 right-0 left-0 z-10">
      <nav className="w-full bg-gradient-to-r from-secondary-600 to-secondary-500  flex justify-center items-center p-2 pt-3">
        <div className="flex items-center justify-between w-[90%]">
          {/* Logo */}
          <Link
            href={ROUTES.home}
            className={`text-primary-50 ${transitionClass500}`}
          >
            <Image
              alt="Custom Cabinets and Closets"
              src={IMAGES.logo}
              width={41}
              height={40}
              className="w-[28px] sm:w-[31px] md:w-[34px] lg:w-[48px] xl:w-[41px] h-auto"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`h-1 w-6 bg-secondary-100 transform ${transitionClass300} ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-6 bg-secondary-100 ${transitionClass300} ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-6 bg-secondary-100 transform ${transitionClass300} ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Navigation Links */}
          <div
            className={`absolute -z-10 p-1 lg:z-10 lg:static top-full left-0 w-full lg:w-auto bg-gradient-to-r from-secondary-600 to-secondary-500 lg:bg-gradient-to-r lg:from-transparent lg:to-transparent lg:p-0 ${transitionClass500} ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            } lg:translate-y-0 lg:opacity-100`}
          >
            <ul className="flex flex-col gap-1 lg:flex-row lg:justify-between lg:gap-10">
              {NAVLINKS.map((link, index) => (
                <li
                  key={index}
                  className={`${responsiveTextClass} text-secondary-50 p-2 rounded-md hover:bg-secondary-50 hover:text-secondary-500 md:${transitionClass500} ${
                    pathname === link.route ? "bg-secondary-50 text-secondary-500" : ""
                  }`}
                >
                  <Link
                    rel="preload"
                    href={link.route}
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
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
