import React, { useState } from "react";
import DATA from "../../data/food.json";

function ShopProducts() {
  const [sortOpen, setSortOpen] = useState(false);
  const handleSortClick = () => {
    setSortOpen(!sortOpen);
  };
  return (
    <div className="shopProducts">
      <div className="shopFilter">
        <p>Showing 1–9 of 55 results</p>
        <div className="shopSort">
          <button onClick={handleSortClick} className="shop_sort_btn">
            Default sorting
          </button>
        </div>
      </div>
      <div className="products">
        {DATA.map((el) => (
          <div key={el.id} className="shop_item">
              <img src={`./img/${el.image}`} alt="food item icon" />
            <div className="shop_info">
              <h1>{el.title}</h1>
              <p>{el.rating}</p>
              <b>${el.price}</b>
              <div className="shop_btns">
                <button className="toCart">ADD TO CART</button>
                <button className="fav">&#9829;</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopProducts;
