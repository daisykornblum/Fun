$(document).ready(function() {
	$( "#tabs" ).tabs();
	$( "#slider" ).slider({ step: 100, min:100, max:1090, change: function( event, ui ) {} });
	$( ".ui-slider-handle" ).text('100');
	$( "#slider" ).on( "slidechange", function( event, ui ) {$( ".ui-slider-handle").text(ui.value)} );
	var value = $( "#slider" ).slider( "option", "value" );
});

