import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import PropTypes from "prop-types";
import css from "./style.css";
import LoadImages from "./LoadImages";

function UploadPhotos({ images, setImages, onClickGame }) {
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
    // onClickGame();
  }

  function onClickDefault() {
    onClickGame();
  }

  useEffect(() => {
    console.log(newImages);
    console.log(defaultImages);
  });

  return (
    <Router>
      <div className={css.centered}>
        <form action="/action_page.php">
          <input type="file" id="myFile" accept="image/*" name="image" onChange={loadFile} />
          {newImages.map((image, index) => (
            <img id="output" width="300" src={image.url} alt={index} />
          ))}
        </form>
        <Link to="/loadimages">
          <button type="button" className={css.myButton} onClick={onClickSubmit}>Submit</button>
        </Link>
        <Link to="/loadimagesdefault">
          <button type="button" className={css.myButton}>Default</button>
        </Link>
        <Switch>
          <Route path="/loadimages">
            <LoadImages images={images} setImages={setImages} />
          </Route>
          <Route path="/loadimagesdefault">
            <LoadImages images={defaultImages} setImages={setImages} />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

UploadPhotos.propTypes = {
  setImages: PropTypes.func.isRequired,
  onClickGame: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};

export default UploadPhotos;
