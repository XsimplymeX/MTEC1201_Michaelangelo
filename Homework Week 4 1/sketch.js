
let g = 150
let b = 255
let grad
let grad2 
function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  noStroke()
  noCursor()
  fill(255, 255, 0);
  let grad = map(mouseY , 0, height, 0, 255);
  let grad2 = map(mouseY, 0, height, 0, 150)
  if(mouseY < height/1.5) {
    background(0, 0, 150);
  } else {
    background(0, 0, 100);
  }
  if(mouseY < height/3) {
    background(100, 100, 255);
  }
  fill(255, 255, 0);
  circle(width/2, mouseY, 300);
  fill(255, 255, 255);
  circle(width/1.1, height - mouseY, 75);
  fill(0, g - grad2, 0);
  rect(0, height/2, width, height/2);
  fill(0, 0, b - grad );
  triangle(width/4, height, width/2, height/2, width/1.25, height,);
  
}