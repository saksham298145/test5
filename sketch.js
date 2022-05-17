var road
var man
var carG1
var carG2
var carG3
var carG4
var distance=0;
var highestdistance=0
var PLAY=1;
var END=0;
var gameState=1;
function preload(){
  roadImage=loadImage("Road.png")
  runner=loadAnimation("r.gif")
  OverImg=loadImage("Screenshot (97).png")
sedanImage=loadImage("sedan.png")
suvImage=loadImage("suv.png")
truckImage=loadImage("truck.png")
supercarImage=loadImage("supercar.png")
}
function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  
 road=createSprite(200,400);
  road.addImage(roadImage);
  road.velocityX=-8;
 player=createSprite(100,275,20,20)
 player.addAnimation("running",runner)
 player.scale=0.5
 player.velocityX=5
 over=createSprite(150,300)
 over.addImage(OverImg)
 over.scale=0.5
 carG1=new Group()
 carG2=new Group()
 carG3=new Group()
 carG4=new Group()
}
function draw() {
  background(51);
  if(gameState===PLAY){
  
  textSize(20);
  fill(255);
  text("Distance: "+ distance,900,30);
  text("Highest Distance: "+ highestdistance,600,30);
  distance = distance + Math.round(getFrameRate()/50);
  over.visible=false
  
player.y=World.mouseY
  
  edges= createEdgeSprites();
  player.collide(edges);
  drawSprites()
  //code to reset the background
  if(road.x <0){
    road.x = width/2;
  }
  var select_oppPlayer = Math.round(random(1,3));
  
  if (frameCount % 50 == 0) {
    if (select_oppPlayer == 1) {
      Car1();
    } else if (select_oppPlayer == 2) {
      Car2();
    } else if(select_oppPlayer == 3) {
      Car3();
    }
    else{
      Car4()
    }
  }
  if(carG1.isTouching(player)){
    gameState = "END";
    car1.velocityY = 0;
    
   }
   
   if(carG2.isTouching(player)){
     gameState = "END";
     car2.velocityY = 0;
    
   }
   
   if(carG3.isTouching(player)){
     gameState = "END";
     car3.velocityY = 0;
     
   }
   if(carG4.isTouching(player)){
    gameState = "END";
    car4.velocityY = 0;
    
  } 
}else if (gameState === "END") {
   over.visible = true;
   //Add code to show restart game instrution in text here
 text("press Space key",420,20)
 if (keyDown("SPACE"))
{
  reset();
}

   road.velocityX = 0;
   player.velocityY = 0;
   
 
   carG1.setVelocityXEach(0);
   carG1.setLifetimeEach(-1);
 
   carG2.setVelocityXEach(0);
   carG2.setLifetimeEach(-1);
 
   carG3.setVelocityXEach(0);
   carG3.setLifetimeEach(-1);
   carG4.setVelocityXEach(0);
   carG4.setLifetimeEach(-1)
   if (distance>highestdistance){
     highestdistance=distance
   }
  
}

}
function Car1(){
  car1 =createSprite(1100,Math.round(random(50, 250)));
  car1.scale =0.90;
  car1.velocityX = -(60 + 2*distance/150);
  car1.addImage(sedanImage);
  car1.setLifetime=170;
  carG1.add(car1);
}

function Car2(){
 car2=createSprite(1100,Math.round(random(50, 250)));
  car2.scale =0.90;
  car2.velocityX = -(60 + 2*distance/150);
  car2.addImage(suvImage);
  car2.setLifetime=170;
  carG2.add(car2);
}

function Car3(){
  car3 =createSprite(1100,Math.round(random(50, 250)));
  car3.scale =0.90;
  car3.velocityX = (-30+ 2*distance/150);
  car3.addImage(truckImage);
  car3.setLifetime=170;
  carG3.add(car3);
}
function Car4(){
  car4 =createSprite(1100,Math.round(random(50, 250)));
  car4.scale =5;
  car4.velocityX = -(120 + 2*distance/150);
  car4.addImage(supercarImage);
  car4.setLifetime=170;
  carG4.add(car4);
}
function reset(){
  over.visible=false
  gameState="PLAY"
  distance=0
 
  carG1.destroyEach()
  carG2.destroyEach()
  carG3.destroyEach()
  carG4.destroyEach()
}