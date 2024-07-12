import React from "react";

const categoryData = [
  { imgSrc: "./img/svg/categories1.svg", category: "Accessories" },
  { imgSrc: "./img/svg/categories2.svg", category: "Bird Shop" },
  { imgSrc: "./img/svg/categories3.svg", category: "Dog Shop" },
  { imgSrc: "./img/svg/categories4.svg", category: "Fish Shop" },
  { imgSrc: "./img/svg/categories5.svg", category: "Cat Shop" },
];

function Categories() {
  return (
    <section>
      <div className="wrapper">
        <div className="category">
          {categoryData.map((item, index) => (
            <div key={index}>
              <img src={item.imgSrc} alt={`category ico ${index + 1}`} />
              <p>{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
