"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { DcIcon, HeartIcon, IjectIcon, SurIcon } from "../Helper/Icon";
import { careData, dcData, sickData, surData } from "../Helper/Helper";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

function Care() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper max-md:h-[450px] max-lg:h-[530px]"
        breakpoints={{
          300: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          360: {
            slidesPerView: 1.7,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="bg-[#494336] w-full max-w-[218px] sm:max-w-[310px] pt-[25px] px-5 h-[400px] md:h-[480px] lg:h-[550px]">
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#494336] w-full max-w-[218px] sm:max-w-[310px] pt-[25px] px-5 h-[400px] md:h-[480px] lg:h-[550px]">
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#494336] w-full max-w-[218px] sm:max-w-[310px] pt-[25px] px-5 h-[400px] md:h-[480px] lg:h-[550px]">
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#494336] w-full max-w-[218px] sm:max-w-[310px] pt-[25px] px-5 h-[400px] md:h-[480px] lg:h-[550px]">
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
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Care;
