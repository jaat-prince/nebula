"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";
function Slideva() {
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
        className="mySwiper max-sm:h-[500px] max-md:h-[530px] max-lg:h-[580px]"
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          400: {
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
          <div className="bg-[#494336] w-full max-w-[320px] sm:max-w-[547px] pt-[29px] lg:pt-[34px] pb-[70px] lg:pb-[57px] lg:pl-[48px] lg:pr-[21px] max-sm:h-[441px] max-md:h-[461px] max-lg:[490px]">
            <div className="flex max-lg:pl-[10px] gap-3 lg:gap-[27px]">
              <Image
                src={"/assets/png/dogicon.png"}
                width={61}
                height={64}
                alt="logo"
                className="w-full max-w-[61px]"
              />
              <h1 className="cl-lg text-2xl sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal ff-av">
                Puppies Schedule
              </h1>
            </div>
            <div className="w-full max-w-[408px] max-lg:pl-6 pt-[27px] lg:pt-[26px]">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)]">
                8 weeks:
              </h2>
              <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av">
                Distemper vaccine, Leptospirosis, Bordetella vaccine, Lyme
                vaccine & Canine Influenza Virus vaccine
              </p>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] pt-3">
                12 weeks:
              </h2>
              <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av">
                Distemper vaccine, Leptospirosis vaccine, Rabies vaccine, Lyme
                vaccine & Canine Influenza Virus vaccine
              </p>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] pt-3">
                Booster:
              </h2>
              <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-xl ff-av font-normal">
                Once a year
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-[#494336] w-full max-w-[320px] sm:max-w-[547px] pt-[29px] lg:pt-[34px] pb-[70px] lg:pb-[57px] lg:pl-[48px] lg:pr-[21px] max-sm:h-[441px] max-md:h-[461px] max-lg:h-[490px] lg:h-[491px]
"
          >
            <div className="flex max-lg:pl-[10px] gap-3 lg:gap-[27px]">
              <Image
                src={"/assets/png/caticon.png"}
                width={61}
                height={64}
                alt="logo"
                className="w-full max-w-[61px]"
              />
              <h1 className="cl-lg text-2xl sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal ff-av">
                Kitten Schedule
              </h1>
            </div>
            <div className="w-full max-w-[408px] max-lg:pl-6 pt-[27px] lg:pt-[26px]">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] ff-av">
                8 weeks:
              </h2>
              <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-xl font-normal">
                FVRCP vaccine and Leukemia vaccines
              </p>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] pt-5">
                12 weeks:
              </h2>
              <p className="text-[var(--Grey,#D7D9DD)] text-sm sm:text-base md:text-lg lg:text-xl ff-av font-normal">
                FVRCP vaccine, Leukemia vaccine& Rabies vaccine
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slideva;
