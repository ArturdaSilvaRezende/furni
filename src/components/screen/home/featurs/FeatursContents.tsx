import { FaCarSide, FaUserShield, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";

export default function FeatursContents() {
  return (
    <div className="featurs__container">
      <div className="featurs__box">
        <div className="featurs__icon" data-testid="free-shipping">
          <FaCarSide data-testid="car-icon" />
        </div>

        <h3>Free Shipping</h3>
        <p>Free on order over $300</p>
      </div>

      <div className="featurs__box">
        <div className="featurs__icon" data-testid="security-payment">
          <FaUserShield data-testid="user-shield-icon" />
        </div>

        <h3>Security Payment</h3>
        <p>100% security payment</p>
      </div>

      <div className="featurs__box">
        <div className="featurs__icon" data-testid="money-guarantee">
          <HiOutlineArrowsRightLeft data-testid="outline-arrows-icon" />
        </div>

        <h3>30 Day Return</h3>
        <p>30 day money guarantee</p>
      </div>

      <div className="featurs__box">
        <div className="featurs__icon" data-testid="support">
          <FaPhoneAlt data-testid="phone-icon" />
        </div>

        <h3>24/7 Support</h3>
        <p>Support every time fast</p>
      </div>
    </div>
  );
}
