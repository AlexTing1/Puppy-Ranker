const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("../database/index");

const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "./../client/dist")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

app.post("/rankings", (req, res) => {
  const data = req.body;
  mongoose.save(data);
  res.sendStatus(200);
});

app.get("/rankings", (req, res) => {
  mongoose.getAllRankings((rankingData) => {
    res.send(rankingData);
  });
});

app.get("/rankings/:name", (req, res) => {
  const { name } = req.params;
  mongoose.getRankingByName(name, (data) => {
    res.send(data[0]);
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log("Connected to server at port", 4000);
});

module.exports = app;
