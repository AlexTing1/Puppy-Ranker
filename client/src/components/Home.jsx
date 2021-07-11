import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>
        Welcome to Doggy Battles!
      </h1>
      <Link to="/upload">
        Upload
      </Link>
      <h2>
        Click the button to Begin!
      </h2>
    </div>
  );
}

export default Home;
