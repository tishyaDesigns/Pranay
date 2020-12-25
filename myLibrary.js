function isTouching(ob1,ob2){
    if(ob1.x - ob2.x <= ob1.width/2 + ob2.width/2 
      && ob2.x - ob1.x <= ob1.width/2 + ob2.width/2 
      && ob1.y - ob2.y <= ob1.height/2 + ob2.height/2 
      && ob2.y - ob1.y <= ob1.height/2 + ob2.height/2){
        return true;
      }else{
        return false;
      }
  }
  function bounceOff(r1,r2){
    if(r1.x - r2.x < r1.width/2 + r2.width/2 
      && r2.x - r1.x < r1.width/2 + r2.width/2){
        r1.velocityX = (-1) * r1.velocityX;
        r2.velocityX = (-1) * r2.velocityX;
      }
  
     if(r1.y - r2Rect.y < r1.height/2 + r2.height/2 
      && r2.y - r1Rect.y < r1.height/2 + r2.height/2) {
        r1.velocityY = (-1) * r1.velocityY;
        r2.velocityY = (-1) * r2.velocityY;
      }
  }