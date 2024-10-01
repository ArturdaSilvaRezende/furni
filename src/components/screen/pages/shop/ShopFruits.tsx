import ShopContents from "./ui";
import { ShopList } from "@/mocks/ShopList";

export default function ShopFruits() {
  const list = ShopList;

  return <ShopContents shopCategory={list.category.fruits} shopLink="fruits" />;
}
