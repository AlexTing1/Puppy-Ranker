import React from "react";
import PropTypes from "prop-types";
import css from "./style.css";

function DisplayRankings({ images }) {
  function sortImages() {
    const sortedImages = images.sort((a, b) => b.rating - a.rating);
    return sortedImages;
  }

  const sortedImages = sortImages(images);

  return (
    <div>
      <table>
        <tr>
          <th>Ranking</th>
          <th>Image</th>
          <th>Elo Rating</th>
        </tr>
        {sortedImages.map((image, index) => (
          <tr>
            <td>
              {index + 1}
            </td>
            <td>
              <img objindex={image.index} index={index} className={css.img} src={image.url} rating={image.rating} alt="" />
            </td>
            <td>{image.rating}</td>
          </tr>
        ))}
      </table>

    </div>
  );
}

DisplayRankings.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};

export default DisplayRankings;
