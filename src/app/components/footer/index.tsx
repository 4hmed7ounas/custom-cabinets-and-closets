"use client";
import Link from "next/link";
import React from "react";
import {
  CONTACTINFO,
  CURR_YEAR,
  EMBED_MAP,
  NAVLINKS,
  SOCIALLINKS,
} from "../../../../share/data";

export default function Footer() {
  return (
    <footer className="bg-secondary-800 text-primary-50 pt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              {NAVLINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    rel="preload"
                    href={link.route}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    <div className="w-[29%] flex items-center gap-2 text-primary-50 hover:text-secondary-500 transition-all duration-500 ease-in-out">
                      <link.icon /> {link.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul>
              {CONTACTINFO.map((info, index) => (
                <li key={index}>
                  <strong>{info.label}: </strong>
                  <Link
                    rel="preload"
                    href={info.url}
                    target="_blank"
                    className="text-primary-50 hover:text-secondary-500 transition-all duration-500 ease-in-out"
                  >
                    {info.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {SOCIALLINKS.map((media, index) => (
                <Link
                  key={index}
                  href={media.url}
                  target="_blank"
                  aria-label={media.label}
                  className="text-primary-50 rounded-md bg-secondary-500 hover:text-secondary-500 hover:bg-primary-50 p-2 text-2xl transition-all duration-500 ease-in-out"
                >
                  <media.icon />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p>Sign up for our newsletter to get the latest updates.</p>
            <input
              type="email"
              className="mt-2 px-4 py-2 rounded text-black w-full sm:w-64"
              placeholder="Your email"
            />
            <button className="mt-2 bg-secondary-500 text-white hover:bg-secondary-600 px-4 py-2 rounded w-full sm:w-auto transition-all duration-500 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-1 mt-6">
        <h3 className="text-xl text-center font-semibold mb-4">Our Location</h3>
        <div className="w-full">
          <iframe
            title="Map"
            src={EMBED_MAP}
            className="w-full h-72"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="bg-secondary-900 text-center text-primary-50 py-4">
        <p>
          &copy; {CURR_YEAR} Custom Cabinets & Closets. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
