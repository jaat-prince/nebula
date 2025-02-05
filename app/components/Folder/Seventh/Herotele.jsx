import Image from "next/image";
import React from "react";
import Button from "../../Common/Button";

function Herotele() {
  return (
    <div className="bg-[var(--Brown,#494336)] pt-[176px] lg:pt-[140px] pb-[60px] lg:pb-[85px] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="absolute right-0 top-[10px] lg:top-[50px] w-full max-w-[283px] lg:max-w-[600px]">
          <Image
            src={"/assets/png/phone.png"}
            width={600}
            height={507}
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] w-full max-w-[254px] sm:max-w-[580px] ff-av">
            Telemedicine
          </h1>
          <p className="text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[644px]">
            Nebula Vets' online telemedicine service is a convenient and
            innovative way to connect with our veterinary doctors from the
            comfort of your own home. Through this platform, you can have a
            virtual consultation with our experienced veterinarians, allowing
            you to receive timely and expert advice for your pet's health
            concerns without the need to physically visit our clinic.
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

export default Herotele;
