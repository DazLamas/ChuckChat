var form_inputs     = document.getElementsByClassName('js-input');
var filled_inputs   = 0;
var inputs_amount   = form_inputs.length;
var error_element   = document.getElementById('error');

function checkEmpty() {

  for (var i = 0; i < inputs_amount; i++) {
    if ($(form_inputs[i]).val() !== "") {
      filled_inputs += 1;
    }else {
      showError('All fields requiered');
    };
  };
    return filled_inputs === inputs_amount;
};

function hasMinimunWords(msg_string) {

  msg_string =  msg_string.replace(/(^\s*)|(\s*$)/gi,"")
                          .replace(/[ ]{2,}/gi," ")
                          .replace(/\n /,"\n");
  if (msg_string.split(' ').length < 5) {
    showError('Dont fuck with Chuck');
  };

  return msg_string.split(' ').length >= 5;

};

function showError(error) {
  error_element.innerText = error;
};
