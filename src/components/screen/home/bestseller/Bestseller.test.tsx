import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import BestsellerContainer from "./BestSellerContainer";
import StoreProvider from "@/store/StoreProvider";
import { BestSellerList } from "./BestsellerList";

describe("Bestseller Component", () => {
  test("Renders the cards", () => {
    render(
      <StoreProvider>
        <BestsellerContainer />
      </StoreProvider>
    );

    const titleElem = screen.getByRole("heading", { level: 1 });
    expect(titleElem).toBeInTheDocument();

    const subTitleElem = screen.getByRole("heading", { level: 2 });
    expect(subTitleElem).toBeInTheDocument();

    const allItems = screen.queryAllByTestId("card-item");
    expect(allItems).toHaveLength(BestSellerList.length);

    allItems.forEach((item, index) => {
      const productName = BestSellerList[index].name;
      const productPrice = BestSellerList[index].price;

      const img = item.querySelector("img");
      expect(img).toHaveAttribute("alt", productName);

      const productNameTitle = item.querySelector("h3");
      expect(productNameTitle).toHaveTextContent(productName);

      const productPriceContents = item.querySelector("p");
      expect(productPriceContents).toHaveTextContent(`$${productPrice}`);

      const productClassification = item.querySelector(".classification span");
      const star = item.querySelector("svg");
      expect(productClassification).toContainElement(star);
    });
  });

  test("Check if the item has been added to the cart", () => {
    render(
      <StoreProvider>
        <BestsellerContainer />
      </StoreProvider>
    );

    const allItems = screen.queryAllByTestId("card-item");
    expect(allItems).toHaveLength(BestSellerList.length);

    allItems.forEach((item, index) => {
      const productId = BestSellerList[index].id;
      const addButton = screen.getAllByRole("button")[index];

      fireEvent.click(addButton);
      const cartItems = BestSellerList.map((item) => item);
      expect(cartItems).toContainEqual(
        expect.objectContaining({ id: productId })
      );
    });
  });
});
