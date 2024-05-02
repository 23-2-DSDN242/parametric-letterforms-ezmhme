/* these are optional special variables which will change the system */
var systemBackgroundColor = "#ffe736"; //yellow
var systemLineColor = "#000000";
var systemBoxColor = "#000000";

/* internal constants */
const grey = "#b3b3b3";
const white  = "#ffffff";
const strokeColor  = "#000000"; //colours used in project

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  strokeWeight(1)
  angleMode(DEGREES)

  //determined parameters for each letter
  let quad1x = letterData["1quadx"];
  let quad1y = letterData["1quady"];
  let quad2x = letterData["2quadx"];
  let quad2y = letterData["2quady"];
  let quad3x = letterData["3quadx"];
  let quad3y = letterData["3quady"];
  let quad4x = letterData["4quadx"];
  let quad4y = letterData["4quady"];
  let quad1x2 = letterData["1quadx2"];
  let quad1y2 = letterData["1quady2"];
  let quad2x2 = letterData["2quadx2"];
  let quad2y2 = letterData["2quady2"];
  let quad3x2 = letterData["3quadx2"];
  let quad3y2 = letterData["3quady2"];
  let quad4x2 = letterData["4quadx2"];
  let quad4y2 = letterData["4quady2"];
  let arc1x = letterData["ArcX"];
  let arc1y = letterData["ArcY"];
  let arc2x = letterData["ArcW"];
  let arc2y = letterData["ArcH"];
  let arc1x2 = letterData["ArcX2"];
  let arc1y2 = letterData["ArcY2"];
  let arc2x2 = letterData["ArcW2"];
  let arc2y2 = letterData["ArcH2"];
  let arcStart = letterData["arcStart"];
  let arcEnd = letterData["arcEnd"];
  let arc2Start = letterData["arcStart2"];
  let arc2End = letterData["arcEnd2"];

  fill(white)
  arc(arc1x, arc1y, arc2x, arc2y, arcEnd, arcStart, PIE);
  arc(arc1x2, arc1y2, arc2x2, arc2y2, arc2Start, arc2End, PIE) //drawing 2 arcs of letters
  quad(quad1x2, quad1y2, quad2x2, quad2y2, quad3x2, quad3y2, quad4x2, quad4y2); //drawing white quad

  fill(grey)
  quad(quad1x, quad1y, quad2x, quad2y, quad3x, quad3y, quad4x, quad4y); //drawing grey quad
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["1quadx"]    = map(percent, 0, 100, oldObj["1quadx"], newObj["1quadx"]);
  new_letter["1quady"]    = map(percent, 0, 100, oldObj["1quady"], newObj["1quady"]);
  new_letter["2quadx"]    = map(percent, 0, 100, oldObj["2quadx"], newObj["2quadx"]);
  new_letter["2quady"]    = map(percent, 0, 100, oldObj["2quady"], newObj["2quady"]);
  new_letter["3quadx"]    = map(percent, 0, 100, oldObj["3quadx"], newObj["3quadx"]);
  new_letter["3quady"]    = map(percent, 0, 100, oldObj["3quady"], newObj["3quady"]);
  new_letter["4quadx"]    = map(percent, 0, 100, oldObj["4quadx"], newObj["4quadx"]);
  new_letter["4quady"]    = map(percent, 0, 100, oldObj["4quady"], newObj["4quady"]);
  new_letter["1quadx2"]    = map(percent, 0, 100, oldObj["1quadx2"], newObj["1quadx2"]);
  new_letter["1quady2"]    = map(percent, 0, 100, oldObj["1quady2"], newObj["1quady2"]);
  new_letter["2quadx2"]    = map(percent, 0, 100, oldObj["2quadx2"], newObj["2quadx2"]);
  new_letter["2quady2"]    = map(percent, 0, 100, oldObj["2quady2"], newObj["2quady2"]);
  new_letter["3quadx2"]    = map(percent, 0, 100, oldObj["3quadx2"], newObj["3quadx2"]);
  new_letter["3quady2"]    = map(percent, 0, 100, oldObj["3quady2"], newObj["3quady2"]);
  new_letter["4quadx2"]    = map(percent, 0, 100, oldObj["4quadx2"], newObj["4quadx2"]);
  new_letter["4quady2"]    = map(percent, 0, 100, oldObj["4quady2"], newObj["4quady2"]);
  new_letter["ArcX"]    = map(percent, 0, 100, oldObj["ArcX"], newObj["ArcX"]);
  new_letter["ArcY"]    = map(percent, 0, 100, oldObj["ArcY"], newObj["ArcY"]);
  new_letter["ArcW"]    = map(percent, 0, 100, oldObj["ArcW"], newObj["ArcW"]);
  new_letter["ArcH"]    = map(percent, 0, 100, oldObj["ArcH"], newObj["ArcH"]);
  new_letter["ArcX2"]    = map(percent, 0, 100, oldObj["ArcX2"], newObj["ArcX2"]);
  new_letter["ArcY2"]    = map(percent, 0, 100, oldObj["ArcY2"], newObj["ArcY2"]);
  new_letter["ArcW2"]    = map(percent, 0, 100, oldObj["ArcW2"], newObj["ArcW2"]);
  new_letter["ArcH2"]    = map(percent, 0, 100, oldObj["ArcH2"], newObj["ArcH2"]);
  new_letter["arcStart"]    = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
  new_letter["arcEnd"]    = map(percent, 0, 100, oldObj["arcEnd"], newObj["arcEnd"]);
  new_letter["arcStart2"]    = map(percent, 0, 100, oldObj["arcStart2"], newObj["arcStart2"]);
  new_letter["arcEnd2"]    = map(percent, 0, 100, oldObj["arcEnd2"], newObj["arcEnd2"]);
  return new_letter;
}

var swapWords = [
  "GEOMETRY",
  "?SHAPES?",
  "EMERSON!",
  "PARALLEL",
  "POSITIVE",
  "SYMMETRY",
  "VARIABLE"
]