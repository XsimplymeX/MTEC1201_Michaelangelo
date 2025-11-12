
function setup(){
 createCanvas(500,500); 
 background(0);
 noStroke();
}

function draw(){

let colorValue = map(mouseX, 0, width, 0, 255);
let sizeValue = map( mouseY,0, height, 10, 50);

fill(colorValue, 100, 200, 50);
 ellipse(mouseX, mouseY, sizeValue);

}