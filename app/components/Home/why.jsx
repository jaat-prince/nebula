import Image from "next/image";
import React from "react";
import { whyData } from "../Helper/Helper";

function why() {
  return (
    <div className="bg-[#494336] py-[60px] md:py-[80px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <h1 className="text-2xl sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal text-[var(--Grey,#D7D9DD)] md:ml-[30px]">
          Why choose Nebula Vets?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[40px] md:mt-[59px] gap-4 sm:mx-[30px]">
          {whyData.map((item, index) => (
            <div key={index} className="w-full md:max-w-[430px]">
              <h1 className="flex items-center justify-between text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] leading-[150%] mt-[15px] sm:mt-[25px] lg:mt-[32px]">
                {item.title}
                <span className=" max-w-[24px] sm:max-w-[30px] mr-2">
                  {item.icon}
                </span>
              </h1>
              <Image
                src={"/assets/png/Line.png"}
                width={530}
                height={2}
                alt="logo"
                className="w-full mt-[30px] md:mt-[32px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default why;
