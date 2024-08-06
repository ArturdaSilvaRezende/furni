import { CartQuantityType } from "@/types/cartquantity";

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

export const BestSellerList: CartQuantityType[] = [
  {
    id: 1,
    price: 4.99,
    category: "Fruits",
    name: "Apple",
    image: `${ImageFruit01}`,
  },
  {
    id: 2,
    price: 7.99,
    category: "Vegetables",
    name: "Tomato",
    image: `${ImageVegetable01}`,
  },
  {
    id: 3,
    price: 29.99,
    category: "Cereals",
    name: "Natural Fruit Juice",
    image: `${ImageCereal01}`,
  },
  {
    id: 4,
    price: 19.99,
    category: "Breads",
    name: "Grandma's Apple",
    image: `${ImageBread01}`,
  },
  {
    id: 5,
    price: 4.99,
    category: "Fruits",
    name: "Strawberry",
    image: `${ImageFruit02}`,
  },
  {
    id: 6,
    price: 7.99,
    category: "Vegetables",
    name: "Beet",
    image: `${ImageVegetable02}`,
  },
  {
    id: 7,
    price: 19.99,
    category: "Cereals",
    name: "Tapioca",
    image: `${ImageCereal02}`,
  },
  {
    id: 8,
    price: 19.99,
    category: "Breads",
    name: "Fruit Bread",
    image: `${ImageBread02}`,
  },
  {
    id: 9,
    price: 4.99,
    category: "Fruits",
    name: "Pear",
    image: `${ImageFruit03}`,
  },
  {
    id: 10,
    price: 7.99,
    category: "Vegetables",
    name: "Sweet potato",
    image: `${ImageVegetable03}`,
  },
  {
    id: 11,
    price: 9.99,
    category: "Cereals",
    name: "Crepioca",
    image: `${ImageCereal03}`,
  },
  {
    id: 12,
    price: 19.99,
    category: "Breads",
    name: "Sunshine Bread",
    image: `${ImageBread03}`,
  },
];
