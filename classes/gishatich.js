var LivingCreature = require("./livingCreature.js");
 module.exports =  class Gishatich extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 12;

    }
    
    chooseCell(character) {
        this.chooseNewCoordinates();
        return super.chooseCell(character);
    }

    move() {
        var datarkVandakner = this.chooseCell(0);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            this.energy--;
            var norX = norVandak[0];
            var norY = norVandak[1];
            //console.log(this.x, this.y);
            matrix[this.y][this.x] = 0;
            matrix[norY][norX] = 3;
            this.x = norX;
            this.y = norY;
            if (this.energy == 0) {
                this.die();
            }
        }
    }

    eat() {
        var datarkVandakner = this.chooseCell(2);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            var norX = norVandak[0];
            var norY = norVandak[1];
            matrix[this.y][this.x] = 0;
            matrix[norY][norX] = 3;
            this.x = norX;
            this.y = norY;
            this.energy++;
            for (var i in GrassEaterArr) {
                if (norX == GrassEaterArr[i].x && norY == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }
            }

            if (this.energy >= 15) {
                this.mul();
            }
        }
        else {
            this.move();
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in GishatichArr) {
            if (this.x == GishatichArr[i].x && this.y == GishatichArr[i].y) {
                GishatichArr.splice(i, 1);
                break;
            }
        }
    }

    mul() {
        this.energy++;
        var datarkVandakner = this.chooseCell(1);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            var norX = norVandak[0];
            var norY = norVandak[1];
            matrix[norY][norX] = 3;
            var norgishatich = new Gishatich(norX, norY, this.index);
            GishatichArr.push(norgishatich);
            this.energy = 11;
            for (var i in grassArr) {
                if (grassArr[i].x == norX && grassArr[i].y == norY) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }

    }




}