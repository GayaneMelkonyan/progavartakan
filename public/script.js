var xQanak = 50;
var yQanak = 60;
var side = 15;


function setup() {
	frameRate(5);
	//createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
	createCanvas(xQanak* side + 1, yQanak * side + 1);
	background('#acacac');
	//console.log(matrix);

	/*matrix = [
		[0, 0, 1, 0, 0],
		[1, 0, 0, 1, 1],
		[0, 1, 2, 1, 1],
		[0, 3, 1, 0, 0],
		[1, 1, 0, 0, 0]
		
	];*/
	//createCanvas(matrix[0].length * side, matrix.length * side);



}

window.onload = main;


function main() {
	var socket = io.connect('http://localhost:3000');

	socket.on("matrixs", stexcel);

	function stexcel(matrix) {
		console.log(matrix);
		for (var y = 0; y < matrix.length; y++) {
			for (var x = 0; x < matrix[y].length; x++) {
				if (matrix[y][x] == 1) {
					fill("green");
					rect(x * side, y * side, side, side);
				}
				else if (matrix[y][x] == 2) {
					fill("yellow");
					rect(x * side, y * side, side, side);
				}
				else if (matrix[y][x] == 3) {
					fill("blue");
					rect(x * side, y * side, side, side);
				}
				else if (matrix[y][x] == 4) {
					fill("red");
					rect(x * side, y * side, side, side);
				}
				else if (matrix[y][x] == 6) {
					fill("black");
					rect(x * side, y * side, side, side);
				}
				else if (matrix[y][x] == 7) {
					fill("#1e88e5");
					rect(x * side, y * side, side, side);
				}
				else if (matrix[y][x] == 5) {
					fill("white");
					rect(x * side, y * side, side, side);
				}
				else if (matrix[y][x] == 0) {
					fill("#acacac");
					rect(x * side, y * side, side, side);
				}


			}
		}

	}
}

