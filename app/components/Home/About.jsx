import Image from "next/image";
import React from "react";
import Button from "../Common/Button";

function About() {
  return (
    <div className="bg-[var(--Grey-2,rgba(215,217,221,0.50))] pt-[33px] sm:pt-[40px] md:pt-[60px] lg:pt-[81px] pb-[60px] md:pb-[80px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 flex flex-wrap lg:flex-nowrap lg:gap-[69px] items-center relative">
        <div className="absolute right-0 bottom-0 lg:top-0 w-full max-w-[340px]">
          <Image
            src={"/assets/png/wave.png"}
            width={611}
            height={392}
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="w-full lg:max-w-[591px]">
          <Image
            src={"/assets/png/Dog.png"}
            width={591}
            height={550}
            alt="logo"
            className="w-full lg:max-w-[591px]"
          />
        </div>
        <div className="w-full lg:max-w-[639px] mt-[60px] lg:mt-0">
          <h1 className="text-2xl sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal text-[var(--Brown,#494336)]">
            About Nebula Vets ?
          </h1>
          <p className="text-sm md:text-lg lg:text-xl font-normal text-[var(--Brown,#494336)] mt-[13px] sm:mt-4 md:mt-6 lg:mt-8">
            Founded on a strong set of core values, the story of Nebula Vets
            began with Daniel Hodnett-Lewis, a visionary veterinary surgeon from
            England, UK. Fueled by a deep passion for animals and a desire to
            elevate the standard of care, Daniel embarked on a mission to create
            a veterinary practice that would revolutionize the way pets are
            treated and cared for. Here's the story of Nebula Vets:
          </p>
          <Button
            btn={"LEARN MORE"}
            btnclass={
              "py-[6px] px-[10px] sm:py-[12px] sm:px-[27px] mt-[45px] sm:mt-10"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default About;
