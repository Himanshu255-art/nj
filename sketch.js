
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 7000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	a=new boy(320,500,10,10)

	Stone=new stone(1,139,28)

	c=new mango(560,190,30);

	k=new tree(480,30,370,600)

	n=new mango(430,90,30)                                               
	z=new mango(360,100,30)

	m=new mango(420,50,40)
	sw=new mango(499,110,30)
	ed=new mango(460,20,30)
	po=new mango(440,70,40)

	yy=new mango(480,100,40)

	gt=new Ground(0,620,3000,10)

	ak=new mango(400,160,30)
	ss=new mango(400,130,30)

	tsb=new SlingShot(Stone.body,{x:60,y:500})   
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  background(201);
  Engine.update(engine)
  textSize(28)
  text("Press space to get a second chance to play",100,60)



  

  
a.display();
Stone.display();
c.display();
k.display();
n.display();
z.display();
m.display();
sw.display();
ed.display();
po.display();
gt.display();
yy.display();
ak.display();
ss.display();
tsb.display();

}
function mouseDragged(){
  Matter.Body.setPosition(Stone.body,{x:mouseX,y:mouseY})
}


function mouseReleased(){
	tsb.fly();
}



function detectollision(stone,mango){
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=mango.r+stone.r)
  {
	  Matter.body.setStatic(mango.body,false)
  }
}
