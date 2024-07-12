import React from 'react';
import DATA from '../data/clothes.json';

function Clothing() {
  return (
    <section>
      <div className="wrapper">
        <div className="clothing_title">
          <h1>Pet Clothing</h1>
          <button>SHOP ALL &#x2192;</button>
        </div>
        <div className="clothing">
          {DATA.map((el) => (
            <div key={el.id} className="clothing_item">
              <img src={`./img/${el.image}`} alt="clothing item icon" />
              <div className="clothing_info">
                <h1>{el.title}</h1>
                <p>{el.rating}</p>
                <b>${el.price}</b>
                <div className="clothing_btns">
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

export default Clothing;
