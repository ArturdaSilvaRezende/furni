"use client";
import tw, { styled } from "twin.macro";

export const Shop = styled.main`
  .shop__container {
    ${tw`container mx-auto`}

    .shop__title {
      ${tw`flex justify-between items-center mt-16 pb-5`}
      border-bottom: 1px solid #ced4da;

      h1 {
        ${tw`font-semibold dark:text-white`}
        font-size: 2.5rem;
        color: var(--dark);
      }
    }

    .shop__contents {
      ${tw`flex justify-between mb-16 mt-5`}
    }
  }

  @media screen and (max-width: 1024px) {
    .shop__container {
      ${tw`px-5`}
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .shop__container {
      .shop__title {
        h1 {
          font-size: 2.2rem;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .shop__container {
      .shop__title {
        ${tw`flex-col mt-10`}
      }

      .shop__contents {
        ${tw`flex-col mb-10`}
      }
    }
  }
`;

export const ShopNavigation = styled.aside`
  ${tw`w-2/12`}

  h2 {
    ${tw`mb-3 font-semibold dark:text-white`}
    font-size: 1.7rem;
  }

  nav {
    ul {
      li {
        ${tw`flex items-center transition-all ease-in dark:text-white`}
        color: var(--primary);

        & + li {
          ${tw`mt-3`}
        }

        &:hover {
          ${tw`dark:text-amber-300`}
          color: var(--dark);
        }

        span {
          ${tw`mr-2`}
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    ${tw`w-full mb-5`}

    nav {
      ul {
        ${tw`flex flex-wrap `}

        li {
          ${tw`w-5/12`}
        }
      }
    }
  }
`;

export const ShopContents = styled.div`
  ${tw` flex justify-between flex-wrap container`}

  .shop__card {
    ${tw`mb-5 rounded dark:border-white`}
    border: 1px solid var(--primary);
    width: 23%;

    img {
      ${tw`mx-auto rounded-t`}
    }

    figcaption {
      ${tw`text-center`}

      h3 {
        ${tw`mt-5 font-bold dark:text-white`}
        font-size: 1.4rem;
      }

      .card__description {
        ${tw`w-10/12 mx-auto my-5`}
      }

      .card__price {
        ${tw`font-bold dark:text-white`}
        color: var(--dark);
      }

      .card__buttons {
        ${tw`flex flex-col my-5`}

        button {
          ${tw`flex items-center w-7/12 p-2 mx-auto rounded-md transition-all ease-in 
          dark:border-white dark:text-white`}
          border: 1px solid var(--primary);
          color: var(--primary);

          &:hover {
            background-color: var(--primary);
            border: 1px solid var(--primary);

            span {
              color: var(--white);
            }
          }

          span {
            ${tw`text-center mx-auto`}
          }

          &:last-child {
            ${tw`mt-3 `}
          }
        }
      }
    }
  }

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    ${tw`ml-12 gap-1`}

    .shop__card {
      width: 31%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    ${tw`ml-12`}

    .shop__card {
      width: 45%;
    }
  }

  @media screen and (max-width: 767px) {
    .shop__card {
      ${tw`w-full`}

      img {
        ${tw`w-full h-72 object-cover`}
      }
    }
  }
`;

export const ShopDetails = styled.figure`
  ${tw`flex ml-10 mt-4`}

  img {
    ${tw`mr-5 rounded-2xl w-auto h-auto`}
  }

  figcaption {
    p {
      & + P {
        ${tw`mt-2`}
      }

      span {
        &:first-child {
          ${tw`font-semibold dark:text-amber-500`}
          color: var(--primary);
          font-size: 1.3rem;
        }

        &:last-child {
          ${tw`font-medium dark:text-white`}
          color: var(--dark);
          font-size: 1.1rem;
        }
      }
    }

    .details__buttons {
      ${tw`flex mt-5`}

      button {
        ${tw`flex items-center font-medium py-2 px-3 rounded-xl transition-all ease-in 
        dark:text-white dark:border-white`}
        border: 1px solid var(--primary);
        color: var(--dark);
        font-size: 1.1rem;

        & + button {
          ${tw`ml-5`}
        }

        &:hover {
          ${tw`dark:bg-amber-500`}
          background-color: var(--primary);
          color: var(--white);
        }

        span {
          &:first-child {
            ${tw`mr-1`}
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    ${tw`mt-3`}
    img {
      ${tw`object-cover`}
    }
  }

  @media screen and (max-width: 767px) {
    ${tw`flex-col ml-0`}

    img {
      ${tw`mr-0 mb-5`}
    }
  }
`;
