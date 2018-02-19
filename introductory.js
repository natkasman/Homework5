var x = 45;
var y = 50;
velocityX = 8;
velocityY = 9;

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(0);
  noStroke();

  // draw ellipse
  ellipse(x, y, 10);
  
  // move right 3 pixels
  x = x + velocityX;
  
  // move down 1 pixel
  y = y + velocityY;
  // print("(x, y) = ", x, ' ', y);
  
  if (x > width || x < 0 ) {
    velocityX = -velocityX;
  }
  
  if (y > height || y < 0) {
    velocityY = -velocityY;
  }
}
