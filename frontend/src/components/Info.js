import React from 'react';

const infoData = [
  {
    imgSrc: "./img/svg/info1.svg",
    title: "Free Delivery",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgSrc: "./img/svg/info2.svg",
    title: "100% Secure Payment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgSrc: "./img/svg/info3.svg",
    title: "Daily Offers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgSrc: "./img/svg/info4.svg",
    title: "Quality Guarantee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function Info() {
  return (
    <section>
      <div className="wrapper">
        <div className="infos">
          {infoData.map((info, index) => (
            <div key={index} className='info'>
              <img src={info.imgSrc} alt={`info icon ${index + 1}`} />
              <h2>{info.title}</h2>
              <p>{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Info;
