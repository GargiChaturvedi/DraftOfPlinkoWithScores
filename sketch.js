const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var gameState = "start";
var turns = 10;
var particle, division, line;
var divisionHeight=300;
var score1, score2, score3, score4, score5, score6, score7, score8, score9, score10;
var score = 0;

var divisionPos = [];
var scoreArray = [];

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     division = divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   score1 = Math.round(random(1, 10)) * 50;
   score2 = Math.round(random(1, 10)) * 50;
   score3 = Math.round(random(1, 10)) * 50;
   score4 = Math.round(random(1, 10)) * 50;
   score5 = Math.round(random(1, 10)) * 50;
   score6 = Math.round(random(1, 10)) * 50;
   score7 = Math.round(random(1, 10)) * 50;
   score8 = Math.round(random(1, 10)) * 50;
   score9 = Math.round(random(1, 10)) * 50;
   score10 = Math.round(random(1, 10)) * 50;

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }    
}
 
function mousePressed() {
	if(gameState != "end" && mouseY < 150) {
	  particle = particles.push(new Particle(mouseX, mouseY, 10,10));
	  turns--;
	}
}

function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  textSize(30);
  fill("white");
  text("Turns: " + turns, 30, 30);
  text("Score: " + score, width-150, 30);
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(turns === 0) {
     gameState = "end";
   }

  text(score1, 20, height-100);
  text(score2, 100, height-100);
  text(score3, 180, height-100);
  text(score4, 260, height-100);
  text(score5, 340, height-100);
  text(score6, 420, height-100);
  text(score7, 500, height-100);
  text(score8, 580, height-100);
  text(score9, 660, height-100);
  text(score10, 740, height-100);

   if(gameState === "end") {
     textSize(50);
     fill("lime");
     text("Game Over!", width/2 - 120, height/2 - 150);
   }

   for(var z = 0; z < particles.length; z++) {
    if(particles != []) {
      particles[z].display();
      if(particles[z].body.position.x <= 80 && particles[z].body.position.y >= 780) {
	   World.remove(world, particles[z].body);
       fill(particles[z].color);
       ellipse(particles[z].body.position.x, particles[z].body.position.y, particles[z].r, particles[z].r);
	   score += score1;
      }
      if(particles[z].body.position.x <= 160 && particles[z].body.position.x > 80 && particles[z].body.position.y >= 780) {
	   World.remove(world, particles[z].body);
       fill(particles[z].color);
       ellipse(particles[z].body.position.x, particles[z].body.position.y, particles[z].r, particles[z].r);
	   score += score2;
      }
      if(particles[z].body.position.x <= 240 && particles[z].body.position.x > 160 && particles[z].body.position.y >= 780) {
	   World.remove(world, particles[z].body);
       fill(particles[z].color);
       ellipse(particles[z].body.position.x, particles[z].body.position.y, particles[z].r, particles[z].r);
	   score += score3;
      }
      if(particles[z].body.position.x <= 320 && particles[z].body.position.x > 240 && particles[z].body.position.y >= 780) {
	   World.remove(world, particles[z].body);
	   fill(particles[z].color);
       ellipse(particles[z].body.position.x, particles[z].body.position.y, particles[z].r, particles[z].r);
	   score += score4;
      }
      if(particles[z].body.position.x <= 400 && particles[z].body.position.x > 320 && particles[z].body.position.y >= 780) {
	   World.remove(world, particles[z].body);
	   fill(particles[z].color);
       ellipse(particles[z].body.position.x, particles[z].body.position.y, particles[z].r, particles[z].r);
	   score += score5;
      }
      if(particles[z].body.position.x <= 480 && particles[z].body.position.x > 400 && particles[z].body.position.y >= 780) {
	   World.remove(world, particles[z].body);
	   fill(particles[z].color);
       ellipse(particles[z].body.position.x, particles[z].body.position.y, particles[z].r, particles[z].r);
	   score += score6;
      }
      if(particles[z].body.position.x <= 560 && particles[z].body.position.x > 480 && particles[z].body.position.y >= 780) {
	   World.remove(world, particles[z].body);
	   fill(particles[z].color);
       ellipse(particles[z].body.position.x, particles[z].body.position.y, particles[z].r, particles[z].r);
	   score += score7;
      }
      if(particles[z].body.position.x <= 640 && particles[z].body.position.x > 560 && particles[z].body.position.y >= 780) {
	   World.remove(world, particles[z].body);
	   fill(particles[z].color);
       ellipse(particles[z].body.position.x, particles[z].body.position.y, particles[z].r, particles[z].r);
	   score += score8;
      }
      if(particles[z].body.position.x <= 720 && particles[z].body.position.x > 640 && particles[z].body.position.y >= 780) {
	   World.remove(world, particles[z].body);
	   fill(particles[z].color);
       ellipse(particles[z].body.position.x, particles[z].body.position.y, particles[z].r, particles[z].r);
	   score += score9;
      }
      if(particles[z].body.position.x <= 800 && particles[z].body.position.x > 720 && particles[z].body.position.y >= 780) {
	   World.remove(world, particles[z].body);
	   fill(particles[z].color);
       ellipse(particles[z].body.position.x, particles[z].body.position.y, particles[z].r, particles[z].r);
	   score += score10;
      }
     }
   }
}