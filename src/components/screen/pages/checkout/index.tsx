"use client";
import { useAppSelector } from "@/store/hooks";
import { useSelector } from "react-redux";
import { selectCartTotal } from "@/store/features/cart/cartSelector";
import Breadcrumb from "@/components//screen/breadcrumb";
import CheckoutTable from "./table";
import CheckoutForm from "./form";
import CheckoutTotal from "./total";
import * as C from "@/styles/pages/checkout";

export default function CheckoutComponent() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <C.Checkout>
      <Breadcrumb title="Checkout" page="Checkout" />
      <section className="checkout__container">
        <h1>Billing Details</h1>

        <CheckoutTable cartProducts={cartItems} cartTotal={cartTotal} />

        <div className="checkout__details">
          <CheckoutForm />
          <CheckoutTotal cartTotal={cartTotal} />
        </div>
      </section>
    </C.Checkout>
  );
}
