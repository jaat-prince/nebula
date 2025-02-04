import React from "react";

function Apporch() {
  return (
    <div className="bg-[var(--Grey-2,rgba(215,217,221,0.50))] py-[60px] md:py-[80px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 flex flex-wrap md:flex-nowrap md:gap-8 lg:gap-[57px]">
        <h1 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[36px] text-[var(--Brown,#494336)] font-normal w-full md:max-w-[166px] ff-av">
          Our Approach
        </h1>
        <p className="text-sm md:text-lg lg:text-xl font-normal leading-[130%] text-[var(--Brown,#494336)] w-full mt-[13px] md:mt-0 ff-av">
          At our independent veterinary hospital, we combine compassion,
          advanced expertise, and a commitment to exceptional care. From routine
          check-ups to urgent and emergency situations, we are here to provide
          your beloved pets with the highest level of service and support they
          deserve.
        </p>
      </div>
    </div>
  );
}

export default Apporch;
