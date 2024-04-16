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

const yellow  = "#aaa1c8";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";
const thistle = "#d5c6e0";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

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
  // drawLetter(center_x, center_y, letterB);
  // drawLetter(center_x, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(yellow);
  noStroke();
  triangle(posx+10, posy+200, pos2x-10, pos2y+200, 245, 130);
  fill(thistle);
  triangle(posx+80, posy+200, pos2x-80, pos2y+200, 245, 240);
  // square(posx, posy, 200);
  //fill(lightGreen);
  //square(pos2x, pos2y, size2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
