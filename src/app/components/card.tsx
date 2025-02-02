"use client";
import { dummyData } from "../../../share/data";
import { responsiveTextClass } from "./styles/classes";

interface CardProps {
  card: typeof dummyData;
  index: number;
}

export const Card = ({ card, index }: CardProps) => {
  return (
    <section className="text-secondary-900">
      <div className="flex justify-center items-center flex-wrap">
        <div className="flex flex-col justify-center items-center w-[95%] mt-8 mb-4">
          <h2 className="text-3xl font-bold">{card.heading}</h2>
          {card.mainDesc && (
            <p className={`${responsiveTextClass} text-center`}>
              {card.mainDesc}
            </p>
          )}

          <div
            className={`flex flex-wrap justify-center items-stretch mt-2 gap-4 border-y-2 border-secondary-600 md:border-y-0 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <div className="w-full lg:w-[40%] mb-4">
              {card.titles.map((title, titleIndex) => (
                <div key={titleIndex}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-justify">
                    {title}
                  </h3>
                  <p
                    className={`${responsiveTextClass} leading-relaxed text-justify`}
                    dangerouslySetInnerHTML={{
                      __html: card.descriptions[titleIndex],
                    }}
                  ></p>
                </div>
              ))}
            </div>
            <div
              className={`w-full lg:w-[50%] h-auto bg-cover bg-center py-40 lg:py-10 bg-no-repeat bg-secondary-50`}
              style={{
                backgroundImage: `url(${card.imageUrl})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
