import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import * as C from "@/styles/footer";

export default function FooterHeader() {
  return (
    <C.FooterHeader>
      <div className="header__title">
        <h1>Fruitables</h1>
        <h5>Fresh products</h5>
      </div>
      <div className="header__subscribe">
        <input
          type="email"
          placeholder="Your Email"
          name="footer_email"
          id="footer_email"
        />
        <button>Subscribe Now</button>
      </div>

      <ul className="header__social">
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaYoutube />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
      </ul>
    </C.FooterHeader>
  );
}
