import React from "react";
import DATA from "../data/food.json";

function Bestsellers() {
  const bestsellersData = DATA.slice(0, 4);

  return (
    <section>
      <div className="wrapper">
        <div className="bestsellers_title">
          <h1>Best Selling Products</h1>
          <button>SHOP NOW &#x2192;</button>
        </div>
        <div className="bestsellers">
          {bestsellersData.map((el) => (
            <div key={el.id} className="bestseller">
              <img src={`./img/${el.image}`} alt={`bestsellers item ${el.id} icon`} />
              <div className="bestsellers_info">
                <h1>{el.title}</h1>
                <p>{el.rating}</p>
                <b>${el.price}</b>
                <div className="bestsellers_btns">
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

export default Bestsellers;
