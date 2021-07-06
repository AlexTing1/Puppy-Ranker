const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "./../client/dist")));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log("Connected to server at port", 3000);
});

module.exports = app;
