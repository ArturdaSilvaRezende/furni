const vegetables: string[] = [];

for (let i = 1; i <= 16; i++) {
  vegetables.push(`/assets/images/vegetables/vegetables-${i}.png`);
}

export type VegetablesType = {
  id: number;
  title: string;
  imagePath: string;
};

export const VegetablesList: VegetablesType[] = [
  {
    id: 1,
    title: "Tomato",
    imagePath: `${vegetables[0]}`,
  },
  {
    id: 2,
    title: "Carrot",
    imagePath: `${vegetables[1]}`,
  },
  {
    id: 3,
    title: "Kale",
    imagePath: `${vegetables[2]}`,
  },
  {
    id: 4,
    title: "Cabbage",
    imagePath: `${vegetables[3]}`,
  },
  {
    id: 5,
    title: "Radish",
    imagePath: `${vegetables[4]}`,
  },
  {
    id: 6,
    title: "Beet",
    imagePath: `${vegetables[5]}`,
  },
  {
    id: 7,
    title: "Pepper",
    imagePath: `${vegetables[6]}`,
  },
  {
    id: 8,
    title: "Eggplant",
    imagePath: `${vegetables[7]}`,
  },
  {
    id: 9,
    title: "Cauliflower",
    imagePath: `${vegetables[8]}`,
  },
  {
    id: 10,
    title: "Sweet potato",
    imagePath: `${vegetables[9]}`,
  },
  {
    id: 11,
    title: "Spinach",
    imagePath: `${vegetables[10]}`,
  },
  {
    id: 12,
    title: "Broccoli",
    imagePath: `${vegetables[11]}`,
  },
  {
    id: 13,
    title: "Zucchini",
    imagePath: `${vegetables[12]}`,
  },
  {
    id: 14,
    title: "Aipo",
    imagePath: `${vegetables[13]}`,
  },
  {
    id: 15,
    title: "Leek",
    imagePath: `${vegetables[14]}`,
  },
  {
    id: 16,
    title: "Chayote",
    imagePath: `${vegetables[15]}`,
  },
];
