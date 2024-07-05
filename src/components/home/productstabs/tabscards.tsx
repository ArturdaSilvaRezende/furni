"use client";
import { useState, useEffect } from "react";
import { Products, ProductsList } from "./tabslist";
import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import "@/styles/animations.css";

interface TabsCards {
  selectedCategory: string;
}

export default function TabsCards({ selectedCategory }: TabsCards) {
  const [tabItem, setTabItem] = useState<Products[]>([]);

  const filterProducts = (category: string) => {
    if (category === "All Products") {
      return tabItem;
    }
    return tabItem.filter((product) => product.typeTab === category);
  };

  const filteredProducts = filterProducts(selectedCategory);

  useEffect(() => {
    setTabItem(ProductsList);
  }, []);

  return (
    <div className="productstabs__cards">
      {filteredProducts.map((item) => (
        <figure key={item.id} className="zoomIn">
          <Image src={item.image} alt={item.title} width={300} height={300} />

          <figcaption>
            <h2>{item.title}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod te incididunt
            </p>
            <p>$4.99 / kg</p>
            <button>
              <span>
                <FaShoppingBag />
              </span>
              <span>Add to Cart</span>
            </button>
          </figcaption>

          <span className="productstabs__typeTabs">{item.typeTab}</span>
        </figure>
      ))}
    </div>
  );
}
