import React from "react";
import { responsiveTextClass } from "../styles/classes";

export default function Hero() {
  return (
    <section className="flex justify-center mt-4 text-secondary-900">
      <div className="w-[89%]">
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-center">
            Welcome to Luxe Kitchen Cabinets
          </h2>
          <div className="text-center flex gap-4">
            <p className={`${responsiveTextClass}`}>
              With over 13 years of experience, Luxe Kitchen Cabinets proudly
              specialize in crafting custom cabinetry solutions for homes and
              offices in Calgary and surrounding areas, combining expert
              craftsmanship, innovative designs, and personalized service to
              create functional and stylish spaces tailored to your unique
              needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
