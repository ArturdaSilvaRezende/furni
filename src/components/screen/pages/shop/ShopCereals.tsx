import ShopContents from "./ui";
import { ShopList } from "@/mocks/ShopList";

export default function ShopCereals() {
  const list = ShopList;

  return (
    <ShopContents shopCategory={list.category.cereals} shopLink="cereals" />
  );
}
