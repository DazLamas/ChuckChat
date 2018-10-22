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

function insertScore(username, score_output_dom_element) {
  score_output_dom_element[0].innerText = getScore(username);
  score_output_dom_element[0].classList.remove("js-place-score-here");
};
