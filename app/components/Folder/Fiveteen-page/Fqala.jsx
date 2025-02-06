"use client";
import Ques from "../../Common/Ques";
import { laserData } from "../../Helper/Helper";

function Fqala() {
  return (
    <div>
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 py-[60px] md:py-[80px]">
        <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal w-full max-sm:max-w-[274px]">
          Benefits of Laser Therapy:
        </h1>
        <div className="mt-2 w-full max-w-[1080px]">
          {laserData.map((item, index) => (
            <Ques key={index} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fqala;
