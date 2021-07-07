import React, { useState, useEffect } from "react";
import LoadImages from "./LoadImages";
import helpers from "./helper-functions";

function App() {
  const [images, setImages] = useState([
    {
      url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg",
      rating: 1500,
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg",
      rating: 1600,
    },
    {
      url: "https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg",
      rating: 1700,
    },
    {
      url: "https://www.rover.com/blog/wp-content/uploads/2019/01/6342530545_45ec8696c8_b.jpg",
      rating: 1800,
    },
    {
      url: "https://vetstreet.brightspotcdn.com/dims4/default/79f1bd2/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F83%2F9e8de0a7f411e0a0d50050568d634f%2Ffile%2FPembroke-Welsh-Corgi-3-645mk62711.jpg",
      rating: 1900,
    },
    {
      url: "https://dogsbestlife.com/wp-content/uploads/2019/02/corgi.jpeg",
      rating: 2000,
    },
    {
      url: "https://ktla.com/wp-content/uploads/sites/4/2020/05/GettyImages-1146390210.jpg",
      rating: 2100,
    }]);
  const [rating, setRating] = useState(1000);
  useEffect(() => {
    //console.log("this is images: ", images);
    console.log(helpers.algo(1200, 1000, 1));
    console.log(helpers.algo(1200, 1000, 2));
  });

  // console.log("this is rating in app: ", rating);
  return (
    <div>
      <LoadImages images={images} setRating={setRating} setImages={setImages} />
    </div>
  );
}

export default App;
