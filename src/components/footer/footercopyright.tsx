import Link from "next/link";
import * as C from "@/styles/footer";

export default function FooterCopyRight() {
  return (
    <C.FooterCopyright>
      <p>
        <Link
          href="https://themewagon.com/themes/fruitables-free/"
          target="_blank"
        >
          ©Fruitables{" "}
        </Link>
        All right reserved.
      </p>
      <p>
        This project is a clone of one of the templates Distributed By
        <Link href="https://themewagon.com/" target="_blank">
          {" "}
          ThemeWagon
        </Link>
      </p>
    </C.FooterCopyright>
  );
}
