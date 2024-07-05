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
  ${tw`flex justify-between items-center px-12 py-5 max-[767px]:hidden 
  dark:bg-white dark:text-slate-900  text-white font-medium`}

  background: var(--primary);
  border-radius: 230px 100px;

  p {
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
          ${tw`mr-2 dark:text-amber-500`}
          color: var(--secondary);
        }
      }
    }
  }

  .policy {
    span {
      ${tw`cursor-pointer dark:hover:text-amber-500 hover:text-gray-600 transition-all ease-in`}
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
  ${tw`flex justify-between items-center mt-5 relative `}
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  h1,
  svg {
    ${tw`dark:text-white`}
    color: var(--primary);
  }

  .handleToggle {
    ${tw`flex justify-between items-center`}

    .logo {
      font-size: calc(1.375rem + 1.5vw);
      font-weight: 800;
      line-height: 1.2;
    }

    .toggle__tools {
      ${tw`flex items-center justify-center`}

      .toggle__theme {
        ${tw`pl-2 mt-1 ml-5 px-3 py-1.5 rounded transition-all ease-in w-36 dark:border-white`}
        border: 1px solid var(--primary);

        &:hover {
          border: 1px solid var(--secondary);
        }

        button {
          ${tw`flex items-center`}

          span {
            ${tw`font-semibold ml-2`}
          }

          svg {
            ${tw`transition-all ease-in`}
            font-size: 25px;

            &:hover {
              ${tw`dark:text-gray-400`}
              color: var(--black);
            }
          }
        }
      }

      .toggle__menu {
        display: none;

        svg {
          font-size: 27px;
        }
      }
    }
  }

  .contents {
    ${tw`flex justify-between items-center`}
    width: 100%;

    .navbar {
      ${tw`mx-auto`}
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
        ${tw`rounded-full transition-all ease-in dark:border-white`}
        border: 1px solid var(--secondary);
        height: 40px;
        width: 40px;

        &:hover {
          ${tw`dark:bg-white`}
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
              ${tw`dark:text-gray-400`}
              color: var(--black);
            }
          }
        }

        span {
          ${tw`rounded-full text-center absolute -top-1 right-2 dark:bg-amber-500`}
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
          ${tw`transition-all ease-in cursor-pointer`}
          font-size: 35px;

          &:hover {
            ${tw`dark:text-gray-400`}
            color: var(--black);
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    ${tw`mt-4`}
  }

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    .handleToggle {
      .toggle__tools {
        .toggle__theme {
          right: 17%;
        }
      }
    }

    .contents {
      width: 67%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .handleToggle {
      .logo {
        font-size: 1.4rem;
      }

      .toggle__tools {
        .toggle__theme {
          ${tw`w-32`}
          font-size: 14px;

          button {
            svg {
              font-size: 20px;
            }
          }
        }
      }
    }

    .contents {
      .navbar {
        ul {
          li {
            & + li {
              ${tw`ml-4`}
            }
          }
        }
      }

      .toolbar {
        .toolbar__search {
        }

        .toolbar__bag {
          ${tw`px-2`}

          button {
            svg {
              font-size: 30px;
            }
          }

          span {
            ${tw`-top-3 -right-0.5`}
          }
        }

        .tool__user {
          svg {
            font-size: 30px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    ${tw`flex-col`}

    .handleToggle {
      ${tw`w-full`}

      .logo {
        font-size: 1.7rem;
      }

      .toggle__tools {
        ${tw`w-full ml-3`}

        .toggle__theme {
          ${tw`mx-auto mb-1`}
          font-size: 14px;
          width: 120px;

          button {
            svg {
              font-size: 16px;
            }
          }
        }

        .toggle__menu {
          ${tw`ml-3`}
          display: block;
        }
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
