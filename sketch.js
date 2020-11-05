const Engine = Matter.Engine;

const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, ball, ground;

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();

  world = engine.world;
  var ground_options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(200, 390, 800, 20, ground_options);
  World.add(world, ground);

  var ball_option = {
    restitution: 1.0,
  };
  ball = Bodies.circle(200, 200, 20, ball_option);
  World.add(world, ball);
}

function draw() {
  background("black");
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);
}
