"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HeaderNavbar from "./HeaderNavbar";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import ThemeSwitcher from "@/components/themes/";

export default function HeaderContents() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerContentsRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setIsMenuOpen(window.innerWidth >= 768);
  };

  const handleScrollTop = () => {
    if (headerContentsRef.current) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        headerContentsRef.current.classList.add("fadeIn");
        headerContentsRef.current.style.position = "fixed";
      } else {
        headerContentsRef.current.classList.remove("fadeIn");
        headerContentsRef.current.style.position = "relative";
      }
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);

    return () => window.removeEventListener("scroll", handleScrollTop);
  }, []);

  return (
    <div className="header__contents" ref={headerContentsRef}>
      <div className="handleToggle">
        <Link href="/" className="logo">
          <h1>Fruitables</h1>
        </Link>

        <div className="toggle__tools">
          <ThemeSwitcher className="toggle__theme" />

          <button
            className="toggle__menu"
            onClick={toggleMenu}
            data-testid="toggle-menu"
          >
            {isMenuOpen ? (
              <IoMdClose data-testid="close-icon" />
            ) : (
              <FaBars data-testid="bars-icon" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && <HeaderNavbar testProps="header-navbar" />}
    </div>
  );
}
