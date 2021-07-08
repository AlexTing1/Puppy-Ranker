import React from "react";
import axios from "axios";

function OtherRankings() {
  function onClick() {
    axios.get("./rankings");
  }

  return (
    <div>
      <button type="button">Previous Rankings</button>
    </div>
  );
}

export default OtherRankings;
