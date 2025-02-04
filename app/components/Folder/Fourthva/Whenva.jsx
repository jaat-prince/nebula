"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AddIcon, CrossIcon } from "../../Helper/Icon";
import Slideva from "./Slideva";
import Secondva from "./Secondva";
import Ques from "../../Common/Ques";
import { vaccantData } from "../../Helper/Helper";

function Whenva() {
  return (
    <>
      <div className="w-full max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 py-[60px] lg:py-[80px]">
        <div className="w-full">
          {vaccantData.map((item, index) => (
            <Ques key={index} title={item.title} text={item.text} />
          ))}
        </div>
        <h1 className="text-2xl sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal ff-av text-[var(--Brown,#494336)] mt-[74px] md:mt-[80px]">
          When to vaccinate?
        </h1>
        <div className="mt-6 lg:mt-10">
          <Slideva />
        </div>
        <div className="mt-[21px]">
          <Secondva />
        </div>
      </div>
    </>
  );
}

export default Whenva;
