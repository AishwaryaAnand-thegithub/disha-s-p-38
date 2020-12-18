var bird, ground;
var obstacles;
var life = 5;
var wallpaper;
var wallpaperImg;

function preload(){
wallpaperImg = loadImage("wallpaper.jpg");
}


function setup() {
  createCanvas(2300,800);

  wallpaper = createSprite(1150,200, 2300,800 );
  wallpaper.addImage(wallpaperImg);
  wallpaper.scale = 1.7;
 // wallpaper.velocityX = -7;
  //wallpaper.x = wallpaper.width/2;

bird = createSprite(100,400,50,50);
bird.shapeColor = "red";

ground = createSprite(-100,700,displayWidth*5+50,50);
ground.shapeColor = "brown";
ground.visible = false;

obstaclesGroup = new Group();

}

function draw() {
  background(220); 
  
  textSize(40);
  fill("black");
  
  //text(mouseX + "," + mouseY, mouseX, mouseY);
  //wallpaper.velocityX = -7;
  /*if (wallpaper.x < 0){
    wallpaper.x = wallpaper.width/2;
  }*/

  if(keyWentDown(UP_ARROW)){
    bird.velocityY = -20 ;
  }

  if(obstaclesGroup.isTouching(bird)){
    bird.setVelocity = 0;
     // life--;
  }


  bird.velocityY = bird.velocityY + 0.8;

  bird.collide(ground);

 spawnObstacles();

  drawSprites();
  text("Lives: " + life, 2150, 150);

}
function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(displayWidth + 300,300,60,60);
    obstacle.y = random(450,550);
    obstacle.velocityX = -5;
    
     //assign lifetime to the variable
    //obstacle.lifetime = 1000;
         
    //add each obstacle to the group
    //obstaclesGroup.add(obstacle);
  }
  
}
function keyPressed(){
  if(keyIsDown(RIGHT_ARROW)){
    bird.x += 10;
    camera.position.x = bird.x;
    //camera.position.y = 800;
  }
}