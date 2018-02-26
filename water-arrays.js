var x = [];
var y = [];
var ySpeed = []
var diameter = []

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
    for (var i = 0; i < 100; i++) {
    x[i] = 230;
    y[i] = 220;
    ySpeed[i] = random(6, 4);
    diameter[i] = random(10, 2);
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 230, 20);
  
  // draw drip
  for (var i = 0; i < 100; i++) {
    ellipse(x[i], y[i], diameter[i]);
    y[i] = y[i] + ySpeed[i];

//if invisible for a full “height” amount…
    if (y[i] > 400) {
      // reset
      y[i] = 220;
    }
}
}
