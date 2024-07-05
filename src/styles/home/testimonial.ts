"use client";
import tw, { styled } from "twin.macro";

export const Testimonial = styled.section`
  ${tw`mb-20`}

  .testimonial__container {
    ${tw`container mx-auto`}

    .testimonial__title {
      ${tw`text-center mb-10`}

      h2 {
        ${tw`font-bold dark:text-white`}
        font-size: 2rem;
        color: var(--primary);
      }

      h1 {
        ${tw`font-extrabold dark:text-white`}
        color: var(--dark);
        font-size: 3rem;
      }
    }

    .testimonial__swiper {
      ${tw`pb-20`}

      .swiper__item {
        ${tw`w-11/12 pb-5 rounded-2xl dark:bg-slate-600`}
        background-color: #f6f8f9;

        figcaption {
          ${tw`w-11/12 py-5 mx-auto mb-10`}
          border-bottom: 1px solid var(--secondary);
        }

        img {
          ${tw`rounded-2xl`}
        }

        .swiper_info {
          ${tw`w-11/12 mx-auto flex items-center`}

          .client__name {
            ${tw`flex flex-col ml-5`}

            h3 {
              ${tw`font-semibold dark:text-white`}
              color: var(--dark);
              font-size: 1.5rem;
            }

            .classification {
              ${tw`flex mt-2`}

              span {
                &:last-child {
                  svg {
                    color: var(--dark);
                  }
                }
              }

              svg {
                color: var(--primary);
              }
            }
          }

          .quote {
            ${tw`ml-auto`}
            color: var(--secondary);
            font-size: 2.5rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .testimonial__container {
      ${tw`px-5`}
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .testimonial__container {
      .testimonial__swiper {
        .swiper__item {
          ${tw`w-11/12 mx-auto`}

          img {
            ${tw`w-24`}
          }

          .swiper_info {
            .client__name {
              ${tw`ml-2`}

              h3 {
                font-size: 1.1rem;
              }
            }

            .quote {
              font-size: 1.7rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .testimonial__container {
      .testimonial__title {
        h2 {
          font-size: 1.5rem;
        }

        h1 {
          font-size: 2rem;
        }
      }

      .testimonial__swiper {
        .swiper__item {
          ${tw`w-full`}

          img {
            ${tw`w-24`}
          }

          .swiper_info {
            .client__name {
              ${tw`ml-3`}

              h3 {
                font-size: 1.2rem;
              }
            }

            .quote {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
`;
