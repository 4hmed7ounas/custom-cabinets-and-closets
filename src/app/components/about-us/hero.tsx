import { responsiveTextClass } from "../styles/classes";
import { HOMECARDSECTION } from "../../../../share/data";

const Hero = () => {
  return (
    <div>
      <section className="relative">
        <div className="flex justify-center items-center flex-wrap">
          {HOMECARDSECTION.slice(0, 2).map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-[90%] my-4"
            >
              <h2 className="text-3xl font-bold">{card.heading}</h2>
              <div
                className={`flex flex-wrap justify-center items-stretch mt-2 gap-4 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="w-full lg:w-[45%] mb-4 lg:mb-0">
                  {card.titles.map((title, titleIndex) => (
                    <div key={titleIndex}>
                      <h2 className="text-xl md:text-2xl font-bold mb-2">
                        {title}
                      </h2>
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
                  className="w-full lg:w-[45%] h-auto bg-cover bg-center py-40 lg:py-10 bg-no-repeat"
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
    </div>
  );
};

export default Hero;
