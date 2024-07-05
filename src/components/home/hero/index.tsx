import HeroCarousel from "./herocarousel";
import HeroDescription from "./herodescription";
import * as C from "@/styles/home/hero";

export default function Hero() {
  return (
    <C.Hero>
      <div className="hero__container">
        <HeroDescription />
        <HeroCarousel />
      </div>
    </C.Hero>
  );
}
