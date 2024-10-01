const testimonial: string[] = [];

for (let i = 1; i <= 10; i++) {
  testimonial.push(`/assets/images/clients/client-${i}.png`);
}

type testimonialType = {
  id: number;
  client: string;
  image: string;
};

export const testimonialList: testimonialType[] = [
  {
    id: 1,
    client: "Liam Anderson",
    image: `${testimonial[0]}`,
  },
  {
    id: 2,
    client: "Emma Miller",
    image: `${testimonial[1]}`,
  },
  {
    id: 3,
    client: "Olivia Johnson",
    image: `${testimonial[2]}`,
  },
  {
    id: 4,
    client: "Ava Wilson",
    image: `${testimonial[3]}`,
  },
  {
    id: 5,
    client: "Noah Brown",
    image: `${testimonial[4]}`,
  },
  {
    id: 6,
    client: "Sophia Williams",
    image: `${testimonial[5]}`,
  },
  {
    id: 7,
    client: "William Davis",
    image: `${testimonial[6]}`,
  },
  {
    id: 8,
    client: "Isabella Jones",
    image: `${testimonial[7]}`,
  },
  {
    id: 9,
    client: "Kelly Miller",
    image: `${testimonial[8]}`,
  },
  {
    id: 10,
    client: "Olivia Taylor",
    image: `${testimonial[9]}`,
  },
];
