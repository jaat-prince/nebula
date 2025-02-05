import Image from "next/image";
import React from "react";
import Button from "../../Common/Button";

function Heroph() {
  return (
    <div className="bg-[var(--Brown,#494336)] pt-[176px] lg:pt-[140px] pb-[60px] lg:pb-[85px] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="absolute right-0 top-[30px] lg:top-[70px] w-full max-w-[253px] lg:max-w-[506px]">
          <Image
            src={"/assets/png/Pharmacy.png"}
            width={506}
            height={414}
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] w-full max-w-[216px] sm:max-w-[614px] ff-av">
            Pharmacy
          </h1>
          <p className="text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[664px]">
            At Nebula Vets, we understand the importance of convenient access to
            necessary medications and pet health products for your furry
            companions. That's why we have an on-site pharmacy stocked with a
            wide range of prescription medications, prescription diets, and
            other pet health products.
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

export default Heroph;
