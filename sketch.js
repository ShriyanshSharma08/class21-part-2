//both variables declared
var rect1, rect2;

function setup() {
  createCanvas(1200,800);

  //to move horizontally x axis poition should be same and to move vertically y axis position should be same
  rect1 = createSprite(500, 600, 50, 80);
  rect1.shapeColor = 'green';
  //and velocities should also be different while changing x and y position
  rect1.velocityX=-2;

  rect2 = createSprite(100,600,30,50);
  rect2.shapeColor = 'green';
  rect2.velocityX = 2;
}

function draw() {
  background(0);  
  
  //to write parameters which we want to make bounce off
  bounceOff(rect1, rect2);

  drawSprites();
}

