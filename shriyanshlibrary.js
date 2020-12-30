//library file 
//to write the objects which we want to make bounce with each other
function bounceOff(b1, b2) {
    //to make them bounce off vertically and horizontally
    if (b2.x-b1.x < b1.width/2+b2.width/2 && 
      b1.x-b2.x < b1.width/2+b2.width/2 )
      {
        //to make them go reverse when they are touching each other
        b1.velocityX = b1.velocityX*(-1)
        b2.velocityX = b2.velocityX*(-1)
      }
      if (b2.y-b1.y < b1.height/2+b2.height/2 &&
      b1.y-b2.y < b1.height/2+b2.height/2) 
      {
     b1.velocityY = b1.velocityY*(-1)
     b2.velocityY = b2.velocityY*(-1)
      }
    }