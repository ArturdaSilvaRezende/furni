import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function HeaderPolicy() {
  return (
    <div className="header__polity">
      <div className="contact">
        <p>
          <span>
            <FaMapMarkerAlt aria-label="map marker" />
          </span>
          <span>123 Street, New York</span>
        </p>
        <p>
          <span>
            <IoMdMail aria-label="email icon" />
          </span>
          <span>fruitables@gmail.com</span>
        </p>
      </div>

      <div className="policy">
        <p>
          <span>Privacy Policy </span>/ <span> Terms of Use </span> /
          <span> Sales and Refunds</span>
        </p>
      </div>
    </div>
  );
}
