var $inputs         = $('.js-input');
var filled_inputs   = 0;
var inputs_amount   = $inputs.length;
var $error_element  = $('.error');

function checkEmpty() {

  for (var i = 0; i < inputs_amount; i++) {
    if ($($inputs[i]).val() !== "") {
      filled_inputs += 1;
    }else {
      $error_element.removeClass('invisible');
    };
  };
    return filled_inputs === inputs_amount;
};

function countWords(msg_string) {

  msg_string =  msg_string.replace(/(^\s*)|(\s*$)/gi,"")
                          .replace(/[ ]{2,}/gi," ")
                          .replace(/\n /,"\n");

  return msg_string.split(' ').length;

};
