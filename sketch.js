const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var shooter;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var sling;
var ball1;
var gr1,gr2,gr3,gr4,gr5;
var gameState = Play;
var score = 0;
var timer = 250;


function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    gr1 = new Ground(500,300,150, 15);
    gr2 = new Ground(648, 456,150,15);
    gr3 = new Ground(900, 380,150,15);
    gr4 = new Ground(1100, 250, 150,15);
    gr5 = new Ground(780, 170, 150,15);

  

    ball1 = new Ball(50,350,25);

    box1 = new Box(620,450,50,50);
    box2 = new Box(670,450,50,50);
    box3 = new Box(645,410,50,50);

    box4 = new Box(1070,200,50,50);
    box5 = new Box(1120,200,50,50);
    box6 = new Box(1095,160,50,50);

    box7 = new Box(870,330,50,50);
    box8 = new Box(920,330,50,50);
    box9 = new Box(895,290,50,50);

    box10 = new Box(470,250,50,50);
    box11 = new Box(520,250,50,50);
    box12 = new Box(495,210,50,50);

    box13 = new Box(750,120,50,50);
    box14= new Box(800,120,50,50);
    box15 = new Box(775,90,50,50);


    sling = new SlingShot(ball1.body, {x:120, y:480});
}

function draw(){
    background("black");
    Engine.update(engine);

    noStroke();
    textSize(35)
    fill("white");
    text("Press space to reattach the ball", 200, 50);

push();
    text("Score:" + score, width-300, 50)
  

    fill(0)
    text("Time Left:" + timer,50,100 );
 pop();


    fill("blue");
    gr1.display();
    gr2.display();
    gr3.display();
    gr4.display();
    gr5.display();
   

    ball1.display();
    
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();

    sling.display();

}

function mouseDragged(){
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
   
}

function keyPressed(){
    if(keyCode === 32){
        World.remove(world, ball1.body);
        ball1 = new Ball(200,200,30,30);

        Matter.Body.setPosition(ball1.body, {x:50,  y:350}  );
       sling.attach(ball1.body);

       let colours = ["red","yellow","green","blue","purple","white","grey"];
       let colour = random(colours);
       ball1.shapeColor = "colour";
    }
}

 if(gameState === "Play" && timer > 0){
    timer --;
}


if(timer > 0 && score>2000 && gameState === "Play"){
    gameState = "Win";
}

if(timer === 0 && score>2000 && gameState === "Play"){
    gameState = "Win";
}``

if(gameState === "Win"){
    GameOver();
}

if(timer === 0 && score<2000 && gameState === "Play"){
    gameState = "Lose";
}
if(gameState === "Lose"){
    GameOver();
}


function GameOver(){
        if(gameState === "Win"){
         textSize(35)
         fill("blue");
         text("You win!!!", 70,360);
         
     }
     if(gameState === "Lose"){
        textSize(35)
        fill("red");
         text("You Lose!!", 70, 360);
         text("Try Harder Next Time",90,380);
     }
    }
