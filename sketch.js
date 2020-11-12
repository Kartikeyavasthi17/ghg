const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1;

var ground;
var ball;
var shot;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10;
var box11,box12,box13;

function setup() {

  createCanvas(1600,720);

  engine = Engine.create();
  world = engine.world;

  ground =new Ground(820,550,500,20);
  ground1 =new Ground(750,700,1500,20);

  box1 =new Stone(680,500,60,60);
  box2 =new Stone(740,500,60,60);
  box3 =new Stone(800,500,60,60);
  box4 =new Stone(860,500,60,60);
  box5 =new Stone(920,500,60,60);
  box6 =new Stone(980,500,60,60);

  box7 =new Stone(740,400,60,60);
  box8 =new Stone(800,400,60,60);
  box9 =new Stone(860,400,60,60);
  box10 =new Stone(920,400,60,60);

  box11= new Stone(800,300,60,60);
  box12= new Stone(860,300,60,60);

  box13 =new Stone(830,200,60,60);

  ball =new stone(350,530,50);

  shot =new SlingShot(ball.body,{x:350,y:430});


  Engine.run(engine);
}

function draw() {
  background(0,0,0); 
  
  Engine.update(engine);
 
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

  ball.display();

  shot.display();

  ground.display();
  ground1.display();
 

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
  shot.fly();
  }

  function keyPressed()
{

if(keyCode === 32)
{
  Matter.Body.setPosition(ball.body,{x:350,y:430});
  shot.attach(ball.body);
}
}