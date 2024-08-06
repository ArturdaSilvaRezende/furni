"use client";
import { useContext } from "react";
import { CartContext } from "@/contexts/cartcontext";
import { ProductsList } from "./tabslist";
import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import "@/styles/animations.css";

interface TabsCards {
  selectedCategory: string;
}

export default function TabsCards({ selectedCategory }: TabsCards) {
  const tabItem = ProductsList;
  const { addToCart } = useContext(CartContext);

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
        <figure key={item.id} className="zoomIn">
          <Image src={item.image} alt={item.name} width={300} height={300} />

          <figcaption>
            <h2>{item.name}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod te incididunt
            </p>
            <p>${item.price} / kg</p>

            {}
            <button
              onClick={() => {
                addToCart(item);
              }}
            >
              <span>
                <FaShoppingBag />
              </span>
              <span>Add to Cart</span>
            </button>
          </figcaption>

          <span className="productstabs__typeTabs">{item.category}</span>
        </figure>
      ))}
    </div>
  );
}
