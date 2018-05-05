var matrix = [];
var xQanak = 50;
var yQanak = 60;
var side = 15;
var grassArr = [];
var GrassEaterArr = [];
var GishatichArr = [];
var AmenakerArr = [];
var SevArr = [];
var GmpArr = [];
var MardArr = [];

function setup() {
	frameRate(5);
	for (var y = 0; y < xQanak; y++) {
		matrix[y] = [];
		for (var x = 0; x < yQanak; x++)
			matrix[y][x] = Math.round(random(0, 4));
	}
	/*matrix = [
		[0, 0, 1, 0, 0],
		[1, 0, 0, 1, 1],
		[0, 1, 2, 1, 1],
		[0, 3, 1, 0, 0],
		[1, 1, 0, 0, 0]
		
	];*/
	//createCanvas(matrix[0].length * side, matrix.length * side);
	createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
	background('#acacac');
	console.log(matrix);
	for(var i = 0; i<8;i++){
	var y1 = Math.floor(random(matrix.length));
	var x1 = Math.round(random(matrix[0].length));
	matrix[y1][x1] = 6;
	}

	for (var y = 0; y < matrix.length; ++y) {
		for (var x = 0; x < matrix[y].length; ++x) {
			if (matrix[y][x] == 1) {
				var gr = new Grass(x, y, 1);
				grassArr.push(gr);
			}
			else if (matrix[y][x] == 2) {
				var ge = new GrassEater(x, y, 2);
				GrassEaterArr.push(ge);
			}
			else if (matrix[y][x] == 3) {
				var gi = new Gishatich(x, y, 3);
				GishatichArr.push(gi);
			}
			else if (matrix[y][x] == 4) {
				var am = new Amenaker(x, y, 4);
				AmenakerArr.push(am);
			}
			else if (matrix[y][x] == 6) {
				var sevuk = new Sev(x, y, 6);
				SevArr.push(sevuk);
			}
			else if (matrix[y][x] == 7) {
				var marduk = new Marduk(x, y,7);
				MardArr.push(marduk);
			}
			else if (matrix[y][x] == 5) {
				var gm = new Sunk(x, y, 5);
				GmpArr.push(gm);
			}
		}
	}
}

function draw() {
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
				//console.log("dfghjk");
				fill("white");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 0) {
				fill("#acacac");
				rect(x * side, y * side, side, side);
			}


		}
	}

	for (var i in grassArr) {
		grassArr[i].mul();
	}
	for (var i in GrassEaterArr) {
		GrassEaterArr[i].eat();
	}
	for (var i in GishatichArr) {
		GishatichArr[i].eat();
	}
	for (var i in AmenakerArr) {
		AmenakerArr[i].eat();
	}
	for (var i in SevArr) {
		SevArr[i].gmp();
	}
}

