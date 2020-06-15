class Ball {
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        World.add(world, this.body);
    }


display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
   
    push();
    translate(pos.x, pos.y);
    rotate(angle);

   
    ellipseMode(RADIUS);
    circle(0, 0, this.radius); 
    pop();
}
keyPressed(){
    if(keyCode === 32){
        let colours = ["red","yellow","green","blue","black","purple","white","grey"];
        let colour = random(colours);
       this.body.shapeColor = "colour";
    }
}
}
