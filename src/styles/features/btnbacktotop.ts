"use client";
import tw, { styled } from "twin.macro";

export const BtnBackToTop = styled.div`
  ${tw`fixed bottom-1 right-1 w-auto transition-all ease-in`}
  background-color: var(--primary);
  border-radius: 5px;
  z-index: 999;

  &:hover {
    background-color: var(--secondary);
  }

  button {
    ${tw`w-8 flex justify-end items-center p-2 rounded`}

    svg {
      ${tw`text-white mx-auto`}
    }
  }
`;
