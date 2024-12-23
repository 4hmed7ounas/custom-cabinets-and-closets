"use client";
import { HOMECARDSECTION } from "../../../../share/data";
import { responsiveTextClass } from "../styles/classes";

const Hero = () => {
  return (
    <section className="relative">
      <div className="flex justify-center items-center flex-wrap">
        {HOMECARDSECTION.slice(0, 1).map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-[90%] my-4"
          >
            <h2 className="text-3xl font-bold">{card.heading}</h2>
            <div
              className={`flex flex-wrap justify-between items-stretch mt-2 border-y-2 border-secondary-500 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="w-full lg:w-[45%] mb-4 lg:m-4">
                {card.titles.map((title, titleIndex) => (
                  <div key={titleIndex}>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {title}
                    </h3>
                    <p
                      className={`${responsiveTextClass} text-gray-800 leading-relaxed text-justify`}
                      dangerouslySetInnerHTML={{
                        __html: card.descriptions[titleIndex],
                      }}
                    ></p>
                  </div>
                ))}
              </div>
              <div
                className="w-full lg:w-[50%] h-auto bg-cover bg-center py-40 lg:py-10 bg-no-repeat"
                style={{
                  backgroundImage: `url(${card.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
