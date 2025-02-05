import React from "react";
import Button from "../../Common/Button";
import Image from "next/image";

function Herode() {
  return (
    <div className="bg-[var(--Brown,#494336)] pt-[176px] lg:pt-[140px] pb-[60px] lg:pb-[85px] relative">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="absolute right-0 top-[30px] lg:top-[70px] w-full max-w-[253px] lg:max-w-[506px]">
          <Image
            src={"/assets/png/Dental.png"}
            width={506}
            height={414}
            alt="logo"
            className="w-full max-w-[253px] lg:max-w-[506px]"
          />
        </div>
        <div>
          <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] w-full max-w-[216px] sm:max-w-[614px] ff-av">
            Dental Care
          </h1>
          <p className="text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[678px]">
            At Nebula Vets, we recognize the significance of dental hygiene in
            maintaining your pet's overall health. Dental disease can have
            far-reaching implications, potentially leading to serious conditions
            like heart disease and kidney disease. To ensure your pet's oral
            health, we conduct thorough dental examinations to identify any
            dental issues that require attention.
          </p>
          <Button
            btn={"BOOK NOW"}
            btnclass={"mt-[45px] sm:mt-[40px] max-sm:py-[6px] max-sm:px-[19px]"}
          />
        </div>
      </div>
    </div>
  );
}

export default Herode;
