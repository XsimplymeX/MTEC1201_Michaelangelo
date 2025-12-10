let stage
let stageV = 1
let rise = 400 //height/2
let left = 570
let right = 585
let leftS = 560
let rightS = 600
let run = [];
let currentFrame = 0
let newFrame = 0
let time = 6
let runto = [];
let standR = [];
let standL = [];
let facingLeft = false
let facingRight = true

function preload() {
  stage = loadImage('Volnutt/Placeholder.jpg');
  standR[0] = loadImage('Volnutt/Volnutt0001.png');
  standL[0] = loadImage('Volnutt/VolnuttL1.png');
  run[0] = loadImage('Volnutt/Volnutt0003.png');
  run[1] = loadImage('Volnutt/Volnutt0004.png');
  run[2] = loadImage('Volnutt/Volnutt0005.png');
  run[3] = loadImage('Volnutt/Volnutt0006.png');
  run[4] = loadImage('Volnutt/Volnutt0007.png');
  run[5] = loadImage('Volnutt/Volnutt0008.png');
  run[6] = loadImage('Volnutt/Volnutt0009.png');
  run[7] = loadImage('Volnutt/Volnutt0010.png');
  run[8] = loadImage('Volnutt/Volnutt0011.png');
  run[9] = loadImage('Volnutt/Volnutt0012.png');
  run[10] = loadImage('Volnutt/Volnutt0013.png');
  run[11] = loadImage('Volnutt/Volnutt0014.png');
  run[12] = loadImage('Volnutt/Volnutt0015.png');
  run[13] = loadImage('Volnutt/Volnutt0016.png');
  runto[0] = loadImage('Volnutt/VolnuttL3.png');
  runto[1] = loadImage('Volnutt/VolnuttL4.png');
  runto[2] = loadImage('Volnutt/VolnuttL5.png');
  runto[3] = loadImage('Volnutt/VolnuttL6.png');
  runto[4] = loadImage('Volnutt/VolnuttL7.png');
  runto[5] = loadImage('Volnutt/VolnuttL8.png');
  runto[6] = loadImage('Volnutt/VolnuttL9.png');
  runto[7] = loadImage('Volnutt/VolnuttL10.png');
  runto[8] = loadImage('Volnutt/VolnuttL11.png');
  runto[9] = loadImage('Volnutt/VolnuttL12.png');
  runto[10] = loadImage('Volnutt/VolnuttL13.png');
  runto[11] = loadImage('Volnutt/VolnuttL14.png');
  runto[12] = loadImage('Volnutt/VolnuttL15.png');
  runto[13] = loadImage('Volnutt/VolnuttL16.png');

}
function setup() {
  createCanvas(1280, 740);
  stIntro = createGraphics(1280, 740);
  stIntro.background(0);
}

function draw(){
  background(0);
  image(stage, - stageV , 0);
  //rect(width/2, rise, 75, 95);
  fill(50, 150, 50)
  rect(0, height/1.5 - 16, width, 95); 
  moveStage()
  print(stageV);
  if(!keyIsPressed && facingRight ){
    image(standR[0], rightS, rise - 75, 200, 200);   
  }
  if(!keyIsPressed && facingRight && stageV < 0){
    image(standR[0], rightS, rise - 75, 200, 200);   
  }
  if(!keyIsPressed && facingLeft){
    image(standL[0], leftS, rise - 75, 200, 200)
  }
    if(!keyIsPressed && facingLeft && stageV < 0){
    image(standL[0], leftS, rise - 75, 200, 200)
  }
  
}

function moveStage(){

  if(keyIsDown(LEFT_ARROW) === true) {
     stageV --
     facingLeft = true
     facingRight = false
     if (runto.length > 0) {
    image(runto[newFrame], left, rise - 75, 200, 200)
    }
     if (frameCount % time === 0) {
    newFrame = (newFrame + 1) % runto.length;
    }
  if(keyIsDown(LEFT_ARROW) === true && stageV < 0) {  
    stageV = 0
    left --
    leftS --
    rightS --
    right --
  }

  }  
  if(keyIsDown(RIGHT_ARROW) === true){
     facingLeft = false
     facingRight = true
     if (run.length > 0) {
    image(run[currentFrame], right, rise - 75, 200, 200)
  }     
     if (frameCount % time === 0) {
    currentFrame = (currentFrame + 1) % run.length;
  }
    if (right > 585){
    stageV = stageV+1
    }
  }
  if(keyIsDown(RIGHT_ARROW) === true && stageV === 0){
    right ++
    rightS ++
    leftS ++
    left ++
  }
  if(keyIsDown(UP_ARROW) === true){
    rise = 330
    if(facingLeft === true){
      image(runto[newFrame], left, rise - 75, 200, 200)
    }
    if(facingRight === true){
      image(run[currentFrame], right, rise - 75, 200, 200)
    }
  }

    if(rise<400){
     rise ++
  }
  
  //if(keyisDown(RIGHT_ARROW) === true && keyisDown(UP_ARROW) === true){  }

}