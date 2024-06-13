"use client";
import tw, { styled } from "twin.macro";

export const Header = styled.header``;

export const HeaderContainer = styled.div`
  ${tw`container mx-auto`}

  @media screen and (max-width: 1024px) {
    ${tw`px-5`}
  }
`;

export const HeaderPolicy = styled.div`
  ${tw`flex justify-between items-center px-12 py-5 max-[767px]:hidden`}
  background-color: var(--primary);
  border-radius: 230px 100px;

  p {
    color: var(--white);

    span {
      font-size: 0.875em;
    }
  }

  .contact {
    ${tw`flex`}

    p {
      ${tw`flex items-center`}

      & + p {
        ${tw`ml-5`}
      }

      span {
        &:first-child {
          ${tw`mr-2`}
          color: var(--secondary);
        }
      }
    }
  }

  .policy {
    span {
      ${tw`cursor-pointer hover:text-orange-200 transition-all ease-in`}
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    ${tw`px-6`}

    p {
      span {
        font-size: 0.775em;
      }
    }
  }
`;

export const HeaderContents = styled.div`
  ${tw`flex justify-between items-center`}
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  h1,
  svg {
    color: var(--primary);
  }

  .handleToggle {
    ${tw`flex justify-between items-center`}

    .logo {
      font-size: calc(1.375rem + 1.5vw);
      font-weight: 800;
      line-height: 1.2;
    }

    .toggle {
      display: none;

      svg {
        font-size: 27px;
      }
    }
  }

  .contents {
    ${tw`flex justify-between items-center`}
    width: 62%;

    .navbar {
      ul {
        ${tw`flex justify-between items-center`}

        li {
          ${tw`transition-all ease-in`}

          & + li {
            ${tw`ml-8`}
          }

          &:hover {
            color: var(--primary);
          }
        }
      }
    }

    .toolbar {
      ${tw`flex items-center justify-center`}

      .toolbar__search {
        ${tw`rounded-full transition-all ease-in`}
        border: 1px solid var(--secondary);
        height: 40px;
        width: 40px;

        &:hover {
          background-color: var(--secondary);

          svg {
            color: var(--black);
          }
        }

        svg {
          ${tw`mx-auto`}
        }
      }

      .toolbar__bag {
        ${tw`px-4 relative`}
        margin-top: 6px;

        button {
          svg {
            ${tw`transition-all ease-in`}
            font-size: 35px;

            &:hover {
              color: var(--black);
            }
          }
        }

        span {
          ${tw`rounded-full text-center absolute -top-1 right-2`}
          background-color: var(--secondary);
          color: var(--black);
          font-size: 13px;
          height: 25px;
          padding-top: 3px;
          width: 25px;
        }
      }

      .tool__user {
        svg {
          font-size: 35px;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    ${tw`mt-4`}
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .contents {
      width: 70.5%;
    }
  }

  @media screen and (max-width: 767px) {
    ${tw`flex-col`}

    .handleToggle {
      ${tw`w-full`}

      .toggle {
        display: block;
      }
    }

    .contents {
      ${tw`flex-col`}

      .navbar {
        ${tw`my-8`}

        ul {
          ${tw`flex-col`}

          li {
            & + li {
              ${tw`ml-0 mt-3`}
            }
          }
        }
      }

      .toolbar {
        ${tw`mb-4`}
      }
    }
  }
`;
