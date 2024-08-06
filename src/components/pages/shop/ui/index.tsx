"use client";
import { useContext } from "react";
import { CartContext } from "@/contexts/cartcontext";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { ShopItemType } from "@/mocks/shoplist";
import * as C from "@/styles/pages/shop";

interface ShopContents {
  shopCategory: ShopItemType[];
  shopLink?: string;
}

export default function ShopContents({ shopCategory, shopLink }: ShopContents) {
  const { addToCart } = useContext(CartContext);

  return (
    <C.ShopContents>
      {shopCategory.map((item) => (
        <figure key={item.id} className="shop__card">
          <Image src={item.image} alt={item.name} width={300} height={300} />

          <figcaption>
            <h3>{item.name}</h3>
            <p className="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod te incididunt
            </p>
            <p className="card__price">${item.price}/KG</p>
            <div className="card__buttons">
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
              <button>
                <span>
                  <Link href={`/shop/${shopLink}/${item.id}`}>Details</Link>
                </span>
              </button>
            </div>
          </figcaption>
        </figure>
      ))}
    </C.ShopContents>
  );
}
