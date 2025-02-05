"use client";
import Image from "next/image";
import Ques from "../../Common/Ques";
import { jionData } from "../../Helper/Helper";

function Career() {
  return (
    <div className="relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] py-[60px] md:py-[80px]">
        <div className="absolute left-0 w-full bottom-0 max-md:hidden ">
          <Image
            src={"/assets/png/wave-7.png"}
            width={1440}
            height={376}
            alt="logo"
            className="w-full"
          />
        </div>
        <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal w-full max-sm:max-w-[274px]">
          Why Choose a Career at Nebula Vets:
        </h1>
        <div className="mt-2 w-full max-w-[1080px]">
          {jionData.map((item, index) => (
            <Ques key={index} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Career;
