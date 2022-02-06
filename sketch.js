var sueloimg;
var sueloinvicible;
var suelo;
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
sueloimg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex = createSprite(150,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5;
 suelo = createSprite(200,180,400,20);
 suelo.addImage(sueloimg);
 suelo.velocityX = -5;
 sueloinvicible = createSprite(200,190,400,10);
}

function draw(){
  background("white");
  console.log(trex.y);
  if (suelo.x<0){
    suelo.x =suelo.width/2;
  }
  if (keyDown("space")&& trex.y >=155){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY +0.5;
  trex.collide(sueloinvicible);
  sueloinvicible.visible = false;
  drawSprites();

}
