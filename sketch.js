var sea = createSprite(100,100,100,100);
var ship = createSprite(200,100,50,50);


function preload(){
seaImg = loadImage("sea.png");
shipAnimation = loadAnimation("ship1.png","ship2.png");
}

function setup(){
  createCanvas(400,400);
  sea.addImage("seaImg");
  ship.addAnimation("shipAnimation");
}

function draw() {
  background("white");

  sea.velocityX = -2

 if(sea.x < 0){
 sea.x = sea.width/2;
 }

  drawSprites();
}