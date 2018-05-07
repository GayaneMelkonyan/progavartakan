class Sev extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
    }
    chooseNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],

            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],

            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],

            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],

            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
        ];
    }

    chooseCell(character) {
        this.chooseNewCoordinates();
        return super.chooseCell(character);
    }


    gmp() {
        var koxkivandakner = this.chooseCell(3);
        var norVandak = random(koxkivandakner);
        var datarkVandakner = this.chooseCell(4);
        var newVandak4 = random(datarkVandakner);
        if (norVandak || newVandak4) {
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] == 1) {
                        matrix[y][x] = 0;
                        for (var i in grassArr) {
                            if (x == grassArr[i].x && y == grassArr[i].y) {
                                grassArr.splice(i, 1);
                                break;
                            }
                        }

                    }
                    else if (matrix[y][x] == 2) {
                        matrix[y][x] = 0;
                        for (var i in GrassEaterArr) {
                            if (x == GrassEaterArr[i].x && y == GrassEaterArr[i].y) {
                                GrassEaterArr.splice(i, 1);
                                break;
                            }
                        }

                    }
                    else if (matrix[y][x] == 3) {
                        matrix[y][x] = 0;
                        for (var i in GishatichArr) {
                            if (x == GishatichArr[i].x && y == GishatichArr[i].y) {
                                GishatichArr.splice(i, 1);
                                break;
                            }
                        }

                    }
                    else if (matrix[y][x] == 4) {
                        matrix[y][x] = 0;
                        for (var i in AmenakerArr) {
                            if (x == AmenakerArr[i].x && y == AmenakerArr[i].y) {
                                AmenakerArr.splice(i, 1);
                                break;
                            }
                        }

                    }
                    matrix[y][x] = 5;
                    var norgmpacner = new Sunk(x, y, 5);
                    GmpArr.push(norgmpacner);
                }
            }
        }

        this.die();
    }

    die() {
        for (var i in SevArr) {
            if (this.x == SevArr[i].x && this.y == SevArr[i].y) {
                matrix[this.y][this.x] = 7;
                SevArr.splice(i, 1);
                break;
            }
            //var normard = new Marduk(x, y, 7);
            // MardArr.push(normard);
        }
    }

}