var Utilities = (function utilsMethods() {

    return {
        randomIntFromInterval: function(max, min) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
    };

}());
