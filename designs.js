// event listeners

$('input[type=submit]').on('click', function( event ){
	event.preventDefault();
	makeGrid();
})

$('#pixelCanvas').on('click', 'td', function( event ) {
	color = $('input[type=color]').val()
	$(this).css('background-color', color);
})

// functions

function makeGrid() {
	// reset the grid
	$('#pixelCanvas').empty();

	const height = $('input[type=number]').val();
	const width = $('input[type=number]').next().val();

	for(var rowCount=0; rowCount<height; rowCount++) {
		createRow(width);
	}
}

function createRow(width) {
	$('#pixelCanvas').append('<tr></tr>')
	for(var columnCount=0; columnCount<width; columnCount++) {
		$('tr:last-of-type').append('<td></td>')
	}
}