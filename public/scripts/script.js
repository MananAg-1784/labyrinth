$(document).ready(function () {
  $("#line-nav-img").on("click", function () {
    $(".nav_menu").slideToggle();
  });
});

addEventListener("DOMContentLoaded", () => {
  let loader = document.querySelectorAll("#loader");
  let cards = document.querySelectorAll(".card-container");

  for (let i = 0; i < cards.length; i++) {
    loader[i].style.display = "none";
    cards[i].style.display = "grid";
  }
});
