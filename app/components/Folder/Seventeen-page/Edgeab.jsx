import Image from "next/image";
import React from "react";

function Edgeab() {
  return (
    <div className="bg-[var(--Grey-2,rgba(215,217,221,0.50))] py-[60px] md:py-[80px] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="w-full absolute bottom-0 left-[0px]">
          <Image
            src={"/assets/png/wave-5.png"}
            width={1440}
            height={455}
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="w-full relative z-10 flex flex-wrap-reverse lg:flex-nowrap lg:justify-end lg:gap-[45px]">
          <div className="w-full max-lg:mt-[60px] lg:max-w-[547px]">
            <h1 className="text-2xl font-normal text-[var(--Brown,#494336)] max-md:ff-av">
              Innovation and Cutting-Edge Technology
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[var(--Brown,#494336)] ff-av mt-5">
              Nebula Vets embraced the power of innovation and embraced
              cutting-edge technology to enhance their diagnostic capabilities,
              treatment options, and overall patient care. From advanced imaging
              techniques to state-of-the-art surgical equipment, Nebula Vets
              ensures that their veterinarians have access to the latest tools
              and techniques to deliver optimal outcomes.
            </p>
            <h1 className="text-2xl font-normal text-[var(--Brown,#494336)] max-md:ff-av mt-6">
              Compassionate Care  & Client Relationships
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[var(--Brown,#494336)] ff-av mt-5">
              Nebula Vets prides itself on providing compassionate care not only
              to the pets but also to their owners. We understand the deep bond
              between humans and animals and strive to create a nurturing and
              supportive environment for both. Building strong client
              relationships based on trust, open communication, and empathy is
              at the heart of their practice.
            </p>
          </div>

          <div className="w-full max-w-[600px]">
            <Image
              src={"/assets/png/kutta.png"}
              width={600}
              height={620}
              alt="logo"
              className="w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edgeab;
