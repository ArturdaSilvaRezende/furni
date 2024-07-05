"use client";
import tw, { styled } from "twin.macro";

export const Hero = styled.section`
  ${tw`mt-5 py-24 dark:bg-gradient-to-r from-slate-700 to-slate-700`}

  background: linear-gradient(
      rgba(248, 223, 173, 0.1),
      rgba(248, 223, 173, 0.1)
    ),
    url("/assets/images/home/hero-img.jpg");

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  .hero__container {
    ${tw`container mx-auto flex justify-between items-center`}

    .hero__description {
      ${tw`w-7/12`}

      h2 {
        ${tw`mb-5 font-semibold dark:text-white`}
        color: var(--secondary);
        font-size: 1.6rem;
      }

      h1 {
        ${tw`font-bold dark:text-white`}
        color: var(--primary);
        font-size: clamp(2rem, 5.5vw, 4.7rem);
        line-height: 1.2;
      }

      .hero__search {
        ${tw`flex relative w-3/4 mt-10`}

        input {
          ${tw`dark:border-white`}
          border: 1px solid var(--secondary);
          padding: 15px 20px;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #747d88;
          background-color: var(--white);
          border-radius: 25px;
          outline: none;
          width: 100%;
        }

        button {
          ${tw`absolute  right-0 font-semibold transition-all ease-in dark:bg-amber-500`}
          background-color: var(--primary);
          color: var(--white);
          font-size: 16px;
          padding: 16px 20px;
          border-radius: 25px;
          width: 160px;

          &:hover {
            background-color: var(--secondary);
          }
        }
      }
    }

    .swiper__home {
      ${tw`w-5/12 relative`}

      img {
        ${tw`w-11/12 h-auto object-contain rounded-3xl`}
      }

      .swiper__tools {
        ${tw`absolute top-2/4 -translate-y-2/4 z-10 w-11/12 pl-5`}

        button {
          ${tw`dark:bg-amber-500`}
          width: 48px;
          height: 48px;
          border-radius: 48px;
          border: 1px solid var(--white);
          background: var(--primary);

          &:first-child {
            ${tw`absolute top-2/4 -translate-y-2/4 z-20`}
            left: 8px;

            svg {
              ${tw`ml-3 mx-auto`}
            }
          }

          &:last-child {
            ${tw`absolute top-2/4 -translate-y-2/4 z-20`}
            right: 10px;

            svg {
              ${tw`mr-2 mx-auto`}
            }
          }

          &:hover {
            ${tw`transition-all ease-in`}
            background-color: var(--secondary);
          }

          svg {
            color: var(--white);
            font-size: 1.8rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .hero__container {
      ${tw`px-5`}
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    ${tw`py-20`}

    .hero__container {
      .hero__description {
        ${tw`w-1/2`}

        .hero__search {
          ${tw`w-11/12 mt-7`}

          button {
            font-size: 0.8rem;
            padding: 18px 15px;
            width: 120px;
          }
        }
      }

      .swiper__home {
        width: 45%;

        img {
          ${tw`w-full`}
        }

        .swiper__tools {
          button {
            &:last-child {
              right: -18px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    ${tw`py-12`}

    .hero__container {
      ${tw`flex-col`}

      .hero__description {
        ${tw`w-full mb-10`}

        .hero__search {
          ${tw`w-full mt-5`}

          button {
            font-size: 0.8rem;
            padding: 18px 15px;
            width: 120px;
          }
        }
      }

      .swiper__home {
        ${tw`w-full pl-0`}

        img {
          ${tw`w-full`}
        }

        .swiper__tools {
          button {
            &:last-child {
              right: -18px;
            }
          }
        }
      }
    }
  }
`;
