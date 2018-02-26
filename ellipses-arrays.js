var x = [];
var y = [];
var diameter = [];
var color = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  
  for (var i = 0; i < 100; i++) {
    x[i] = random(180, 200);
    y[i] = random(180, 200);
    diameter[i] = random(360, 390);
    color[i] = color(random(255));
  }
}
  
function draw() {
  background(5);
  noStroke();

  // ellipses
for (var i = 0; i < 50; i++) {
fill(color[i]);
ellipse(x[i], y[i], diameter[i]);

if (random() < 50) {
diameter[i] = random(300, 390);
    }
}
}
