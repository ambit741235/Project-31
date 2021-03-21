class Umbrella{
    constructor(x,y){
        var options = {
            isStatic: true
        };
        this.body = Bodies.circle(x,y,50,options);
        this.x = x;
        this.y = y;
        this.radius = 50;
        this.image = loadImage("images/Walking Frame/walking_1.png");

        World.add(world,this.body);
    }

    display(){
        var umbrella_pos = this.body.position;
        imageMode(CENTER);
        image(this.image,umbrella_pos.x,umbrella_pos.y+50,this.radius+250,this.radius+250);
    }
}