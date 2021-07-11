import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import DisplayRankings from "./DisplayRankings";
import SaveRankings from "./SaveRankings";
import css from "./style.css";

function OtherRankings({ images }) {
  const [rankingNames, setRankingNames] = useState([]);
  const [displayNameCounter, setDisplayNameCounter] = useState(0);
  const [displayImages, setDisplayImages] = useState(images);

  function onButtonClick() {
    if (displayNameCounter === 0) {
      setDisplayNameCounter(1);
    } else {
      setDisplayNameCounter(0);
    }
  }

  function onNameClick(event) {
    const name = event.target.innerHTML;
    axios.get(`/rankings/${name}`)
      .then((resp) => {
        setDisplayImages(resp.data.results);
      });
  }

  function returnCurrentRankingsClick() {
    setDisplayImages(images);
  }

  useEffect(() => {
    axios.get("/rankings")
      .then((rankingsData) => {
        setRankingNames(rankingsData.data);
      });
  }, [rankingNames]);

  return (
    <div className={css.centeredScoreboard}>
      <button type="button" className={css.myButton} onClick={onButtonClick}>Previous Rankings</button>
      {displayNameCounter === 1 && (rankingNames.map((image) => (
        <div>
          <span onClick={onNameClick} className={css.previousText} >{image.name}</span>
        </div>
      )))}
      {displayNameCounter === 1 && (
        <button type="button" className={css.myButton} onClick={returnCurrentRankingsClick}>Current Rankings</button>
      )}
      <SaveRankings images={images} />
      <DisplayRankings images={displayImages} />
    </div>
  );
}

OtherRankings.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};

export default OtherRankings;
