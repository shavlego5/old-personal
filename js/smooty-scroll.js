$(document).ready(function() {
  //smooty scroll
  $(
    ".menu-links, #about-knowledge, #about-experience, #about-created, #about-skills"
  ).on("click", function(event) {
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
