"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";

function Silderji() {
  return (
    <div className="bg-[var(--Brown,#494336)] mb-[60px] md:pb-[80px] ">
    <>
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper  "
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
              src={"/assets/png/dog-1.png"}
              width={421}
              height={422}
              alt="logo"
              className="w-full max-w-[421px] "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={"/assets/png/cat-1.png"}
              width={421}
              height={422}
              alt="logo"
              className="w-full max-w-[421px] "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={"/assets/png/cat-2.png"}
              width={421}
              height={422}
              alt="logo"
              className="w-full max-w-[421px] "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={"/assets/png/dog-2.png"}
              width={421}
              height={422}
              alt="logo"
              className="w-full max-w-[421px] "
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </>
  </div>
  )
}

export default Silderji