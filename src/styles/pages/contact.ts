"use client";
import tw, { styled } from "twin.macro";

export const Contact = styled.main`
  .contact__container {
    ${tw`container mx-auto`}

    .contact__title {
      ${tw`mt-24 mb-20 text-center`}

      h1 {
        ${tw`text-5xl font-bold`}
        color: var(--primary);
      }

      p {
        ${tw`mt-7 w-7/12 mx-auto`}
      }
    }

    iframe {
      ${tw`w-full h-96`}
    }

    .contact__contents {
      ${tw`flex justify-center mt-14 mb-24`}

      form {
        ${tw`w-6/12 flex flex-col mr-10`}

        input, textarea {
          ${tw`p-3 pl-3 rounded-xl w-full`}
          border: 1px solid #ced4da;
        }

        input {
          ${tw`mb-4`}
        }

        textarea {
          resize: none;
        }

        button {
          ${tw`block w-full p-3 rounded-xl mt-4 transition-all ease-in 
          dark:border-white dark:text-white`}
          border: 1px solid var(--primary);
          color: var(--primary);

          &:hover {
            background-color: var(--primary);
            color: var(--white);
          }
        }
      }

      .contact_info {
        ${tw`w-4/12`}

        .info__item {
          ${tw`flex mb-5 w-full p-5 rounded-xl`}
          background-color: var(--gray);

          p {
            &:first-child {
              ${tw`text-4xl mr-3`}
              color: var(--primary);
            }
            &:last-child {
              ${tw`flex flex-col`}

              span {
                &:first-child {
                  ${tw`text-2xl`}
                  color: var(--dark);
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .contact__container {
      ${tw`px-5`}
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .contact__container {
      .contact__contents {
        form {
          ${tw`w-6/12`}
        }

        .contact_info {
          ${tw`w-6/12`}
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .contact__container {
      .contact__title {
        p {
          ${tw`w-full`}
        }
      }

      .contact__contents {
        ${tw`flex-col`}

        form {
          ${tw`mr-0 w-full`}
        }

        .contact_info {
          ${tw`mt-5 w-full`}
        }
      }
    }
  }
`;
