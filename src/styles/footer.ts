"use client";
import tw, { styled } from "twin.macro";

export const Footer = styled.footer`
  ${tw`pt-10`}
  background-color: var(--dark);

  .footer__container {
    ${tw`container mx-auto`}
  }

  @media screen and (max-width: 1024px) {
    .footer__container {
      ${tw`px-5`}
    }
  }
`;

export const FooterHeader = styled.div`
  ${tw`flex justify-between items-center pb-6`}
  border-bottom: 1px solid var(--secondary);

  .header__title {
    h1 {
      color: var(--primary);
      font-size: 3.5rem;
    }

    h5 {
      color: var(--secondary);
      font-size: 1.2rem;
      margin-top: -12px;
    }
  }

  .header__subscribe {
    ${tw`flex relative `}
    width: 40%;

    input {
      width: 100%;
      padding: 15px 20px;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #747d88;
      background-color: var(--white);
      border-radius: 25px;
      outline: none;
    }

    button {
      ${tw`absolute  right-0 font-semibold transition-all ease-in`}
      background-color: var(--primary);
      color: var(--white);
      font-size: 16px;
      padding: 15px 20px;
      border-radius: 25px;
      width: 160px;

      &:hover {
        background-color: var(--secondary);
      }
    }
  }

  .header__social {
    ${tw`flex`}

    li {
      ${tw`relative rounded-full cursor-pointer transition-all ease-in`}

      border: 1px solid var(--secondary);
      height: 45px;
      width: 45px;

      & + li {
        ${tw`ml-3`}
      }

      &:hover {
        background-color: var(--secondary);

        svg {
          color: var(--black);
        }
      }

      svg {
        ${tw`absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4`}
        color: var(--secondary);
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    ${tw`flex-wrap`}

    .header__title {
      ${tw`mb-8 w-full`}
    }

    .header__subscribe {
      ${tw`w-7/12 mr-3`}

      button {
        font-size: 12px;
        padding: 18px 20px;
        width: 130px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    ${tw`flex-col`}

    .header__title {
      ${tw`mr-auto`}

      h1 {
        font-size: 2.5rem;
      }

      h5 {
        font-size: 1.1rem;
      }
    }

    .header__subscribe {
      ${tw`my-8 w-full`}

      button {
        font-size: 12px;
        padding: 18px 20px;
        width: 130px;
      }
    }

    .header__social {
      ${tw`ml-auto`}
    }
  }
`;

export const FooterInfo = styled.div`
  ${tw`grid grid-cols-3 text-center mt-6`}

  .info__box {
    h3 {
      ${tw`font-semibold mb-5`}
      font-size: 1.5rem;
      color: var(--white);
    }

    p,
    li,
    button {
      color: var(--text-rgba);
    }

    ul {
      ${tw`mb-5`}

      li {
        & + li {
          ${tw`mt-3`}
        }

        a {
          ${tw`transition-all ease-in`}

          &:hover {
            color: var(--secondary);
          }
        }
      }
    }

    img {
      ${tw`mx-auto`}
    }

    &:nth-child(1) {
      p {
        ${tw`w-3/4 mx-auto mb-5`}
        line-height: 1.9;
      }

      button {
        ${tw`w-36 p-2 rounded-3xl transition-all ease-in`}
        border: 1px solid var(--secondary);
        color: var(--primary);

        &:hover {
          background-color: var(--secondary);
          color: var(--white);
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .info__box {
      h3 {
        font-size: 1.2rem;
      }

      &:nth-child(1) {
        p {
          ${tw`w-full`}
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    ${tw`grid-cols-1`}

    .info__box {
      &:nth-child(1) {
        p {
          ${tw`w-full`}
        }
      }

      &:nth-child(2) {
        ${tw`mt-10 mb-5 pt-5`}

        border-top: 1px solid var(--secondary);
        border-bottom: 1px solid var(--secondary);
      }
    }
  }
`;

export const FooterCopyright = styled.div`
  ${tw`mt-6 pt-6 pb-6`}
  border-top: 1px solid var(--secondary);

  p {
    ${tw`text-center`}
    color: var(--text-rgba);

    a {
      ${tw`transition-all ease-in`}
      color: var(--secondary);

      &:hover {
        color: var(--primary);
      }
    }
  }
`;
