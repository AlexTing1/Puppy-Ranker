import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import css from "./style.css";

function UploadPhotos({ images, setImages }) {
  const [newImages, setNewImages] = useState([]);
  const defaultImages = images;
  function loadFile(event) {
    // const image = document.getElementById(`output${newImages.length}`);
    // image.src = URL.createObjectURL(event.target.files[0]);
    console.log(event.target.files);
    const url = URL.createObjectURL(event.target.files[0]);
    const image = {
      rating: 1500,
      url,
      index: newImages.length,
    };
    setNewImages([...newImages, image]);
    // image.src = url;
    console.log(url);
  }

  function onClickSubmit() {
    setImages(newImages);
  }

  useEffect(() => {
    console.log(newImages);
    console.log(defaultImages);
  });

  return (
    <div className={css.centered}>
      <form action="/action_page.php">
        <input type="file" id="myFile" accept="image/*" name="image" onChange={loadFile} />
        {newImages.map((image, index) => (
          <img id="output" width="300" src={image.url} alt={index} />
        ))}
      </form>
      <button type="button" className={css.myButton} onClick={onClickSubmit}>Submit</button>
      <Link to="/game">
        <button type="button" className={css.myButton}>Default</button>
      </Link>

    </div>
  );
}

UploadPhotos.propTypes = {
  setImages: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};

export default UploadPhotos;
