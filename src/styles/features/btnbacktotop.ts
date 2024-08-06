"use client";
import tw, { styled } from "twin.macro";

export const BtnBackToTop = styled.div`
  ${tw`fixed bottom-1 right-0.5 w-auto transition-all ease-in`}
  background-color: var(--primary);
  border-radius: 5px;
  z-index: 999;

  &:hover {
    background-color: var(--secondary);
  }

  button {
    ${tw`w-7 px-2 py-1 rounded relative right-1`}
    font-size: 1.3rem;

    svg {
      ${tw`text-white`}
    }
  }
`;
