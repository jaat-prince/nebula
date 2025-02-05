import Image from "next/image";
import React from "react";
import Button from "../../Common/Button";

function Heromi() {
  return (
    <div className="bg-[var(--Brown,#494336)] pt-[176px] lg:pt-[140px] pb-[60px] lg:pb-[85px] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="absolute right-0 top-[37px] lg:top-[119px] w-full max-w-[309px] lg:max-w-[624px]">
          <Image
            src={"/assets/png/Microchip.png"}
            width={624}
            height={349}
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] w-full max-w-[216px] sm:max-w-[614px] ff-av">
            Microchipping
          </h1>
          <p className="text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[664px]">
            A microchip, resembling a tiny grain of rice in size and shape, is
            delicately inserted beneath your pet's skin, specifically between
            the shoulder blades. This quick and completely safe procedure
            typically takes only a few minutes. Each microchip possesses a
            distinct identification code, crucial for storing essential
            information about your beloved pet.
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

export default Heromi;
