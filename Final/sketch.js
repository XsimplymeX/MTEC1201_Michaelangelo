let stage
let stageV = 1
let rise = 370 //height/2
let gravity = 0.5
let fall = false

let jumpH = 330
let landH = 370


function preload() {
  stage = loadImage('Placeholder.jpg');

}
function setup() {
  createCanvas(1280, 740);

}

function draw(){
  background(0);
  image(stage, - stageV , 0);
  rect(width/2, rise, 75, 95); 

  moveStage()
  print(stageV);   
}

function moveStage(){

  if(keyIsDown(LEFT_ARROW) === true) {
     stageV --
  }  
  if(keyIsDown(RIGHT_ARROW) === true){
    //stageV +=1
    //stageV ++
     stageV = stageV+1
  }
  if(keyIsDown(UP_ARROW) === true){
    rise = 330
  }

  if(rise<370){
    rise ++
  }
  
  //if(keyisDown(RIGHT_ARROW) === true && keyisDown(UP_ARROW) === true){  }

}