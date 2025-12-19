import { useState } from "react";

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={category}
            className={activeIndex === i ? "active" : ""}
            onClick={() => setActiveIndex(i)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
