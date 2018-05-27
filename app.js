var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
app.set('port', process.env.PORT || 3000);

app.use(express.static("public"));
app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

server.listen(app.get('port'), function () {
    console.log("Example is running on port 3000");
});


var Grass = require("./classes/grass.js");
var GrassEater = require("./classes/grassEater.js");
var Gishatich = require("./classes/gishatich.js");
var Amenaker = require("./classes/amenaker.js");
var Marduk = require("./classes/marduk.js");
var Sev = require("./classes/sev.js");
var Sunk = require("./classes/sunk.js");



matrix = [];
var xQanak = 40;
var yQanak = 40;
grassArr = [];
GrassEaterArr = [];
GishatichArr = [];
AmenakerArr = [];
SevArr = [];
GmpArr = [];
MardArr = [];
grassbazm = 0;
grasseaterbazm = 0;
grasseaterutel =0;
grasseatersharjvel = 0;
gishatichbazm = 0;
gishatichutel = 0;
gishatichsharjvel = 0;
amenakerbazm = 0;
amenakersharjvel = 0;
amenakerutel = 0;





for (var y = 0; y < xQanak; y++) {
    matrix[y] = [];
    for (var x = 0; x < yQanak; x++)
        matrix[y][x] = Math.floor(Math.random() * 5);
}




for (var i = 0; i < 8; i++) {
    var y1 = Math.floor(Math.random() * (matrix.length));
    var x1 = Math.floor(Math.random() * (matrix[0].length));
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


num = 0;
weather = 'garun';
age = 0;

takter = 0;
     obj = {
    'xotbazmanal': [],
    'xotakerbazmanal': [],
    'xotakersharjvel': [],
    'xotakerkerav':[],
    'gishatichbazmanal': [],
    'gishatichsharjvel': [],
    'gishatichkerav':[],
    'amenakerbazmanal':[],
    'amenakersharjvel':[],
    'amenakerkerav':[],

}; 

setInterval(drawInServer, 1000);
io.on('connection', function () {

});

function drawInServer() {
   
    num++;
    if (num % 60 == 0) {
        weather = 'garun';
    }
    else if (num % 60 == 30) {
        weather = 'amar';
    }
    else if (num % 60 == 40) {
        weather = 'ashun';
    }
    else if (num % 60 == 50) {
        weather = 'dzmer';
    }



    //console.log(weather);
    if (weather != 'dzmer') {
        for (var i in grassArr) {
            grassArr[i].mul();
            // grassArr[i].age++;
        }
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
    if (weather != 'dzmer') {
        for (var i in SevArr) {
            SevArr[i].gmp();
        }
    }

    io.sockets.emit("matrixs", matrix);
    io.sockets.emit("background", weather);

    

    takter++;
    var myJSON = JSON.stringify(obj, null, ' ');
       
         if (takter % 2 == 0) {
             obj.xotbazmanal.push(grassbazm);

            obj.xotakerbazmanal.push(grasseaterbazm);
            
            obj.xotakersharjvel.push(grasseatersharjvel);
        
            obj.xotakerkerav.push(grasseaterutel);
           
            obj.gishatichbazmanal.push(gishatichbazm);
            
            obj.gishatichsharjvel.push(gishatichsharjvel);
           
            obj.gishatichkerav.push(gishatichutel);
            
            
            obj.amenakerbazmanal.push(amenakerbazm);
            
            obj.amenakersharjvel.push(amenakersharjvel);
           
            obj.amenakerkerav.push(amenakerutel);


            fs.writeFile("verj.json", myJSON);
              //console.log(obj);

         }
          
         
          
        
    
}






