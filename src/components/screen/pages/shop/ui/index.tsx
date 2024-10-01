import BtnAddToCart from "@/components/features/BtnAddToCart";
import Image from "next/image";
import Link from "next/link";
import { ShopItemType } from "@/mocks/ShopList";
import * as C from "@/styles/pages/shop";

type ShopContents = {
  shopCategory: ShopItemType[];
  shopLink?: string;
};

export default function ShopContents({ shopCategory, shopLink }: ShopContents) {
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
              <BtnAddToCart cartIdItem={item} />
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
