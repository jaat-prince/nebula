import React from "react";
import Button from "../Common/Button";
import Image from "next/image";
import Link from "next/link";

function Last() {
  return (
    <div className="bg-[#494336]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 pt-[60px] lg:pt-0">
        <div className="flex items-center lg:gap-[71px] flex-wrap lg:flex-nowrap">
          <div className="w-full max-w-[568px]">
            <h1 className="text-2xl sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal text-[var(--Grey,#D7D9DD)] ff-av">
              Our Mission
            </h1>
            <p className="ext-sm md:text-lg lg:text-xl font-normal text-[var(--Grey,#D7D9DD)] mt-[13px] sm:mt-4 md:mt-6 lg:mt-8 ff-av">
              Our Mission is to establish a new standard of excellence in
              veterinary care, driven by an unwavering ethical conscience.
            </p>
            <Link href="/micro">
              <Button
                btn={"LEARN MORE"}
                btnclass={
                  "py-[6px] px-[10px] sm:py-[12px] sm:px-[27px] mt-[38px] sm:mt-9"
                }
              />
            </Link>
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
    </div>
  );
}

export default Last;
