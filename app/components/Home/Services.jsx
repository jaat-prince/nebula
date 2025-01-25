import React from "react";
import Button from "../Common/Button";
import Care from "./Care";

function Services() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 pt-[80px]">
      <div className="md:ml-[60px]">
        <h1 className="text-2xl sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal text-[var(--Brown,#494336)]">
          Our Services
        </h1>
        <p className="text-sm md:text-lg lg:text-xl font-normal w-full max-w-[770px] text-[var(--Brown,#494336)] mt-[13px] sm:mt-4 md:mt-6 lg:mt-8">
          We are proud to offer a comprehensive range of exceptional clinical
          services to cater to all your pet's needs. From routine wellness
          health checks to prompt and efficient urgent care, our team is here to
          provide the highest level of support and assistance. Count on us to be
          there for you and your beloved companion every step of the way.
        </p>
        <Button
          btn={"LEARN MORE"}
          btnclass={
            "py-[6px] px-[10px] sm:py-[12px] sm:px-[27px] mt-[45px] sm:mt-10"
          }
        />
      </div>
      <div className="mt-[65px] md:mt-[79px] mb-[90px] md:mb-[110px] lg:mb-[140px] ">
        <Care />
      </div>
    </div>
  );
}

export default Services;
