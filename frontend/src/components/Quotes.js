import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const quotesData = [
  {
    imgSrc: './img/svg/double-quotes-svgrepo-com.svg',
    text: 'At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.',
    author: '- Joshima Lin'
  },
  {
    imgSrc: './img/svg/double-quotes-svgrepo-com.svg',
    text: 'At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.',
    author: '- Joshima Lin'
  },
  {
    imgSrc: './img/svg/double-quotes-svgrepo-com.svg',
    text: 'At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.',
    author: '- Joshima Lin'
  },
];

function Quotes() {
  return (
    <section>
      <div className="wrapper">
        <div className="quotes">
          <Carousel
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
						emulateTouch={true}
          >
            {quotesData.map((quote, index) => (
              <div key={index} className='quote'>
                <img src={quote.imgSrc} alt={`quote ${index + 1}`} />
                <h3>{quote.text}</h3>
                <p>{quote.author}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Quotes;
