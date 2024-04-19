/* these are optional special variables which will change the system */
var systemBackgroundColor = "#f5e6e8";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */
const lavender = "#aaa1c8";
const thistle  = "#d5c6e0";
// const strokeColor  = "#ffffff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  // stroke(strokeColor);
  // strokeWeight(2);

  // // determine parameters for second circle
  // let size2 = letterData["size"];
  // let pos2x = 50  + letterData["offsetx"];
  // let pos2y = 150 + letterData["offsety"];

  // // draw two circles
  // fill(lavender);
  // ellipse(50, 150, 75, 75);
  // fill(thistle);
  // ellipse(pos2x, pos2y, size2, size2); //og code

  // noStroke();
  // fill(thistle);
  // quad(100, 0, 50, 0, 0, 200, 50, 200);
  // fill(lavender);
  // quad(0, 0, 50, 0, 100, 200, 50, 200); //letter x

  let quadx = letterData["x1"];
  let quady = letterData["y1"];
  let quadx2 = letterData["x2"];
  let quady2 = letterData["y2"];
  let quadbx = letterData["bx1"];
  let quadby = letterData["by1"];


  fill(thistle)
  noStroke();
  quad(quadx, quady, quadx2, quady, quady, quady2, quadx2*2, quady2);
  fill(lavender)
  quad(quadx, quady, quadx2, quady, quadx2*2, quady2, quady2/2, quady2); //letter a

  quad(quadbx, quadby, quadbx+50, quadby, quadbx+50, quadby+200, quadbx, quadby+200); 
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
