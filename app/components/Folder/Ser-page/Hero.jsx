import React from "react";
import Button from "../../Common/Button";
import Image from "next/image";

function Hero() {
  return (
    <div className="bg-[#494336] pt-[33px] sm:pt-[60px] md:pt-[110px] lg:pt-[140px] pb-0 lg:pb-[85px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 relative flex flex-wrap lg:flex-nowrap">
        <div className="w-full">
          <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] w-full max-w-[230px] sm:max-w-[578px] ff-av">
            Veterinary Services
          </h1>
          <p className="text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[660px]">
            At Nebula Vets, we take pride in offering an extensive range of
            services to meet the diverse needs of our patients. Our commitment
            to comprehensive care ensures that we can provide the highest
            quality veterinary services under one roof.
          </p>
          <Button
            btn={"BOOK NOW"}
            btnclass={"mt-[45px] sm:mt-[40px] max-sm:py-[6px] max-sm:px-[19px]"}
          />
        </div>

        <Image
          src={"/assets/png/trans.png"}
          width={584}
          height={372}
          alt="logo"
          className="w-full lg:max-w-[584px] mt-6 lg:mt-0 lg:-mr-12 xl:-mr-[60px]"
        />
      </div>
    </div>
  );
}

export default Hero;
