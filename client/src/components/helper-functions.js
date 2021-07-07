module.exports = {
  algo: (rating1, rating2, winner) => {
    const p1 = (1.0 / (1.0 + (10 ** ((rating2 - rating1) / 400))));
    const p2 = (1.0 / (1.0 + (10 ** ((rating1 - rating2) / 400))));
    let newRating1 = rating1;
    let newRating2 = rating2;
    if (winner === 1) {
      newRating1 += 30 * (1 - p1);
      newRating2 += 30 * (0 - p2);
    } else {
      newRating1 += 30 * (0 - p1);
      newRating2 += 30 * (1 - p2);
    }
    return [newRating1, newRating2];
  },
};
