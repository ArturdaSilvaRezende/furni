import ShopContents from "./ui";
import { ShopList } from "@/mocks/shoplist";

export default function ShopVegetables() {
  const list = ShopList;

  return <ShopContents shopCategory={list.category.vegetables} shopLink="vegetables" />;
}
