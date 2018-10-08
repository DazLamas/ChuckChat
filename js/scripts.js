(function ($, window, document, undefined) {

  var new_comment    = {username: "", text: ""};
  var $inputs        = $('.js-input');
  var $trigger       = $('.js-get-inputs-prop');
  var $trigger_scope = $('.js-new-comment-form-container');

  var filled_inputs   = 0;
  var inputs_amount   = $inputs.length;
  var $error_element  = $('.error');

  var html, avatar;

   function resetAll() {
    new_comment     = {username: "", text: ""};
    filled_inputs   = 0;
    $error_element.addClass('invisible');
  }

  function checkEmpty() {
    for (var i = 0; i < inputs_amount; i++) {
      if ($($inputs[i]).val() !== "") {
        filled_inputs += 1;
      }else {
        $error_element.removeClass('invisible');
      };
    };
      return filled_inputs === inputs_amount;
  } ;

  function getNewCommentData() {
    for (var i = 0; i < $inputs.length; i++) {
      new_comment[$inputs[i].name] = $inputs[i].value;
    };
    placeNewComment(new_comment.username, new_comment.text);
  };

  function placeNewComment(username, text, avatar_url) {

    avatar = avatar_url || 'avatar_guest.png';

    html  =  '<section class="comment cf"><img src="img/'+ avatar +'" alt="avatar2" class="avatar"><div class="wrapper"><h1>'
            + username
            + '</h1><p>'
            + text
            + '</p></div></section>'

    $(html).insertBefore($trigger_scope);

    if(username !== 'Chuck Norris'){//Prevent infinitive bucle with Chuck Norris' answers
      getChuckAnswer();
    };

  };

  function getChuckAnswer() {

     $.ajax({
        url: 'https://api.chucknorris.io/jokes/random',
        dataType: 'application/json',
        complete: function(data){
            placeNewComment('Chuck Norris', JSON.parse(data.responseText).value, 'chucknorris.jpg')
        }
    })
  }

  $trigger.on('click', function(e) {

    resetAll();

    if(checkEmpty()) {
      getNewCommentData();
    }

  });


})(jQuery, window, document);

























  // var setNewComment = function(key, texts){
  //   this.key   = key;
  //   this.texts = texts;
  // };

  // function getNewCommentData() {
  //   for (var i = 0; i < $inputs.length; i++) {
  //     new_comment.push((new setNewComment(inputs[i].name, inputs[i].value)));
  //   };
  //   placeNewComment();
  // };