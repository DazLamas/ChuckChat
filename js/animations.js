//ToDo: check bucle; check variables-memory; improve array of children
var Animations = (function animationsMethods() {

    return {
        scrollToLastTextBox: function() {
          var new_scroll = 0;
          var $all_children = $('.chat-container .wrapper').find('> section');

          for (var i = 0; i < $all_children.length; i++) {
            new_scroll += $($all_children[i]).height();
          };

          $('.chat-container').animate({ scrollTop: new_scroll }, 'slow');
        }
    };

}());
