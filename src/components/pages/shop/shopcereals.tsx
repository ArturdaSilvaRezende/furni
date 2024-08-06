import ShopContents from "./ui";
import { ShopList } from "@/mocks/shoplist";

export default function ShopCereals() {
  const list = ShopList;

  return (
    <ShopContents shopCategory={list.category.cereals} shopLink="cereals" />
  );
}
