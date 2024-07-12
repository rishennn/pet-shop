import React from 'react';

const animalPicData = [
  "./img/animalPic1.png",
  "./img/animalPic2.png",
  "./img/animalPic3.png",
  "./img/animalPic4.png",
  "./img/animalPic5.png",
  "./img/animalPic6.png",
];

function AnimalPics() {
  return (
    <div>
      <div className="newWrap">
        <div className="animalPics">
          {animalPicData.map((pic, index) => (
            <img key={index} src={pic} alt={`pictureeee of animal ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimalPics;
