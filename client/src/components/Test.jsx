import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import css from "./style.css";

function Test() {
  const [data, setData] = useState([]);
  const [fileData, setFileData] = useState([]);
  const [newImages, setNewImages] = useState([]);
  function loadFile(event) {
    // const image = document.getElementById(`output${newImages.length}`);
    // image.src = URL.createObjectURL(event.target.files[0]);
    console.log(event.target.files[0]);
    const url = URL.createObjectURL(event.target.files[0]);
    const image = {
      rating: 1500,
      url,
      index: newImages.length,
    };
    console.log(event.target.files[0] instanceof Blob);
    setNewImages([...newImages, image]);
    setFileData([...fileData, event.target.files[0]]);
    console.log(newImages);
    console.log(fileData);
    // image.src = url;
    // console.log(url);
  }

  function onClickSubmit() {

  }

  useEffect(() => {
    console.log(newImages);
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

export default Test;
