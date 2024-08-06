"use client";
import tw, { styled } from "twin.macro";

export const Breadcrumb = styled.section`
  ${tw`h-36 flex justify-center items-center flex-col max-[767px]:h-32`}
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/assets/images/pages/cart-page-header-img.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  h2 {
    ${tw`font-bold`}
    color: var(--white);
    font-size: 2.5rem;
  }

  p {
    color: var(--white);
    font-size: 1.1rem;

    span {
      &:last-child {
        color: var(--secondary);
      }
    }
  }
`;
