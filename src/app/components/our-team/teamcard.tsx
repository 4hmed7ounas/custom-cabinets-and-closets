import React from "react";
import Image from "next/image";
import { responsiveTextClass } from "../styles/classes";
import { TEAMDATA } from "../../../../share/data";

export const TeamCard = () => {
  return (
    <section className="flex justify-center mt-8 text-secondary-900">
      <div className=" w-[90%]">
        <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEAMDATA.map((member, index) => (
            <div
              key={index}
              className="flex flex-col shadow-md shadow-secondary-300 rounded-xl hover:shadow-lg hover:shadow-secondary-400 cursor-pointer transition-shadow duration-300 p-3"
            >
              <div className="flex items-end gap-2">
                <Image
                  src={member.picture}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover object-top aspect-square shadow-2xl"
                />
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold">{member.name}</h3>
                  <p className={`${responsiveTextClass}`}>
                    {member.designation}
                  </p>
                </div>
              </div>
              {/* Description Section */}
              <div className="mt-3">
                <p className={`${responsiveTextClass}`}>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
