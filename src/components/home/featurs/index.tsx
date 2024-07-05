import { FaCarSide, FaUserShield, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import * as C from "@/styles/home/featurs";

export default function Featurs() {
  return (
    <C.Featurs>
      <div className="featurs__container">
        <div className="featurs__box">
          <div className="featurs__icon">
            <FaCarSide />
          </div>

          <h3>Free Shipping</h3>
          <p>Free on order over $300</p>
        </div>

        <div className="featurs__box">
          <div className="featurs__icon">
            <FaUserShield />
          </div>

          <h3>Security Payment</h3>
          <p>100% security payment</p>
        </div>

        <div className="featurs__box">
          <div className="featurs__icon">
            <HiOutlineArrowsRightLeft />
          </div>

          <h3>30 Day Return</h3>
          <p>30 day money guarantee</p>
        </div>

        <div className="featurs__box">
          <div className="featurs__icon">
            <FaPhoneAlt />
          </div>

          <h3>24/7 Support</h3>
          <p>Support every time fast</p>
        </div>
      </div>
    </C.Featurs>
  );
}
