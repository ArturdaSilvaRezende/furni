import { CartQuantityType } from "@/types/cartquantity";

const vegetables: string[] = [];

for (let i = 1; i <= 16; i++) {
  vegetables.push(`/assets/images/vegetables/vegetables-${i}.png`);
}

export const VegetablesList: CartQuantityType[] = [
  {
    id: 1,
    price: 7.99,
    category: "Vegetables",
    name: "Tomato",
    image: `${vegetables[0]}`,
  },
  {
    id: 2,
    price: 7.99,
    category: "Vegetables",
    name: "Carrot",
    image: `${vegetables[1]}`,
  },
  {
    id: 3,
    price: 7.99,
    category: "Vegetables",
    name: "Kale",
    image: `${vegetables[2]}`,
  },
  {
    id: 4,
    price: 7.99,
    category: "Vegetables",
    name: "Cabbage",
    image: `${vegetables[3]}`,
  },
  {
    id: 5,
    price: 7.99,
    category: "Vegetables",
    name: "Radish",
    image: `${vegetables[4]}`,
  },
  {
    id: 6,
    price: 7.99,
    category: "Vegetables",
    name: "Beet",
    image: `${vegetables[5]}`,
  },
  {
    id: 7,
    price: 7.99,
    category: "Vegetables",
    name: "Pepper",
    image: `${vegetables[6]}`,
  },
  {
    id: 8,
    price: 7.99,
    category: "Vegetables",
    name: "Eggplant",
    image: `${vegetables[7]}`,
  },
  {
    id: 9,
    price: 7.99,
    category: "Vegetables",
    name: "Cauliflower",
    image: `${vegetables[8]}`,
  },
  {
    id: 10,
    price: 7.99,
    category: "Vegetables",
    name: "Sweet potato",
    image: `${vegetables[9]}`,
  },
  {
    id: 11,
    price: 7.99,
    category: "Vegetables",
    name: "Spinach",
    image: `${vegetables[10]}`,
  },
  {
    id: 12,
    price: 7.99,
    category: "Vegetables",
    name: "Broccoli",
    image: `${vegetables[11]}`,
  },
  {
    id: 13,
    price: 7.99,
    category: "Vegetables",
    name: "Zucchini",
    image: `${vegetables[12]}`,
  },
  {
    id: 14,
    price: 7.99,
    category: "Vegetables",
    name: "Aipo",
    image: `${vegetables[13]}`,
  },
  {
    id: 15,
    price: 7.99,
    category: "Vegetables",
    name: "Leek",
    image: `${vegetables[14]}`,
  },
  {
    id: 16,
    price: 7.99,
    category: "Vegetables",
    name: "Chayote",
    image: `${vegetables[15]}`,
  },
];
