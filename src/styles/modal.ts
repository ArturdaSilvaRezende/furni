"use client";
import tw, { styled } from "twin.macro";

export const Modal = styled.dialog`
  ${tw`fixed left-0 top-0 w-full h-full bg-slate-900/70 z-50 overflow-hidden backdrop-blur 
    flex justify-center items-center dark:bg-black/70`}

  .modal__container {
    ${tw`relative container`}

    .modal__close {
      ${tw`absolute -top-10 right-20 w-10 flex items-center justify-center p-1 rounded-xl bg-red-500
      transition-all ease-in hover:bg-slate-900 max-[767px]:-top-12 max-[767px]:right-0`}
      font-size: 1.5rem;

      svg {
        ${tw`text-white`}
      }
    }
  }
`;
