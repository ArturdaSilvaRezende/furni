const TabImageFruit01 = "/assets/images/fruit/fruit-1.png";
const TabImageFruit02 = "/assets/images/fruit/fruit-2.png";
const TabImageFruit03 = "/assets/images/fruit/fruit-3.png";
//
const TabImageVegetables01 = "/assets/images/vegetables/vegetables-1.png";
const TabImageVegetables02 = "/assets/images/vegetables/vegetables-2.png";
const TabImageVegetables03 = "/assets/images/vegetables/vegetables-3.png";
//
const TabImageCereal01 = "/assets/images/cereals/cereal-1.png";
const TabImageCereal02 = "/assets/images/cereals/cereal-2.png";
const TabImageCereal03 = "/assets/images/cereals/cereal-3.png";
//
const TagImageBread01 = "/assets/images/breads/bread-1.png";
const TagImageBread02 = "/assets/images/breads/bread-2.png";
const TagImageBread03 = "/assets/images/breads/bread-3.png";

export type Products = {
  id: number;
  typeTab: string;
  image: string;
  title: string;
};

export const ProductsList: Products[] = [
  {
    id: 1,
    typeTab: "Fruits",
    image: `${TabImageFruit01}`,
    title: "Pineapple",
  },
  {
    id: 2,
    typeTab: "Vegetables",
    image: `${TabImageVegetables01}`,
    title: "Tomato",
  },
  {
    id: 3,
    typeTab: "Cereals",
    image: `${TabImageCereal01}`,
    title: "Aveia",
  },
  {
    id: 4,
    typeTab: "Breads",
    image: `${TagImageBread01}`,
    title: "Fruit Bread",
  },
  {
    id: 5,
    typeTab: "Fruits",
    image: `${TabImageFruit02}`,
    title: "Banana",
  },
  {
    id: 6,
    typeTab: "Vegetables",
    image: `${TabImageVegetables02}`,
    title: "Carrot",
  },
  {
    id: 7,
    typeTab: "Cereals",
    image: `${TabImageCereal02}`,
    title: "Granola",
  },
  {
    id: 8,
    typeTab: "Breads",
    image: `${TagImageBread02}`,
    title: "Fruit Bread",
  },
  {
    id: 9,
    typeTab: "Fruits",
    image: `${TabImageFruit03}`,
    title: "Apple",
  },
  {
    id: 10,
    typeTab: "Vegetables",
    image: `${TabImageVegetables03}`,
    title: "Cabbage",
  },
  {
    id: 11,
    typeTab: "Cereals",
    image: `${TabImageCereal03}`,
    title: "Muesli",
  },
  {
    id: 12,
    typeTab: "Breads",
    image: `${TagImageBread03}`,
    title: "Fruit Bread",
  },
];
