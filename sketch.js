const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score=0;

function preload(){
//polygonImg=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

text("SCORE : " +score,750,40);

    ground1=new Ground(605,400,170,10)
    ground2=new Ground(850,300,170,10)
    
ball=new Ball(150,500,50)
slingshot=new Slingshot(ball.body,{x:150,y:400})


    block1=new Box(600,370,30,50);
    block2=new Box(630,370,30,50);
    block3=new Box(660,370,30,50);
    block4=new Box(570,370,30,50);
    block5=new Box(540,370,30,50);
    block6=new Box(615,320,30,50);
    block7=new Box(645,320,30,50);
    block8=new Box(585,320,30,50);
    block9=new Box(555,320,30,50);
    block10=new Box(570,270,30,50);
    block11=new Box(600,270,30,50);
    block12=new Box(630,270,30,50);
    block13=new Box(585,220,30,50);
    block14=new Box(615,220,30,50);
    block15=new Box(600,170,30,50)

    block16=new Box(850,270,30,50);
    block17=new Box(880,270,30,50);
    block18=new Box(910,270,30,50);
    block19=new Box(820,270,30,50);
    block20=new Box(790,270,30,50);
    block21=new Box(865,220,30,50);
    block22=new Box(895,220,30,50);
    block23=new Box(835,220,30,50);
    block24=new Box(805,220,30,50);
    block25=new Box(820,170,30,50);
    block26=new Box(850,170,30,50);
    block27=new Box(880,170,30,50);
    block28=new Box(835,120,30,50);
    block29=new Box(865,120,30,50);
    block30=new Box(850,70,30,50);
    

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();

    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();
    block29.score();
    block30.score();

  

    console.log(ball)
}

function draw(){
background(0)
//background(0,random(0,255),0)
Engine.run(engine)
ground1.display();
ground2.display();



ball.display();
slingshot.display();


block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();

block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
block27.display();
block28.display();
block29.display();
block30.display();


}

function mouseDragged(){
    Matter.Body.setPosition(ball.Body,{x: mouseX,y: mouseY});
}


function mouseReleased(){
   slingshot.fly();
}

function keyPressed(){
    if(keyCode==32){
        slingshot.attach(ball.body)
    }
}