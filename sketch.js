let x = 8, y = 8
let yV = 9;
let xV = 8

function setup(){
 createCanvas(windowWidth,windowHeight); 


}

function draw(){

background(0, 0, 160)
ellipse(x, y, 100);

x+=xV
y+=yV

// if(x > width){
//   xV *=-1;
// }
// if (y > height){
//   yV *=-1;
// }
// if(x < 0 ){
//     xV *= -1
// }
// if(y < 0){
//     yV *= -1
if(x > width || x < 0){
  xV *= -1
}
if(y > height || y < 0){
  yV *= -1
}
}

