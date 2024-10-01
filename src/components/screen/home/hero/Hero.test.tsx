import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeroCarousel from "./HeroCarousel";
import HeroDescription from "./HeroDescription";

jest.mock("swiper/react", () => ({
  Swiper: jest.fn(({ children }) => <div>{children}</div>),
  SwiperSlide: jest.fn(({ children }) => <div>{children}</div>),
}));

jest.mock("swiper", () => ({
  Navigation: jest.fn(),
  Pagination: jest.fn(),
  Autoplay: jest.fn(),
}));

describe("Hero Component", () => {
  test("renders the Swiper component with slides", () => {
    render(<HeroCarousel />);

    const images = screen.getAllByRole("img");
    images.forEach((img, index) => {
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute(
        "aria-label",
        `Hero Image ${String(index + 1).padStart(2, "0")}`
      );
    });
  });

  test("renders the swiper tools with prev and next buttons", () => {
    render(<HeroCarousel />);

    const prevButton = screen.getByTestId("button-prev");
    expect(prevButton).toBeInTheDocument();
    expect(prevButton).toContainElement(screen.getByTestId("icon-prev"));

    const nextButton = screen.getByTestId("button-next");
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toContainElement(screen.getByTestId("icon-next"));
  });

  test("renders hero description", () => {
    render(<HeroDescription />);

    const subTitle = screen.getByText("100% Organic Foods");
    expect(subTitle).toBeInTheDocument();

    const title = screen.getByText("Organic Veggies & Fruits Foods");
    expect(title).toBeInTheDocument();

    const inputSearch = screen.getByPlaceholderText("search");
    expect(inputSearch).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
