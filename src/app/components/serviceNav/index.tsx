"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SERVICELINKS } from "../../../../share/data";
import {
  responsiveTextClass,
  transitionClass500,
  transitionClass300,
} from "../styles/classes";

export default function ServiceNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (loading) {
      let progressInterval = 0;
      intervalRef.current = setInterval(() => {
        progressInterval += 1;
        setProgress(() => {
          if (progressInterval <= 30) return 30;
          if (progressInterval <= 50) return 50;
          if (progressInterval <= 70) return 70;
          if (progressInterval <= 100) return 100;

          clearInterval(intervalRef.current as NodeJS.Timeout);
          return 100;
        });
      }, 5);
    }

    setProgress(0);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [loading]);

  const handleLinkClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <header className="fixed top-[3rem] sm:top-[3.2rem] lg:top-14 right-0 left-0 z-[9]">
      <nav className="w-full bg-secondary-500 flex justify-center items-center p-2 pt-3">
        <div className="flex items-center justify-between w-[90%]">
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

          <div
            className={`absolute -z-10 p-1 lg:z-10 lg:static top-full left-0 w-full lg:w-auto bg-secondary-500 lg:p-0 ${transitionClass500} ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            } lg:translate-y-0 lg:opacity-100`}
          >
            <ul className="flex flex-col lg:flex-row lg:justify-between lg:gap-10">
              {SERVICELINKS.map((link, index) => (
                <Link
                  href={link.route}
                  key={index}
                  onClick={() => {
                    setIsOpen(false); // Close the menu when a link is clicked
                    handleLinkClick(); // Trigger loading state
                  }}
                >
                  <li
                    className={`${responsiveTextClass} text-primary-50 p-2 rounded-md hover:bg-primary-50 hover:text-secondary-500 md:${transitionClass500}`}
                  >
                    <div className="flex items-center gap-2">
                      <link.icon /> {link.name}
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {loading && (
        <div className=" w-full">
          <div className="w-full h-1 bg-secondary-800">
            <div
              className="h-full bg-primary-50 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </header>
  );
}
