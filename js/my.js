$(document).ready(function () {
  $(".tap-target").tapTarget("open");
  setTimeout(function () {
    $(".tap-target").tapTarget("close");
  }, 4000);

  $(".collapsible").collapsible({
    onOpen: function (el) {
      if ($("#showUp").hasClass("active")) {
        $("#upArr").fadeIn(400);
        $(".cont2").removeClass("m6").addClass("m5");
        $(".cont3").removeClass("m6").addClass("m7");
      }
    },
    onClose: function (el) {
      if (!$("#showUp").hasClass("active")) {
        $("#upArr").fadeOut(400);
        $(".cont2").removeClass("m5").addClass("m6");
        $(".cont3").removeClass("m7").addClass("m6");
      }
    },
  });
  function Hue() {
    $("html").css({ filter: "hue-rotate(180deg)" });
  }
  $(".hueRotate").click(function () {
    Hue();
    setTimeout(function () {
      $("html").css({ filter: "hue-rotate(0deg)" });
    }, 2000);
  });
});
