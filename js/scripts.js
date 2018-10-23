(function ($, window, document, undefined) {

  var new_comment    = {username: "", text: ""};
  var $trigger       = $('.js-send-btn');
  var $trigger_scope = $('.js-new-comment-form-container');

  var html, avatar;

  function resetAll() {
    new_comment     = {username: "", text: ""};
    filled_inputs   = 0;
    $error_element.text(" ");
  }

  function getNewCommentData() {
    for (var i = 0; i < $inputs.length; i++) {
      new_comment[$inputs[i].name] = $inputs[i].value;
    };
    placeNewComment(new_comment.username, new_comment.text);
  };

  function placeNewComment(username, text, avatar_url) {

    avatar = avatar_url || 'abuela-avatar-bg-x2.png';

    //+ (username == "Chuck Norris" ? "big" : "small")
    html  =  '<section class="small-msg-box cf"><img src="img/'
            + avatar
            + '" alt="avatar2" class="avatar"><div class="wrapper"><h1 class="username">'
            + username
            + '</h1><span class="js-place-score-here score"></span><p>'
            + text
            + '</p></div></section>';

    $(html).insertBefore($trigger_scope);

    scrollToLastTextBox();

    insertScore(username, document.getElementsByClassName('js-place-score-here'));

    if(username !== 'Chuck Norris'){//Prevent infinitive bucle with Chuck Norris' answers
      getChuckAnswer();
    };

  };

  function getChuckAnswer() {

     $.ajax({
        url: 'https://api.chucknorris.io/jokes/random',
        dataType: 'application/json',
        complete: function(data){
            placeNewComment(
                            'Chuck Norris',
                            JSON.parse(data.responseText).value,
                            'chucknorris.jpg'
                          )
        }
    })
  };

  $trigger.on('click', function(e) {

    resetAll();

    //ToDo: hasMin.. split
    //ToDo: manage errors here, somehow
    if(checkEmpty() && hasMinimunWords($inputs[1].value)) {
      getNewCommentData();
    };

  });


})(jQuery, window, document);
