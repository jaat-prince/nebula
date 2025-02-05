import React from "react";
import Button from "../../Common/Button";
import Image from "next/image";

function Heroji() {
  return (
    <div className="bg-[var(--Brown,#494336)] pt-[176px] lg:pt-[140px] pb-[60px] lg:pb-[85px] relative">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="absolute right-0 top-[10px] lg:top-[147px] w-full max-w-[213px] lg:max-w-[431px]">
          <Image
            src={"/assets/png/Career.png"}
            width={431}
            height={418}
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] w-full max-w-[248px] sm:max-w-[614px] ff-av">
            Join Our Nebula Vets Team:
          </h1>
          <p className="text-base sm:text-xl md:text-2xl lg:text-[28px] font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[679px]">
            Empowering Careers in Veterinary Care
          </p>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[679px]">
            At Nebula Vets, we are passionate about providing exceptional
            veterinary care and creating a positive impact in the lives of pets
            and their families. We believe in the power of collaboration,
            compassion, and continuous growth. If you are seeking a rewarding
            career in veterinary medicine, Nebula Vets offers exciting
            opportunities to join our dedicated team.
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

export default Heroji;
