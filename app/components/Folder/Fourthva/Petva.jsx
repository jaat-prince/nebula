import React from "react";
import Button from "../../Common/Button";
import Image from "next/image";

function Petva() {
  return (
    <div className="bg-[var(--Brown,#494336)] pt-[60px] md:pt-[80px] pb-[161px] lg:pb-[47px] relative">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="absolute right-0 w-full max-w-[603px] bottom-0">
          <Image
            src={"/assets/png/wave-3.png"}
            width={603}
            height={376}
            alt="logo"
            className="w-full max-w-[603px]"
          />
        </div>
        <div className="w-full max-w-[817px]">
          <h1 className="text-[var(--Grey,#D7D9DD)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal w-full max-sm:max-w-[230px]">
            We look forward to seeing you and your pet soon!
          </h1>
          <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-[32px] lg:mt-[30px]">
            If you have any questions or concerns about vaccinations or would
            like to schedule an appointment for your pet, please contact our
            friendly team at [Your Veterinary Practice]. We are here to provide
            your furry family members with the highest standard of care and
            protection through our comprehensive vaccination services.
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

export default Petva;
