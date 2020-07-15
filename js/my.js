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
    $(".Fatality").css({ filter: "hue-rotate(180deg)" });
  }
  $(".hueRotate").click(function () {
    Hue();
    setTimeout(function () {
      $(".Fatality").css({ filter: "hue-rotate(0deg)" });
    }, 2000);
  });

  $("body").toasty();
});

function playFatal() {
  var sound = new Audio('./assets/Fatal.mp3');
  sound.play();
  sound.volume = 0.3;
  $("#Fatal").toggle(150);
  document.body.style.backgroundImage = "url('./assets/wpFatal.svg')";
  setTimeout(function () {
    $("#Fatal").toggle(150);
    document.body.style.backgroundImage = "url('./assets/wp.svg')";
  }, 2000);
}

function playToasty() {
  var sound = new Audio('./assets/Toasty.mp3');
  sound.play();
  sound.volume = 0.3;
  $("#toastyMe").addClass("surprise");
  setTimeout(function () {
    $("#toastyMe").removeClass("surprise");
  }, 1000);
}
function Toasty() {
  $("body").append(
    '<div id="toastyMe"><img src="./assets/toasty.png" alt="toasty"></div>'
  );
  $("#toastyMe").css({ position: "fixed", right: "-200px", bottom: "-10px" });
}
$.fn.toasty = function () {
  new Toasty();
};
