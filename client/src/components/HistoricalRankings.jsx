import React, { useEffect, useState } from "react";
import axios from "axios";
import css from "./style.css";

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
        console.log(dataArray);
        setHistoricalData(dataArray);
      });
  }, []);

  return (
    <div className={css.centeredHistoricalRankings}>
      <table className={css.table}>
        <tr className={css.tableHeader}>
          <th>Game Title</th>
          <th>Winner</th>
          <th>Winner Elo Rating</th>
        </tr>

        {historicalData.map((data, index) => (
          <tr className={css.tableData}>
            <td>
              {data.name}
            </td>
            <td>
              <img index={index} className={css.displayImg} src={data.url} alt="" />
            </td>
            <td>{data.rating}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default HistoricalRankings;
