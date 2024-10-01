import FooterCopyRight from "./FooterCopyight";
import FooterHeader from "./FooterHeader";
import FooterInfo from "./FooterInfo";
import * as C from "@/styles/footer";

export default function Footer() {
  return (
    <C.Footer>
      <div className="footer__container">
        <FooterHeader />
        <FooterInfo />
        <FooterCopyRight />
      </div>
    </C.Footer>
  );
}
