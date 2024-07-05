const ImageFruit01 = "/assets/images/fruit/fruit-3.png";
const ImageFruit02 = "/assets/images/fruit/fruit-7.png";
const ImageFruit03 = "/assets/images/fruit/fruit-11.png";
//
const ImageVegetable01 = "/assets/images/vegetables/vegetables-1.png";
const ImageVegetable02 = "/assets/images/vegetables/vegetables-6.png";
const ImageVegetable03 = "/assets/images/vegetables/vegetables-10.png";
//
const ImageCereal01 = "/assets/images/cereals/cereal-16.png";
const ImageCereal02 = "/assets/images/cereals/cereal-11.png";
const ImageCereal03 = "/assets/images/cereals/cereal-12.png";
//
const ImageBread01 = "/assets/images/breads/bread-13.png";
const ImageBread02 = "/assets/images/breads/bread-16.png";
const ImageBread03 = "/assets/images/breads/bread-14.png";

export type BestSellerType = {
  id: number;
  title: string;
  image: string;
};

export const BestSellerList: BestSellerType[] = [
  {
    id: 1,
    title: "Apple",
    image: `${ImageFruit01}`,
  },
  {
    id: 2,
    title: "Tomato",
    image: `${ImageVegetable01}`,
  },
  {
    id: 3,
    title: "Natural Fruit Juice",
    image: `${ImageCereal01}`,
  },
  {
    id: 4,
    title: "Sweet bread with candied fruits",
    image: `${ImageBread01}`,
  },
  {
    id: 5,
    title: "Strawberry",
    image: `${ImageFruit02}`,
  },
  {
    id: 6,
    title: "Beet",
    image: `${ImageVegetable02}`,
  },
  {
    id: 7,
    title: "Tapioca",
    image: `${ImageCereal02}`,
  },
  {
    id: 8,
    title: "Sweet bread with candied fruits",
    image: `${ImageBread02}`,
  },
  {
    id: 9,
    title: "Pear",
    image: `${ImageFruit03}`,
  },
  {
    id: 10,
    title: "Sweet potato",
    image: `${ImageVegetable03}`,
  },
  {
    id: 11,
    title: "Crepioca",
    image: `${ImageCereal03}`,
  },
  {
    id: 12,
    title: "Sweet bread with candied fruits",
    image: `${ImageBread03}`,
  },
];
