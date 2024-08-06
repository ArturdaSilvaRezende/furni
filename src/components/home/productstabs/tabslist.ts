import { CartQuantityType } from "@/types/cartquantity";

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

export const ProductsList: CartQuantityType[] = [
  {
    id: 1,
    price: 4.99,
    category: "Fruits",
    image: `${TabImageFruit01}`,
    name: "Pineapple",
  },
  {
    id: 2,
    price: 7.99,
    category: "Vegetables",
    image: `${TabImageVegetables01}`,
    name: "Tomato",
  },
  {
    id: 3,
    price: 7.99,
    category: "Cereals",
    image: `${TabImageCereal01}`,
    name: "Aveia",
  },
  {
    id: 4,
    price: 19.99,
    category: "Breads",
    image: `${TagImageBread01}`,
    name: "Cinnamon Rolls",
  },
  {
    id: 5,
    price: 4.99,
    category: "Fruits",
    image: `${TabImageFruit02}`,
    name: "Banana",
  },
  {
    id: 6,
    price: 7.99,
    category: "Vegetables",
    image: `${TabImageVegetables02}`,
    name: "Carrot",
  },
  {
    id: 7,
    price: 19.99,
    category: "Cereals",
    image: `${TabImageCereal02}`,
    name: "Granola",
  },
  {
    id: 8,
    price: 19.99,
    category: "Breads",
    image: `${TagImageBread02}`,
    name: "Chocolate Chip",
  },
  {
    id: 9,
    price: 4.99,
    category: "Fruits",
    image: `${TabImageFruit03}`,
    name: "Apple",
  },
  {
    id: 10,
    price: 7.99,
    category: "Vegetables",
    image: `${TabImageVegetables03}`,
    name: "Cabbage",
  },
  {
    id: 11,
    price: 19.99,
    category: "Cereals",
    image: `${TabImageCereal03}`,
    name: "Muesli",
  },
  {
    id: 12,
    price: 19.99,
    category: "Breads",
    image: `${TagImageBread03}`,
    name: "Cloud Bread",
  },
];
