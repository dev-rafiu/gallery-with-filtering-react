import React, { useEffect } from "react";

function FilterButtons({ categories, filterItems }) {
  useEffect(() => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        filterBtns.forEach((btn) => {
          btn.classList.remove("active-btn");
          e.target.classList.add("active-btn");
        });
      });
    });
  });

  return (
    <div className="filter-btns">
      {categories.map((category) => {
        return (
          <button
            key={category}
            onClick={() => filterItems(category)}
            className={`btn filter-btn ${category === "all" && "active-btn"}`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default FilterButtons;
