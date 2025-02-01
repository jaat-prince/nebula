"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";

function Secondva() {
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
      className="mySwiper max-sm:h-[500px] max-md:h-[530px] max-lg:h-[530px]"
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
        <div className="bg-[#494336] w-full max-w-[296px] sm:max-w-[547px] pt-[29px] lg:pt-[34px] pb-[70px] lg:pb-[54px] lg:pl-[48px] lg:pr-[21px] max-sm:h-[441px] max-md:h-[461px] max-lg:h-[490px]">
        <div className="flex max-lg:pl-[10px] gap-3 lg:gap-[27px]">
           <Image
                                        src={"/assets/png/dogicon.png"}
                                        width={61}
                                        height={64}
                                        alt="logo"
                                        className="w-full max-w-[61px]"
                                      />
                                      <h1 className="cl-lg text-2xl sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal ff-av w-full md:max-w-[354px]">Adult Dog Schedule</h1>
        </div>
        <div className="w-full max-w-[408px] max-lg:pl-6 pt-[27px] lg:pt-[26px]">
          <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-[22px] font-normal ff-av">Rabies: One year after the initial puppy vaccine, then every three years</p>
          <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-[22px] font-normal ff-av mt-3">Distemper: Every three years</p>
          <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-[22px] font-normal ff-av mt-3">Bordetella: Every year</p>
          <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-[22px] font-normal ff-av mt-3">Leptospirosis: Every year</p>
          <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-[22px] font-normal ff-av mt-3">Canine influenza: Every year</p>
          <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-[22px] font-normal ff-av mt-3">Lyme disease: Every year</p>
        
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="bg-[#494336] w-full max-w-[296px] sm:max-w-[547px] pt-[29px] lg:pt-[34px] pb-[70px] lg:pb-[54px] lg:pl-[48px] lg:pr-[21px] max-sm:h-[441px] max-md:h-[461px] max-lg:h-[490px] lg:h-[430px]">
        <div className="flex max-lg:pl-[10px] gap-3 lg:gap-[27px]">
           <Image
                                        src={"/assets/png/dogicon.png"}
                                        width={61}
                                        height={64}
                                        alt="logo"
                                        className="w-full max-w-[61px]"
                                      />
                                      <h1 className="cl-lg text-2xl sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal ff-av w-full md:max-w-[354px]">Adult Dog Schedule</h1>
        </div>
        <div className="w-full max-w-[408px] max-lg:pl-6 pt-[27px] lg:pt-[26px]">
          <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-[22px] font-normal ff-av">FVRCP: Every year</p>
          <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-[22px] font-normal ff-av mt-3">Rabies: Every three years</p>
          <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-[22px] font-normal ff-av mt-3">Feline Leukemia Virus: Every year</p>
        
        </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Secondva