
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var play;

function preload(){

}

function setup() {
  createCanvas(1536, 750);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);


  
  

  
  ball = new Ball(70, 10, 40)

  //slab = new Slab(600,300,300,20);
  slab2 = new Slab(10, 400, 20, 900);
  slab3 = new Slab(1000, 740, 2000, 20);
  slab4 = new Slab(1526, 500, 20, 1000);
  slab5 = new Slab(700, 10, 1700, 20);

  slab6 = new Slab(130,220,20,400);
  slab7 = new Slab(130,600,20,260);

  slab8 = new Slab(240,450,20,560);
  slab81 = new Slab(240,70,20,100);
  slab9 = new Slab(360,320,20,600);
  slab91 = new Slab(360,700,20,60);  
  slab10 = new Slab(480,199,20,358);
  slab101 = new Slab(480,582,20,296),
  slab11 = new Slab(600,405,20,650);
  slab12 = new Slab(720,345,20,650);
  slab13 = new Slab(840,270,20,500);
  slab131 = new Slab(840,655,20,150);
  slab14 = new Slab(905,550,10,100);
  slab141 = new Slab(875,590,50,20);
  slab15 = new Slab(780,550,10,100);
  slab151 = new Slab(808,590,44,20);
  slab16 = new Slab(1200,220,20,100);
  slab17 = new Slab(1320,220,20,100);
  slab171 = new Slab(1260,280,100,20);







}



function draw() {
  rectMode(CENTER);
  background("White");
  Engine.update(engine);

  ball.display();
  
  slab2.display();
  slab3.display();
  slab4.display();
  slab5.display();
  slab6.display();
  slab7.display();
  slab8.display();
  slab81.display();
  slab9.display();
  slab91.display();
  slab10.display();
  slab101.display();
  slab11.display();
  slab12.display();
  slab13.display();
  slab131.display();
  slab14.display();
  slab141.display();
  slab15.display();
  slab151.display();
  slab16.display();
  slab17.display();
  slab171.display();

  fill("Grey");
  textSize(25);
  text("Jump Box Level 2",500,60);

  fill("Grey");
  textSize(35);
  text("👇",1240,150);

  fill("Blue");
  textSize(25);
  text("By:Akshat Malik",1170,60);

  fill("Grey");
  textSize(20);
  text("This Game Is Still Under Development!",1100,330);

  




  drawSprites();
}


function keyPressed() {
  if (keyCode === UP_ARROW) { Matter.Body.applyForce(ball.body, ball.body.position, { x: 0, y:-25 });
text.hide() }
  if (keyCode === DOWN_ARROW) { Matter.Body.applyForce(ball.body, ball.body.position, { x: 0, y: 25 }); }
  if (keyCode === LEFT_ARROW) { Matter.Body.applyForce(ball.body, ball.body.position, { x: -25, y: 0 }); }
  if (keyCode === RIGHT_ARROW) { Matter.Body.applyForce(ball.body, ball.body.position, { x: 25, y: 0 }); }
}











