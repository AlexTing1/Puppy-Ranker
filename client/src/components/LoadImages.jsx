import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import css from "./style.css";
import helpers from "./helper-functions";

function LoadImages({ images, setImages }) {
  function randomSelector(array) {
    const resultArray = [];
    let randIndex1 = Math.floor(Math.random() * (array.length));
    const randIndex2 = Math.floor(Math.random() * (array.length));
    while (randIndex1 === randIndex2) {
      randIndex1 = Math.floor(Math.random() * (array.length));
    }
    resultArray.push(array[randIndex1]);
    resultArray.push(array[randIndex2]);
    return resultArray;
  }

  const [selectArray, setSelectArray] = useState(randomSelector(images));

  function onClick(event) {
    console.log(event.target);

    const temp = images;
    if (event.target.getAttribute("index") === "0") {
      // winner is first picture
      const ratingSelected = selectArray[0];
      const ratingNotSelected = selectArray[1];
      const newRatings = helpers.algo(ratingSelected.rating, ratingNotSelected.rating);
      console.log(newRatings);
      temp[ratingSelected.index].rating = newRatings[0];
      temp[ratingNotSelected.index].rating = newRatings[1];
    } else {
      // winner is second picture
      const ratingSelected = selectArray[1];
      const ratingNotSelected = selectArray[0];
      const newRatings = helpers.algo(ratingSelected.rating, ratingNotSelected.rating);
      temp[ratingSelected.index].rating = newRatings[0];
      temp[ratingNotSelected.index].rating = newRatings[1];
    }
    setImages(temp);
    console.log(images);
    setSelectArray(randomSelector(temp));
  }


  return (
    <div>
      {selectArray.map((image, index) => (
        <img objindex={image.index} index={index} className={css.img} src={image.url} rating={image.rating} onClick={onClick} alt="" />
      ))}
    </div>
  );
}

LoadImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
  setImages: PropTypes.func.isRequired,
};

export default LoadImages;

// Look up css framework. Use MongoDB
