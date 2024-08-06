import ShopContents from "./ui";
import { ShopList } from "@/mocks/shoplist";

export default function ShopBreads() {
  const list = ShopList;

  return <ShopContents shopCategory={list.category.breads} shopLink="breads" />;
}
