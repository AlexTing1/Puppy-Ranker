const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mvp", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  // we're connected!
  console.log("we are connected to database.");
});

const rankingSchema = mongoose.Schema({
  results: [{ url: String, rating: Number, index: Number }],

});

const Ranking = mongoose.model("ranking", rankingSchema);

/* const test = new Ranking({
  results: [{ url: "www.google.com", rating: 1500, index: 0 }],
});

test.save((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("test saved.");
  }
}); */

const save = (data) => {
  const ranking = new Ranking(data);
  ranking.save((err) => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports.save = save;
