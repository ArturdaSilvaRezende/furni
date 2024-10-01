import Image from "next/image";
import BtnAddToCart from "@/components/features/BtnAddToCart";
import { FaStar } from "react-icons/fa";
import { BestSellerList } from "./BestsellerList";
import React from "react";

export default function BestsellerContainer() {
  const bestSellerItem = BestSellerList;

  return (
    <div className="bestseller__container">
      <div className="bestseller__title">
        <h1>Bestseller Products</h1>
        <h2>
          Latin words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable.
        </h2>
      </div>

      <div className="bestseller__cards">
        {bestSellerItem.map((item) => (
          <figure key={item.id} data-testid="card-item">
            <Image src={item.image} alt={item.name} width={300} height={300} />

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
              <BtnAddToCart cartIdItem={item} />
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
