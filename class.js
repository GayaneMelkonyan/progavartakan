class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;

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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }

    mul() {
        this.multiply++;
        var datarkVandakner = this.chooseCell(0);
        var norVandak = random(datarkVandakner);
        //console.log(norVandak);
        if (norVandak && this.multiply >= 8) {
            var norX = norVandak[0];
            var norY = norVandak[1];
            matrix[norY][norX] = 1;

            var norXot = new Grass(norX, norY, this.index);
            grassArr.push(norXot);
            this.multiply = 0;
            //console.log(norXot);
        }
    }
}

class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;

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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
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
        var norVandak = random(datarkVandakner);
        if (norVandak) {

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
                    grassArr.splice(i, 1);
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
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            var norX = norVandak[0];
            var norY = norVandak[1];
            matrix[norY][norX] = 2;

            var norXotaker = new GrassEater(norX, norY, this.index);
            GrassEaterArr.push(norXotaker);
            this.energy = 2;

        }

    }

}

class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 12;

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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
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

class Amenaker {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
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

class Sev {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;

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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
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

class Sunk {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
    }
}

class Marduk {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
    }
}



