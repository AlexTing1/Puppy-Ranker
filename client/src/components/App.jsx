import React, { useState } from "react";
import LoadImages from "./LoadImages";
import DisplayRankings from "./DisplayRankings";

function App() {
  const [images, setImages] = useState([
    {
      url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg",
      rating: 1500,
      index: 0,
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg",
      rating: 1600,
      index: 1,
    },
    {
      url: "https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg",
      rating: 1700,
      index: 2,
    },
    {
      url: "https://www.rover.com/blog/wp-content/uploads/2019/01/6342530545_45ec8696c8_b.jpg",
      rating: 1800,
      index: 3,
    },
    {
      url: "https://vetstreet.brightspotcdn.com/dims4/default/79f1bd2/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F83%2F9e8de0a7f411e0a0d50050568d634f%2Ffile%2FPembroke-Welsh-Corgi-3-645mk62711.jpg",
      rating: 1900,
      index: 4,
    },
    {
      url: "https://dogsbestlife.com/wp-content/uploads/2019/02/corgi.jpeg",
      rating: 2000,
      index: 5,
    },
    {
      url: "https://ktla.com/wp-content/uploads/sites/4/2020/05/GettyImages-1146390210.jpg",
      rating: 2100,
      index: 6,
    }]);

  const [pageSelector, setPageSelector] = useState(0);

  function onClick() {
    if (pageSelector === 0) {
      setPageSelector(1);
    } else {
      setPageSelector(0);
    }
  }
  return (
    <div>
      {pageSelector === 0 && (
        <div>
          <LoadImages images={images} setImages={setImages} />
          <button type="button" onClick={onClick}>Current Rankings</button>
        </div>
      )}
      {pageSelector === 1 && (
        <div>
          <button type="button" onClick={onClick}>Return</button>
          {/* <SaveRankings images={images} /> */}
          <DisplayRankings images={images} />
        </div>
      )}
    </div>
  );
}

export default App;
