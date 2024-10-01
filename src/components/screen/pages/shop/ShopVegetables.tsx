import ShopContents from "./ui";
import { ShopList } from "@/mocks/ShopList";

export default function ShopVegetables() {
  const list = ShopList;

  return (
    <ShopContents
      shopCategory={list.category.vegetables}
      shopLink="vegetables"
    />
  );
}
