
var engine, world;
var dustbin1,dustbin2,dustbin3;
var ground,paperobject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
  paperobject=new Paper (355,200,30)
    dustbin1=new Dustbin(890,300,50,150);
    dustbin2=new  Dustbin(1000,350,150,50);
    dustbin3=new  Dustbin(1110,300,50,150);



	ground = new Ground(600,height,1200,20)
	

	
	

	
	

	//Create a Ground
	
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 

 
 


  Engine.update(engine);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 ground.display();
 paperobject.display();
  drawSprites();
 
}
function keyPressed(){

  if(keyCode===UP_ARROW){
  console.log ("key")

    Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-170});
    
  
  }
  
   }




