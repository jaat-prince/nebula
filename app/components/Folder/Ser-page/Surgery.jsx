import React from "react";
import Button from "../../Common/Button";
import Spay from "../../Common/Spay";
import Carecard from "../../Common/Carecard";

function Surgery() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap w-full ">
      <div className="w-full bg-[#fff] px-4 sm:px-8 md:px-10 lg:pl-[68px] lg:pr-[23px] pt-[120px] lg:pt-[80px] pb-[60px] lg:pb-0">
        <Carecard
          img={"/assets/png/surgery.png"}
          imgclass={"w-full max-w-[376px] lg:mt-[-170px] lg:mb-[50px]"}
          title={"Surgery"}
          subtitle={
            "Highly experienced surgeons -dedicated to delivering outstanding care for your pet."
          }
          text={
            "At Nebula Vets, we are equipped to handle a wide range of veterinary services, from emergency surgeries to routine procedures like neuters. Our team of skilled veterinarians is committed to providing the highest level of care to your pets."
          }
        />
        <Button
          btn={"BOOK NOW"}
          btnclass={
            "mt-[45px] sm:mt-[40px] max-sm:py-[6px] max-sm:px-[19px] mb-[54px] md:mb-[59px] hidden sm:flex"
          }
        />
      </div>
      <div className="w-full px-4 sm:px-8 md:px-12 lg:pl-[110px] lg:pr-[23px] bg-[var(--Grey-2,rgba(215,217,221,0.50))] py-[60px] lg:py-[80px]">
        <Spay />
      </div>
    </div>
  );
}

export default Surgery;
