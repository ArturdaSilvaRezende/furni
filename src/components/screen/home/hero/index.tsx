import HeroCarousel from "./HeroCarousel";
import HeroDescription from "./HeroDescription";
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
