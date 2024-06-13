import HeaderContents from "./headercontents";
import HeaderPolicy from "./headerpolicy";
import * as C from "@/styles/header";

export default function Header() {
  return (
    <C.Header>
      <C.HeaderContainer>
        <HeaderPolicy />
        <HeaderContents />
      </C.HeaderContainer>
    </C.Header>
  );
}
