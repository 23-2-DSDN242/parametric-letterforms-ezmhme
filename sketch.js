const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 80,
  "offsetx": 300,
  "offsety": 0
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0
}

const backgroundColor  = "#f5e6e8";
const lavender  = "#aaa1c8";
const thistle = "#d5c6e0";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight/ 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x/5, center_y-100, letterA);
  //drawLetter(center_x, center_y, letterB);
  //drawLetter(center_x, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  noStroke();
  fill(lavender)
  triangle(posx+10, posy+200, pos2x-10, pos2y+200, 245, 130); //letter a large triangle
  
  fill(lavender)
  arc(pos2x+50, pos2y+40, 200, 115, 4.71, 1.57, CHORD);
  arc(pos2x+50, pos2y+140, 200, 115, 4.71, 1.57, CHORD); //letter b large arcs
  
  fill(thistle);
  triangle(posx+80, posy+200, pos2x-80, pos2y+200, 245, 240); //letter a small triangle

  arc(pos2x+55, pos2y+40, 100, 50, 4.71, 1.57, CHORD);
  arc(pos2x+55, pos2y+140, 100, 50, 4.71, 1.57, CHORD); //letter b small arcs

  fill(lavender)
  arc(780, 250, 300, 225, 1.57, 4.71, CHORD);
  fill(thistle)
  quad(780, 275, 780, 225, 700, 225, 700, 275); // letter c arc and quad

  //I coded my sketch entirely wrong so essentially my sketch was just for initial concept visualisation
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
