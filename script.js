$( document ).ready(function() {
    console.log( "ready!" );

    $( "#bio" ).hide();

    $( "#bio-link" ).click(function() {
  		$( "#portfolio" ).hide();
  		$( "#bio" ).fadeIn("slow");
	});

	$( "#portfolio-link" ).click(function() {
  		$( "#bio" ).hide();
  		$( "#portfolio" ).fadeIn("slow");

	});

	$( ".uk-card" ).hover(
	  function() {
	    $( this ).append( $( "<div class='uk-overlay-default uk-position-cover'></div>" ) );
	  }, function() {
	    $( this ).find( ".uk-overlay-default:last" ).remove();
	  }
	);


});