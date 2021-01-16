const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
var box1,box2,ball,groudon,engine,world;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new box(200,300,20,50);
  box2 = new box(190,100,20,50);
  groundon = new ground(200,390,400,20);
  
  
  
}

function draw() {
  background(0); 
 Engine.update(engine);
 box1.display()
 box2.display()
 groundon.display()
 //ellipseMode(RADIUS);
 //ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
}