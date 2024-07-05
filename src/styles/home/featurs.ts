"use client";
import tw, { styled } from "twin.macro";

export const Featurs = styled.section`
  ${tw`my-28`}

  .featurs__container {
    ${tw`container mx-auto flex justify-between items-center`}

    .featurs__box {
      ${tw`w-1/4 p-6 text-center rounded-2xl dark:bg-slate-600`}
      background-color: var(--gray);

      & + .featurs__box {
        ${tw`ml-5`}
      }

      .featurs__icon {
        ${tw`relative rounded-full mx-auto mb-12`}
        background-color: var(--secondary);
        height: 120px;
        width: 120px;

        &::after {
          ${tw`absolute -translate-x-1/2`}
          content: "";
          background-color: var(--secondary);
          bottom: -10px;
          height: 35px;
          left: 35%;
          transform: rotate(45deg);
          width: 35px;
        }

        svg {
          ${tw`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
          color: var(--white);
          font-size: 3rem;
        }
      }

      h3 {
        ${tw`font-semibold dark:text-white`}
        color: var(--dark);
        font-size: 1.25rem;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .featurs__container {
      ${tw`px-5`}
    }
  }

  @media screen and (max-width: 767px) {
    .featurs__container {
      ${tw`flex-col`}

      .featurs__box {
        ${tw`w-full`}

        & + .featurs__box {
          ${tw`ml-0 mt-6`}
        }
      }
    }
  }
`;
