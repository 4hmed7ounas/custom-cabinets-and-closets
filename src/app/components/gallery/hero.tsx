"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import { transitionClass300 } from "../styles/classes";
import { galleryItem } from "../../../../share/types";
import { GALLERYITEMS } from "../../../../share/data";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<galleryItem | null>(null);

  return (
    <div className="max-w-[90%] mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-4">
        Explore Luxe Kitchen Cabinets
      </h2>
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 grid-cols-1">
        {GALLERYITEMS.map((image, index) => (
          <div
            key={index}
            className={`relative rounded-lg shadow-lg group cursor-pointer overflow-hidden ${
              index % 3 === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.title}
              width={1600}
              height={1400}
              className="w-full h-full object-cover"
            />
            <div className="h-full absolute inset-x-0 bottom-0 bg-secondary-900 bg-opacity-90 text-secondary-50 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-xl font-semibold">{image.title}</h3>
              <p className="text-sm">{image.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-secondary-50 w-[90%] max-h-[500px] text-secondary-950 px-5 py-2 rounded-lg shadow-lg max-w-2xl relative">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-3xl font-bold">Details</h2>
              <button
                className={`text-secondary-950 hover:bg-secondary-500 hover:text-secondary-50 rounded-full p-1 ${transitionClass300}`}
                onClick={() => setSelectedImage(null)}
              >
                <IoIosClose className="w-6 h-6" />
              </button>
            </div>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={1600}
              height={1400}
              className="w-full rounded-md max-h-[350px] object-cover"
            />
            <h3 className="text-2xl font-bold mt-4">{selectedImage.title}</h3>
            <p className="text-gray-700">{selectedImage.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
