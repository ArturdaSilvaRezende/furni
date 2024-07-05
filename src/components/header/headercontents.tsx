"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HeaderNavbar from "./headernavbar";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import * as C from "@/styles/header";
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
        document.body.scrollTop > 330 ||
        document.documentElement.scrollTop > 330
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
    <C.HeaderContents className="header__contents" ref={headerContentsRef}>
      <div className="handleToggle">
        <Link href="/" className="logo">
          <h1>Fruitables</h1>
        </Link>

        <div className="toggle__tools">
          <ThemeSwitcher className="toggle__theme" />

          <button className="toggle__menu" onClick={toggleMenu}>
            {isMenuOpen ? <IoMdClose /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuOpen && <HeaderNavbar />}
    </C.HeaderContents>
  );
}
