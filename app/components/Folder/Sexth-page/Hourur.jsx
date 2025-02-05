import Image from "next/image";
import React from "react";

function Hourur() {
  return (
    <div className="bg-[var(--Grey-2,rgba(215,217,221,0.50))] pt-[60px] md:pt-[80px] pb-[120px] md:pb-[140px] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="w-full absolute bottom-0 left-[0px]">
          <Image
            src={"/assets/png/wave-4.png"}
            width={1440}
            height={450}
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="w-full relative z-10">
          <div>
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px] w-full max-sm:max-w-[188px]">
              Urgent & Emergency Care during open hours
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              At Nebula Vets, we understand that emergencies can happen at any
              time, and your pet's health and well-being are our top priority.
               We have convenient operating hours to ensure that we are
              available when you need us.
            </p>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              Our clinic is open from{" "}
              <span className="font-bold">
                8am to 6pm on weekdays and from 9am to 5pm on Saturdays
              </span>
              . During these hours, our team of veterinarians and staff are
              ready to provide care for your pets.
            </p>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              If you have an urgent situation and require immediate advice or
              first aid instructions while you're on your way to our practice,
              you can contact us at 1234567. Our knowledgeable staff will assist
              you and provide guidance to help you manage the situation until
              you arrive.
            </p>
          </div>
          <div className="w-full max-w-[1075px] mt-5 md:mt-[38px] lg:mt-[50px]">
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px] w-full max-sm:max-w-[188px]">
              Outside open hours
            </h1>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]">
              The closest 24hr emergency veterinary hospital to our practice is:
            </p>
            <p className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av">
              Their number is 123456
            </p>
          </div>
          <div className="w-full max-w-[1075px] mt-5 md:mt-[38px] lg:mt-[50px]">
            <h1 className="text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px] w-full max-sm:max-w-[188px]">
              Reasons to seek Urgent or Emergency care
            </h1>
            <ul className="mt-5 lg:mt-[30px]">
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Open wounds
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Toxin ingestion or foreign body
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Signs of pain
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Behavioral changes
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Eye issues
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Ear infections
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Vomiting or diarrhea
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Hair loss
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Coughing, sneezing or nasal discharge
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Urinating blood or urinary changes
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Worms, fleas, ticks or mites
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Scooting
              </li>
              <li className="text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av flex items-center gap-1">
                <span>.</span>Changes in eating or drinking
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hourur;
