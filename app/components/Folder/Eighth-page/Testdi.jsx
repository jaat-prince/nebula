import Image from "next/image";
import React from "react";

function Testdi() {
  return (
    <div className="bg-[var(--Grey-2,rgba(215,217,221,0.50))] pt-[60px] md:pt-[80px] pb-[118px] md:pb-[140px] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="w-full absolute bottom-0 left-[0px]">
          <Image
            src={"/assets/png/wave-4.png"}
            width={1440}
            height={450}
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="w-full relative z-10">
          <div>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px] w-full max-sm:max-w-[188px]">
              Available Tests
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              At Nebula Vets, we take pride in offering an in-house laboratory
              equipped with state-of-the-art diagnostic equipment to fulfill
              your pet's diagnostic needs. Our comprehensive laboratory services
              include:
            </p>
            <ul>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Hematology
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Serum Chemistries
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Urinalysis
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Cytology
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Fecal analysis
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Blood disorders
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testdi;
