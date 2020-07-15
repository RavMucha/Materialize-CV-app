(function ($) {
  var singleToasty;
  function Toasty(elem) {
  }
  Toasty.prototype = {
    init: function () {
      $("body").append(
        '<div id="toasty-guy-dan"><img src="./assets/toasty.png" alt="toasty"></div>'
      );
      $("#toasty-guy-dan").css("position", "fixed");
      $("#toasty-guy-dan").css("right", "-200px");
      $("#toasty-guy-dan").css("bottom", "-10px");
    },
  };
  $.fn.toasty = function () {
    this.each(function () {
      singleToasty = new Toasty($(this));
      singleToasty.init();
    });
  };
})(jQuery);
