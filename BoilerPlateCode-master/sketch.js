var player 
var target
var obs1
var obs2
var edges
function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
   player=createSprite(100,580,20,20);
   target=createSprite(580,100,20,20);
   target.shapeColor="blue";
   obs1=createSprite(300,120,100,20);
   obs1.shapeColor="red";
   obs2=createSprite(300,320,100,20);
   obs2.shapeColor="red";
   obs1.velocityX=5;
   obs2.velocityX=-5;
   edges=createEdgeSprites();
}

function draw() {
  background("black"); 
  if (keyDown("up")){
    player.y=player.y-3;
  }
  if (keyDown("down")){
    player.y=player.y+3;
  }
  if (keyDown("left")){
    player.x=player.x-3;
  }
  if (keyDown("right")){
    player.x=player.x+3;
  }
  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  if (player.isTouching(target)){
    text("You won",200,200);
  }
  if (player.isTouching(obs1)){
    text("You lose",200,200)
    obs1.velocityX=obs1.velocityX*0
    obs2.velocityX=obs2.velocityX*0
    player.x=player.x*0
    player.y=player.y*0
  }
  if (player.isTouching(obs2)){
    text("You lose",200,200);
    obs1.velocityX=obs1.velocityX*0
    obs2.velocityX=obs2.velocityX*0
    player.x=player.x*0
    player.y=player.y*0
  }
  drawSprites() 
  
}
