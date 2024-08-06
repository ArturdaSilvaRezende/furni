"use client";
import tw, { styled } from "twin.macro";

export const NotFound = styled.main`
  .notfound__container {
    ${tw`container mx-auto text-center my-20`}

    p {
      ${tw`font-bold`}

      svg {
        ${tw`text-center w-auto mx-auto`}
      }

      &:nth-child(1) {
        ${tw`text-orange-500 text-7xl`}
      }

      &:nth-child(3) {
        ${tw`text-4xl`}
        color: var(--dark);
      }

      &:nth-child(4) {
        ${tw`w-1/3 mx-auto my-5`}
        color: var(--dark);
      }
    }

    h1 {
      ${tw`font-bold text-7xl mb-5`}
      color: var(--dark);
    }

    button {
      ${tw`w-36 p-1 rounded-2xl transition-all ease-in`}
      border: 1px solid var(--secondary);
      color: var(--secondary);

      &:hover {
        background-color: var(--secondary);
        color: var(--white);
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .notfound__container {
      ${tw`px-5`}
    }
  }

  @media screen and (min-width: 767px) and (max-width: 1024px) {
    .notfound__container {
      p {
        &:nth-child(4) {
          ${tw`w-1/2`}
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .notfound__container {
      p {
        &:nth-child(4) {
          ${tw`w-full`}
        }
      }
    }
  }
`;
