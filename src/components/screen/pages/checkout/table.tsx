import Image from "next/image";
import { CartQuantityType } from "@/types/cartquantity";

type TableProps = {
  cartProducts: CartQuantityType[];
  cartTotal: number;
};

export default function CheckoutTable({ cartProducts, cartTotal }: TableProps) {
  return (
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
        {cartProducts.map((item) => (
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
            <td>{item.quantity}</td>
            <td>${cartTotal}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
