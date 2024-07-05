import Image from "next/image";
import Featur01 from "/public/assets/images/home/featur-1.jpg";
import Featur02 from "/public/assets/images/home/featur-2.jpg";
import Featur03 from "/public/assets/images/home/featur-3.jpg";
import * as C from "@/styles/home/Services";

export default function Services() {
  return (
    <C.Services>
      <div className="services__container">
        <figure>
          <Image src={Featur01} alt="Featu 01" width={300} height={300} />
          <figcaption>
            <div className="services__description">
              <h3>Fresh Apples</h3>
              <h2>20% OFF</h2>
            </div>
          </figcaption>
        </figure>
        <figure>
          <Image src={Featur02} alt="Featu 02" width={300} height={300} />
          <figcaption>
            <div className="services__description">
              <h3>Tasty Fruits</h3>
              <h2>Free delivery</h2>
            </div>
          </figcaption>
        </figure>
        <figure>
          <Image src={Featur03} alt="Featu 03" width={300} height={300} />
          <figcaption>
            <div className="services__description">
              <h3>Exotic Vegitable</h3>
              <h2>Discount 30$</h2>
            </div>
          </figcaption>
        </figure>
      </div>
    </C.Services>
  );
}
