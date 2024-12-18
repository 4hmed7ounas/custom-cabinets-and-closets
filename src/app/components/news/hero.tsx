import Image from "next/image";
import { IMAGES } from "../../../../share/assets";
import { responsiveTextClass } from "../styles/classes";
import { HOMECARDSECTION } from "../../../../share/data";

const Hero = () => {
  return (
    <div>
      <section className="relative">
        <div className="mt-12 w-full relative">
          <div
            className="flex flex-col items-center bg-cover bg-center py-10 bg-no-repeat"
            style={{
              backgroundImage: `url(${IMAGES.landingImage})`,
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          >
            <link
              rel="preload"
              href={IMAGES.logoMain}
              className="w-auto h-auto"
              as="image"
            />
            <Image
              alt="Main Logo"
              src={IMAGES.logoMain}
              width={100}
              height={400}
              className="w-[90%] sm:w-[45%] md:w-[50%] xl:w-[35%] 2xl:w-[30%]"
              priority
            />
            <div className="bg-primary-50 mt-4 pt-6 pb-3 px-2 bg-opacity-50 shadow-lg text-secondary-950 shadow-secondary-900 w-[90%] md:w-[70%] 2xl:w-[90%]">
              <h1 className="text-3xl font-bold">News</h1>
              <p className={`${responsiveTextClass} font-normal text-left`}>
                Discover custom cabinets and closets designed to maximize space,
                enhance organization, and complement your style. Tailored to
                your needs with high-quality materials and smart features for
                ultimate functionality and aesthetic appeal.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-wrap">
          {HOMECARDSECTION.slice(0, 1).map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-[90%] my-4"
            >
              <h1 className="text-3xl font-bold">{card.heading}</h1>
              <div
                className={`flex flex-wrap justify-between items-stretch mt-2 border-y-2 border-secondary-500 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="w-full lg:w-[45%] mb-4 lg:m-4">
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
    </div>
  );
};

export default Hero;
