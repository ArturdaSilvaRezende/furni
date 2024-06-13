"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import HeaderNavbar from "./headernavbar";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import * as C from "@/styles/header";

export default function HeaderContents() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setIsMenuOpen(window.innerWidth >= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <C.HeaderContents>
      <div className="handleToggle">
        <Link href="/" className="logo">
          <h1>Fruitables</h1>
        </Link>

        <button className="toggle" onClick={toggleMenu}>
          {isMenuOpen ? <IoMdClose /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && <HeaderNavbar />}
    </C.HeaderContents>
  );
}
