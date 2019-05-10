let coin;
let legend;
let font;

function preload() {
    font = loadFont('Roboto-Black.ttf');
}

function setup() {
    createCanvas(600, 600, WEBGL);
    legend = new Legend();
    let temp = random();
    coin = new Coin(temp);
}

function draw() {
    background(170);
    legend.show();
    coin.update();
    coin.show();
}

function mousePressed() {
        let x = random();
        coin = new Coin(x);
}