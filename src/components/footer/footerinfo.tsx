import Link from "next/link";
import Image from "next/image";
import Payment from "/public/assets/images/home/payment.png";
import * as C from "@/styles/footer";

export default function FooterInfo() {
  return (
    <C.FooterInfo>
      <div className="info__box">
        <h3>Why People Like us!</h3>
        <p>
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the like Aldus PageMaker including of Lorem Ipsum.
        </p>
        <button>Read More</button>
      </div>
      <div className="info__box">
        <h3>Shop Info</h3>
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
      </div>
      <div className="info__box">
        <h3>Contact</h3>
        <ul>
          <li>Address: 1429 Netus Rd, NY 48247</li>
          <li>Email: fruitables@gmail.com</li>
          <li>Phone: +0123 4567 8910</li>
          <li>Payment Accepted</li>
        </ul>

        <Image src={Payment} alt="Footer Payment Image" />
      </div>
    </C.FooterInfo>
  );
}
