import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import CarouselContainer from "./CarouselContainer";
import StoreProvider from "@/store/StoreProvider";
import { VegetablesList } from "./CarouselList";

jest.mock("swiper/react", () => ({
  Swiper: jest.fn(({ children }) => <div>{children}</div>),
  SwiperSlide: jest.fn(({ children }) => <div>{children}</div>),
}));

jest.mock("swiper", () => ({
  Navigation: jest.fn(),
  Pagination: jest.fn(),
  Autoplay: jest.fn(),
}));

describe("Carousel Component", () => {
  test("Renders the carousel header and navigation buttons", () => {
    render(
      <StoreProvider>
        <CarouselContainer />
      </StoreProvider>
    );
    const titleElem = screen.getByRole("heading", { level: 1 });
    expect(titleElem).toBeInTheDocument();

    const prevButton = screen.getByTestId("button-prev");
    expect(prevButton).toBeInTheDocument();
    expect(prevButton).toContainElement(screen.getByTestId("icon-prev"));

    const nextButton = screen.getByTestId("button-next");
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toContainElement(screen.getByTestId("icon-next"));
  });

  test("renders the Swiper component with slides", () => {
    render(
      <StoreProvider>
        <CarouselContainer />
      </StoreProvider>
    );

    const allItems = screen.queryAllByTestId("card-item");
    expect(allItems).toHaveLength(VegetablesList.length);

    allItems.forEach((item, index) => {
      const productName = VegetablesList[index].name;
      const productId = VegetablesList[index].id;
      const addButton = screen.getAllByRole("button")[index];

      const img = item.querySelector("img");
      expect(img).toHaveAttribute("alt", productName);

      const productNameTitle = item.querySelector("h2");
      expect(productNameTitle).toHaveTextContent(productName);

      fireEvent.click(addButton);
      const cartItems = VegetablesList.map((item) => item);
      expect(cartItems).toContainEqual(
        expect.objectContaining({ id: productId })
      );
    });
  });
});
