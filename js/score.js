// When:

// - New user commnent
// - chuck answer

// calculate new score
//   - chuck 2/3
//   - other 1
// find js-insert-text
// insert new score

var score_dom_element = document.getElementsByClassName('js-score-element')[0];

function randomIntFromInterval(interval,first_number) {
  return Math.floor(Math.random() * interval) + first_number;
};

function insertText(where, text) {
  where.innerHTML = text;
};