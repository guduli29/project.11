console.log()
var ship,ship_s;
var sea,sea_s;
function preload(){
ship_s= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea_s= loadImage("sea.png")

}

function setup(){
  createCanvas(800,800);
  sea= createSprite(20,20,30,30) 
  sea.addImage("sea",sea_s)
 ship= createSprite(50,300,50,50)
 ship.addAnimation("travelling",ship_s)
 
 ship.scale= 0.5;
 ship.x= 300;
 
}

function draw() {
  
  background("blue");
  
if(keyDown("space")){
  ship.velocityX=+2;
}

if(sea.x<0){ sea.x= sea.width/2}

  drawSprites();
  
 
}