import React from "react";
import DATA from "../data/food.json";

function Food() {
  return (
    <section>
      <div className="wrapper">
        <div className="food_title">
          <h1>Pet Foodies</h1>
          <ul>	
            <li>ALL</li>
            <li>CAT</li>
            <li>DOG</li>
            <li>BIRD</li>
          </ul>
          <button>SHOP ALL &#x2192;</button>
        </div>
        <div className="food">
          {DATA.map((el) => (
            <div key={el.id} className="food_item">
              <img src={`./img/${el.image}`} alt="food item icon" />
              <div className="food_info">
                <h1>{el.title}</h1>
                <p>{el.rating}</p>
                <b>${el.price}</b>
                <div className="food_btns">
                  <button className="toCart">ADD TO CART</button>
                  <button className="fav">&#9829;</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Food;
