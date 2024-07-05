import Image from "next/image";
import BannerImage from "/public/assets/images/home/baner-1.png";
import * as C from "@/styles/home/banner";

export default function Banner() {
  return (
    <C.Banner>
      <div className="banner__container">
        <div className="banner__description">
          <h1>Fresh Exotic Fruits</h1>
          <h2>In Our Store</h2>
          <p>
            The generated Lorem Ipsum is therefore always free from repetition
            injected humour, or non-characteristic words etc.
          </p>
          <button>Buy</button>
        </div>
        <figure>
          <Image src={BannerImage} alt="Banner Home" width={500} height={500} />

          <figcaption>
            <p>5</p>
            <p>
              <span>99$</span>
              <span>KG</span>
            </p>
          </figcaption>
        </figure>
      </div>
    </C.Banner>
  );
}
