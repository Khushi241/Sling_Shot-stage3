class Box extends BaseClass{
    constructor(x, y){
        super(x,y,50,50);
        this.image = loadImage("box.png");
        this.Visiblity = 255;
        if(gameState === "Win" || gameState === "Lose"){
          this.body.isStatic = true;
        }
      }
    
     display(){
       if(this.body.speed < 3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
      }
    
      score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score ++;
        }
      }
    
    
    
}