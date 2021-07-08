const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("../database/index");

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "./../client/dist")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

app.post("/rankings", (req, res) => {
  console.log(req.query);
  res.send(req.body);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log("Connected to server at port", 3000);
});

module.exports = app;
