import Image from "next/image";
import React from "react";
import Button from "../../Common/Button";

function Herodi() {
  return (
    <div className="bg-[var(--Brown,#494336)] pt-[176px] lg:pt-[140px] pb-[60px] lg:pb-[85px] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="absolute right-0 top-[10px] lg:top-[50px] w-full max-w-[275px] lg:max-w-[539px]">
          <Image
            src={"/assets/png/Diagnost.png"}
            width={539}
            height={457}
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] w-full max-w-[216px] sm:max-w-[614px] ff-av">
            Diagnostics
          </h1>
          <p className="text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[631px]">
            At Nebula Vets, we are committed to providing comprehensive and
            advanced diagnostic testing to ensure the well-being of your
            cherished pet.
          </p>
          <p className="text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] ff-av w-full lg:max-w-[631px]">
            Our state-of-the-art veterinary hospital offers a range of
            diagnostic tests that empower us to gain precise insights into your
            pet's health. Here are some of the key diagnostic tests available at
            Nebula Vets for the benefit of our clients and their beloved pets:
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

export default Herodi;
