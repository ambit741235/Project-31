class createDrop{
    constructor(x,y){
        var options = {
            restitution: 0.045,
            friction: 0.1
        };
        this.rainfall = Bodies.circle(x,y,5,options);
        this.x = x;
        this.y = y;
        this.radius = 2;

        World.add(world,this.rainfall);
    }

    update(){
        if(this.rainfall.position.y > height){
            Body.setPosition(this.rainfall,{
                x:random(0,400),
                y:random(0,400)
            });
        }
    }
    
    drawDrops(){
        var drops_pos = this.rainfall.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(drops_pos.x,drops_pos.y,this.radius);
    }
}