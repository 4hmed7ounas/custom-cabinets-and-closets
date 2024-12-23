import React from "react";

interface ServicePosterProps {
  title: string;
  image: string;
  description: string;
}

export default function ServicePoster({
  title,
  image,
  description,
}: ServicePosterProps) {
  return (
    <div className="mt-12 w-full relative">
      <div
        className="flex flex-col items-center bg-cover bg-center py-10 bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-primary-50 mt-36 pt-6 pb-3 px-2 bg-opacity-50 shadow-lg text-secondary-950 shadow-secondary-900 w-[90%] md:w-[70%] 2xl:w-[90%]">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="font-normal text-left">{description}</p>
        </div>
      </div>
    </div>
  );
}
