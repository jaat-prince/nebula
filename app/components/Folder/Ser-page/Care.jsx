import React from "react";

function Care() {
  return (
    <div className="bg-[#494336] py-[45px] md:py-[60px] lg:py-[80px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 flex flex-wrap lg:flex-nowrap justify-between gap-4">
        <p className="text-[var(--Grey,#D7D9DD)] text-2xl md:text-[32px] lg:text-[36px] font-normal ff-av">
          Preventive Care
        </p>
        <p className="text-[rgba(217,217,217,0.50)] text-2xl md:text-[32px] lg:text-[36px] font-normal ff-av">
          Sick Patient Care
        </p>
        <p className="text-[rgba(217,217,217,0.50)] text-2xl md:text-[32px] lg:text-[36px] font-normal ff-av">
          Surgery
        </p>
        <p className="text-[rgba(217,217,217,0.50)] text-2xl md:text-[32px] lg:text-[36px] font-normal ff-av">
          Additional Services
        </p>
      </div>
    </div>
  );
}

export default Care;
