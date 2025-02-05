import Image from "next/image";
import React from "react";
import Button from "../../Common/Button";

function Herour() {
  return (
    <div className="bg-[var(--Brown,#494336)] pt-[176px] lg:pt-[140px] pb-[60px] lg:pb-[85px] relative">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="absolute right-0 top-[30px] lg:top-[60px] w-full max-w-[240px] lg:max-w-[508px]">
          <Image
            src={"/assets/png/Urgent.png"}
            width={508}
            height={508}
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] w-full max-w-[254px] sm:max-w-[580px] ff-av">
            Urgent & Emergency Care
          </h1>
          <p className="text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[644px]">
            At Nebula Vets, we understand that when your pet is sick or injured,
            prompt and quality care is essential. Our dedicated team of
            veterinarians and staff are committed to providing the care your pet
            needs to recover and thrive.
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

export default Herour;
