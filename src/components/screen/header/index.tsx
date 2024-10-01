import HeaderContents from "./HeaderContents";
import HeaderPolicy from "./HeaderPolicy";
import * as C from "@/styles/header";

export default function Header() {
  return (
    <C.Header>
      <div className="header__container">
        <HeaderPolicy />
        <HeaderContents />
      </div>
    </C.Header>
  );
}
