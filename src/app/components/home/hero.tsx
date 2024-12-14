"use client";
import Image from "next/image";
import { IMAGES } from "../../../../share/assets";
import Button from "../button";
import { useRouter } from "next/navigation";
import { ROUTES } from "../../../../share/routes";
import { HOMECARDSECTION } from "../../../../share/data";

const Hero = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.contactUs);
  };

  return (
    <section className="relative">
      <div className="mt-12 w-full relative">
        <div
          className="flex flex-col items-center justify-center bg-cover text-center bg-center p-10 bg-no-repeat"
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
            className="w-[90%] sm:w-[45%] md:w-[50%]"
            priority
          />

          <Button
            text="Contact us"
            onClick={handleClick}
            className="mt-4 py-1 md:py-3 px-4 bg-secondary-500 text-white rounded-md hover:bg-secondary-600 transition-all duration-300"
          />
        </div>
      </div>

      <div className="flex justify-center items-center flex-wrap">
        {HOMECARDSECTION.slice(0, 3).map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-[90%] my-4"
          >
            <h1 className="text-3xl font-bold">{card.heading}</h1>
            <div className="flex flex-wrap justify-center items-start mt-2">
              <div className="w-full lg:w-[50%] mb-4 lg:mb-0 px-2">
                <h1 className="text-xl md:text-2xl font-bold mb-2">
                  {card.title}
                </h1>
                <p className="text-sm text-gray-800 leading-relaxed text-justify">
                  {card.description}
                </p>
              </div>
              <Image
                alt="cardImages"
                src={card.imageUrl}
                width={100}
                height={400}
                className="w-[100%] sm:w-[45%] md:w-[50%] "
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
