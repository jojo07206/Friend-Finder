var friends = require("../data/friends.js");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // app.post("/api/friends", function (req, res) {
  //   friends.push(req.body);
  // }
  // );

  app.post('/api/friends', function (req, res) {
    let userScores = req.body.scores;
    let biggestDiff = 99999;
    let bestMatch = 0;

    for (i in friends) {
      let scoresDiff = 0;
      for (j in userScores)
        scoresDiff += Math.abs(friends[i].scores[j] - userScores[j]);
      if (scoresDiff < biggestDiff) {
        biggestDiff = scoresDiff;
        bestMatch = i;
      }
    }
    friends.push(req.body);
    res.json(friends[bestMatch]);
  });
};
