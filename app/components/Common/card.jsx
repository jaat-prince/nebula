import React from "react";

function card() {
  return (
    <div>
      <div className="bg-[#494336] w-full max-w-[218px] sm:max-w-[310px] pt-[25px] px-5">
        <IjectIcon />
        <div>
          <h1 className="text-2x; md:text-[32px] lg:text-[36px] font-normal text-[var(--Grey,#D7D9DD)] mt-[15px] sm:mt-6 md:mt-[35px] lg:mt-[50px]">
            Preventive Care
          </h1>
          <ul className="mt-5 md:mt-[15px]">
            {careData.map((item, index) => (
              <li key={index} className="mt-[6px]">
                <a
                  href="#"
                  className="text-sm md:text-base lg:text-lg text-normal text-[var(--Grey,#D7D9DD)] leading-[144%] underline hover:text-[#fff] transition-all duration-500 ease-in-out"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-[#494336] w-full max-w-[218px] sm:max-w-[310px] pt-[25px] px-5">
        <HeartIcon />
        <div>
          <h1 className="text-2x; md:text-[32px] lg:text-[36px] font-normal text-[var(--Grey,#D7D9DD)] mt-[15px] sm:mt-6 md:mt-[35px] lg:mt-[50px]">
            Sick Patient Care
          </h1>
          <ul className="mt-5 md:mt-[15px]">
            {sickData.map((item, index) => (
              <li key={index} className="mt-[6px]">
                <a
                  href="#"
                  className="text-sm md:text-base lg:text-lg text-normal text-[var(--Grey,#D7D9DD)] leading-[144%] underline hover:text-[#fff] transition-all duration-500 ease-in-out w-full md:max-w-[163px]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-[#494336] w-full max-w-[218px] sm:max-w-[310px] pt-[25px] px-5">
        <SurIcon />
        <div>
          <h1 className="text-2x; md:text-[32px] lg:text-[36px] font-normal text-[var(--Grey,#D7D9DD)] mt-[15px] sm:mt-6 md:mt-[35px] lg:mt-[50px]">
            Surgery
          </h1>
          <ul className="mt-5 md:mt-[15px]">
            {surData.map((item, index) => (
              <li key={index} className="mt-[6px]">
                <a
                  href="#"
                  className="text-sm md:text-base lg:text-lg text-normal text-[var(--Grey,#D7D9DD)] leading-[144%] underline hover:text-[#fff] transition-all duration-500 ease-in-out w-full md:max-w-[163px]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-[#494336] w-full max-w-[218px] sm:max-w-[310px] pt-[25px] px-5">
        <DcIcon />
        <div>
          <h1 className="text-2x; md:text-[32px] lg:text-[36px] font-normal text-[var(--Grey,#D7D9DD)] mt-[15px] sm:mt-6 md:mt-[35px] lg:mt-[50px] w-full max-w-[171px]">
            Additional Services
          </h1>
          <ul className="mt-5 md:mt-[15px]">
            {dcData.map((item, index) => (
              <li key={index} className="mt-[6px]">
                <a
                  href="#"
                  className="text-sm md:text-base lg:text-lg text-normal text-[var(--Grey,#D7D9DD)] leading-[144%] underline hover:text-[#fff] transition-all duration-500 ease-in-out w-full md:max-w-[163px]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default card;
