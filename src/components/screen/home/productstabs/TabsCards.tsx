import BtnAddToCart from "@/components/features/BtnAddToCart";
import { ProductsList } from "./TabsList";
import Image from "next/image";
import "@/styles/animations.css";

type TabsCards = {
  selectedCategory: string;
};

export default function TabsCards({ selectedCategory }: TabsCards) {
  const tabItem = ProductsList;

  const filterProducts = (category: string) => {
    if (category === "All Products") {
      return tabItem;
    }
    return tabItem.filter((item) => item.category === category);
  };

  const filteredProducts = filterProducts(selectedCategory);

  return (
    <div className="productstabs__cards">
      {filteredProducts.map((item) => (
        <figure key={item.id} className="zoomIn" data-testid="tab-item">
          <Image
            src={item.image}
            alt={item.name}
            width={300}
            height={300}
            aria-label={item.name}
          />

          <figcaption>
            <h2>{item.name}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod te incididunt
            </p>
            <p data-price="price">${item.price} / kg</p>

            <BtnAddToCart cartIdItem={item} />
          </figcaption>

          <span className="productstabs__typeTabs" data-category="category">
            {item.category}
          </span>
        </figure>
      ))}
    </div>
  );
}
