"use client";
import React, { useEffect, useState } from "react";
import { responsiveTextClass } from "../styles/classes";

export default function Hero() {
  const [index] = useState(0);
  const [x] = useState(0);
  const [name] = useState([
    "Custom Kitchen Solutions",
    "Tailored Closets & Cabinets",
    "Luxury Bathroom Storage",
    "Built-In Furniture & Wet Bars",
    "Home Organization Systems",
    "Bespoke Cabinetry Design",
    "Calgary Cabinet Makers",
    "Custom Storage Solutions",
    "Kitchen Renovations",
    "Luxury Cabinet Design",
    "Bathroom Vanities",
    "Innovative Kitchen Layouts",
    "Modern Custom Cabinets",
    "Calgary Home Organization",
    "Expert Cabinet Installation",
  ]);
  const [currentTitle, setCurrentTitle] = useState("");

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const typeWriter = () => {
      let currentIndex = index;
      let currentX = x;

      intervalId = setInterval(() => {
        const newTitle = name[currentX].slice(0, currentIndex);
        setCurrentTitle("We offer " + newTitle);

        if (currentIndex >= name[currentX].length) {
          currentIndex = 0;
          currentX = (currentX + 1) % name.length;
        } else {
          currentIndex++;
        }
      }, 200);

      return () => clearInterval(intervalId);
    };

    typeWriter();

    return () => clearInterval(intervalId);
  }, [index, x, name]);

  return (
    <section className="flex justify-center mt-4 text-secondary-900">
      <div className="w-[89%]">
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-center">
            Welcome to Luxe Kitchen Cabinets
          </h2>
          <div className="text-center flex gap-4">
            <p className={`${responsiveTextClass}`}>
              With over 13 years of experience, Luxe Kitchen Cabinets proudly
              specialize in crafting custom cabinetry solutions for homes and
              offices in Calgary and surrounding areas, combining expert
              craftsmanship, innovative designs, and personalized service to
              create functional and stylish spaces tailored to your unique
              needs.
            </p>
          </div>
          <h2 className="text-[20px] lg:text-[40px] font-bold text-center text-secondary-500 my-4">
            {currentTitle}
          </h2>
        </div>
      </div>
    </section>
  );
}
