"use client";
import tw, { styled } from "twin.macro";

export const ProductsTabs = styled.section`
  ${tw`mb-20`}

  .productstabs__container {
    ${tw`container mx-auto`}

    .productstabs__menu {
      ${tw`flex justify-center items-center`}

      h1 {
        ${tw`font-semibold text-center dark:text-white`}
        color: var(--dark);
        font-size: 3.5rem;
        line-height: 1.1;
      }

      ul {
        ${tw`flex text-center w-9/12`}

        li {
          & + li {
            ${tw`ml-5`}
          }

          button {
            ${tw`cursor-pointer w-32 p-3 rounded-2xl transition-all ease-in`}
            background-color: var(--gray);
            color: var(--dark);

            &:hover {
              background-color: var(--secondary);
              color: var(--white);
            }
          }
        }
      }
    }

    .productstabs__cards {
      ${tw`grid grid-cols-4 mt-10`}

      figure {
        ${tw`w-11/12 mx-auto mb-5 rounded-2xl relative dark:border-white dark:bg-slate-600`}
        border: 1.5px solid var(--secondary);
        overflow: hidden;

        img {
          ${tw`w-full h-auto rounded-t-2xl`}
          transition: 0.5s;

          &:hover {
            transform: scale(1.1);
          }
        }

        figcaption {
          ${tw`p-5 text-center`}

          h2 {
            ${tw`font-semibold mb-3 dark:text-white`}
            color: var(--dark);
            font-size: 1.4rem;
          }

          p {
            ${tw`mb-3`}

            &:nth-child(3) {
              ${tw`font-semibold dark:text-white`}
              color: var(--dark);
            }
          }

          button {
            ${tw`flex justify-center items-center p-2 rounded-3xl w-11/12 mx-auto 
            transition-all ease-in dark:border-white`}
            border: 1px solid var(--secondary);
            color: var(--primary);

            &:hover {
              background-color: var(--secondary);

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

        .productstabs__typeTabs {
          ${tw`p-2 rounded-xl w-24 block text-center absolute top-2.5 left-2.5 font-semibold`}
          background-color: var(--secondary);
          color: var(--white);
          font-size: 12px;
          text-shadow: 0 0 20px #000;
          letter-spacing: 1px;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .productstabs__container {
      ${tw`px-5`}

      .productstabs__menu {
        ul {
          ${tw`flex-wrap justify-center`}

          li {
            ${tw`mt-2`}
          }
        }
      }
    }
  }

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    .productstabs__container {
      .productstabs__menu {
        h1 {
          font-size: 2.7rem;
          ${tw`w-4/12`}
        }

        ul {
          ${tw`w-6/12`}
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .productstabs__container {
      .productstabs__menu {
        h1 {
          font-size: 2.2rem;
        }
      }

      .productstabs__cards {
        ${tw`grid-cols-3`}

        figure {
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .productstabs__container {
      .productstabs__menu {
        ${tw`flex-col`}

        ul {
          ${tw`mt-5 gap-2 w-full`}

          li {
            & + li {
              ${tw`ml-0`}
            }
          }
        }
      }

      .productstabs__cards {
        ${tw`grid-cols-1`}

        figure {
          ${tw`w-full`}
        }
      }
    }
  }
`;
