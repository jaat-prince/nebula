"use client";
import Ques from "../../Common/Ques";
import { diagnoData } from "../../Helper/Helper";

function Panel() {
  return (
    <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 py-[60px] md:py-[80px]">
      {diagnoData.map((item, index) => (
        <Ques key={index} title={item.title} text={item.text} />
      ))}
    </div>
  );
}

export default Panel;
