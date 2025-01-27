import React from "react";
import Urgent from "../../Common/Urgent";
import Carecard from "../../Common/Carecard";
import Button from "../../Common/Button";

function Sick() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap w-full ">
      <div className="w-full bg-[#fff] px-4 sm:px-8 md:px-10 lg:pl-[68px] lg:pr-[23px] pt-[120px] lg:pt-[80px] pb-[60px] lg:pb-0">
        <Carecard
          img={"/assets/png/sick.png"}
          imgclass={"w-full max-w-[376px]"}
          title={"Sick Patient Care"}
          subtitle={
            "Delivering exceptional care for sick patients, combining the virtues of efficiency and expertise"
          }
          text={
            "At Nebula Vets, we take a proactive approach to your pet's healthcare, prioritizing their well-being and aiming to maximize their quality of life. We believe in the importance of preventive medicine and early detection of potential health issues. By implementing regular wellness check-ups and comprehensive screenings, we can identify and address any problems at their earliest stages."
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
        <Urgent />
      </div>
    </div>
  );
}

export default Sick;
