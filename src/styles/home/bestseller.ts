"use client";
import tw, { styled } from "twin.macro";

export const BestSeller = styled.section`
  ${tw`mb-20`}

  .bestseller__container {
    ${tw`container mx-auto`}

    .bestseller__title {
      ${tw`text-center`}

      h1 {
        ${tw`font-bold dark:text-white`}
        color: var(--dark);
        font-size: clamp(2rem, 5vw, 3.5rem);
      }

      h2 {
        ${tw`font-medium w-1/2 mx-auto mt-2 mb-16 dark:text-white`}
        color: var(--dark);
      }
    }

    .bestseller__cards {
      ${tw`grid grid-cols-4`}

      figure {
        ${tw`w-11/12 mx-auto ml-1 mb-5 rounded-2xl dark:bg-slate-600 dark:border-white`}
        border: 1px solid var(--primary);

        img {
          ${tw`rounded-2xl w-full h-auto`}
        }

        figcaption {
          ${tw`p-5 text-center`}

          h3 {
            ${tw`font-bold mb-5 dark:text-white`}
            color: var(--dark);
            font-size: 1.5rem;
          }

          p {
            ${tw`font-semibold`}
            font-size: 1.2rem;
          }

          .classification {
            ${tw`flex justify-center my-2`}

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

          button {
            ${tw`flex items-center justify-center w-36 p-2 mx-auto mt-5 rounded-2xl 
            transition-all ease-in`}
            background-color: var(--primary);
            color: var(--white);

            &:hover {
              background-color: var(--secondary);
            }

            span {
              & + span {
                ${tw`ml-2`}
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .bestseller__container {
      ${tw`px-5`}
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .bestseller__container {
      .bestseller__title {
        h2 {
          ${tw`w-8/12`}
        }
      }

      .bestseller__cards {
        ${tw`grid-cols-3`}
      }
    }
  }

  @media screen and (max-width: 767px) {
    .bestseller__container {
      .bestseller__title {
        h2 {
          ${tw`w-11/12`}
        }
      }

      .bestseller__cards {
        ${tw`grid-cols-1`}

        figure {
          ${tw`w-full mx-auto`}
        }
      }
    }
  }
`;
