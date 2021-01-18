const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var GROUND;
var Block,Block1,Block2,Block3,Block4,Block5,Block6,Block7;
var Block8,Block9,Block10,Block11,Block12,Block13,Block14,Block15,Block16;
var slingshot;


function preload(){
    
}

function setup() {
    createCanvas(1000,400);
    
    engine = Engine.create();
    world = engine.world;

    GROUND = new ground(170,130,340,12);
    //player = new polygon(-120,30,40,40);
    player = new polygon(100,20,40,40);
    Block = new block(110,37,30,40);
    Block1 = new block(125.3,37,30,40);
    Block2 = new block(95,37,30,40);
    Block3 = new block(80,37,30,40);
    Block4 = new block(140,37,30,40);
    Block5 = new block(155,37,30,40);
    Block6 = new block(170,37,30,40);
    Block7 = new block(95,17,30,40);
    Block8 = new block(110,17,30,40);
    Block9 = new block(125,17,30,40);
    Block10 = new block(140,17,30,40);
    Block11 = new block(155,17,30,40);
    Block12 = new block(170,17,30,40);
    Block13 = new block(140,-3,30,40);
    Block14 = new block(110,-3,30,40);
    Block15 = new block(125,-3,30,40);
    Block16 = new block(125,-23,30,40);

    slingshot = new Slingshot(player.body,{x:100,y:20});
}


function draw() {
    Engine.update(engine);
    background(52,0,0);
    
   GROUND.display();
   player.display();
   fill("blue");
   Block.display();
   Block1.display();
   Block2.display();
   Block3.display();
   Block4.display();
   Block5.display();
   Block6.display();
   Block7.display();
   fill("blue");
   Block8.display();
   Block9.display();
   Block10.display();
   Block11.display();
   
   //Block12.display();
   Block13.display();
   Block14.display();
   Block15.display();
   Block16.display();

   slingshot.display();
}

function mouseDragged() {
    Matter.Body.setPosition(player.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    slingshot.fly();
}