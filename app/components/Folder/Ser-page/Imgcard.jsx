"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";

function Kutta() {
  return (
    <>
      <div className="bg-[var(--Grey,#D7D9DD)] pt-[35px] md:pt-[80px] pb-[33px] md:pb-[24px] ">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          onSwiper={(swiper) => console.log(swiper)}
          className="mySwiper"
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 90,
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
              slidesPerView: 3.3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div>
              <Image
                src={"/assets/png/k-1.png"}
                width={421}
                height={422}
                alt="logo"
                className="w-full lg:max-w-[421px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src={"/assets/png/k-2.png"}
                width={421}
                height={422}
                alt="logo"
                className="w-full lg:max-w-[421px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src={"/assets/png/k-3.png"}
                width={421}
                height={422}
                alt="logo"
                className="w-full lg:max-w-[421px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src={"/assets/png/k-4.png"}
                width={421}
                height={422}
                alt="logo"
                className="w-full lg:max-w-[421px] "
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Kutta;
