import Link from "next/link";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import "@/styles/animations.css";

export default function HeaderNavbar() {
  return (
    <div className="contents zoomIn">
      <nav className="navbar">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/detail">Shop Detail</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="toolbar">
        <button className="toolbar__search">
          <Link href="?searchmodal=true">
            <FaSearch />
          </Link>
        </button>
        <div className="toolbar__bag">
          <button>
            <FaShoppingBag />
          </button>
          <span>13</span>
        </div>
        <div className="tool__user">
          <FaUser />
        </div>
      </div>
    </div>
  );
}
