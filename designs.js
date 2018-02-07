// event listeners

const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener('submit', function( event ) {
	event.preventDefault();
	makeGrid();
})

// functions

function makeGrid() {
	// reset the grid
	document.querySelector('#pixelCanvas').innerHTML = '';

	const inputField = document.querySelector('input[type=number]');
	const height = inputField.value;
	const width = inputField.nextElementSibling.value;
	
	const table = document.getElementById('pixelCanvas')
	for(var rowCount=0; rowCount<height; rowCount++) {
		const row = table.insertRow(rowCount)
		populateRow(row, width);
	}
}

function populateRow(row, width) {
	for(var columnCount=0; columnCount<width; columnCount++) {
		const cell = row.insertCell(columnCount);
		cell.addEventListener('click', paintCell)
	}
}

function paintCell(event) {
	const colorPicker = document.querySelector('input[type=color]')
	const color = colorPicker.value;
	event.target.style.backgroundColor = color;
}