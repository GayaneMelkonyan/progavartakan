var LivingCreature = require("./livingCreature.js");
module.exports = class Grass extends LivingCreature {
    mul() {

        this.multiply++;
        var datarkVandakner = this.chooseCell(0);
        var index = Math.floor(Math.random()*datarkVandakner.length);
        var norVandak = datarkVandakner[index];

        //var norVandak = Math.random(datarkVandakner);
        //console.log(norVandak);
        if (norVandak && this.multiply >= 2) {
            grassbazm++;
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