const Engine=Matter.Engine;
const World =Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground,box1,box2;










function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  box1=new Box(200,100,50,50);
  box2=new Box(100,100,20,20);
  ground=new Ground(400,380,800,20);
}

function draw() {
  background(0);
  Engine.update(engine);
 box1.display();
 box2.display();
 ground.display();
  drawSprites();
}