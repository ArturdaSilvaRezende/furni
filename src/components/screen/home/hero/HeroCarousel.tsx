"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { HeroList } from "./heroList";
import Image from "next/image";

export default function HeroCarousel() {
  const heroItem = HeroList;

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      navigation={{
        nextEl: ".swiper-home-button-next",
        prevEl: ".swiper-home-button-prev",
      }}
      autoplay={{
        delay: 5000,
      }}
      breakpoints={{
        767: {
          slidesPerView: 1,
        },
        993: {
          slidesPerView: 1,
        },
      }}
      className="swiper__home"
    >
      {heroItem.map((item) => (
        <SwiperSlide key={item.id}>
          <Image
            src={item.imgPath}
            alt={item.alt}
            aria-label={item.alt}
            aria-hidden="true"
            width={500}
            height={400}
          />
        </SwiperSlide>
      ))}
      <div className="swiper__tools">
        <button className="swiper-home-button-prev" data-testid="button-prev">
          <MdArrowBackIos data-testid="icon-prev" />
        </button>
        <button className="swiper-home-button-next" data-testid="button-next">
          <MdArrowForwardIos data-testid="icon-next" />
        </button>
      </div>
    </Swiper>
  );
}
