var x = [];
var y = [];
var diameter = [];
var color = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  
  for (var i = 0; i < 100; i++) {
    x[i] = random(20, 80);
    y[i] = random(80, 100);
    diameter[i] = random(20, 200);
    color[i] = color(random(255), random(255), random(255));
  }
}
  
function draw() {
  background(255);
  noStroke();

  // ellipses
for (var i = 0; i < 100; i++) {
	fill(color[i]);
  ellipse(x[i], y[i], diameter[i]);
}
  
  // 1% of the time
  if (random() < 100) {
    // random diameter between 10 and 400
    diameter = random(100, 100);
  }
}
