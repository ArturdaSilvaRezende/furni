"use client";
import tw, { styled } from "twin.macro";

export const Banner = styled.section`
  ${tw`mb-20`}
  background-color: var(--secondary);

  .banner__container {
    ${tw`container mx-auto flex justify-center items-center`}

    .banner__description {
      h1,
      h2 {
        ${tw`font-bold`}
      }

      h1 {
        ${tw`-mb-5 font-extrabold`}
        color: var(--white);
        font-size: 4rem;
      }

      h2 {
        ${tw`text-gray-800 font-extrabold`}

        font-size: 3rem;
      }

      p {
        ${tw`font-semibold w-8/12 text-gray-800 `}
      }

      button {
        ${tw`p-2 mt-5 w-32 rounded-2xl transition-all ease-in`}
        border: 1px solid var(--white);
        color: var(--white);

        &:hover {
          background-color: var(--primary);
        }
      }
    }

    figure {
      ${tw`py-16 w-9/12 relative`}

      img {
        ${tw`w-full h-auto`}
      }

      figcaption {
        ${tw`w-36 h-36 text-center flex justify-center items-center rounded-full absolute 
        top-12 left-12`}

        background-color: var(--white);

        p {
          ${tw`font-bold ml-1`}

          &:first-child {
            font-size: 4.5rem;
            color: var(--dark);
          }

          &:last-child {
            ${tw`flex flex-col text-left`}

            span {
              &:first-child {
                ${tw`dark:text-gray-600`}
                font-size: 1.5rem;
              }

              &:last-child {
                ${tw`-mt-3.5 lowercase dark:text-gray-600`}
                font-size: 1.5rem;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .banner__container {
      ${tw`px-5`}
    }
  }

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    .banner__container {
      .banner__description {
        ${tw`w-7/12`}

        h1 {
          line-height: 1.2;
        }
      }

      figure {
        ${tw`w-5/12`}

        figcaption {
          ${tw`right-4 top-10 left-auto`}
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .banner__container {
      .banner__description {
        ${tw`w-8/12 ml-auto`}

        h1 {
          font-size: 2.5rem;
        }

        h2 {
          ${tw`mt-5`}
          font-size: 2rem;
        }

        p {
          ${tw`w-10/12`}
        }
      }

      figure {
        ${tw`w-5/12`}

        figcaption {
          ${tw`-left-10 top-10`}
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .banner__container {
      ${tw`flex-col py-16`}

      .banner__description {
        ${tw`w-full`}

        h1 {
          font-size: 2rem;
        }

        h2 {
          ${tw`mt-5`}
          font-size: 1.5rem;
        }

        p {
          ${tw`w-full`}
        }
      }

      figure {
        ${tw`p-0 mt-16 w-full`}

        figcaption {
          ${tw`-top-16 right-1 left-auto`}
        }
      }
    }
  }
`;
