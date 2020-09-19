var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;
 
var particle
var plinkos = [];
var divisions = [];

var divisionHeight=200;
var score = 0;
var count = 5;

var gameState = "PLAY"
function setup() 
{
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  particle  = new Particle(820,10,10)

  

   for (var k = 0; k <=width; k = k + 80) 
   {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


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
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("Chances :"+count,680,30)
  fill("yellow")
  text("500",20,620)
  text("500",100,620)
  text("500",180,620)
  text("500",260,620)
  text("100",340,620)
  text("100",420,620)
  text("100",500,620)
  text("200",580,620)
  text("200",660,620)
  text("200",740,620)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  
 if(particle !==null)
 {
   particle.display();

   if(particle.body.position.y >760)
   {
     if(particle.body.position.x < 300)
     {
       score = score+500;
       particle=null
       count--
     }
     else if(particle.body.position.x > 301 && particle.body.position.x < 600)
     {
       score = score+100;
       particle=null
       count--
     }
     else if(particle.body.position.x > 601 && particle.body.position.x < 810)
     {
       score = score+200
       particle = null
       count--
     }
   }
 }

 if(count <= 0)
 {
   gameState = "END"
   textSize(60)
   text("GAMEOVER",200,560) 
   if(score>=1875)
   {
     textSize(60)
     fill("pink")
     text("**You Are A Master**",100,480)
   }
   else if(score<1875 && score > 1250)
   {
     textSize(60)
     fill("pink")
     text("**You Are Fantastic**",100,480)
   }
   else if(score<1250 && score > 625)
   {
    textSize(60)
    fill("pink")
    text("*Good Shot*",200,480)
   }
   else if(score<625 && score>0)
   {
    textSize(60)
    fill("pink")
    text("Better Luck Next Time",100,480)
   }
 }
 
}
 
function mousePressed()
{
   if(gameState !== "END")
   {
     particle = new Particle(mouseX,10,10);
   }
}