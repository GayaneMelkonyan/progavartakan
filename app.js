var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});



matrix = [];
var xQanak = 50;
var yQanak = 60;
grassArr = [];
GrassEaterArr = [];
GishatichArr = [];
AmenakerArr = [];
SevArr = [];
GmpArr = [];
MardArr = [];



var Grass = require("./classes/grass.js");
var GrassEater = require("./classes/grassEater.js");
var Gishatich = require("./classes/gishatich.js");
var Amenaker = require("./classes/amenaker.js");
var Marduk = require("./classes/marduk.js");
var Sev = require("./classes/sev.js");
var Sunk = require("./classes/sunk.js");



for (var y = 0; y < xQanak; y++) {
    matrix[y] = [];
    for (var x = 0; x < yQanak; x++)
        matrix[y][x] = Math.floor(Math.random() * 5);
}




for (var i = 0; i < 8; i++) {
    var y1 = Math.floor(Math.random()*(matrix.length));
    var x1 = Math.floor(Math.random()*(matrix[0].length));
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
            var marduk = new Marduk(x, y, 7);
            MardArr.push(marduk);
        }
        else if (matrix[y][x] == 5) {
            var gm = new Sunk(x, y, 5);
            GmpArr.push(gm);
        }
    }
}



io.on('connection', function () {
    setInterval(drawInServer, 1000);

    function drawInServer() {
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
        io.sockets.emit("matrixs", matrix);
    }



});




