(function (window, document, undefined) {

  var new_comment_data           = {username: "", text: ""};
  var new_comment_send_button    = document.getElementById('js-send-btn');
  var new_comment_form_container = document.getElementById('js-new-comment-form-container');

  var string, avatar;

  function resetAll() {
    new_comment_data = {username: "", text: ""};
    filled_inputs    = 0;
    error_element.innerText = " ";
  }

  function getNewCommentData() {
    for (var i = 0; i < form_inputs.length; i++) {
      new_comment_data[form_inputs[i].name] = form_inputs[i].value;
    };
    createAndPlaceNewMessage(new_comment_data.username, new_comment_data.text);
  };

  function createAndPlaceNewMessage(username, text, avatar_url) {

    avatar = avatar_url || 'abuela-avatar-bg-x2.png';

    //+ (username == "Chuck Norris" ? "big" : "small")
    string  = '<section class="small-msg-box cf"><img src="img/'
            + avatar
            + '" alt="avatar2" class="avatar"><div class="wrapper"><h1 class="username">'
            + username
            + '</h1><span class="js-place-score-here score"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span><p>'
            + text
            + '</p></div></section>';

    new_comment_form_container.insertAdjacentHTML('beforebegin', string);

    scrollToLastTextBox();
    insertScore(username, document.getElementsByClassName('js-place-score-here')[0]);
    if(username !== 'Chuck Norris'){
      getChuckAnswer();
    };

  };

  function getChuckAnswer() {

      var xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
             if (xmlhttp.status == 200) {
                 createAndPlaceNewMessage(
                                 'Chuck Norris',
                                 JSON.parse(xmlhttp.responseText).value,
                                 'chucknorris.jpg'
                               );
             }
             else if (xmlhttp.status == 400) {
                showError('Try it again or leave');
             }
             else {
                showError('Send an angry message to the webmaster, please');
             }
          }
      };
      xmlhttp.open("GET", "https://api.chucknorris.io/jokes/random", true);
      xmlhttp.send();
    };

  /* Init method: */
  new_comment_send_button.addEventListener("click", function(e) {

    resetAll();

    //ToDo: hasMin.. split
    //ToDo: manage errors here, somehow
    if(checkEmpty() && hasMinimunWords(form_inputs[1].value)) {
      getNewCommentData();
    };

  }, false);


})(window, document);
