jQuery(function($) {
    $('#swapFire').on('click', function() {
      var $el = $(this),
        textNode = this.lastChild;
      $el.find('span').toggleClass('glyphicon-triangle-top glyphicon-triangle-bottom');
      textNode.nodeValue = '' + ($el.hasClass('showFire') ? '' : '')
      $el.toggleClass('showFire');
    });
  });

lightbox.option({
	'albumLabel':	"picture %1 of %2",
	'fadeDuration': 300,
	'resizeDuration': 150,
	'wrapAround': true
})
$(function() {
	
	$('.selectpicker').selectpicker();
	
	$('button').click(function() {
		
		$('#tokens').selectpicker('deselectAll');
		
	});

	
});
$(document).ready(function(){
    $("#filter").keyup(function(){
 
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;
 
        // Loop through the comment list
        $("nav ul li").each(function(){
 
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
 
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });
 
        // Update the count
        var numberItems = count;
        $("#filter-count").text("Number of Filter = "+count);
    });
});

