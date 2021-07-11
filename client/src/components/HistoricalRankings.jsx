import React, { useEffect, useState } from "react";
import axios from "axios";

function HistoricalRankings() {
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    // get historical data
    axios.get("/rankings")
      .then((rankingsData) => {
        const dataArray = [];
        rankingsData.data.forEach((data) => {
          const dataObj = {
            name: data.name,
            url: data.results[0].url,
            rating: data.results[0].rating,
          };
          dataArray.push(dataObj);
        });
        setHistoricalData(dataArray);
      });
  }, []);

  return (
    <div>
      HISTORICAL RANKINGS
    </div>
  );
}

export default HistoricalRankings;
