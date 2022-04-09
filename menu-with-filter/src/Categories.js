import React from "react";

const Categories = ({ filterItems, items, unfilterItems }) => {
  const categories = items.map((item) => item.category);
  const newCategories = categories.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={unfilterItems}>
        All categories
      </button>
      {newCategories.map((category) => {
        return (
          <button className="filter-btn" onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
