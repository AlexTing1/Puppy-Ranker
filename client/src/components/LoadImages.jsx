import React from "react";
import PropTypes from "prop-types";
import css from "./style.css";
import helpers from "./helper-functions";

function LoadImages({ images, setImages }) {
  function onClick(event) {
    //console.log(images);
    //console.log(event.target.getAttribute("index"));
    const rating = parseInt(event.target.getAttribute("rating"), 10);
    const temp = images;
    temp[parseInt(event.target.getAttribute("index"), 10)].rating = rating + 20;
    //console.log("this is temp: ", temp);
    setImages(temp);
    console.log(images);
  }

  return (
    <div>
      {images.map((image, index) => (
        <img index={index} className={css.img} src={image.url} rating={image.rating} onClick={onClick} alt="" />
      ))}
    </div>
  );
}

LoadImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  setImages: PropTypes.func.isRequired,
};

export default LoadImages;

// Look up css framework. Use MongoDB
