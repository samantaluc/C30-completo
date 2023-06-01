const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;

var bg_img;
var food;
var rabbit;

var button;
var bunny; // adicionar <<<<<<<<<<<<<<<<<<

function preload()  {
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  //btn 1
  button = createImg('cut_btn.png'); // adicionar <<<<<<<<<<<<<<<<<<
  button.position(200,30);// adicionar <<<<<<<<<<<<<<<<<<
  button.size(50,50);// adicionar <<<<<<<<<<<<<<<<<<
  button.mouseClicked(drop); // adicionar <<<<<<<<<<<<<<<<<<
  rope = new Rope(8,{x:220,y:30});
  ground = new Ground(200,690,600,20);
  bunny = createSprite(200,620,100,100);// adicionar <<<<<<<<<<<<<<<<<<
  bunny.addImage(rabbit);// adicionar <<<<<<<<<<<<<<<<<<
  bunny.scale = 0.2;// adicionar <<<<<<<<<<<<<<<<<<
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);
  fruit_con = new Link(rope,fruit);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}
function draw() {
  background(51);
  image(bg_img,width/2,height/2,490,690);
  push();
  imageMode(CENTER);
  if(fruit!=null){// adicionar <<<<<<<<<<<<<<<<<<
    image(food,fruit.position.x,fruit.position.y,70,70);
  }// adicionar <<<<<<<<<<<<<<<<<<
  pop();
  rope.show();
  Engine.update(engine);
  ground.show();
  drawSprites();
}
function drop() { // adicionar <<<<<<<<<<<<<<<<<<
  rope.break(); // adicionar <<<<<<<<<<<<<<<<<<
  fruit_con.detach(); // adicionar <<<<<<<<<<<<<<<<<<
  fruit_con = null; // adicionar <<<<<<<<<<<<<<<<<<
}
