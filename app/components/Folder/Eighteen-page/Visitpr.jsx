import React from "react";
import Button from "../../Common/Button";
import Image from "next/image";

function Visitpr() {
  return (
    <div className="bg-[#494336]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 pt-[60px] lg:pt-0">
        <div className="flex items-center lg:gap-[71px] flex-wrap lg:flex-nowrap">
          <div className="w-full max-w-[568px]">
            <h1 className="text-2xl sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal text-[var(--Grey,#D7D9DD)]">
              Come visit us!
            </h1>

            <Button
              btn={"LEARN MORE"}
              btnclass={
                "py-[6px] px-[10px] sm:py-[12px] sm:px-[27px] mt-[38px] sm:mt-9"
              }
            />
          </div>
          <div className="w-full max-w-[584px] mt-7 lg:mt-0 xl:mr-[-90px]">
            <Image
              src={"/assets/png/trans.png"}
              width={584}
              height={372}
              alt="logo"
              className="w-full lg:max-w-[584px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visitpr;
