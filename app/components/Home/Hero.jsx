import React from "react";
import Button from "../Common/Button";
import Image from "next/image";

function Hero() {
  return (
    <div
      className={`bg-[var(--Grey-2,rgba(215,217,221,0.50))] md:bg-[url(/assets/png/Heroimage.png)] bg-cover bg-center bg-no-repeat pt-[35px] sm:pt-[110px] md:pt-[160px] lg:pt-[193px] md:pb-[85px] overflow-hidden`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 relative md:ml-[65px]">
        <div className="absolute right-[-100px] sm:right-[-163px] top-[50px] md:top-[-90px] w-full max-w-[265px] sm:max-w-[400px]">
          <Image
            src={"/assets/png/cir.png"}
            width={482}
            height={536}
            alt="logo"
            className="w-full"
          />
        </div>
        <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] text-[var(--Brown,#494336)] md:text-[var(--Grey,#D7D9DD)] w-full max-w-[230px] sm:max-w-[511px] ff-av">
          Welcome to Nebula Vets
        </h1>
        <p className="text-base sm:text-xl md:text-[28px] font-normal text-[var(--Brown,#494336)] md:text-[var(--Grey,#D7D9DD)] sm:mt-7">
          Reinventing Pet Medicine
        </p>
        <Button
          btn={"BOOK NOW"}
          btnclass={"mt-[45px] sm:mt-[38px] max-sm:py-[6px] max-sm:px-[19px]"}
        />
      </div>
      <Image
        src={"/assets/png/Hero-1.png"}
        width={678}
        height={278}
        alt="logo"
        className="w-full flex md:hidden mt-[60px]"
      />
    </div>
  );
}

export default Hero;
