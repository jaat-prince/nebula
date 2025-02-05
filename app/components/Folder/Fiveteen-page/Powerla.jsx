import Image from "next/image";
import React from "react";

function Powerla() {
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
              Discover the Power of Laser Therapy at Nebula Vets: Elevating Pet
              Wellness with Advanced Healing
            </h1>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-[45px] md:mt-[60px]">
              What is Laser Therapy?
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              Laser therapy, also known as low-level laser therapy or cold laser
              therapy, is a cutting-edge treatment modality that utilizes
              focused light energy to stimulate cellular activity and promote
              natural healing processes within the body. This non-invasive and
              painless therapy is safe for pets of all ages and can be used
              alongside other treatments to provide comprehensive care.
            </p>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]">
              How Does Laser Therapy Work?
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              During a laser therapy session, a handheld device emits a
              concentrated beam of laser light that penetrates the targeted
              tissues. The light energy is absorbed by the cells, stimulating
              the production of adenosine triphosphate (ATP), a molecule that
              fuels cellular activities. This increase in ATP promotes
              accelerated tissue repair, reduces inflammation, and relieves
              pain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Powerla;
