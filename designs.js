// constants
const inputHeightField = document.querySelector('input[type=number]');
const inputWidthField = document.querySelector('input[type=number]').nextElementSibling;
const colorPicker = document.querySelector('input[type=color]');
const table = document.querySelector('#pixelCanvas');

// event listeners

const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener('submit', function( event ) {
	event.preventDefault();
	makeGrid();
})

// functions

function makeGrid() {
	// reset the grid
	table.innerHTML = '';

	const height = inputHeightField.value;
	const width = inputWidthField.value;
	
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
	const color = colorPicker.value;
	event.target.style.backgroundColor = color;
}
