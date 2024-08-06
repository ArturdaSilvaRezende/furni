const breads: string[] = [];
const cereals: string[] = [];
const fruits: string[] = [];
const vegetables: string[] = [];

for (let i = 1; i <= 16; i++) {
  breads.push(`/assets/images/breads/bread-${i}.png`);
  cereals.push(`/assets/images/cereals/cereal-${i}.png`);
  fruits.push(`/assets/images/fruit/fruit-${i}.png`);
  vegetables.push(`/assets/images/vegetables/vegetables-${i}.png`);
}

export type ShopItemType = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

type ShopListCategoryType = {
  category: {
    [key: string]: ShopItemType[];
  };
};

export const ShopList: ShopListCategoryType = {
  category: {
    breads: [
      {
        id: 1,
        name: "Cinnamon Rolls",
        price: 19.99,
        category: "Breads",
        image: `${breads[0]}`,
      },
      {
        id: 2,
        name: "Chocolate Chip",
        price: 19.99,
        category: "Breads",
        image: `${breads[1]}`,
      },
      {
        id: 3,
        name: "Cloud Bread",
        price: 19.99,
        category: "Breads",
        image: `${breads[2]}`,
      },
      {
        id: 4,
        name: "Twinkie Rolls",
        price: 19.99,
        category: "Breads",
        image: `${breads[3]}`,
      },
      {
        id: 5,
        name: "Zucchini Bread",
        price: 19.99,
        category: "Breads",
        image: `${breads[4]}`,
      },
      {
        id: 6,
        name: "Banana Bread",
        price: 19.99,
        category: "Breads",
        image: `${breads[5]}`,
      },
      {
        id: 7,
        name: "Carrot Cake",
        price: 19.99,
        category: "Breads",
        image: `${breads[6]}`,
      },
      {
        id: 8,
        name: "Blueberry Scones",
        price: 19.99,
        category: "Breads",
        image: `${breads[7]}`,
      },
      {
        id: 9,
        name: "Snickerdoodle",
        price: 19.99,
        category: "Breads",
        image: `${breads[8]}`,
      },
      {
        id: 10,
        name: "Crumble Top",
        price: 19.99,
        category: "Breads",
        image: `${breads[9]}`,
      },
      {
        id: 11,
        name: "Oatmeal Cream",
        price: 19.99,
        category: "Breads",
        image: `${breads[10]}`,
      },
      {
        id: 12,
        name: "Cozy Cottage",
        price: 19.99,
        category: "Breads",
        image: `${breads[11]}`,
      },
      {
        id: 13,
        name: "Grandma's Apple",
        price: 19.99,
        category: "Breads",
        image: `${breads[12]}`,
      },
      {
        id: 14,
        name: "Sunshine Bread",
        price: 19.99,
        category: "Breads",
        image: `${breads[13]}`,
      },
      {
        id: 15,
        name: "Cozy Cottage",
        price: 19.99,
        category: "Breads",
        image: `${breads[14]}`,
      },
      {
        id: 16,
        name: "Fruit Bread",
        price: 19.99,
        category: "Breads",
        image: `${breads[15]}`,
      },
    ],
    cereals: [
      {
        id: 1,
        name: "Wheat",
        price: 6.99,
        category: "Cereals",
        image: `${cereals[0]}`,
      },
      {
        id: 2,
        name: "Granola",
        price: 12.99,
        category: "Cereals",
        image: `${cereals[1]}`,
      },
      {
        id: 3,
        name: "Muesli",
        price: 19.99,
        category: "Cereals",
        image: `${cereals[2]}`,
      },
      {
        id: 4,
        name: "Cornflour",
        price: 4.99,
        category: "Cereals",
        image: `${cereals[3]}`,
      },
      {
        id: 5,
        name: "Oat",
        price: 5.99,
        category: "Cereals",
        image: `${cereals[4]}`,
      },
      {
        id: 6,
        name: "Oatmeal flour",
        price: 9.99,
        category: "Cereals",
        image: `${cereals[5]}`,
      },
      {
        id: 7,
        name: "Curau Corn",
        price: 11.99,
        category: "Cereals",
        image: `${cereals[6]}`,
      },
      {
        id: 8,
        name: "Cereal Choco Ball",
        price: 25.99,
        category: "Cereals",
        image: `${cereals[7]}`,
      },
      {
        id: 9,
        name: "Chickpea",
        price: 39.99,
        category: "Cereals",
        image: `${cereals[8]}`,
      },
      {
        id: 10,
        name: "Oat Cookie",
        price: 7.99,
        category: "Cereals",
        image: `${cereals[9]}`,
      },
      {
        id: 11,
        name: "Tapioca",
        price: 19.99,
        category: "Cereals",
        image: `${cereals[10]}`,
      },
      {
        id: 12,
        name: "Yogurt with Cereals",
        price: 29.99,
        category: "Cereals",
        image: `${cereals[11]}`,
      },
      {
        id: 13,
        name: "Crepioca",
        price: 9.99,
        category: "Cereals",
        image: `${cereals[12]}`,
      },
      {
        id: 14,
        name: "Brown sugar",
        price: 19.99,
        category: "Cereals",
        image: `${cereals[13]}`,
      },
      {
        id: 15,
        name: "Dry fruits",
        price: 29.99,
        category: "Cereals",
        image: `${cereals[14]}`,
      },
      {
        id: 16,
        name: "Red Fruit Juice",
        price: 29.99,
        category: "Cereals",
        image: `${cereals[15]}`,
      },
    ],
    fruits: [
      {
        id: 1,
        name: "Pineapple",
        price: 4.99,
        category: "Fruits",
        image: `${fruits[0]}`,
      },
      {
        id: 2,
        name: "Banana",
        price: 4.99,
        category: "Fruits",
        image: `${fruits[1]}`,
      },
      {
        id: 3,
        name: "Apple",
        price: 4.99,
        category: "Fruits",
        image: `${fruits[2]}`,
      },
      {
        id: 4,
        name: "Orange",
        price: 4.99,
        category: "Fruits",
        image: `${fruits[3]}`,
      },
      {
        id: 5,
        name: "Grape",
        price: 4.99,
        category: "Fruits",
        image: `${fruits[4]}`,
      },
      {
        id: 6,
        name: "Watermelon",
        price: 4.99,
        category: "Fruits",
        image: `${fruits[5]}`,
      },
      {
        id: 7,
        name: "Strawberry",
        price: 4.99,
        category: "Fruits",
        image: `${fruits[6]}`,
      },
      {
        id: 8,
        name: "Kiwi",
        price: 4.99,
        category: "Fruits",
        image: `${fruits[7]}`,
      },
      {
        id: 9,
        name: "Papaya",
        price: 4.99,
        category: "Fruits",
        image: `${fruits[8]}`,
      },
      {
        id: 10,
        name: "Avocado",
        price: 4.99,
        category: "Fruits",
        image: `${fruits[9]}`,
      },
      {
        id: 11,
        name: "Pear",
        price: 4.99,
        category: "Fruits",
        image: `${fruits[10]}`,
      },
      {
        id: 12,
        name: "Mango",
        price: 4.99,
        category: "Fruits",
        image: `${fruits[11]}`,
      },
      {
        id: 13,
        name: "Tangerine",
        price: 4.99,
        category: "Fruits",
        image: `${fruits[12]}`,
      },
      {
        id: 14,
        name: "Lemon",
        price: 4.99,
        category: "Fruits",
        image: `${fruits[13]}`,
      },
      {
        id: 15,
        name: "Cherry",
        price: 4.99,
        category: "Fruits",
        image: `${fruits[14]}`,
      },
      {
        id: 16,
        name: "Acerola",
        price: 4.99,
        category: "Fruits",
        image: `${fruits[15]}`,
      },
    ],
    vegetables: [
      {
        id: 1,
        name: "Tomato",
        price: 7.99,
        image: `${vegetables[0]}`,
        category: "Vegetables",
      },
      {
        id: 2,
        name: "Carrot",
        price: 7.99,
        image: `${vegetables[1]}`,
        category: "Vegetables",
      },
      {
        id: 3,
        name: "Kale",
        price: 7.99,
        image: `${vegetables[2]}`,
        category: "Vegetables",
      },
      {
        id: 4,
        name: "Cabbage",
        price: 7.99,
        image: `${vegetables[3]}`,
        category: "Vegetables",
      },
      {
        id: 5,
        name: "Radish",
        price: 7.99,
        image: `${vegetables[4]}`,
        category: "Vegetables",
      },
      {
        id: 6,
        name: "Beet",
        price: 7.99,
        image: `${vegetables[5]}`,
        category: "Vegetables",
      },
      {
        id: 7,
        name: "Pepper",
        price: 7.99,
        image: `${vegetables[6]}`,
        category: "Vegetables",
      },
      {
        id: 8,
        name: "Eggplant",
        price: 7.99,
        image: `${vegetables[7]}`,
        category: "Vegetables",
      },
      {
        id: 9,
        name: "Cauliflower",
        price: 7.99,
        image: `${vegetables[8]}`,
        category: "Vegetables",
      },
      {
        id: 10,
        name: "Sweet potato",
        price: 7.99,
        image: `${vegetables[9]}`,
        category: "Vegetables",
      },
      {
        id: 11,
        name: "Spinach",
        price: 7.99,
        image: `${vegetables[10]}`,
        category: "Vegetables",
      },
      {
        id: 12,
        name: "Broccoli",
        price: 7.99,
        image: `${vegetables[11]}`,
        category: "Vegetables",
      },
      {
        id: 13,
        name: "Zucchini",
        price: 7.99,
        image: `${vegetables[12]}`,
        category: "Vegetables",
      },
      {
        id: 14,
        name: "Aipo",
        price: 7.99,
        image: `${vegetables[13]}`,
        category: "Vegetables",
      },
      {
        id: 15,
        name: "Leek",
        price: 7.99,
        image: `${vegetables[14]}`,
        category: "Vegetables",
      },
      {
        id: 16,
        name: "Chayote",
        price: 7.99,
        image: `${vegetables[15]}`,
        category: "Vegetables",
      },
    ],
  },
};
