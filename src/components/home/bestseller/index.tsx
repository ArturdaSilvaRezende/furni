"use client";
import { useContext } from "react";
import Image from "next/image";
import { CartContext } from "@/contexts/cartcontext";
import { FaShoppingBag, FaStar } from "react-icons/fa";
import { BestSellerList } from "./bestsellerlist";
import * as C from "@/styles/home/bestseller";

export default function BestSeller() {
  const { addToCart } = useContext(CartContext);
  const bestSellerItem = BestSellerList;

  return (
    <C.BestSeller>
      <div className="bestseller__container">
        <div className="bestseller__title">
          <h1>Bestseller Products</h1>
          <h2>
            Latin words, combined with a handful of model sentence structures,
            to generate Lorem Ipsum which looks reasonable.
          </h2>
        </div>

        <div className="bestseller__cards">
          {bestSellerItem.map((item) => (
            <figure key={item.id}>
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
              />

              <figcaption>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <div className="classification">
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                </div>
                <button
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  <span>
                    <FaShoppingBag />
                  </span>
                  <span>Add to Card</span>
                </button>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </C.BestSeller>
  );
}
