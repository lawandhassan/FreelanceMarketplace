import React from "react";

const CategoryList = ({ activeCategory, setActiveCategory }) => {
  const listOfCategories = [
    "All",
    "Remote",
    "Community",
    "On-Site",
    "Education",
    
  ];

  const chipStyles = {
    chipNotActiveStyle:
      "border-2 border-button px-2 py-1 text-md rounded-full cursor-pointer",
    chipActiveStyle:
      "border-2 bg-button text-white px-2 py-1 text-md rounded-full cursor-pointer",
  };

  return (
    <div>
      <div className="flex justify-center gap-2 my-8 flex-wrap">
        {listOfCategories.map((category, index) => {
          return (
            <span
              key={index}
              className={
                category === activeCategory
                  ? chipStyles.chipActiveStyle
                  : chipStyles.chipNotActiveStyle
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export { CategoryList };
