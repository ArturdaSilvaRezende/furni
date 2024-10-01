import ShopContents from "./ui";
import { ShopList } from "@/mocks/ShopList";

export default function ShopBreads() {
  const list = ShopList;

  return <ShopContents shopCategory={list.category.breads} shopLink="breads" />;
}
