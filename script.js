
$(document).ready( function(){

    if( window.innerWidth <= 900) {

        $('#line-nav-button').on('click',function(){
            $('.nav_menu').slideToggle();
        });
        
    }
    document.onreadystatechange = function() {
        if (document.readyState !== "complete") {
            document.querySelector(".card-container").style.visibility = "hidden";
            document.querySelector("#loader").style.visibility = "visible";
        } else {
            document.querySelector("#loader").style.display = "none";
            document.querySelector(".card-container").style.display = "grid";
        }
    };
  
});
