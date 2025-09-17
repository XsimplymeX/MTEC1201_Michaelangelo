
function setup(){
 createCanvas(windowWidth,windowHeight); 
 background(0);
 noStroke();
}

function draw(){

let colorValue = map(mouseY, 0, height, 0, 255);
fill(255, 0, 0, 100);
circle(mouseX, mouseY,50);
}
function mousePressed() {

  background(0);

}
