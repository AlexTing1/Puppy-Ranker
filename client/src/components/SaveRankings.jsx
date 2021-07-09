import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import css from "./style.css";

function SaveRankings({ images }) {
  const [tracker, setTracker] = useState(0);
  const [nameInput, setNameInput] = useState("");

  function changeTracker() {
    setTracker(1);
  }

  function onChange(event) {
    setNameInput(event.target.value);
  }

  function onClick() {
    const data = {
      name: nameInput,
      results: images,
    };
    setTracker(0);
    alert("Rankings have been saved");
    axios.post("/rankings", data);
  }

  return (
    <div>
      <button type="button" className={css.myButton} onClick={changeTracker}>Save Current Rankings</button>
      {tracker === 1 && (
        <div>
          <input type="text" onChange={onChange} />
          <button type="button" className={css.myButton} onClick={onClick}>Submit</button>
        </div>
      )}
    </div>
  );
}

SaveRankings.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};

export default SaveRankings;
