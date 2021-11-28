var trex, trex_running, edges;
var groundImage ,ground;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  ground = createSprite(150, 198,  1200, 10)
  ground.velocityX = -2
  // creating trex
  trex = createSprite(50,120,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  
}


function draw(){
  //set background color 
  background("white");
  if(ground.x < 100){
    ground.x = ground.width/2
  }
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(edges[3])
  drawSprites();

}