"use client";
import { useContext } from "react";
import { CartContext } from "@/contexts/cartcontext";
import Breadcrumb from "@/components/breadcrumb";
import CheckoutTable from "./table";
import CheckoutForm from "./form";
import CheckoutTotal from "./total";
import * as C from "@/styles/pages/checkout";

export default function CheckoutComponent() {
  const { cartItems, getCartTotal } = useContext(CartContext);

  return (
    <C.Checkout>
      <Breadcrumb title="Checkout" page="Checkout" />
      <section className="checkout__container">
        <h1>Billing Details</h1>

        <CheckoutTable cartProducts={cartItems} cartTotal={getCartTotal} />

        <div className="checkout__details">
          <CheckoutForm />
          <CheckoutTotal cartTotal={getCartTotal} />
        </div>
      </section>
    </C.Checkout>
  );
}
