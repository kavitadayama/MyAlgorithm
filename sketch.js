var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,100,50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(100,100,50,50);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log(movingRect.width/2 + fixedRect.width/2);
  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}