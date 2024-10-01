"use client";

import { useAppSelector } from "@/store/hooks";

export default function HeaderCartLength() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  return <span>{cartItems.length}</span>;
}
