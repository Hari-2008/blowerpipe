const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(350,200,50);
  blower = new Blower(400,200,100,100);
  blowerMouth = new BlowerMouth(300,240,100,20)
   
}
  

function draw() {
  
  background(255,255,255);  

  Engine.update(engine);

  ball.show();
  blower.show();
  blowerMouth.show();
  
 button = createButton("clickblow");
 button.position(width/2,height - 100);
 button.class("blowbutton");
 button.mousePressed(blow);


}
function blow(){
  Matter.Body.applyForce(ball.body,{x:0 , y:0} ,{x:0 , y:0.10});
}