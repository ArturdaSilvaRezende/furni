import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ThemeToggle from ".";

beforeEach(() => {
  // Mock do localStorage
  Storage.prototype.getItem = jest.fn();
  Storage.prototype.setItem = jest.fn();

  // Mock das classes no documentElement
  document.documentElement.classList.add = jest.fn();
  document.documentElement.classList.remove = jest.fn();
});

describe("ThemesToggle Component", () => {
  test("starts in light mode if the theme in localStorage is light", () => {
    (localStorage.getItem as jest.Mock).mockReturnValue("light");

    render(<ThemeToggle className="theme-toggle" />);

    expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument();
    expect(document.documentElement.classList.add).toHaveBeenCalledWith("dark");
    expect(localStorage.setItem).toHaveBeenCalledWith("theme", "dark");
  });

  test('starts in light mode if the theme in localStorage is "dark" or is missing', () => {
    (localStorage.getItem as jest.Mock).mockReturnValue("dark");

    render(<ThemeToggle className="theme-toggle" />);

    expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument();
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith(
      "dark"
    );
    expect(localStorage.setItem).toHaveBeenCalledWith("theme", "light");
  });

  test("switches to dark mode when button is clicked in light mode", () => {
    (localStorage.getItem as jest.Mock).mockReturnValue("light");

    render(<ThemeToggle className="theme-toggle" />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(document.documentElement.classList.remove).toHaveBeenCalledWith(
      "dark"
    );
    expect(localStorage.setItem).toHaveBeenCalledWith("theme", "light");
    expect(screen.getByTestId("theme-toggle-icon-sun")).toBeInstanceOf(
      SVGSVGElement
    );
  });

  test("switches to light mode when button is clicked in dark mode", () => {
    (localStorage.getItem as jest.Mock).mockReturnValue("dark");

    render(<ThemeToggle className="theme-toggle" />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(document.documentElement.classList.add).toHaveBeenCalledWith("dark");
    expect(localStorage.setItem).toHaveBeenCalledWith("theme", "dark");
    expect(screen.getByTestId("theme-toggle-icon-moon")).toBeInstanceOf(
      SVGSVGElement
    );
  });
});
