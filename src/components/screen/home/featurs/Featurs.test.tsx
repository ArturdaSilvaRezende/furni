import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FeatursContents from "./FeatursContents";

describe("Featurs Component", () => {
  test("Provides information about the features", () => {
    render(<FeatursContents />);
    const getByTextContent = (text: string) => screen.getByText(text);
    const getByTestIdContent = (testId: string) => screen.getByTestId(testId);

    //FreeShipping
    expect(getByTestIdContent("free-shipping")).toBeInTheDocument();
    expect(getByTestIdContent("free-shipping")).toContainElement(
      screen.getByTestId("car-icon")
    );
    expect(getByTextContent("Free Shipping")).toBeInTheDocument();
    expect(getByTextContent("Free on order over $300")).toBeInTheDocument();

    //Security Payment
    expect(getByTestIdContent("security-payment")).toBeInTheDocument();
    expect(getByTestIdContent("security-payment")).toContainElement(
      screen.getByTestId("user-shield-icon")
    );
    expect(getByTextContent("Security Payment")).toBeInTheDocument();
    expect(getByTextContent("100% security payment")).toBeInTheDocument();

    //30 Day Return
    expect(getByTestIdContent("money-guarantee")).toBeInTheDocument();
    expect(getByTestIdContent("money-guarantee")).toContainElement(
      screen.getByTestId("outline-arrows-icon")
    );
    expect(getByTextContent("30 Day Return")).toBeInTheDocument();
    expect(getByTextContent("30 day money guarantee")).toBeInTheDocument();

    //24/7 Support
    expect(getByTestIdContent("support")).toBeInTheDocument();
    expect(getByTestIdContent("support")).toContainElement(
      screen.getByTestId("phone-icon")
    );
    expect(getByTextContent("24/7 Support")).toBeInTheDocument();
    expect(getByTextContent("Support every time fast")).toBeInTheDocument();
  });
});
