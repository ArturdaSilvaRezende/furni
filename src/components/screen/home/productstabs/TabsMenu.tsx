type TabMenu = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (props: string) => void;
};

export default function TabsMenu({
  categories,
  selectedCategory,
  setSelectedCategory,
}: TabMenu) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category}>
          <button
            className={category === selectedCategory ? "active__tabs" : ""}
            onClick={() => setSelectedCategory(category)}
            data-testid={category}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
