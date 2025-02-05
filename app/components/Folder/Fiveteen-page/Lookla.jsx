import Image from "next/image";
import React from "react";
import Button from "../../Common/Button";

function Lookla() {
  return (
    <div className="bg-[var(--Brown,#494336)] pt-[60px] md:pt-[80px] pb-[161px] lg:pb-[85px] relative">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="absolute right-0 w-full max-w-[603px] bottom-0">
          <Image
            src={"/assets/png/wave-3.png"}
            width={603}
            height={376}
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="w-full max-w-[817px]">
          <h1 className="text-[var(--Grey,#D7D9DD)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal w-full max-sm:max-w-[230px]">
            We look forward to seeing you and your pet soon!
          </h1>
          <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-[32px] lg:mt-[30px]">
            Contact Nebula Vets today to schedule a dermatology consultation and
            let our experienced team bring the sparkle back to your pet's coat.
            Together, we will help your furry friend shine with healthy skin and
            a happy disposition.
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

export default Lookla;
