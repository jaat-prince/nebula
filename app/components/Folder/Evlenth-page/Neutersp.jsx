"use client";

import Ques from "../../Common/Ques";
import { spyData } from "../../Helper/Helper";

function Neutersp() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] py-[60px] md:py-[80px]">
        <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal w-full max-sm:max-w-[274px]">
          Why Choose Nebula Vets for Spay and Neuter
        </h1>
        <div className="mt-2 w-full max-w-[1080px]">
          {spyData.map((item, index) => (
            <Ques key={index} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Neutersp;
