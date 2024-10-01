import Image from "next/image";
import Featur01 from "/public/assets/images/home/featur-1.jpg";
import Featur02 from "/public/assets/images/home/featur-2.jpg";
import Featur03 from "/public/assets/images/home/featur-3.jpg";

import React from "react";

export default function ServicesContainer() {
  return (
    <div className="services__container">
      <figure>
        <Image
          src={Featur01}
          alt="Featur Fresh Apples"
          width={300}
          height={300}
        />
        <figcaption>
          <div className="services__description">
            <h3>Fresh Apples</h3>
            <h2>20% OFF</h2>
          </div>
        </figcaption>
      </figure>
      <figure>
        <Image
          src={Featur02}
          alt="Featur Tasty Fruits"
          width={300}
          height={300}
        />
        <figcaption>
          <div className="services__description">
            <h3>Tasty Fruits</h3>
            <h2>Free delivery</h2>
          </div>
        </figcaption>
      </figure>
      <figure>
        <Image
          src={Featur03}
          alt="Featur Exotic Vegitable"
          width={300}
          height={300}
        />
        <figcaption>
          <div className="services__description">
            <h3>Exotic Vegitable</h3>
            <h2>Discount 30$</h2>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
