"use client";
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/breadcrumb";
import { CartContext } from "@/contexts/cartcontext";
import * as C from "@/styles/pages/cart";

export default function CartComponent() {
  const {
    cartItems,
    removeFromCart,
    getCartTotal,
    buttonIncrease,
    buttonDecrease,
  } = useContext(CartContext);

  const totalItem = (price: number, quantity: number) => {
    const total = price * quantity;
    return total.toFixed(2);
  };

  const alertCart = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty");
    }
  };

  return (
    <C.Cart>
      <Breadcrumb page="Cart" title="Cart" />
      <section className="cart__contents">
        <div className="cart__container">
          <table>
            <thead>
              <tr>
                <th colSpan={2}>Product Details</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td colSpan={2}>
                    <figure>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={300}
                        height={300}
                      />
                      <figcaption>{item.name}</figcaption>
                    </figure>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <div className="cart__quantity">
                      <button onClick={() => buttonDecrease(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => buttonIncrease(item)}>+</button>
                    </div>
                  </td>
                  <td>${totalItem(item.price, item.quantity as number)}</td>
                  <td className="cart__close">
                    <button
                      onClick={() => {
                        removeFromCart(item);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart__cupon">
            <input type="text" placeholder="Cupon Code" />
            <button>Apply Cupon</button>
          </div>

          <div className="cart__total">
            <h1>Cart Total</h1>
            <p>
              <span>Subtotal: </span>
              <span>${getCartTotal()}</span>
            </p>
            <p>
              <span>Delivery: </span>
              <span>$0.00</span>
            </p>
            <p>
              <span>Discount: </span>
              <span>$0.00</span>
            </p>

            <div className="total">
              <p>
                <span>Total: </span>
                <span>${getCartTotal()}</span>
              </p>

              <div className="total__checkout" onClick={() => alertCart()}>
                <Link
                  href={`${cartItems.length === 0 ? "/cart" : "/checkout"}`}
                >
                  <button>Proceed Checkout</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </C.Cart>
  );
}
