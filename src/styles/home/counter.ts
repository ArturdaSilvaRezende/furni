"use client";
import tw, { styled } from "twin.macro";

export const Counter = styled.section`
  ${tw`mb-20`}

  .counter__container {
    ${tw`container mx-auto grid grid-cols-4 py-10 dark:bg-gray-400`}
    background-color: #f4f6f8;

    .counter__box {
      ${tw`w-10/12 mx-auto text-center py-10 rounded-2xl dark:bg-slate-600`}
      background-color: var(--white);

      span {
        ${tw`dark:text-white`}
        font-size: 5rem;
        color: var(--secondary);

        svg {
          ${tw`mx-auto`}
        }
      }

      h2 {
        ${tw`font-bold w-1/2 mx-auto my-5 dark:text-white`}
        color: var(--primary);
        font-size: 1.3rem;
      }

      p {
        ${tw`font-semibold dark:text-white`}
        color: var(--dark);
        font-size: 1.8rem;
      }
    }
  }

  @media screen and (wax-width: 1024px) {
    .counter__container {
      ${tw`px-5`}
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .counter__container {
      ${tw`grid-cols-2`}

      .counter__box {
        ${tw`mb-5`}
      }
    }
  }

  @media screen and (max-width: 767px) {
    .counter__container {
      ${tw`grid-cols-1`}

      .counter__box {
        ${tw`mb-5`}
      }
    }
  }
`;
