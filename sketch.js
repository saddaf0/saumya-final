var player , playerAnimation , playerReverseAnimation;
var playerDieAnimation;
var  playerShootingAnimation, playerShootingReverseAnimation
var zombie, zombieAnimation1, zombieAnimation1Reverse;
var zombieAnimation2, zombieAnimation2Reverse;
var zombieDieAnimation1, zombieDieAnimation1Reverse;
var zombieDieAnimation2, zombieDieAnimation2Reverse;
var bullet , bulletReverse;


function preload(){
  playerAnimation = loadAnimation ("assets/p1.png");
  playerReverseAnimation = loadAnimation ("assets/pr1.png");
  playerShootingAnimation = loadAnimation("assets/playerShoot.png");
  playerShootingReverseAnimation = loadAnimation("assets/shooterR1.png");
zombieAnimation1 = loadAnimation("assets/z1.png","assets/z2.png","assets/z3.png","assets/z4.png");
zombieAnimation1Reverse = loadAnimation("assets/z1R.png","assets/z2R.png","assets/z3R.png","assets/z4R.png");
zombieAnimation2 = loadAnimation("assets/z11.png","assets/z12.png","assets/z13.png");
zombieAnimation2Reverse = loadAnimation("assets/z11R.png","assets/z12R.png","assets/z13R.png");
zombieDieAnimation1 = loadAnimation("assets/zdie.png");
zombieDieAnimation1Reverse = loadAnimation("assets/zdieR.png");
zombieDieAnimation2 = loadAnimation("assets/z2die.png");
zombieDieAnimation2Reverse = loadAnimation("assets/z2dieR.png");
bulletImage = loadImage ("assets/bullet.png");
bulletImageReverse = loadImage ("assets/bulletReverse.png");

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  player = createSprite(400, 200, 50, 50);
  player.addAnimation ("playerR",playerReverseAnimation);
  player.addAnimation ("playerS",playerShootingAnimation);
  player.addAnimation ("playerSR",playerShootingReverseAnimation);
  zombie1sGroup = createGroup();
 zombie3sGroup = createGroup();
 bulletsGroup = createGroup();
}
function draw() {
  background(0);  
  if (keyDown("RIGHT")){
    player.changeAnimation ("playerR",playerReverseAnimation);
    player.x+=3;
  }
  if (keyDown("LEFT")){
    player.changeAnimation ("player",playerAnimation);
    player.x-=3;
  }
  if (keyWentDown("SPACE")){
    player.changeAnimation ("playerSR",playerShootingReverseAnimation);
   spawnbullet()
  }
  if (keyWentUp("SPACE")){
    player.changeAnimation ("player",playerAnimation);
  }
 
  if (keyDown("UP")){
    player.y -= 3;
  }
  if (keyDown("DOWN")){
    player.y += 3;
  }
if(bulletsGroup.isTouching(zombie1sGroup)){
  zombie1sGroup[0].destroy();
  bulletsGroup[0].destroy()
}
if(bulletsGroup.isTouching(zombie3sGroup)){
  zombie3sGroup[0].destroy();
  bulletsGroup[0].destroy()
}

 spawnz1();
 spawnz3() ;

  drawSprites();

}
function spawnz1() {
  //write code here to spawn the zombie1s
  if (frameCount % 80 === 0) {
    var zombie1 = createSprite(width,120,40,10);
    zombie1.y = Math.round(random(80,height-50));
    zombie1.addAnimation("zombie",zombieAnimation1Reverse);
    zombie1.scale = 1.5;
    zombie1.velocityX = -3;
    
     //assign lifetime to the variable
    zombie1.lifetime = 600;
    
    //adjust the depth
    
    
    //add each zombie1 to the group
   zombie1sGroup.add(zombie1);
  }
  
}
function spawnz3() {
  //write code here to spawn the zombie1s
  if (frameCount % 120 === 0) {
    var zombie3 = createSprite(width,120,40,10);
    zombie3.y = Math.round(random(80,height-50));
    zombie3.addAnimation("zombie",zombieAnimation2Reverse);
    zombie3.scale = 1.5;
    zombie3.velocityX = -3;
    
     //assign lifetime to the variable
    zombie3.lifetime = 600;
    
    //adjust the depth
    
    
    //add each zombie1 to the group
    zombie3sGroup.add(zombie3);
  }
  
}
function spawnbullet() {
  bullet = createSprite(450,200,40,10);
     
     bullet.addImage("bullet",bulletImage);
     bullet.scale = 0.05;
     bullet.velocityX = 3;
 bullet.y=player.y
    
     
     //add each zombie1 to the group
    bulletsGroup.add(bullet);
   
   
 }
 
 
 