"use client";
import Image from "next/image";
import BtnAddToCart from "@/components/features/BtnAddToCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { VegetablesList } from "./CarouselList";

export default function CarouselContainer() {
  const carouselItem = VegetablesList;

  return (
    <div className="carousel__container">
      <h1>Fresh Organic Vegetables</h1>

      <div className="carousel__button">
        <button
          className="swiper-carousel-button-prev"
          data-testid="button-prev"
        >
          <MdArrowBackIos data-testid="icon-prev" />
        </button>
        <button
          className="swiper-carousel-button-next"
          data-testid="button-next"
        >
          <MdArrowForwardIos data-testid="icon-next" />
        </button>
      </div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 3500,
        }}
        navigation={{
          nextEl: ".swiper-carousel-button-next",
          prevEl: ".swiper-carousel-button-prev",
        }}
        breakpoints={{
          767: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="carousel__swiper"
      >
        {carouselItem.map((item) => (
          <SwiperSlide key={item.id}>
            <figure data-testid="card-item">
              <Image
                src={item.image}
                alt={item.name}
                height={250}
                width={250}
                priority
              />

              <figcaption>
                <h2>{item.name}</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                  laboriosam architecto neque blanditiis labore.
                </p>
                <p>$7,99 / KG</p>
                <BtnAddToCart cartIdItem={item} />
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
