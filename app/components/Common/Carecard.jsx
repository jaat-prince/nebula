import Image from "next/image";
import React from "react";

function Carecard({ img, imgclass, title, subtitle, text }) {
  return (
    <div>
      <Image
        src={img}
        width={376}
        height={304}
        alt="logo"
        className={`w-full ${imgclass}`}
      />
      <h1 className="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] text-[var(--Brown,#494336)] font-normal ff-av w-full max-w[471px]">
        {title}
      </h1>
      <h2 className="text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] w-full max-w-[518px] mt-[14px] !leading-[150%]">
        {subtitle}
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--Brown,#494336)] font-normal mt-[40px] md:mt-[33px] ff-av">
        {text}
      </p>
    </div>
  );
}

export default Carecard;
