import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import * as C from "@/styles/header";

export default function HeaderPolicy() {
  return (
    <C.HeaderPolicy>
      <div className="contact">
        <p>
          <span>
            <FaMapMarkerAlt />
          </span>
          <span>123 Street, New York</span>
        </p>
        <p>
          <span>
            <IoMdMail />
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
    </C.HeaderPolicy>
  );
}
