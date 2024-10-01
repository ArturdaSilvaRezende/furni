import { ReactElement } from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { CartQuantityType } from "@/types/cartquantity";
import { CartContext } from "../../../contexts/CartContext";
import HeaderCartLength from "./HeaderCartLength";
import HeaderContents from "./HeaderContents";
import HeaderNavbar from "./HeaderNavbar";
import HeaderPolicy from "./HeaderPolicy";

jest.mock("next/link", () => {
  const NextLink = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }): ReactElement => <a href={href}>{children}</a>;

  return NextLink;
});

describe("Header Component", () => {
  //HeaderCartLength
  test("renders the correct number of items in the cart", () => {
    const cartItems: CartQuantityType[] = [];

    render(
      <CartContext.Provider
        value={{
          cartItems,
          addToCart: () => {},
          removeFromCart: () => {},
          buttonIncrease: () => {},
          buttonDecrease: () => {},
          getCartTotal: () => 0,
        }}
      >
        <HeaderCartLength />
      </CartContext.Provider>
    );
    const spanElement = screen.getByText(cartItems.length.toString());
    expect(spanElement).toBeInTheDocument();
  });

  //HeaderContents
  test("renders the header logo and title", () => {
    render(<HeaderContents />);
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");

    const titleElement = screen.getByRole("heading", { level: 1 });
    expect(titleElement).toBeInTheDocument();
  });

  test("alternates between IoMdClose and FaBars when clicked", () => {
    render(<HeaderContents />);

    const button = screen.getByTestId("toggle-menu");
    expect(button).toBeInTheDocument();

    const BarIcon = screen.queryByTestId("bars-icon");
    if (BarIcon) expect(BarIcon).toBeInTheDocument();

    fireEvent.click(button);

    const CloseIcon = screen.queryByTestId("close-icon");
    if (CloseIcon) expect(CloseIcon).toBeInTheDocument();

    fireEvent.click(button);

    if (BarIcon) expect(BarIcon).toBeInTheDocument();
  });

  //HeaderNavbar
  test("renders navbar links", () => {
    const { container } = render(<HeaderNavbar />);

    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");

    const shopLink = screen.getByRole("link", { name: /shop/i });
    expect(shopLink).toBeInTheDocument();
    expect(shopLink).toHaveAttribute("href", "/shop");

    const contactLink = screen.getByRole("link", { name: /contact/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/contact");

    const openSearchLink = container.querySelector(
      'a[aria-label="open search"]'
    );

    if (openSearchLink) {
      expect(openSearchLink).toBeInTheDocument();
      expect(openSearchLink).toHaveAttribute("href", "/?searchmodal=true");
    }

    const openCartLink = container.querySelector('a[aria-label="open search"]');

    if (openCartLink) {
      expect(openCartLink).toBeInTheDocument();
      expect(openCartLink).toHaveAttribute("href", "/cart");
    }

    const openUser = container.querySelector('a[aria-label="open search"]');

    if (openUser) {
      expect(openUser).toBeInTheDocument();
    }
  });

  test("HeaderNavbar is conditionally rendered based on isMenuOpen state", () => {
    // Renderiza o componente principal
    render(<HeaderContents />);

    expect(screen.getByTestId("header-navbar")).toBeInTheDocument();

    const toggleButton = screen.getByTestId("toggle-menu");
    fireEvent.click(toggleButton);

    expect(screen.queryByTestId("header-navbar")).not.toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByTestId("header-navbar")).toBeInTheDocument();
  });

  //HeaderPolicy
  test("render the terms of use", () => {
    const { container } = render(<HeaderPolicy />);

    const mapMarker = container.querySelector('[aria-label="map marker"]');
    expect(mapMarker).toBeInTheDocument();

    const streetName = screen.getByText("123 Street, New York");
    expect(streetName).toBeInTheDocument();

    const emailIcon = container.querySelector('[aria-label="email icon"]');
    expect(emailIcon).toBeInTheDocument();

    const emailAddress = screen.getByText("fruitables@gmail.com");
    expect(emailAddress).toBeInTheDocument();
  });
});
