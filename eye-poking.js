var mySound;
var red_ = 0;
var red_2 = 0;
var sad_ = 375
var sad_2 = 280

var x = 250;
var y = 220;

function preload() {
  soundFormats("wav");
  mySound = loadSound("ouch.wav");
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 400, 400, 100);
}

function mousePressed() {
  if (mouseX > 50 && mouseX < 150 && mouseY > 170 && mouseY < 220) {
    mySound.play();
    red_ = red_ + 60;
    print("clicked");
    sad_ = sad_ - 40
    sad_2 = sad_2 + 40
    if (sad_ <= 100) {
      sad_ = 135
      sad_2 = 520
    }
  }

  if (mouseX > 250 && mouseX < 350 && mouseY > 170 && mouseY < 220) {
    mySound.play();
    red_2 = red_2 + 60;
    print("clicked");
    sad_ = sad_ - 40
    sad_2 = sad_2 + 40
    if (sad_ <= 100) {
      sad_ = 135
      sad_2 = 520
    }
  }

}


function draw() {
  background(45, 280, 100);





  // Left eye
  fill(400, red_, 100);
  bezier(50, 200, 80, 170, 120, 170, 150, 200);
  bezier(50, 200, 80, 220, 120, 220, 150, 200);
  fill(300, 200, 80);
  circle(100, 197, 36);
  fill(400, 0, 0);
  circle(100, 197, 12);

  // Left eye blink
  if (mouseX > 50 && mouseX < 150 && mouseY > 170 && mouseY < 220) {
    if (mouseIsPressed) {
      // mySound.play();
      fill(45, 280, 100);
      bezier(50, 200, 80, 170, 120, 170, 150, 200);
      bezier(50, 200, 80, 220, 120, 220, 150, 200);
      line(50, 200, 150, 200);
      // red = red + 60;
    }
  }

  // Right eye
  fill(400, red_2, 100);
  bezier(250, 200, 280, 170, 320, 170, 350, 200);
  bezier(250, 200, 280, 220, 320, 220, 350, 200);
  fill(300, 200, 80);
  circle(300, 197, 36);
  fill(400, 0, 0);
  circle(300, 197, 12);

  // Right eye blink
  if (mouseX > 250 && mouseX < 350 && mouseY > 170 && mouseY < 220) {
    if (mouseIsPressed) {
      // mySound.play();
      fill(45, 280, 100);
      bezier(250, 200, 280, 170, 320, 170, 350, 200);
      bezier(250, 200, 280, 220, 320, 220, 350, 200);
      line(250, 200, 350, 200);
    }
  }
  // mouth
  noFill();
  let xxx1 = 75,
  xxx2 = 150,
  xxx3 = 250,
  xxx4 = 325;
  let yyy1 = sad_2,
  yyy2 = sad_,
  yyy3 = sad_,
  yyy4 = sad_2;
  bezier(xxx1, yyy1, xxx2, yyy2, xxx3, yyy3, xxx4, yyy4);
  


  // from drip assignment
  fill(250, 200, 100)
  ellipse(x, y, 10);

  y = y + 3

  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 220;
  }
 
}
