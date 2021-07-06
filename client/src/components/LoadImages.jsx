import React from "react";
import PropTypes from "prop-types";
import css from "./style.css";

function LoadImages({ images }) {
  return (
    <div>
      {images.map((image) => (
        <img className={css.img} src={image} alt="" />
      ))}
    </div>
  );
}

LoadImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LoadImages;
