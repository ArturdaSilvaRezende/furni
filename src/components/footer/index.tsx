import FooterCopyRight from "./footercopyright";
import FooterHeader from "./footerheader";
import FooterInfo from "./footerinfo";
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
