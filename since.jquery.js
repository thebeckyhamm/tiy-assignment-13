// Wrap plugin in a closure and protect the `$`
(function($){

  // Define the jQuery function
  $.fn.since = function() {

    // Iterate over each node that was selected

    this.each(function() {
      var $this = $(this);
      var $date = moment($this.data("since")) || moment(); 
      var now = moment();
      var $span = $("<span>" + "</span>");
      $this.append($span);

      if( now.diff($date, "seconds") < (60000)) {
        $span.text("just now");
      }

      else if (now.diff($date, "minutes") < 5) {
        $span.text("a few minutes ago");
      }

      else if (now.diff($date, "hour") < 1) {
        $span.text("within the past hour");
      }

      else if (now.diff($date, "day") < 1) {
        $span.text("today");
      }

      else if (now.diff($date, "day") < 6) {
        $span.text($date.format("dddd"));
      }

      else if (now.diff($date, "day") >= 6) {
        $span.text($date.format("MM-DD-YYYY"));
      }

      $span.css({
        "margin-left"  : "10px"
      });

    });

    // Return `this` to make this plugin chainable
    return this;


  };



})(jQuery);