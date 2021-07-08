import React from "react";
import PropTypes from "prop-types";
import db from "../../../database/index";

function SaveRankings({ images }) {
  function onClick() {
    db.save(images);
  }

  return (
    <div>
      <button type="button">Save Current Rankings</button>
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
