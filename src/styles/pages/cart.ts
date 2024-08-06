"use client";
import tw, { styled } from "twin.macro";

export const Cart = styled.main`
  .cart__contents {
    ${tw`mt-24 mb-24`}

    .cart__container {
      ${tw`container mx-auto w-10/12`}

      table {
        ${tw`w-full`}

        .cart__close {
          button {
            ${tw`rounded-full w-8 py-1 ml-auto bg-red-500 `}
            color: var(--white);
          }
        }

        thead {
          ${tw`dark:border-b-white`}
          border-bottom: 1px solid var(--dark);

          tr {
            th {
              ${tw`pb-2 font-semibold`}
              font-size: 1.1rem;

              &:first-child {
                ${tw`text-left`}
              }
            }
          }
        }

        tbody {
          tr {
            ${tw`dark:border-b-white`}
            border-bottom: 1px solid var(--dark);

            td {
              ${tw`pt-4 text-center pb-4`}

              figure {
                ${tw`flex items-center`}

                img {
                  ${tw`w-24 h-auto rounded-2xl`}
                }

                figcaption {
                  ${tw`ml-4`}
                }
              }

              .cart__quantity {
                ${tw`flex justify-center items-center`}

                button {
                  ${tw`w-8 rounded-md transition-all ease-in`}
                  background-color: var(--primary);
                  color: var(--white);
                  font-size: 1.3rem;

                  &:hover {
                    background-color: var(--secondary);
                  }
                }

                span {
                  ${tw`block w-9 mx-2 rounded-md text-center`}
                  border: 1px solid var(--primary);
                  padding: 3px 0;
                }
              }
            }
          }
        }
      }

      .cart__cupon {
        ${tw`mt-12`}

        input {
          ${tw`py-2 px-3 rounded-sm dark:border-white dark:text-black`}
          border: 1px solid var(--dark);
        }

        button {
          ${tw`py-2 ml-3 w-32 rounded-sm transition-all ease-in dark:border-white dark:text-white`}
          border: 1px solid var(--primary);
          color: var(--primary);

          &:hover {
            background-color: var(--secondary);
            color: var(--white);
            border: 1px solid var(--secondary);
          }
        }
      }

      .cart__total {
        ${tw`ml-auto mt-16 w-1/3 p-5 dark:bg-slate-600 rounded-xl`}
        background-color: #f4f6f8;

        h1 {
          ${tw`font-bold mb-5 dark:text-white`}
          font-size: 3rem;
        }

        p {
          ${tw`flex justify-between mb-2`}

          span {
            &:first-child {
              ${tw`font-bold dark:text-white`}
              color: var(--dark);
              font-size: 1.2rem;
            }
          }
        }

        .total,
        .total__checkout {
          ${tw`mt-5 pt-5 dark:border-t-white`}
          border-top: 1px solid var(--dark);
        }

        .total__checkout {
          button {
            ${tw`py-2 px-3 mt-3 rounded-sm transition-all ease-in dark:border-white dark:text-white`}
            border: 1px solid var(--primary);
            color: var(--primary);

            &:hover {
              background-color: var(--secondary);
              border: 1px solid var(--white);
              color: var(--white);
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .cart__contents {
      .cart__container {
        ${tw`px-5`}
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .cart__contents {
      .cart__container {
        ${tw`w-full`}

        .cart__total {
          ${tw`w-1/2`}
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .cart__contents {
      .cart__container {
        ${tw`w-full`}

        table {
          ${tw`flex flex-wrap`}
          overflow-x: auto;

          figure {
            ${tw`flex-col`}

            figcaption {
              ${tw`mt-3 mr-auto`}
            }
          }

          tbody {
            border-top: 1px solid var(--dark);

            td {
              ${tw`pr-20`}
            }
          }

          thead {
            ${tw`block`}
            border:none;

            th {
              ${tw`pr-24`}
            }
          }
        }

        .cart__cupon {
          input {
            ${tw`w-7/12`}
          }

          button {
            ${tw`w-28`}
          }
        }

        .cart__total {
          ${tw`ml-0 w-full`}
        }
      }
    }
  }
`;
