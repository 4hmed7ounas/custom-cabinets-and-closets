"use client";
import React, { useState, useEffect } from "react";
import { IMAGES } from "../../../../share/assets";
import { StarRating } from "../starRating";
import { REVIEWS } from "../../../../share/data";
import { VscPreview } from "react-icons/vsc";

export const Review: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative flex items-center bg-secondary-900 bg-blend-lighten bg-fixed bg-cover bg-center h-auto min-h-[100%]"
      style={{ backgroundImage: `url(${IMAGES.landingImage})` }}
    >
      <div className="flex justify-center items-center flex-wrap w-full p-4 sm:p-6 md:p-8">
        <div className="flex flex-col justify-center items-center w-full max-w-screen-lg overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-secondary-50">
            Words From Our Clients
          </h2>
          <div className="relative flex items-center justify-center w-full">
            <div
              className="flex transition-all duration-500 ease-in-out w-full"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {REVIEWS.map((review, index) => (
                <div key={index} className="w-full p-4 min-w-[100%]">
                  <div className="flex items-center align-middle gap-2 mb-2">
                    <VscPreview className="size-12 text-secondary-50" />
                    <h3 className="text-secondary-50 font-bold text-lg sm:text-xl md:text-2xl">
                      {review.title}
                    </h3>
                  </div>
                  <p className="text-secondary-50 mb-2 text-justify text-sm sm:text-base md:text-lg">
                    {review.description}
                  </p>
                  <p className="text-secondary-50 mb-2 text-sm sm:text-base md:text-lg">
                    - {review.reviewer} -
                  </p>
                  <StarRating rating={review.rating} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
