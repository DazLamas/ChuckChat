
(function (window, document, undefined) {

  var send_button = document.getElementsByClassName("js-send-btn")[0];
  var textarea    = document.getElementsByClassName("js-input")[1];

  textarea.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      send_button.click();
    };
  });

})(window, document);
