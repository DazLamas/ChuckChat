function randomIntFromInterval(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function getScore(username) {
  switch (username) {
    case "Chuck Norris":
      return randomIntFromInterval(4, 2); //Chuck always wins... Any question?
      break;
    default:
      return randomIntFromInterval(1, 1);
  };
};

function insertScore(username, stars_container) {

  var iterations = getScore(username);
  var stars      = stars_container.childNodes;

  for (var i = 0; i < iterations; i++) {
    stars[i].classList.remove('d-none');
  }
  stars_container.classList.remove("js-place-score-here");
};
