"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";

function Slider() {
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
        className="mySwiper max-sm:h-[450px] max-md:h-[530px] max-lg:h-[550px]"
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          360: {
            slidesPerView: 1.4,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1.4,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 1.8,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="bg-[#494336] w-full max-w-[296px] sm:max-w-[530px] pt-[29px] lg:pt-[44px] pb-[119px] lg:pb-[23px] pl-[10px] lg:pl-[42px] lg:pr-[21px] max-sm:h-[390px] max-md:h-[400px] max-lg:[430px] relative">
            <div className="absolute right-0 bottom-0 w-full max-w-[368px]">
              <Image
                src={"/assets/png/wave-dog.png"}
                width={368}
                height={240}
                alt="logo"
                className="w-full max-w-[368px]"
              />
            </div>
            <div className="w-full max-w-[408px]">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] flex gap-2  items-center mt-[30px] lg:mt-10">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D7D9DD]"></span>
                SNAP Lepto Test
              </h2>
              <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av  gap-2 flex items-center pl-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D7D9DD]"></span>
                Add description
              </p>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] flex gap-2  items-center mt-[30px] lg:mt-10">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D7D9DD]"></span>
                SNAP cPL Test
              </h2>
              <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av  gap-2 flex items-center pl-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D7D9DD]"></span>
                Assess canine pancreatic health
              </p>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] flex gap-2  items-center mt-[30px] lg:mt-10">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D7D9DD]"></span>
                SNAP Giardia Test
              </h2>
              <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av  gap-2 flex items-center pl-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D7D9DD]"></span>
                Add description
              </p>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] flex gap-2  items-center mt-[30px] lg:mt-10">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D7D9DD]"></span>
                SNAP Parvo Test
              </h2>
              <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av  gap-2 flex items-center pl-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D7D9DD]"></span>
                Add description
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#494336] w-full max-w-[296px] sm:max-w-[530px] pt-[29px] lg:pt-[44px] pb-[119px] lg:pb-[23px] pl-[10px] lg:pl-[42px] lg:pr-[21px] max-sm:h-[390px] max-md:h-[400px] max-lg:[430px] relative">
            <div className="absolute right-0 bottom-0 w-full max-w-[368px]">
              <Image
                src={"/assets/png/wave-cat.png"}
                width={368}
                height={240}
                alt="logo"
                className="w-full max-w-[368px]"
              />
            </div>
            <div className="w-full max-w-[408px]">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] flex gap-2  items-center mt-[30px] lg:mt-10">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D7D9DD]"></span>
                SNAP FIV/FeLV Combo Test
              </h2>
              <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av  gap-2 flex items-center pl-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D7D9DD]"></span>
                Add description
              </p>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] flex gap-2  items-center mt-[30px] lg:mt-10">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D7D9DD]"></span>
                SNAP fPL Test
              </h2>
              <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av  gap-2 flex items-center pl-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D7D9DD]"></span>
                Assess canine pancreatic health
              </p>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] flex gap-2  items-center mt-[30px] lg:mt-10">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D7D9DD]"></span>
                SNAP Giardia Test
              </h2>
              <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av  gap-2 flex items-center pl-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D7D9DD]"></span>
                Add description
              </p>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] flex gap-2  items-center mt-[30px] lg:mt-10">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D7D9DD]"></span>
                SNAP Feline proBNP Test
              </h2>
              <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av  gap-2 flex items-center pl-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D7D9DD]"></span>
                Add description
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
