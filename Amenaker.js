class Amenaker extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
        this.qayl = 0;
        this.utel = 0;

    }
    chooseNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.chooseNewCoordinates();
        return super.chooseCell(character);
    }

    mul() {
        //this.qayl++;
        var datarkVandakner = this.chooseCell(0);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            var norX = norVandak[0];
            var norY = norVandak[1];
            matrix[norY][norX] = 3;
            var norAmenaker = new Amenaker(norX, norY, this.index);
            AmenakerArr.push(norAmenaker);
            for (var i in grassArr) {
                if (grassArr[i].x == norX && grassArr[i].y == norY) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }

    }


    eat() {
        this.utel++;
        var datarkVandakner = this.chooseCell(1);
        var norVandak = random(datarkVandakner);
        var datarkVandakner = this.chooseCell(3);
        var newVandak = random(datarkVandakner);
        if (norVandak) {
            var norX = norVandak[0];
            var norY = norVandak[1];
            //console.log(this.x, this.y);
            matrix[this.y][this.x] = 0;
            matrix[norY][norX] = 4;
            this.x = norX;
            this.y = norY;

            for (var i in GrassEaterArr) {
                if (norX == GrassEaterArr[i].x && norY == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }

            }
        }
        else if (newVandak) {
            var norX = newVandak[0];
            var norY = newVandak[1];
            //console.log(this.x, this.y);
            matrix[this.y][this.x] = 0;
            matrix[norY][norX] = 4;
            this.x = norX;
            this.y = norY;

            for (var i in GishatichArr) {
                if (norX == GishatichArr[i].x && norY == GishatichArr[i].y) {
                    GishatichArr.splice(i, 1);
                    break;
                }

            }
        }



        if (this.utel >= 15) {
            this.mul();
        }

        else {
            this.move();
        }
    }




    die() {
        matrix[this.y][this.x] = 0;
        for (var i in AmenakerArr) {
            if (this.x == AmenakerArr[i].x && this.y == AmenakerArr[i].y) {
                AmenakerArr.splice(i, 1);
                break;
            }
        }
    }


    move() {
        this.qayl++;
        var datarkVandakner = this.chooseCell(1);
        var norVandak = random(datarkVandakner);
        var datarkVandakner = this.chooseCell(3);
        var newVandak = random(datarkVandakner);
        if (norVandak) {
            var norX = norVandak[0];
            var norY = norVandak[1];
            //console.log(this.x, this.y);
            matrix[this.y][this.x] = 0;
            matrix[norY][norX] = 4;
            this.x = norX;
            this.y = norY;

            for (var i in GrassEaterArr) {
                if (norX == GrassEaterArr[i].x && norY == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }

            }
        }
        else if (newVandak) {
            var norX = newVandak[0];
            var norY = newVandak[1];
            //console.log(this.x, this.y);
            matrix[this.y][this.x] = 0;
            matrix[norY][norX] = 4;
            this.x = norX;
            this.y = norY;

            for (var i in GishatichArr) {
                if (norX == GishatichArr[i].x && norY == GishatichArr[i].y) {
                    GishatichArr.splice(i, 1);
                    break;
                }

            }
        }
        if (this.qayl >= 9) {
            this.die();
        }
    }
}
