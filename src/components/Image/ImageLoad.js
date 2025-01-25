import React, { useState } from "react";

const ImageLoad = ({ imageName, altTxt }) => {
  const secondaryImage =
    "https://preview.free3d.com/img/2019/03/2397303548002961025/5i91fu6o.jpg";
  const defaultImage = require(`../../assets/img/image_not_available.png`);
  
  // Dynamically load the primary image
  let primaryImage;
  try {
    primaryImage = require(`../../assets/img/products/${imageName}`);
  } catch (error) {
    console.warn(`Image ${imageName} not found, falling back to default.`);
    primaryImage = defaultImage;
  }

  const [imgSrc, setImgSrc] = useState(primaryImage);

  // Handle image load error
  const handleError = () => {
    console.warn(`Failed to load image: ${imageName}. Falling back to secondary image.`);
    setImgSrc(secondaryImage);
  };

  return (
    <figure>
      <img
        src={imgSrc}
        alt={altTxt || "Image"}
        onError={handleError}
        style={{ width: "100%", height: "auto" }}
      />
    </figure>
  );
};

export default ImageLoad;
