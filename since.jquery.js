// Wrap plugin in a closure and protect the `$`
(function($){

  // Define the jQuery function
  $.fn.since = function() {

    // Iterate over each node that was selected
    this.each(function() {

      // in each iteration `this` is going to be
      // the raw dom node so we need to wrap jQuery
      // around it to do something with it.

      $(this).css({
        "color"  : "red",
        "border" : "1px solid red"
      });

    });

    // Return `this` to make this plugin chainable
    return this;

  };

})(jQuery);