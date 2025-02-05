"use client";
import { useState } from "react";
import Image from "next/image";
import { AddIcon } from "../Helper/Icon";

function Fqaa({ text, title }) {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion((prevState) => (prevState === index ? null : index));
  };
  return (
    <div
      className="w-full md:max-w-[530px] accordion-title cursor-pointer mt-[15px] sm:mt-[25px] lg:mt-[32px]"
      onClick={() => toggleAccordion(1)}
    >
      <h1 className="flex items-center justify-between text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] leading-[150%]">
        {title}
        <span
          className={`ml-2 ${
            openAccordion === 1 ? "rotate-[45deg]" : "rotate-[0deg]"
          }`}
        >
          <AddIcon className="w-[24px] md:w-[30px]" />
        </span>
      </h1>
      {openAccordion === 1 && (
        <p className="text-sm md:text-base lg:text-lg font-normal text-[var(--Grey,#D7D9DD)] ff-av sm:mt-6">
          {text}
        </p>
      )}
      <Image
        src={"/assets/png/Line.png"}
        width={530}
        height={2}
        alt="logo"
        className="w-full mt-[22px] md:mt-[32px]"
      />
    </div>
  );
}

export default Fqaa;
