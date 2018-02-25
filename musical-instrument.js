// Incorporating the soothing sounds of nature
// How to play intro to 'Kiss the Rain' by Yiruma (https://www.youtube.com/watch?v=imGaOIm5HOk)
// A, S, D, D, F, F
// S, D ,F, D, G, G

var freqA = 144;
var freqS = 196;
var freqD = 220;
var freqF = 246;
var freqG = 290;
var freqQ = 140;
var freqW = 160;

var oscA, oscS, oscD, oscF, oscQ, oscW;

var playingA, playingS, playingD, playingF, playingQ, playingW;

var playing = false;

function preload() {
	rain = loadSound('assets/rain.mp3');
  ocean = loadSound('assets/ocean.mp3')
  }

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  backgroundColor = color(10, 10, 15);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('sine');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('sine');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('sine');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('sine');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
  
  oscG = new p5.Oscillator();
  oscG.setType('sine');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
  
  oscQ = new p5.Oscillator();
  oscQ.setType('sine');
  oscQ.freq(freqQ);
  oscQ.amp(0);
  oscQ.start();
  
  oscW = new p5.Oscillator();
  oscW.setType('sine');
  oscW.freq(freqW);
  oscW.amp(0);
  oscW.start();
}

function draw() {
  if (playing) {
background(0, 255, 255);
	  } else {
	    background(255, 0, 255);
	  }
}


function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    rain.play();
    rain.setVolume(0.1);
    playingA = true;
  } else if (key == 'S') {
    osc = oscS;
    playingS = true;
  } else if (key == 'D') {
    osc = oscD;
    playingD = true;
  } else if (key == 'F') {
    osc = oscF;
    playingF = true;
  } else if (key == 'G') {
    osc = oscG;
    playingF = true;
  } else if (key == 'Q') {
    osc = oscQ;
    playingQ = true; 
  } else if (key == 'W') {
    osc = oscW;
    ocean.play();
    ocean.setVolume(0.1);
    playingW = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    playingA = false;
  } else if (key == 'S') {
    osc = oscS;
    playingS = false;
  } else if (key == 'D') {
    osc = oscD;
    playingD = false;
  } else if (key == 'F') {
    osc = oscF;
    playingF = false;
  } else if (key == 'G') {
    osc = oscG;
    playingG = false;
  } else if (key == 'Q') {
    osc = oscQ;
    playingQ = false;
  } else if (key == 'W') {
    osc = oscW;
    playingW = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playingA = false, playingS = false, playingD = false, playingF = false
    playingQ = false, playingW = false, playingG = false;
  }
}

function draw() {
	  background(10);
	  colorMode(RGB);
	  if (playingA) {
		line(30, 20, 30, 100);
    line(70, 50, 70, 130);
    line(30, 150, 30, 250);
    line(70, 170, 70, 300);
		line(110, 20, 110, 100);
    line(150, 50, 150, 130);
    line(110, 150, 110, 250);
    line(150, 170, 150, 300);
    line(190, 20, 190, 100);
    line(230, 50, 230, 130);
    line(190, 150, 190, 250);
    line(230, 170, 230, 300);
    line(270, 20, 270, 100);
    line(310, 50, 310, 130);
    line(270, 150, 270, 250);
    line(310, 170, 310, 300);
		stroke(206);
	  }
	  if (playingS) {
		line(50, 20, 50, 90);
    line(120, 50, 120, 130);
    line(50, 170, 50, 250);
    line(120, 170, 120, 300);
    line(190, 20, 190, 90);
    line(260, 50, 260, 130);
    line(190, 170, 190, 250);
    line(260, 170, 260, 300);
    line(330, 20, 330, 90);
    line(400, 50, 400, 130);
    line(330, 170, 330, 250);
    line(400, 170, 400, 300);
		stroke(206);
	  }
	  if (playingD) {
		line(70, 20, 70, 90);
    line(140, 50, 140, 130);
    line(70, 170, 70, 250);
    line(140, 170, 140, 300);
    line(210, 20, 210, 90);
    line(280, 50, 280, 130);
    line(210, 170, 210, 250);
    line(280, 170, 280, 300);
    line(350, 20, 350, 90);
    line(420, 50, 420, 130);
    line(350, 170, 350, 250);
    line(420, 170, 420, 300);
	  }
	  if (playingF) {
		line(30, 20, 30, 100);
    line(70, 50, 70, 130);
    line(30, 150, 30, 250);
    line(70, 170, 70, 300);
		line(110, 20, 110, 100);
    line(150, 50, 150, 130);
    line(110, 150, 110, 250);
    line(150, 170, 150, 300);
    line(190, 20, 190, 100);
    line(230, 50, 230, 130);
    line(190, 150, 190, 250);
    line(230, 170, 230, 300);
    line(270, 20, 270, 100);
    line(310, 50, 310, 130);
    line(270, 150, 270, 250);
    line(310, 170, 310, 300);
		stroke(206);
	  }
 	 if (playingQ) {
		line(50, 20, 50, 90);
    line(120, 50, 120, 130);
    line(50, 170, 50, 250);
    line(120, 170, 120, 300);
    line(190, 20, 190, 90);
    line(260, 50, 260, 130);
    line(190, 170, 190, 250);
    line(260, 170, 260, 300);
    line(330, 20, 330, 90);
    line(400, 50, 400, 130);
    line(330, 170, 330, 250);
    line(400, 170, 400, 300);
		stroke(206);
  }
   	 if (playingW) {
		line(70, 20, 70, 90);
    line(140, 50, 140, 130);
    line(70, 170, 70, 250);
    line(140, 170, 140, 300);
    line(210, 20, 210, 90);
    line(280, 50, 280, 130);
    line(210, 170, 210, 250);
    line(280, 170, 280, 300);
    line(350, 20, 350, 90);
    line(420, 50, 420, 130);
    line(350, 170, 350, 250);
    line(420, 170, 420, 300);
  }
	}
