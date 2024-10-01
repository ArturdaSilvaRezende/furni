"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { testimonialList } from "./TestimonialList";

export default function TestimonialContainer() {
  const client = testimonialList;

  return (
    <div className="testimonial__container">
      <div className="testimonial__title">
        <h2>Our Testimonial</h2>
        <h1>Our Client Saying!</h1>
      </div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        breakpoints={{
          767: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="testimonial__swiper"
      >
        {client.map((client) => (
          <SwiperSlide key={client.id}>
            <figure className="swiper__item" data-testid="card-item">
              <figcaption>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque incidunt praesentium cum obcaecati odio sunt facilis
                  Nesciunt,
                </p>
              </figcaption>
              <div className="swiper_info">
                <Image
                  src={client.image}
                  alt={client.client}
                  width={150}
                  height={150}
                />
                <div className="client__name">
                  <h3>{client.client}</h3>

                  <div className="classification">
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                  </div>
                </div>

                <p className="quote">
                  <FaQuoteRight data-testid="quote-icon" />
                </p>
              </div>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
