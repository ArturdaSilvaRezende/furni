"use client";
import { useState } from "react";
import TabsCards from "./tabscards";
import TabsMenu from "./tabsmenu";
import * as C from "@/styles/home/productstabs";

export default function ProductsTabs() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const categories = [
    "All Products",
    "Vegetables",
    "Fruits",
    "Cereals",
    "Breads",
  ];

  return (
    <C.ProductsTabs>
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
    </C.ProductsTabs>
  );
}
