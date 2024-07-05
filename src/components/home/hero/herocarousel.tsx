"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { HeroList, Hero } from "./heroList";
import Image from "next/image";

export default function HeroCarousel() {
  const [heroList, setHeroList] = useState<Hero[]>([]);

  useEffect(() => {
    setHeroList(HeroList);
  }, []);

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
      {heroList.map((item) => (
        <SwiperSlide key={item.id}>
          <Image src={item.imgPath} alt={item.alt} width={500} height={400} />
        </SwiperSlide>
      ))}
      <div className="swiper__tools">
        <button className="swiper-home-button-prev">
          <MdArrowBackIos />
        </button>
        <button className="swiper-home-button-next">
          <MdArrowForwardIos />
        </button>
      </div>
    </Swiper>
  );
}
