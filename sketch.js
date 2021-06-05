var player 
var worm
var wormGroup
var score=0
var backgroundImage
var background
var swampImage
var swamp
function preload() {
  //load game assets
  swampImage=loadImage("images/swampImg.png")
  playerImage=loadImage("images/frog.png");
  wormImage=loadImage("images/worm.png");
}


function setup() {
  createCanvas(600,600);
  swamp = createSprite(300,300); 
  swamp.scale=2.5;
  swamp.addImage(swampImage);
  player=createSprite(50,550);
  player.scale=0.3;
  player.addImage(playerImage);
  wormGroup=new Group()
  
   
}
function generateWorms(){
  if(frameCount%20==0){
  worm=createSprite(300,200);
  worm.scale=0.3;
  worm.shapeColor="green";
  worm.velocityX=random(-4,4);
  worm.velocityY=random(-4,4);
  wormGroup.add(worm);
  worm.addImage(wormImage);
  }

}

function draw() {
  background("black");
  noFill() 
  stroke("red");
  ellipse(300,200,40,30);
  player.x=mouseX;
  player.y=mouseY;
  if(player.x>270 && player.x<330 && player.y>170 && player.y<230){
    player.x=30
    player.y=500
    text("no cheating ",520,40)
  }
  textSize(20)
  text("worm destroyed "+score,50,50)
  generateWorms()
  for (var i=0;i<wormGroup.length;i++){
    var temp=wormGroup.get(i)
    if (temp.isTouching(player)){
      temp.destroy()
      score+=1
      temp=null
    }
  }
  drawSprites() 
  
}
