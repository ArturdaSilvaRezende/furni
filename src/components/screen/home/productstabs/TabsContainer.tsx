"use client";
import { useState } from "react";
import TabsCards from "./TabsCards";
import TabsMenu from "./TabsMenu";

export default function TabsContainer() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const categories = [
    "All Products",
    "Vegetables",
    "Fruits",
    "Cereals",
    "Breads",
  ];

  return (
    <div className="productstabs__container">
      <div className="productstabs__menu">
        <h1>Our Organic Products</h1>
        <TabsMenu
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <TabsCards selectedCategory={selectedCategory} />
    </div>
  );
}
