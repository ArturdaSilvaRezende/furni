const HeroImg01 = "/assets/images/carousel/hero-img-1.png";
const HeroImg02 = "/assets/images/carousel/hero-img-2.png";
const HeroImg03 = "/assets/images/carousel/hero-img-3.png";
const HeroImg04 = "/assets/images/carousel/hero-img-4.png";
const HeroImg05 = "/assets/images/carousel/hero-img-5.png";
const HeroImg06 = "/assets/images/carousel/hero-img-6.png";

type Hero = {
  id: number;
  imgPath: string;
  alt: string;
};

export const HeroList: Hero[] = [
  {
    id: 1,
    imgPath: `${HeroImg01}`,
    alt: "Hero Image 01",
  },
  {
    id: 2,
    imgPath: `${HeroImg02}`,
    alt: "Hero Image 02",
  },
  {
    id: 3,
    imgPath: `${HeroImg03}`,
    alt: "Hero Image 03",
  },
  {
    id: 4,
    imgPath: `${HeroImg04}`,
    alt: "Hero Image 04",
  },
  {
    id: 5,
    imgPath: `${HeroImg05}`,
    alt: "Hero Image 05",
  },
  {
    id: 6,
    imgPath: `${HeroImg06}`,
    alt: "Hero Image 06",
  },
];
