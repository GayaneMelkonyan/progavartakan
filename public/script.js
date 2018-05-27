var xQanak = 40;
var yQanak = 40;
var side = 15;
//var xottariqner = [];


function setup() {
	frameRate(5);
	//createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
	createCanvas(xQanak * side + 1, yQanak * side + 1);
	//background('#acacac');
}

window.onload = main;


function main() {
	var socket = io.connect('http://localhost:3000');
	


	socket.on("matrixs", stexcel);
	socket.on("background", guyner);
	socket.on('PushedObj', stexcel);
	
	var col = '#acacac ';
	function guyner(weather) {
		if (weather == 'garun') {
			col = "#90EE90";
		}
		else if (weather == 'amar') {
			col = "#FFA07A";
		}
		else if (weather == 'ashun') {
			col = "#F0E68C";
		}
		else if (weather == 'dzmer') {
			col = "#ADD8E6";
		}
	}

	function stexcel(PushedObj) {
		var matrix = PushedObj.Matrix;
    	var weather = PushedObj.Weather;
		
		//console.log(matrix);
		for (var y = 0; y < matrix.length; y++) {
			for (var x = 0; x < matrix[y].length; x++) {
				/*if (matrix[y][x] == 1) {
					fill("green");
					rect(x * side, y * side, side, side);
				}*/
					
				if (matrix[y][x] == 1) {
					if (weather == 'dzmer') {
						fill("white");
						
					}
					else{
						fill("green");
						
					}
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
					fill("orange");
					rect(x * side, y * side, side, side);
				}
				else if (matrix[y][x] == 0) {
					fill(col);
					rect(x * side, y * side, side, side);
				}


			}
		}


	}



}

