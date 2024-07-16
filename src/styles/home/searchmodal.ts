"use client";
import tw, { styled } from "twin.macro";

export const SearchModal = styled.div`
  ${tw`flex flex-col items-center container mx-auto`}

  h1 {
    ${tw`text-white mb-8 max-[767px]:mb-5 uppercase`}
    font-size: clamp(1.7rem, 5vw, 3.5rem);
    text-shadow: 0 0 10px var(--primary);
  }

  form {
    ${tw`flex justify-center w-full`}

    input {
      ${tw`w-6/12 py-2.5 pl-4 border-white  max-[767px]:w-full`}
      border-radius: 7px 0 0 7px;
      color: var(--dark);
    }

    button {
      ${tw`w-12 transition-all ease-in`}
      background-color: var(--primary);
      border-radius: 0 7px 7px 0;

      &:hover {
        background-color: var(--secondary);
      }

      svg {
        ${tw`mx-auto text-white font-bold`}
      }
    }
  }

  @media screen and (max-width: 1024px) {
    ${tw`px-5`}
  }
`;
