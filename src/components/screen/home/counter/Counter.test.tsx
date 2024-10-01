import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CounterContainer from "./CounterContainer";

jest.mock("../../../../hooks/UseCounterUp", () => ({
  __esModule: true,
  default: jest.fn((ref, end) => end),
}));

describe("CounterComponent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render all counters correctly", () => {
    render(<CounterContainer />);

    expect(screen.getByText("SATISFIED CUSTOMERS")).toBeInTheDocument();
    expect(screen.getByText("QUALITY OF SERVICE")).toBeInTheDocument();
    expect(screen.getByText("QUALITY CERTIFICATES")).toBeInTheDocument();
    expect(screen.getByText("AVAILABLE PRODUCTS")).toBeInTheDocument();

    expect(screen.getByText("1963")).toBeInTheDocument();
    expect(screen.getByText("99%")).toBeInTheDocument();
    expect(screen.getByText("33")).toBeInTheDocument();
    expect(screen.getByText("789")).toBeInTheDocument();
  });

  test("should activate counting when the page is scrolled", async () => {
    render(<CounterContainer />);

    window.dispatchEvent(new Event("scroll"));

    await waitFor(() => {
      expect(screen.getByText("1963")).toBeInTheDocument();
      expect(screen.getByText("99%")).toBeInTheDocument();
      expect(screen.getByText("33")).toBeInTheDocument();
      expect(screen.getByText("789")).toBeInTheDocument();
    });
  });
});
