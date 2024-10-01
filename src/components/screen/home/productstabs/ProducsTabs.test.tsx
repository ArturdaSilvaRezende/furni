import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import StoreProvider from "@/store/StoreProvider";
import { ProductsList } from "./TabsList";
import TabsContainer from "./TabsContainer";
import TabsCards from "./TabsCards";

const verifyTabContent = (category: string) => {
  const filteredProducts = ProductsList.filter(
    (item) => category === "All Products" || item.category === category
  );

  const allItems = screen.queryAllByTestId("tab-item");
  expect(allItems).toHaveLength(filteredProducts.length);

  allItems.forEach((item, index) => {
    const productName = filteredProducts[index].name;
    const productPrice = filteredProducts[index].price;
    const productCategory = filteredProducts[index].category;

    const img = item.querySelector("img");
    expect(img).toHaveAttribute("aria-label", productName);

    const productNameTitle = item.querySelector("h2");
    expect(productNameTitle).toHaveTextContent(productName);

    const productPriceContents = item.querySelector('[data-price="price"]');
    expect(productPriceContents).toHaveTextContent(`$${productPrice} / kg`);

    const productCategoryContents = item.querySelector(
      '[data-category="category"]'
    );
    expect(productCategoryContents).toHaveTextContent(productCategory);
  });
};

describe("Products Tabs", () => {
  test("initially renders with 'All Products' active", () => {
    render(
      <StoreProvider>
        <TabsContainer />
      </StoreProvider>
    );

    const allProductsTab = screen.getByText("All Products");
    expect(allProductsTab).toHaveClass("active__tabs");

    const allItems = screen.queryAllByTestId("tab-item");
    expect(allItems).toHaveLength(ProductsList.length);
    verifyTabContent("All Products");
  });

  test("renders Vegetables options", () => {
    render(
      <StoreProvider>
        <TabsContainer />
      </StoreProvider>
    );

    const filteredProducts = ProductsList.filter(
      (item) => item.category === "Vegetables"
    );

    const VegetablesTab = screen.getByTestId("Vegetables");
    fireEvent.click(VegetablesTab);
    expect(VegetablesTab).toHaveClass("active__tabs");

    const allItems = screen.queryAllByTestId("tab-item");
    expect(allItems).toHaveLength(filteredProducts.length);
    verifyTabContent("Vegetables");
  });

  test("renders Fruits options", () => {
    render(
      <StoreProvider>
        <TabsContainer />
      </StoreProvider>
    );

    const filteredProducts = ProductsList.filter(
      (item) => item.category === "Fruits"
    );

    const FruitsTab = screen.getByTestId("Fruits");
    fireEvent.click(FruitsTab);
    expect(FruitsTab).toHaveClass("active__tabs");

    const allItems = screen.queryAllByTestId("tab-item");
    expect(allItems).toHaveLength(filteredProducts.length);
    verifyTabContent("Fruits");
  });

  test("renders Cereals options", () => {
    render(
      <StoreProvider>
        <TabsContainer />
      </StoreProvider>
    );

    const filteredProducts = ProductsList.filter(
      (item) => item.category === "Cereals"
    );

    const CerealsTab = screen.getByTestId("Cereals");
    fireEvent.click(CerealsTab);
    expect(CerealsTab).toHaveClass("active__tabs");

    const allItems = screen.queryAllByTestId("tab-item");
    expect(allItems).toHaveLength(filteredProducts.length);
    verifyTabContent("Cereals");
  });

  test("renders Breads options", () => {
    render(
      <StoreProvider>
        <TabsContainer />
      </StoreProvider>
    );

    const filteredProducts = ProductsList.filter(
      (item) => item.category === "Breads"
    );

    const BreadsTab = screen.getByTestId("Breads");
    fireEvent.click(BreadsTab);
    expect(BreadsTab).toHaveClass("active__tabs");

    const allItems = screen.queryAllByTestId("tab-item");
    expect(allItems).toHaveLength(filteredProducts.length);
    verifyTabContent("Breads");
  });
});

describe("Products Tabs / add to cart", () => {
  test("Check if the item has been added to the cart", () => {
    render(
      <StoreProvider>
        <TabsCards selectedCategory="All Products" />
      </StoreProvider>
    );

    const allItems = screen.queryAllByTestId("tab-item");
    expect(allItems).toHaveLength(ProductsList.length);

    allItems.forEach((item, index) => {
      const addButton = screen.getAllByRole("button")[index];
      const productId = ProductsList[index].id;

      fireEvent.click(addButton);
      const cartItems = ProductsList.map((item) => item);
      expect(cartItems).toContainEqual(
        expect.objectContaining({ id: productId })
      );
    });
  });
});
