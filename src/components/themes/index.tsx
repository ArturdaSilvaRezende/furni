"use client";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

type ThemeToggleType = {
  className: string;
};

const ThemeToggle = (props: ThemeToggleType) => {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  return (
    <div className={props.className}>
      <button onClick={() => setDarkTheme(!darkTheme)}>
        {darkTheme ? (
          <FaMoon data-testid="theme-toggle-icon-moon" />
        ) : (
          <FaSun data-testid="theme-toggle-icon-sun" />
        )}
        <span>Dark Mode</span>
      </button>
    </div>
  );
};

export default ThemeToggle;
