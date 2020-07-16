$(document).ready(function () {
  $(".tap-target").tapTarget("open");
  setTimeout(function () {
    $(".tap-target").tapTarget("close");
  }, 3500);

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
  $("body").toasty();
});
var soundF = new Audio("./assets/Fatal.mp3");
var soundT = new Audio("./assets/Toasty.mp3");

function playFatal() {
  soundF.play();
  soundF.volume = 0.3;
  $("#Fatal").toggle(150);
  $(".Fatality").css({ filter: "hue-rotate(180deg)" });
  document.body.style.backgroundImage = "url('./assets/wpFatal.svg')";
  setTimeout(function () {
    $("#Fatal").toggle(150);
    $(".Fatality").css({ filter: "hue-rotate(0deg)" });
    document.body.style.backgroundImage = "url('./assets/wp.svg')";
  }, 3000);
}

function playToasty() {
  soundT.play();
  soundT.volume = 0.3;
  $("#About").addClass("abt");
  $('#About').click(function(){
    Materialize.toast('The magic textbox keyword is:&nbsp;<b>FATALITY</b>', 1500, 'tost');
  });
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

$(function() {
  $("#textarea1").keyup(function() {
      let msg = $("#textarea1").val();
      let check = msg.includes("fatality", 0) || msg.includes("Fatality", 0) || msg.includes("FATALITY", 0);
      if(check == true) {
        playFatal();
        $("#textarea1").val("");
      }
  });
});


