var movingsprite,rectsprite

function setup(){
  createCanvas(600,600)
  movingsprite = createSprite(50,50,50,50)
  movingsprite.shapeColor = "blue"
  rectsprite = createSprite(100,100,20,20)
  rectsprite.shapeColor = "blue"
}

function draw(){
  background("black")
  movingsprite.x = mouseX;
  movingsprite.y = mouseY;
  if(movingsprite.x-rectsprite.x<movingsprite.width/2 + rectsprite.width/2 && rectsprite.x-movingsprite.x<movingsprite.width/2 + rectsprite.width/2 && movingsprite.y-rectsprite.y<movingsprite.height/2 + rectsprite.height/2 && rectsprite.y-movingsprite.y<rectsprite.height/2 + movingsprite.height/2){
    movingsprite.shapeColor = "red"
    rectsprite.shapeColor = "red"
  }
  else{
    movingsprite.shapeColor = "blue"
    rectsprite.shapeColor = "blue"
  }
  drawSprites()
}
