"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";

function Slidetele() {
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
        className="mySwiper max-lg:h-[450px]"
        breakpoints={{
          300: {
            slidesPerView: 1.3,
            spaceBetween: 30,
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
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <div className="bg-[#494336] w-full max-w-[218px] sm:max-w-[310px] pt-[22px] pl-[32px] pr-[35px] pb-[44px] lg:pb-[42px] h-[400px] md:h-[420px] lg:h-[450px]">
             <Image
                                                             src={"/assets/png/1..png"}
                                                             width={72}
                                                             height={148}
                                                             alt="logo"
                                                             className="w-full max-w-[72px]"
                                                           />
            <div className="w-full max-w-[242px] mt-4">
              <h1 className="text-2xl lg:text-[32px] font-normal text-[var(--Grey,#D7D9DD)] ff-av">
              Book a telemedicine consult
              </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av text-[var(--Grey,#D7D9DD)] mt-6">Click the "chat with vet" button below to join a que for a telemedicine online visit.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-[#494336] w-full max-w-[218px] sm:max-w-[310px] pt-[22px] pl-[32px] pr-[35px] pb-[44px] lg:pb-[42px] h-[400px] md:h-[420px] lg:h-[450px]">
             <Image
                                                             src={"/assets/png/2..png"}
                                                             width={72}
                                                             height={148}
                                                             alt="logo"
                                                             className="w-full max-w-[72px]"
                                                           />
            <div className="w-full mt-4">
              <h1 className="text-2xl lg:text-[32px] font-normal text-[var(--Grey,#D7D9DD)] mt-[15px] sm:mt-6 md:mt-[35px] lg:mt-[50px] ff-av">
              Join with the link
              </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av text-[var(--Grey,#D7D9DD)] mt-6">A custom link will be sent to your email</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-[#494336] w-full max-w-[218px] sm:max-w-[310px] pt-[22px] pl-[32px] pr-[35px] pb-[44px] lg:pb-[42px] h-[400px] md:h-[420px] lg:h-[450px]">
             <Image
                                                             src={"/assets/png/3..png"}
                                                             width={72}
                                                             height={148}
                                                             alt="logo"
                                                             className="w-full max-w-[72px]"
                                                           />
            <div className="w-full max-w-[242px] mt-3">
              <h1 className="text-2xl lg:text-[32px] font-normal text-[var(--Grey,#D7D9DD)] mt-[15px] sm:mt-6 md:mt-[35px] lg:mt-[50px] ff-av">
              Video chat
              </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av text-[var(--Grey,#D7D9DD)] mt-6">In a real-time online visit, share with the vet your pet’s current issues.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-[#494336] w-full max-w-[218px] sm:max-w-[310px] pt-[22px] pl-[32px] pr-[35px] pb-[44px] lg:pb-[42px] h-[400px] md:h-[420px] lg:h-[450px]">
             <Image
                                                             src={"/assets/png/4..png"}
                                                             width={72}
                                                             height={148}
                                                             alt="logo"
                                                             className="w-full max-w-[72px]"
                                                           />
            <div className="w-full max-w-[242px] mt-3">
              <h1 className="text-2xl lg:text-[32px] font-normal text-[var(--Grey,#D7D9DD)] mt-[15px] sm:mt-6 md:mt-[35px] lg:mt-[50px] ff-av">
              Treatment
              </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av text-[var(--Grey,#D7D9DD)] mt-6">Our veterinarian will evaluate your pet and discuss next steps, which may include medication.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slidetele