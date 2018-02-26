var x = 210;
var y = 290;
var r = 0;

smoke puffs = [];
numsmokeouffs = 100;


function setup() {
  createCanvas(400, 400);
  
  for (i = 0; i < numsmokepuffs; i++) {
  smokepuffs[i] = {
  h : height-100; // smoke height
  sz : random(20,30); // smoke size
  puff : 1; // color
  x : 195;
  
  xvel ; // increment
  }
  }
  
  colorMode(RGB, height, height, height)
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(smokepuffs[i].puff / y);
  rect(195, height, 30, -100);

  // darker as it gets closer to 0
  for (i = 0; i < numsmokepuffs.length; i++) {
  fill(smokepuffs[i].puff);
  rect(195, smokepuffs[i].x, smokepuffs[i].sz, smokepuffs[i].sz);
  sm
  
  
  // up 3 pixels
  y -= 3;
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.05
  
  // if reach past the top a bunch
  if (y < -150) {
    y = 290;
  }
}
