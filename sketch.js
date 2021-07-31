var sprite
function setup() {
  createCanvas(400,400);
  sprite = createSprite(200,200,10,10)
  sprite.shapeColor = "red"
}
function draw() 
{
  background(30);
drawSprites();
text(mouseX+":"+mouseY,mouseX,mouseY);
if(keyDown("left")){
sprite.x = sprite.x-2;
}
if(keyDown("right")){
  sprite.x = sprite.x+2;
  }
if(keyDown("up")){
  sprite.y = sprite.y-2;
}
if(keyDown("down")){
  sprite.y = sprite.y + 2;
}
}




