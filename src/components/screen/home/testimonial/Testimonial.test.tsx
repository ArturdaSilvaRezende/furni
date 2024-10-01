import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import TestimonialContainer from "./TestimonialContainer";
import { testimonialList } from "./TestimonialList";

jest.mock("swiper/react", () => ({
  Swiper: jest.fn(({ children }) => <div>{children}</div>),
  SwiperSlide: jest.fn(({ children }) => <div>{children}</div>),
}));

jest.mock("swiper", () => ({
  Navigation: jest.fn(),
  Pagination: jest.fn(),
  Autoplay: jest.fn(),
}));

describe("Testimonial Componente", () => {
  test("Renders testimonial titles", () => {
    render(<TestimonialContainer />);

    const subTitleElement = screen.getByRole("heading", { level: 2 });
    expect(subTitleElement).toBeInTheDocument();

    const titleElement = screen.getByRole("heading", { level: 1 });
    expect(titleElement).toBeInTheDocument();
  });

  test("Renders testimonial cards", () => {
    const { debug } = render(<TestimonialContainer />);
    debug();

    const allItems = screen.queryAllByTestId("card-item");
    expect(allItems).toHaveLength(testimonialList.length);

    allItems.forEach((item, index) => {
      const productName = testimonialList[index].client;

      const img = item.querySelector("img");
      expect(img).toHaveAttribute("alt", productName);

      const clientName = item.querySelector("h3");
      expect(clientName).toHaveTextContent(productName);

      const productClassification = item.querySelector(".classification span");
      const star = item.querySelector("svg");
      expect(productClassification).toContainElement(star);

      const quote = item.querySelector(".quote");
      expect(quote).toBeInTheDocument();
    });
  });
});
