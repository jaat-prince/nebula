"use client";
import { useState } from "react";
import Image from "next/image";
import { AddIcon } from "../Helper/Icon";

function Ques({ title, text }) {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion((prevState) => (prevState === index ? null : index));
  };
  return (
    <>
      <div
        className="accordion-title cursor-pointer mt-[32px]"
        onClick={() => toggleAccordion(1)}
      >
        <h1 className="text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between items-center">
          <span className="w-full max-[430px]:max-w-[234px]">{title}</span>
          <span
            className={`ml-2 ${
              openAccordion === 1 ? "rotate-[45deg]" : "rotate-[0deg]"
            }`}
          >
            <AddIcon />
          </span>
        </h1>
        {openAccordion === 1 && (
          <p className="text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6 w-full max-w-[1026px]">
            {text}
          </p>
        )}
        <Image
          src={"/assets/png/line.png"}
          width={603}
          height={376}
          alt="logo"
          className="w-full mt-[32px]"
        />
      </div>
    </>
  );
}

export default Ques;
