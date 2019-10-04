$('#nav').load('/navbar.html');

lightbox.option({
	'albumLabel':	"picture %1 of %2",
	'fadeDuration': 300,
	'resizeDuration': 150,
	'wrapAround': true
})

$(document).ready(function() {
  $('#navbarDropdown').mouseenter(function() {
    $('.dropdown-menu').slideToggle(300, "linear");
  });
  
  $('.dropdown-menu').mouseleave(function() {
    $(this).slideToggle(300, "linear");
  });
});

$(document).ready(function() {
  $('#navbarDropup').mouseenter(function() {
    $('.dropup-menu').slideToggle(300, "linear");
  });
  
  $('.dropup-menu').mouseleave(function() {
    $(this).slideToggle(300, "linear");
  });
});

