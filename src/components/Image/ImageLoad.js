import React, { useState } from "react";

const ImageLoad = ({ imageName, altTxt }) => {
  // const imagePath = require(`./assets/images/${imageName}.jpg`).default;
  // const imagePath = require(`./assets/images/${imageName}.jpg`).default;
  // const imagePath = require(`./assets/images/${imageName}.jpg`).default; ./../../assets/img/products/;
  // const imagePath = require(`./../../assets/img/products/${imageName}`);
  // const primaryImage = require(`./../../assets/img/products/${imageName}`);
  const secondaryImage = require(`./../../assets/img/products/1(3d).png`);

  const [imgSrc, setImgSrc] = useState(secondaryImage);
  const handleError = () => {
    setImgSrc('https://preview.free3d.com/img/2019/03/2397303548002961025/5i91fu6o.jpg');
  };

  return (
    <figure>
      <img src={imgSrc} alt={altTxt} onError={handleError} />
      {/* <img src={primaryImage} alt="Description of image" onError={(e) => { e.target.src = secondaryImage; }} /> */}
    </figure>
  );
};

export default ImageLoad;
