"use client";
import tw, { styled } from "twin.macro";

export const Services = styled.section`
  ${tw`my-36`}

  .services__container {
    ${tw`container mx-auto flex justify-between items-center`}

    figure {
      ${tw`rounded-2xl w-1/3 dark:bg-white dark:border-white`}
      border: 1px solid var(--secondary);

      & + figure {
        ${tw`ml-7`}
      }

      img {
        ${tw`w-full h-auto my-5`}
      }

      figcaption {
        ${tw`p-5 h-24 rounded-b-2xl`}
        background-color: var(--secondary);

        .services__description {
          ${tw`text-center rounded-2xl px-3 py-5 mx-auto w-10/12 relative -top-20`}
          background-color: var(--primary);

          h3 {
            color: var(--white);
            font-size: 1.5rem;
          }

          h2 {
            ${tw`font-semibold`}
            color: var(--dark);
            font-size: 1.8rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .services__container {
      ${tw`px-5`}
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .services__container {
      figure {
        & + figure {
          ${tw`ml-7`}
        }

        figcaption {
          ${tw`h-20`}

          .services__description {
            ${tw`px-1 -top-16`}

            h3 {
              font-size: 1.1rem;
            }
            h2 {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .services__container {
      ${tw`flex-col`}

      figure {
        ${tw`w-full`}

        & + figure {
          ${tw`mt-10 ml-0`}
        }
      }
    }
  }
`;
