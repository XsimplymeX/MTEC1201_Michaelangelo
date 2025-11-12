
function setup(){
 createCanvas(500,500); 
 background(0);
 noStroke();
}

function draw(){

let colorValue = map(mouseY, 0, height, 0, 255);
fill(0, colorValue, 255, 100);
triangle(mouseX, mouseY, pmouseX, pmouseY, mouseX + 10, mouseY + 10);
}
function mousePressed() {

  background(0);

}
