"use client";
import Link from "next/link";
import React from "react";
import {
  CONTACTINFO,
  CURR_YEAR,
  EMBED_MAP,
  NAVLINKS,
  SERVICELINKS,
  SOCIALLINKS,
} from "../../../../share/data";
import { responsiveTextClass, transitionClass500 } from "../styles/classes";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-secondary-800 to-secondary-700 text-primary-50 pt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="w-1/3 sm:w-1/2">
              {NAVLINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    rel="preload"
                    href={link.route}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className={`${responsiveTextClass} text-primary-50 hover:text-secondary-300 ${transitionClass500}`}
                  >
                    <span className="flex items-center gap-2">
                      <link.icon /> {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Services</h2>
            <ul className="w-[45%] sm:w-[70%] md:w-[85%] lg:w-[80%]">
              {SERVICELINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    rel="preload"
                    href={link.route}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className={`${responsiveTextClass} text-primary-50 hover:text-secondary-500 ${transitionClass500}`}
                  >
                    <span className="flex items-center gap-2">
                      <link.icon /> {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul>
              {CONTACTINFO.map((info, index) => (
                <li key={index}>
                  <strong>{info.label}: </strong>
                  <Link
                    rel="preload noopener noreferrer"
                    href={info.url}
                    target="_blank"
                    className={`${responsiveTextClass} text-primary-50 hover:text-secondary-500 ${transitionClass500}`}
                  >
                    {info.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              {SOCIALLINKS.map((media, index) => (
                <Link
                  key={index}
                  href={media.url}
                  target="_blank"
                  rel="preload noopener noreferrer"
                  aria-label={media.label}
                  className={`text-2xl text-primary-50 rounded-md bg-secondary-500 hover:text-secondary-500 hover:bg-primary-50 p-2 ${transitionClass500}`}
                >
                  <media.icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="col-span-1 md:col-span-2 lg:col-span-1 mt-6">
        <h2 className="text-xl text-center font-semibold mb-4">Our Location</h2>
        <div className="w-full">
          <iframe
            title="Map"
            src={EMBED_MAP}
            className="w-full h-72"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-secondary-900 w-full text-center text-primary-50 py-4">
        <p className={`${responsiveTextClass}`}>
          &copy; {CURR_YEAR} Luxe Kitchen Cabinets. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
