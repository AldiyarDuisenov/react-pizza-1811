//import React, { useState } from "react";

function Categories({ value, onClickAction }) {
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
      <p>
        back-end реализован с помощь mock-api, и из-за его некорректной работы
        не работает компонет categories, рекомендую посмотреть запросы в
        network. Mockapi: https://655355e15449cfda0f2e8476.mockapi.io/items
      </p>
      <ul>
        {categories.map((category, i) => (
          <li
            key={category}
            onClick={() => onClickAction(i)}
            className={value === i ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
