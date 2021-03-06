var LivingCreature = require("./livingCreature.js");
module.exports = class GrassEater extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 13;
    }

    chooseCell(character) {
        this.chooseNewCoordinates();
        return super.chooseCell(character);
    }

    move() {
        var datarkVandakner = this.chooseCell(0);
        var index = Math.floor(Math.random() * datarkVandakner.length);
        var norVandak = datarkVandakner[index];
        if (norVandak) {
            grasseatersharjvel++;
            this.energy--;
            var norX = norVandak[0];
            var norY = norVandak[1];
            //console.log(this.x, this.y); 
            matrix[this.y][this.x] = 0;
            matrix[norY][norX] = 2;
            this.x = norX;
            this.y = norY;

            if (this.energy == 5) {
                this.die();
            }
        }
    }
    eat() {
        var datarkVandakner = this.chooseCell(1);
        var index = Math.floor(Math.random() * datarkVandakner.length);
        var norVandak = datarkVandakner[index];
        if (norVandak) {
            grasseaterutel++;
            var norX = norVandak[0];
            var norY = norVandak[1];
            //console.log(this.x, this.y);
            matrix[this.y][this.x] = 0;
            matrix[norY][norX] = 2;
            this.x = norX;
            this.y = norY;
            this.energy++;
            for (var i in grassArr) {
                if (norX == grassArr[i].x && norY == grassArr[i].y) {
                    //xottariqner.push[age,"grassEater"];
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (weather != 'dzmer' || weather != 'amar') {
                if (this.energy >= 15) {
                    this.mul();
                }
            }
        }
        else {
            this.move();
        }


    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in GrassEaterArr) {
            if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
                GrassEaterArr.splice(i, 1);
                break;
            }
        }
    }

    mul() {
        this.energy++;
        var datarkVandakner = this.chooseCell(0);
        var index = Math.floor(Math.random() * datarkVandakner.length);
        var norVandak = datarkVandakner[index];
        if (norVandak) {
            grasseaterbazm++;
            //console.log(grasseaterbazm);
            var norX = norVandak[0];
            var norY = norVandak[1];
            matrix[norY][norX] = 2;

            var norXotaker = new GrassEater(norX, norY, this.index);
            GrassEaterArr.push(norXotaker);
            this.energy = 2;

        }

    }

}