import React from "react";
import Button from "../../Common/Button";
import Image from "next/image";

function Herova() {
  return (
    <div className="bg-[var(--Brown,#494336)] pt-[176px] lg:pt-[140px] pb-[60px] lg:pb-[85px] relative">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="absolute right-0 top-[0px] lg:top-[0px] w-full max-w-[275px] lg:max-w-[649px]">
          <Image
            src={"/assets/png/Vaccinat.png"}
            width={649}
            height={517}
            alt="logo"
            className="w-full max-w-[649px]"
          />
        </div>
        <div>
          <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] w-full max-w-[216px] sm:max-w-[614px] ff-av">
            Vaccinations
          </h1>
          <p className="text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[678px]">
            Vaccinations are key in keeping your pet healthy and preventing them
            catching life-threatening disease.
          </p>
          <p className="text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] ff-av w-full lg:max-w-[678px]">
            Our veterinary team is dedicated to providing comprehensive
            vaccination services tailored to your pet's individual needs and
            lifestyle. This includes not only dogs and cats but also rabbits and
            ferrets.
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

export default Herova;
