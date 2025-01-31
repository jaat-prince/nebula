import React from "react";
import Carecard from "../../Common/Carecard";
import Button from "../../Common/Button";
import Travel from "../../Common/Travel";

function Addition() {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap w-full ">
        <div className="w-full bg-[#fff] px-4 sm:px-8 md:px-10 lg:pl-[68px] lg:pr-[23px] pt-[120px] lg:pt-[80px] pb-[60px] lg:pb-0">
          <Carecard
            img={"/assets/png/Additional.png"}
            imgclass={"w-full max-w-[376px]"}
            title={"Additional Services"}
            subtitle={
              "Additional Services that Go Above and Beyond: Experience Exceptional Veterinary Care at Nebula Vets"
            }
            text={
              "Experience comprehensive veterinary care at Nebula Vets. We offer specialized services in travel document assistance, skin dermatology, microchipping, and compassionate euthanasia. Trust our experienced team for exceptional care tailored to your pet's unique needs.."
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
          <Travel />
        </div>
      </div>
    </>
  );
}

export default Addition;
