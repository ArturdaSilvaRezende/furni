"use client";
import tw, { styled } from "twin.macro";

export const Carousel = styled.section`
  ${tw`mb-36`}

  .carousel__container {
    ${tw`container mx-auto`}

    .carousel__button {
      ${tw`container mx-auto text-right relative -top-4 right-8`}

      button {
        ${tw`w-10 p-2 rounded transition-all ease-in dark:border-white dark:text-white`}
        border: 1px solid var(--primary);
        color: var(--primary);

        & + button {
          ${tw`ml-2`}
        }

        &:hover {
          background-color: var(--primary);
          color: var(--white);
        }

        &:first-child {
          svg {
            ${tw`mx-auto relative left-1`}
          }
        }

        &:last-child {
          svg {
            ${tw`mx-auto relative`}
            right: -1px;
          }
        }

        svg {
          font-size: 1.4rem;
        }
      }
    }

    h1 {
      ${tw`font-semibold mb-16 text-center dark:text-white`}
      font-size: 2.5rem;
    }

    .carousel__swiper {
      ${tw`grid grid-cols-4`}

      figure {
        ${tw`rounded-2xl transition-all ease-in w-11/12 mx-auto dark:border-white dark:bg-slate-600`}
        border: 1px solid var(--primary);

        &:hover {
          box-shadow: 0 0 35px rgba(0, 0, 0, 0.4);
        }

        img {
          ${tw`w-full h-48 object-cover rounded-t-2xl`}
        }

        figcaption {
          ${tw`px-4 mx-auto`}

          h2 {
            ${tw`font-semibold my-3 dark:text-white`}
            font-size: 1.7rem;
          }

          p {
            ${tw`mb-3 dark:text-white`}

            & + p {
              ${tw`font-semibold uppercase`}
              color: var(--dark);
              font-size: 1.3rem;
            }
          }

          button {
            ${tw`flex justify-center items-center p-2 rounded-3xl w-11/12 mx-auto my-7
            transition-all ease-in dark:border-white`}
            border: 1px solid var(--primary);
            color: var(--primary);

            &:hover {
              background-color: var(--primary);

              span {
                color: var(--white);
              }
            }

            span {
              & + span {
                ${tw`ml-3`}
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .carousel__container {
      ${tw`px-5`}

      .carousel__button {
        ${tw`right-5`}
      }
    }
  }
`;
