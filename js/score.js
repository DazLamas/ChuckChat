var Score = (function scoreMethods() {

    return {
        getScore: function(username) {
          switch (username) {
            case "Chuck Norris":
              return Utilities.randomIntFromInterval(4, 2); //Chuck always wins... Any question?
              break;
            default:
              return Utilities.randomIntFromInterval(1, 1);
          };
        },

        insertScore: function(username, stars_container) {
          var puntuation = this.getScore(username);
          var stars      = stars_container.childNodes;

          for (var i = 0; i < puntuation; i++) {
            stars[i].classList.add('magictime');
            stars[i].classList.add('puffIn');
          };

          stars_container.classList.remove("js-place-score-here");
        }
    };

}());
