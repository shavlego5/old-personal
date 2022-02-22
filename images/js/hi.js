$(document).ready(function() {
  //animation for hi!
  $("#hi").addClass("hi-animation");
  $("#hi").css("opacity", "1");

  //animation for full name
  $("#name").addClass("name-animation");
  setTimeout(function() {
    $("#name").css("opacity", "1");
  }, 1500);

  //aniamtion for front-end text
  $("#front-end").addClass("front-end-animation");
  setTimeout(function() {
    $("#front-end").css("opacity", "1");
  }, 2500);

  //smooty scroll
  $(".menu-links").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        1000,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});
