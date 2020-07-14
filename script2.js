/* global random, createCanvas, mouseX, mouseY, rect, background, noStroke, fill, width, line, stroke, strokeWeight, ellipse, keyIsPressed, keyCode, LEFT_ARROW,  RIGHT_ARROW*/

var r, g, b, randomSize;

function setup(){
  createCanvas(800, 500);
  background(0,0,0);
}

function mouseDragged(){
  noStroke(); 
  fill(r, g, b);
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  randomSize
  ellipse(mouseX, mouseY, randomSize);
  randomSize = random(1, 101);
  
}

/*
function mouseDragged(){
  noStroke();
  fill(mouseX/2.5, mouseY/2.5, mouseY/1.5)
  ellipse(mouseX, mouseY, 20, 20);
}
*/
