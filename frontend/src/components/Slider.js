import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import DATA from '../data/slider.json'

function Slider() {
  return (
    <article>
      <div className="wrapper">
        <div className="slider">
          <Carousel
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
						emulateTouch={true}
          >
            {DATA.map((item, index) => (
              <div key={index} className="slider_item">
                <div>
                  <img className="slider_img" src={item.imgSrc} alt={`slider img ${index + 1}`} />
                </div>
                <div className="slider_text">
                  <p>{item.text}</p>
                  <div>
                    {item.subText} <br />
                    <p>{item.subTextHighlight}</p>
                  </div>
                  <button>SHOP NOW &#x2192;</button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </article>
  );
}

export default Slider;
