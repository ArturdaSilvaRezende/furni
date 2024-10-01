import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ServicesContainer from "./ServicesContainer";

type Services = {
  title?: string;
  subtitle?: string;
  alt?: string;
};

const Services: Services[] = [
  { title: "Fresh Apples", subtitle: "20% OFF", alt: "Featur Fresh Apples" },
  {
    title: "Tasty Fruits",
    subtitle: "Free delivery",
    alt: "Featur Tasty Fruits",
  },
  {
    title: "Exotic Vegitable",
    subtitle: "Discount 30$",
    alt: "Featur Exotic Vegitable",
  },
];

const getAllImages = (container: HTMLElement): Services[] => {
  const images = container.querySelectorAll("img");
  const altImagesArray = Array.from(images).map((img) => ({
    alt: img.getAttribute("alt") || "",
  }));
  return altImagesArray;
};

const getAllTitle = (container: HTMLElement): Services[] => {
  const title = container.querySelectorAll("h3");
  const TitleArray = Array.from(title).map((title) => ({
    title: title.textContent || "",
  }));
  return TitleArray;
};

const getAllSubTitle = (container: HTMLElement): Services[] => {
  const subtitle = container.querySelectorAll("h2");
  const SubTitleArray = Array.from(subtitle).map((subtitle) => ({
    subtitle: subtitle.textContent || "",
  }));
  return SubTitleArray;
};

describe("Services Component", () => {
  test("Provides information about the services", () => {
    const { container } = render(<ServicesContainer />);

    //Images
    const altImagesArray = getAllImages(container);
    expect(altImagesArray.map((item) => item.alt)).toEqual(
      Services.map((item) => item.alt)
    );

    //Titles
    const titleArray = getAllTitle(container);
    expect(titleArray.map((item) => item.title)).toEqual(
      Services.map((item) => item.title)
    );

    //Subtitle
    const subTitleArray = getAllSubTitle(container);
    expect(subTitleArray.map((item) => item.subtitle)).toEqual(
      Services.map((item) => item.subtitle)
    );
  });
});
