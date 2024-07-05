import { FaUsers } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { GiFruitBowl } from "react-icons/gi";
import * as C from "@/styles/home/counter";

export default function Counter() {
  return (
    <C.Counter>
      <div className="counter__container">
        <div className="counter__box">
          <span>
            <FaUsers />
          </span>
          <h2>SATISFIED CUSTOMERS</h2>
          <p>1963</p>
        </div>

        <div className="counter__box">
          <span>
            <FaGears />
          </span>
          <h2>QUALITY OF SERVICE</h2>
          <p>99%</p>
        </div>

        <div className="counter__box">
          <span>
            <PiCertificateFill />
          </span>
          <h2>QUALITY CERTIFICATES</h2>
          <p>33</p>
        </div>

        <div className="counter__box">
          <span>
            <GiFruitBowl />
          </span>
          <h2>AVAILABLE PRODUCTS</h2>
          <p>789</p>
        </div>
      </div>
    </C.Counter>
  );
}
