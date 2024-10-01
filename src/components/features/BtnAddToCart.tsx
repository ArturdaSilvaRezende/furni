"use client";

import { addToCart } from "@/store/features/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import { FaShoppingBag } from "react-icons/fa";
import { CartQuantityType } from "@/types/cartquantity";

type BtnAddToCart = {
  cartIdItem: CartQuantityType;
};

export default function BtnAddToCart({ cartIdItem }: BtnAddToCart) {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => {
        dispatch(addToCart(cartIdItem));
      }}
    >
      <span>
        <FaShoppingBag />
      </span>
      <span>Add to Card</span>
    </button>
  );
}
