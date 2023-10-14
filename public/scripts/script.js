$(document).ready(function () {
  $("#line-nav-img").on("click", function () {
    $(".nav_menu").slideToggle();
  });

  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector(".card-container").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
    } else {
      var loader = document.querySelectorAll("#loader");
      var cards = document.querySelectorAll(".card-container");

      for (var i = 0; i < cards.length; i++) {
        loader[i].style.display = "none";
        cards[i].style.display = "grid";
      }
    }
  };

  var upcomingEvents = document.querySelectorAll(
    ".upcoming-events .card-container > div"
  );
  console.log(upcomingEvents);
  if (upcomingEvents.length != 0) {
    if (upcomingEvents.length == 1) {
      document.querySelector(".upcoming-events #no-events").style.display =
        "block";
      document.querySelector(".upcoming-events #no-events").style.fontSize =
        "1.2rem";
    } else {
      document.querySelector(".upcoming-events #no-events").style.display =
        "none";
    }
  }
});
