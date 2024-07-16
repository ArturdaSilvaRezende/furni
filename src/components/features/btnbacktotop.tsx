"use client";
import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import * as C from "@/styles/features/btnbacktotop";
import "@/styles/animations.css";

export default function BtnBackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const isVisible = scrollTop > 300;

    setIsVisible(isVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <C.BtnBackToTop className="zoomIn" onClick={scrollToTop}>
          <button type="button">
            <IoIosArrowUp />
          </button>
        </C.BtnBackToTop>
      )}
    </>
  );
}
