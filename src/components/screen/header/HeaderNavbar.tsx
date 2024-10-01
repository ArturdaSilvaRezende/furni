import Link from "next/link";
import HeaderCartLength from "./HeaderCartLength";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import "@/styles/animations.css";

type NavbarProps = {
  testProps?: string;
};

export default function HeaderNavbar({ testProps }: NavbarProps) {
  return (
    <div className="contents zoomIn" data-testid={testProps}>
      <nav className="navbar">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="toolbar">
        <button className="toolbar__search">
          <Link href="/?searchmodal=true" aria-label="open search">
            <FaSearch />
          </Link>
        </button>
        <div className="toolbar__bag">
          <button>
            <Link href="/cart" aria-label="open cart">
              <FaShoppingBag />
            </Link>
          </button>
          <HeaderCartLength />
        </div>
        <div className="tool__user" arial-label="open user">
          <FaUser />
        </div>
      </div>
    </div>
  );
}
