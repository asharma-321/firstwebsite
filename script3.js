*global textSize, text, createCanvas, background, rect, fill, line, noStroke, width, stroke, strokeWeight, height, ellipse, mouseX, mouseY, random */

function setup() {
  createCanvas(800, 500);
  background(255, 183, 0);
  noStroke();
  fill(0, 81, 255);
  rect(200, 200, 400, 100);
}

function mouseClicked() {
  if (mouseX > 200 && mouseX < 600 && mouseY > 200 && mouseY < 300) {
    background(255, 183, 0);
    fill(0);
    textSize(32);
    text("YAYY", 300, 250);
    fill(255, 0, 0);
    ellipse(200, 300, 50);
  } else {
    background(255, 183, 0);
    noStroke();
    fill(0, 81, 255);
    rect(200, 200, 400, 100);
  }
}
