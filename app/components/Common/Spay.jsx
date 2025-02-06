import React from "react";
import Button from "./Button";
import { spayData } from "../Helper/Helper";
import Link from "next/link";

function Spay() {
  return (
    <>
      {spayData.map((item, index) => (
        <div
          key={index}
          className="w-full lg:max-w-[672px] border-b-[#000] border-b mt-[29px] md:mt-[31px]"
        >
          <h1 className="text-base sm:text-xl md:text-2xl lg:-[28px] font-normal text-[var(--Brown,#494336)]">
            {item.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[var(--Brown,#494336)] ff-av pt-4 md:pt-6">
            {item.text}
          </p>
          <Link href={item.link}>
            <Button
              btn={"LEARN MORE"}
              btnclass={
                "mt-[45px] sm:mt-[40px] max-sm:py-[6px] max-sm:px-[19px] mb-[54px] md:mb-[59px]"
              }
            />
          </Link>
        </div>
      ))}
    </>
  );
}

export default Spay;
