import React from "react";
import { Link } from "react-router-dom";
import css from "./style.css";

function Home() {
  return (
    <div className={css.centeredHome}>
      <h1 className={css.startHeader}>
        Welcome to Doggy Battles!
      </h1>
      <Link to="/upload">
        <button type="button" className={css.startButton}>Start</button>
      </Link>
      <h2 className={css.startClickButtonHeader}>
        Click the button to Begin!
      </h2>
    </div>
  );
}

export default Home;
