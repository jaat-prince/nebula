import React from "react";
import Button from "./Button";
import Image from "next/image";
import { FaceIcon, InstIcon, InIcon } from "../Helper/Icon";
import { comData, contData, sevData } from "../Helper/Helper";

function Footer() {
  return (
    <div className="bg-[#494336]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 pt-[60px] lg:pt-0">
        <div className="flex items-center lg:gap-[71px] flex-wrap lg:flex-nowrap md:pl-[65px]">
          <div className="w-full max-w-[568px]">
            <h1 className="text-2xl sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal text-[var(--Grey,#D7D9DD)]">
              Our Mission
            </h1>
            <p className="ext-sm md:text-lg lg:text-xl font-normal text-[var(--Grey,#D7D9DD)] mt-[13px] sm:mt-4 md:mt-6 lg:mt-8">
              Our Mission is to establish a new standard of excellence in
              veterinary care, driven by an unwavering ethical conscience.
            </p>
            <Button
              btn={"LEARN MORE"}
              btnclass={
                "py-[6px] px-[10px] sm:py-[12px] sm:px-[27px] mt-[38px] sm:mt-9"
              }
            />
          </div>
          <div className="w-full max-w-[584px] mt-7 lg:mt-0">
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
      <div className="border-t border-t-[#D8DADC]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 pt-[61px] md:pt-[60px] pb-[111px] md:pb-[80px] lg:pb-[59px] flex justify-between gap-5 flex-wrap lg:flex-nowrap">
          <div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)]">
              Stay in touch:
            </p>
            <div className="border border-[#D9D9D9] w-full max-w-[309px] mt-2 md:mt-4">
              <input
                type="email"
                className=" px-[14px] py-[6px] bg-transparent border-0 outline-none text-[var(--Grey,#D7D9DD)] placeholder:text-[var(--Grey,#D7D9DD)] placeholder:text-lg text-lg"
                placeholder="Email"
              />
            </div>
            <div className="flex gap-5 mt-[17px] md:mt-[22px]">
              <FaceIcon />
              <InIcon />
              <InstIcon />
            </div>
          </div>
          <div className="flex gap-y-[25px] gap-x-[120px]  sm:gap-x-[96px] flex-wrap lg:flex-nowrap">
            <div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] leading-[150%]">
                Services
              </h2>
              <ul className="mt-[10px] md:mt-[20px] lg:mt-[31px]">
                {sevData.map((item, index) => (
                  <li key={index} className="mt-[6px]">
                    <a
                      href="#"
                      className="text-sm md:text-base lg:text-lg text-normal text-[var(--Grey,#D7D9DD)] leading-[144%] underline hover:text-[#fff] transition-all duration-500 ease-in-out"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] leading-[150%]">
                Company
              </h2>
              <ul className="mt-[10px] md:mt-[20px] lg:mt-[31px]">
                {comData.map((item, index) => (
                  <li key={index} className="mt-[6px]">
                    <a
                      href="#"
                      className="text-sm md:text-base lg:text-lg text-normal text-[var(--Grey,#D7D9DD)] leading-[144%] underline hover:text-[#fff] transition-all duration-500 ease-in-out"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] leading-[150%]">
                Contact Us
              </h2>
              <ul className="mt-[10px] md:mt-[20px] lg:mt-[31px]">
                {contData.map((item, index) => (
                  <li key={index} className="mt-[6px]">
                    <a
                      href="#"
                      className="text-sm md:text-base lg:text-lg text-normal text-[var(--Grey,#D7D9DD)] leading-[144%] underline hover:text-[#fff] transition-all duration-500 ease-in-out"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
