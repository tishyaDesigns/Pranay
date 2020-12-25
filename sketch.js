 function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
 movingRect.shapeColor = "green";

 ChristmasRect = createSprite(1000,400,100,100);
 ChristmasRect.shapeColor = "blue"
 r1Rect= createSprite(100,100,20,20)
 r2Rect= createSprite(500,100,20,20)
 r1Rect.velocityX=5;
 r2Rect.velocityX = -3;

 r1Rect.shapeColor = "yellow";
 r2Rect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
   if(isTouching(movingRect, ChristmasRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
   }else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
   }
   bounceOff(r1Rect, r2Rect);

   drawSprites();
  }

  