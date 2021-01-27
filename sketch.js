const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var time = 0;

var ground,bgImg,netImg,net;
var thorImg,thor,ball;
var world;

function setup() {
  createCanvas(1000,600); 
  bgImg = loadImage("bg2.jpg");
  netImg = loadImage("dustbingreen.png");

  thorImg = loadImage("hero.png");

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,590,1300,20);
  base = new Ground(790,290,30,10);
  base2 = new Ground(800,400,15,380);
  base3 = new Ground(780,290,10,40);
  base4 = new Ground(750,305,45,10);
  base5 = new Ground(735,290,10,40);

  ball = new Ball(195,430,20);
  
  sling = new Sling(ball.body,{x:150,y:450});

 
  Engine.run(engine);
}

function draw() {
  background(bgImg);
  
  net = createSprite(750,299,45,10);
  net.addImage(netImg);
  net.scale = 0.3;

  thor = createSprite(190,480,10,10);
  thor.addImage(thorImg);
  thor.scale = 0.2;

  ground.display();
  base.display();
  base2.display();
  base3.display();
  base4.display();
  base5.display();
  sling.display();
  ball.display();
 

  drawSprites();

  time = time+0.05; 

  if(time>=15){
    textSize(25);
    fill("black"); 
    text("YOU LOSE TRY AGAIN",500,200);
    background("red");
    time = time+0;

  }
  

  textSize(30);
  fill("red"); 
  stroke("red");
  strokeWeight(2);
  text("Time :"+time,500,100);

  textSize(20);
  fill("red"); 
  stroke("red");
  strokeWeight(1);
  text("PUT THE BALL IN BASKET IN 15 secs",100,100);

  textSize(20);
  fill(2,4,42); 
  stroke(2,4,42);
  strokeWeight(3);
  text("YOU LOSE RELOAD TO RESTART",30,70);
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode===32){
     sling.attach(ball.body);
  }
}