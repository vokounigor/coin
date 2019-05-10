function Coin(result) {
    this.result = result;
    this.rot = 19;
}

Coin.prototype.show = function () {

    noStroke();
    fill(255);
    cylinder(60, 4, 24, 16);
    fill(0);
    translate(0, 4);
    cylinder(60, 4, 24, 16);
}

Coin.prototype.update = function () {

    if (this.rot < -0.9) {
        this.stopRot();
    } else {
        rotateX(this.rot);
        this.rot -= 0.2;
    }
}

Coin.prototype.stopRot = function () {

    if (this.result < 0.5) {
        rotateX(-1.5);
        this.show();
    } else {
        rotateX(1.5);
        this.show();
    }
}