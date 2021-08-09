const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var backgroundImg;
var engine, world;
var flake;

function preload() {
  backgroundImg = loadImage("snow3.jpg");
  
  
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  flake = new Snowflake(200, 400);
  
}

function draw() {
 
  background(backgroundImg);
  Engine.update(engine);

  flake.display();
  
}