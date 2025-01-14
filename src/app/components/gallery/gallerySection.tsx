import React from "react";
import { GALLERYSECTION } from "../../../../share/data";
import Image from "next/image";

export const GallerySection: React.FC = () => {
  return (
    <section className="flex justify-center mt-8 mb-4">
      <div className=" w-[90%]">
        <h2 className="text-3xl font-bold text-center mb-4">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERYSECTION.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            >
              <Image
                width={500}
                height={500}
                src={image.imgURL}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-secondary-900 bg-opacity-50 text-secondary-50 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-semibold">{image.title}</h3>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
