"use client";
import Image from "next/image";
import { IMAGES } from "../../../../share/assets";
import Button from "../button";
import { useRouter } from "next/navigation";
import { ROUTES } from "../../../../share/routes";

const Hero = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.contactUs);
  };

  const sections = [
    {
      title: "Hello",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quam esse, eius id perspiciatis accusantium quis nostrum officiis a quisquam eveniet dolor quod placeat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus sit minima perspiciatis, libero neque ipsum totam facilis placeat nihil modi doloribus eius illo unde! Doloribus.",
      image: IMAGES.landingImage,
    },
    {
      title: "Welcome",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quam esse, eius id perspiciatis accusantium quis nostrum officiis a quisquam eveniet dolor quod placeat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus sit minima perspiciatis, libero neque ipsum totam facilis placeat nihil modi doloribus eius illo unde! Doloribus.",
      image: IMAGES.landingImage,
    },
    {
      title: "Greetings",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quam esse, eius id perspiciatis accusantium quis nostrum officiis a quisquam eveniet dolor quod placeat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus sit minima perspiciatis, libero neque ipsum totam facilis placeat nihil modi doloribus eius illo unde! Doloribus.",
      image: IMAGES.landingImage,
    },
  ];

  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="mt-12 w-full relative">
        
        <div
          className="flex flex-col items-center justify-center bg-cover text-center bg-center p-10 bg-no-repeat"
          style={{
            backgroundImage: `url(${IMAGES.landingImage})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <link rel="preload" href={IMAGES.logoMain} as="image" />
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

      {/* Content Sections */}
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-wrap justify-center items-center my-8 px-4 lg:px-8"
        >
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0 px-2">
            <h1 className="text-xl md:text-2xl font-bold mb-4">
              {section.title}
            </h1>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {section.content}
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-2">
            <Image
              alt={section.title}
              src={section.image}
              width={1000}
              height={100}
              className="rounded-md"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
