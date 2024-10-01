"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPlateWheat } from "react-icons/fa6";
import { GiSlicedBread, GiFruitBowl, GiTomato } from "react-icons/gi";
import * as C from "@/styles/pages/shop";

export default function ShopNavigation() {
  const pathname = usePathname();

  return (
    <C.ShopNavigation>
      <h2>Categories</h2>
      <nav>
        <ul>
          <li
            className={`${pathname === "/shop/breads" ? "active__shop" : ""}`}
          >
            <span>
              <GiSlicedBread />
            </span>
            <Link href="/shop/breads">Breads</Link>
          </li>

          <li
            className={`${pathname === "/shop/cereals" ? "active__shop" : ""}`}
          >
            <span>
              <FaPlateWheat />
            </span>
            <Link href="/shop/cereals">Cereals</Link>
          </li>

          <li
            className={`${pathname === "/shop/fruits" ? "active__shop" : ""}`}
          >
            <span>
              <GiFruitBowl />
            </span>
            <Link href="/shop/fruits">Fruits</Link>
          </li>

          <li
            className={`${
              pathname === "/shop/vegetables" ? "active__shop" : ""
            }`}
          >
            <span>
              <GiTomato />
            </span>
            <Link href="/shop/vegetables">Vegetables</Link>
          </li>
        </ul>
      </nav>
    </C.ShopNavigation>
  );
}
