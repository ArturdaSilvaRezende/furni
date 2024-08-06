"use client";
import { useContext } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { CartContext } from "@/contexts/cartcontext";
import { FaShoppingBag } from "react-icons/fa";
import { VegetablesList } from "./carousellist";
import * as C from "@/styles/home/carousel";

export default function Carousel() {
  const { addToCart } = useContext(CartContext);
  const carouselItem = VegetablesList;

  return (
    <C.Carousel>
      <div className="carousel__container">
        <h1>Fresh Organic Vegetables</h1>

        <div className="carousel__button">
          <button className="swiper-carousel-button-prev">
            <MdArrowBackIos />
          </button>
          <button className="swiper-carousel-button-next">
            <MdArrowForwardIos />
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
              <figure>
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
                  <button
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    <span>
                      <FaShoppingBag />
                    </span>
                    <span>Add to Cart</span>
                  </button>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </C.Carousel>
  );
}
