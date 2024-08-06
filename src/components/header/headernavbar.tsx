"use client";
import { useContext } from "react";
import Link from "next/link";
import { CartContext } from "@/contexts/cartcontext";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import "@/styles/animations.css";

export default function HeaderNavbar() {
  const { cartItems } = useContext(CartContext);

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
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="toolbar">
        <button className="toolbar__search">
          <Link href="/?searchmodal=true">
            <FaSearch />
          </Link>
        </button>
        <div className="toolbar__bag">
          <button>
            <Link href="/cart">
              <FaShoppingBag />
            </Link>
          </button>
          <span>{cartItems.length}</span>
        </div>
        <div className="tool__user">
          <FaUser />
        </div>
      </div>
    </div>
  );
}
