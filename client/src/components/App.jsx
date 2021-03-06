import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadImages from "./LoadImages";
import UploadPhotos from "./UploadPhotos";
import OtherRankings from "./OtherRankings";
import Nav from "./Nav";
import About from "./About";
import Home from "./Home";
import HistoricalRankings from "./HistoricalRankings";
import Test from "./Test";

function App() {
  const [images, setImages] = useState([
    {
      url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg",
      rating: 1500,
      index: 0,
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg",
      rating: 1500,
      index: 1,
    },
    {
      url: "https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg",
      rating: 1500,
      index: 2,
    },
    {
      url: "https://www.rover.com/blog/wp-content/uploads/2019/01/6342530545_45ec8696c8_b.jpg",
      rating: 1500,
      index: 3,
    },
    {
      url: "https://vetstreet.brightspotcdn.com/dims4/default/79f1bd2/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F83%2F9e8de0a7f411e0a0d50050568d634f%2Ffile%2FPembroke-Welsh-Corgi-3-645mk62711.jpg",
      rating: 1500,
      index: 4,
    },
    {
      url: "https://dogsbestlife.com/wp-content/uploads/2019/02/corgi.jpeg",
      rating: 1500,
      index: 5,
    },
    {
      url: "https://ktla.com/wp-content/uploads/sites/4/2020/05/GettyImages-1146390210.jpg",
      rating: 1500,
      index: 6,
    }]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/upload"
            render={() => <UploadPhotos setImages={setImages} />}
          />
          <Route
            path="/game"
            render={() => <LoadImages images={images} setImages={setImages} />}
          />
          <Route
            path="/rankings"
            render={() => <OtherRankings images={images} />}
          />
          <Route
            path="/historicalrankings"
            render={() => <HistoricalRankings />}
          />
          <Route path="/test" render={() => <Test />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

{ /* <div>
      <h1 className={css.header}>
        Puppy Battles
      </h1>
      {pageSelector === 0 && (
        <div>
          <UploadPhotos setImages={setImages} onClickGame={onClickGame} />
        </div>
      )}
      {pageSelector === 1 && (
        <div className={css.centeredBattle}>
          <LoadImages images={images} setImages={setImages} />
          <button type="button" className={css.myButton} onClick={onClickUpload}>Upload Photos</button>
          <button type="button" className={css.myButton} onClick={onClickRankings}>Current Rankings</button>
        </div>
      )}
      {pageSelector === 2 && (
        <div className={css.centeredScoreboard}>
          <button type="button" className={css.myButton} onClick={onClickGame}>Return</button>
          <OtherRankings images={images} />
        </div>
      )}
    </div> */ }
