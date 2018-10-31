(function ($, window, document, undefined) {

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
    for (var i = 0; i < $inputs.length; i++) {
      new_comment_data[$inputs[i].name] = $inputs[i].value;
    };
    createAndPlaceNewComment(new_comment_data.username, new_comment_data.text);
  };

  function createAndPlaceNewComment(username, text, avatar_url) {

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

    if(username !== 'Chuck Norris'){//Prevent infinitive bucle with Chuck Norris' answers
      getChuckAnswer();
    };

  };

  function getChuckAnswer() {

     $.ajax({
        url: 'https://api.chucknorris.io/jokes/random',
        dataType: 'application/json',
        complete: function(data){
            createAndPlaceNewComment(
                            'Chuck Norris',
                            JSON.parse(data.responseText).value,
                            'chucknorris.jpg'
                          )
        }
    })
  };

  // Init method:
  new_comment_send_button.addEventListener("click", function(e) {

    resetAll();

    //ToDo: hasMin.. split
    //ToDo: manage errors here, somehow
    if(checkEmpty() && hasMinimunWords($inputs[1].value)) {
      getNewCommentData();
    };

  }, false);


})(jQuery, window, document);
