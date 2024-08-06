"use client";
import tw, { styled } from "twin.macro";

export const Checkout = styled.main`
  .checkout__container {
    ${tw`container mx-auto`}

    h1 {
      ${tw`text-5xl mt-20 mb-14 font-semibold dark:text-white`}
      color: var(--dark);
    }

    table {
      ${tw`w-8/12 mb-14`}

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
          ${tw`dark:border-b-white text-center`}
          border-bottom: 1px solid var(--dark);

          td {
            ${tw`pt-4 pb-4 `}

            &:first-child {
              ${tw`text-left`}
            }

            figure {
              img {
                ${tw`w-24 h-auto rounded-2xl`}
              }

              figcaption {
                ${tw`mt-3`}
              }
            }
          }
        }
      }
    }

    .checkout__details {
      ${tw`flex justify-between mb-20`}

      form {
        ${tw`w-6/12 mt-10`}

        .form__name {
          ${tw`flex justify-between`}

          .form__item {
            input {
              ${tw`w-72 `}
            }
          }
        }

        .form__item {
          ${tw`flex flex-col mb-5`}

          label {
            ${tw`mb-2`}

            span {
              ${tw`ml-3 text-red-500`}
            }
          }

          input,
          textarea {
            ${tw`p-3 pl-3 rounded-xl dark:bg-slate-900 dark:text-white`}
            border: 1px solid #ced4da;
            color: var(--dark);
            outline: none;
            resize: none;

            &:hover {
              border: 1px solid var(--primary);
            }
          }

          p {
            input {
              ${tw`mr-2`}
            }
          }
        }

        .checkout__submit {
          ${tw`block w-full p-3 rounded-xl mt-10 transition-all ease-in 
          dark:border-white dark:text-white`}
          border: 1px solid var(--primary);
          color: var(--primary);

          &:hover {
            background-color: var(--primary);
            color: var(--white);
          }
        }
      }

      .checkout__total {
        ${tw`w-4/12 mt-10`}

        .checkout__item {
          ${tw`mb-5 pt-5 pb-10 flex justify-end items-center`}
          border-bottom: 1px solid var(--dark);

          p {
            &:first-child {
              font-size: 2rem;
            }
            &:last-child {
              ${tw`ml-5 py-3`}
              border-bottom: 1px solid var(--dark);
              border-top: 1px solid var(--dark);
            }
          }
        }

        .checkout__shipping {
          ${tw`flex items-center mb-5 pb-5`}
          border-bottom: 1px solid var(--dark);

          p {
            &:first-child {
              ${tw`mr-7`}
            }
          }

          .shipping__options {
            p {
              ${tw`mb-1`}
            }

            input {
              ${tw`mr-2`}
            }
          }
        }

        .checkout__disclaimer {
          ${tw`mb-5 pb-5`}
          border-bottom: 1px solid var(--dark);

          p {
            &:first-child {
              ${tw`mb-3`}

              input {
                ${tw`mr-3`}
              }
            }
          }
        }

        .checkout__payments {
          ${tw`mb-5 pb-5`}
          border-bottom: 1px solid var(--dark);

          p {
            input {
              ${tw`mr-3`}
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .checkout__container {
      ${tw`px-5`}
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .checkout__container {
      .checkout__details {
        form {
          ${tw`w-6/12`}

          .form__name {
            .form__item {
              & + .form__item {
                ${tw`ml-3`}
              }

              input {
                ${tw`w-full `}
              }
            }
          }
        }

        .checkout__total {
          ${tw`w-5/12`}
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .checkout__container {
      table {
        ${tw`w-full`}

        thead {
          tr {
            th {
              font-size: 0.9rem;
            }
          }
        }

        tbody {
          tr {
            td {
              font-size: 0.8rem;

              figure {
                img {
                  ${tw`w-16`}
                }
              }
            }
          }
        }
      }

      .checkout__details {
        ${tw`flex-col`}

        form {
          ${tw`w-full`}

          .form__name {
            ${tw`flex-col`}

            .form__item {
              input {
                ${tw`w-full `}
              }
            }
          }
        }

        .checkout__total {
          ${tw`w-full`}
        }
      }
    }
  }
`;
