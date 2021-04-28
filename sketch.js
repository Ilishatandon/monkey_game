
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600) 
monkey=createSprite(50,300,20,20)
monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1
  ground=createSprite(400,350,13000,10)
  ground.velocityX=-2
  foodGroup =new Group()
  obstacleGroup = new Group();
  score=0
}


function draw() {
background("pink")
  if(ground.x<100)
    {
      ground.x=400
    }
  if(keyDown("space")){
    monkey.velocityY=-2
  }
  monkey.velocityY+=0.8
  monkey.collide(ground)
  obstacles();
  food();
  drawSprites()
  text("score="+score,400,50)
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0
    monkey.velocityY=0
    obstacleGroup.setVelocityXEach(0)
    obstacleGroup.setLifetimeEach(-1)
    foodGroup.setVelocityXEach(0)
    foodGroup.setLifetimeEach(-1)
  }
}
function obstacles(){
  if(frameCount%100===0){
    obstacle=createSprite(800,325,10,40)
    obstacle.velocityX=-3
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.1
    obstacleGroup.add(obstacle)
  }
  
  
}
function food(){
  if(frameCount%100===0){
    banana=createSprite(800,250,10,40)
    banana.velocityX=-3
    banana.addImage(bananaImage)
    banana.scale=0.1
    foodGroup.add(banana)
  }
}




