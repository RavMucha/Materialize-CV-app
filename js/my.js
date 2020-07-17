$(document).ready(function () {
  console.log(
    "%c There's an Easter Egg somewhere down there...",
    "background: #38494c; color: #ee6e73; padding:5px; border-radius: 3px;"
  );
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
var EE_T_A = true;
var EE_FATAL = false;

$(".copy").click(function () {
  if (EE_T_A == true && EE_FATAL == false) {
    $(".Fatality").css({
      filter: "hue-rotate(0deg)",
    });
    document.body.style.backgroundImage = "url('./assets/wp.svg')";
    EE_T_A = false;
    EE_FATAL = true;
    playToasty();
  }
});

function playToasty() {
  soundT.play();
  soundT.volume = 0.3;
  $("#Copy").removeClass("copy");
  console.log(
    "%c EE#2 unlocked! Check the 'About me' section for clues...",
    "background: #2f3e41; color: #ee464c; padding:5px; border-radius: 3px;"
  );
  if (EE_T_A == false && EE_FATAL == true) {
    $("#About").addClass("abt");
    $("#About").click(function () {
      if (EE_T_A == false && EE_FATAL == true) {
        Materialize.toast(
          "The magic textbox keyword is:&nbsp;<b>FATALITY</b>",
          1500,
          "tost"
        );
        EE_T_A = true;
        EE_FATAL = true;
        $("#About").removeClass("abt");
        console.log(
          "%c EE#3 trigger is 'Fatality'; type it in the textarea...",
          "background: #2c393f; color: #ee1e25; text-shadow: 1px 1px 0 #1d262b; padding:5px; border-radius: 3px;"
        );
      }
    });
  }
  $("#toastyMe").addClass("surprise");
  setTimeout(function () {
    $("#toastyMe").removeClass("surprise");
  }, 1000);
}

function Toasty() {
  $("body").append(
    '<div id="toastyMe"><img src="./assets/toasty.png" alt="toasty"></div>'
  );
  $("#toastyMe").css({
    position: "fixed",
    right: "-200px",
    bottom: "-10px",
  });
}
$.fn.toasty = function () {
  new Toasty();
};

function playFatal() {
  soundF.play();
  soundF.volume = 0.3;
  $("#Fatal").toggle(150);
  $(".Fatality").css({
    filter: "hue-rotate(180deg)",
  });
  document.body.style.backgroundImage = "url('./assets/wpFatal.svg')";
  setTimeout(function () {
    $("#Fatal").toggle(150);
  }, 3000);
}

$(function () {
  $("#textarea1").keyup(function () {
    let msg = $("#textarea1").val();
    let check =
      msg.includes("fatality", 0) ||
      msg.includes("Fatality", 0) ||
      msg.includes("FATALITY", 0);
    if (check == true && EE_T_A == true && EE_FATAL == true) {
      playFatal();
      $("#textarea1").val("");
      $("#Copy").addClass("copy");
console.log(`%c
░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░
░░░░░░░░░░▓▓▓▓▓▓▓░░░░░░▓▓▓▓▓▓░░░░░░░░░░
░░░░░░▓▓▓▓░░▒░░▓░░░░░░░░░░░░░▓▓▓▒░░░░░░
░░░░▓▓▒░░░▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░▓▓▓░░░░
░░▓▓▓░▓░▓▓▓▓▓▓▓▓▓▓▓░░░▓▓▓▓░░░░░░░░▓▓▒░░
░▓▓▓░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░▓▓▓▓▒░░░░░░░▓▓▓░
░▓▓░░▓▓▓▓▓▓▓▓▓░▓▓▓░░░▓▒▒░░▓▓▓▓▓░░░░░▓▓░
▓▓░░░░▓▓▓▓▓▓▓▓░░░░░░░░░░▓▓░░░▓░░░░░░░▓▓
▓▓░░░▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░▓░░░░░░▓▓
▓▓░░░░░▓▓▓▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓░░▓░░▓░▓▓░
░▓▓░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░▓░░▓▓░
░░▓▓▓░░░▓▓░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░▓▓░░
░░░▓▓▓▓▓░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░▓▓▓░░░
░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▓▓▓░░░░░
░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░
░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░`, "background: #2e2e2e; font-family:monospace; font-weight: bold; color: #C1950E;");
      EE_T_A = true;
      EE_FATAL = false;
    }
  });
});
