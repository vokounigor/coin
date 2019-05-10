function Legend() {

    this.show = function(){

        push();
        // translate(-300, -300) 
        // would be the left-top of the screen
        translate(-260, -260);
        fill(255);
        ellipse(0, 0, 20, 20);
        textFont(font);
        textSize(20);
        text("Heads", 30, 6);
        
        fill(0);
        ellipse(0, 40, 20 ,20);
        textFont(font);
        textSize(20);
        text("Tails", 30, 46);
        pop();

        textFont(font);
        textSize(40);
        fill(0);
        text("Click to toss the coin!", -200, 200);

    }

}