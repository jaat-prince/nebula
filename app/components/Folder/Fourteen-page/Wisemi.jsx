import Image from "next/image";
import React from "react";

function Wisemi() {
  return (
    <div className="bg-[var(--Grey-2,rgba(215,217,221,0.50))] pt-[60px] md:pt-[80px] pb-[120px] md:pb-[146px] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="w-full absolute bottom-0 left-[0px]">
          <Image
            src={"/assets/png/wave-5.png"}
            width={1440}
            height={455}
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="w-full relative z-10">
          <div>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-[28px] font-normal text-[var(--Brown,#494336)]">
              Here are a few compelling reasons why microchipping is a wise
              choice:
            </h1>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-[45px] md:mt-[60px]">
              Identification and Reunification
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              Pets can sometimes wander or accidentally get lost, causing
              distress to both the pet and their owners. A microchip provides a
              permanent form of identification that cannot be lost or removed.
              If your pet goes missing and is found by a shelter or veterinary
              clinic, they can scan the microchip to retrieve your contact
              information and swiftly reunite you with your beloved pet.
            </p>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]">
              Increased Chance of Recovery
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              Studies have shown that pets with microchips have a significantly
              higher chance of being reunited with their owners compared to
              those without. By having your pet microchipped, you enhance the
              chances of a successful reunion, saving precious time, and
              reducing the emotional strain of a lost pet situation.
            </p>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]">
              Secure and Permanent
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              Unlike collars or tags, which can break or be removed, a microchip
              is a tiny, implantable device that is safely and painlessly
              inserted under your pet's skin. Once in place, it remains with
              your pet for life, ensuring a permanent form of identification
              that cannot be tampered with or lost.
            </p>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]">
              Universal Recognition
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              Microchips are recognized and read by most veterinary clinics,
              animal shelters, and animal control agencies worldwide. This means
              that if your pet gets lost during travel or relocation, their
              microchip can be scanned and their identification information
              accessed regardless of where they are found.
            </p>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]">
              Medical Information Access
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              Advanced microchips can store additional medical information about
              your pet, such as vaccinations, allergies, or any ongoing medical
              conditions. This feature can be especially helpful in emergency
              situations when immediate access to crucial health details can
              make a significant difference in the treatment and care your pet
              receives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wisemi;
