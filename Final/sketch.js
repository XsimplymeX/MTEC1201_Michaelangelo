let platform
let obstacle
let stage
let stageV = 1 // -stageV + 634 = 0 ??
let adj = 634
let oSet = -77
let rise = 400 //height/2
let jump = 280
let floor
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

let atBarrier = false;

// let jumping = false
let facingLeft = false
let facingRight = true
keyStartTime = null
// let keyActive = false
// let maxTime = 200
// let power = 12;
// let jumpD = 0;

// let crossedObstacle = false
// let pCrossedObstacle = false
// let xLoc
// let yLoc

function preload() {
  music = loadSound("Volnutt/The Air That I Breathe.mp3");
  stage = loadImage('Volnutt/Background.jpg');
  platform = loadImage("Volnutt/Foreground.png");
  obstacle = loadImage("Volnutt/Obstacle.png");
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
  // stIntro = createGraphics(1280, 740);
  // stIntro.background(0);
  music.loop(0, 1, 1, 11.8, 36);
  music.setVolume(0.5);
}

function draw(){

  console.log(floor+  ", " + rise + "," + atBarrier);
  background(0);
  image(stage, - stageV , 0);
//   if(keyActive && millis() - keyStartTime > maxTime){
//     keyActive = false
//   }
//   crossedObstacle = false
//   pCrossedObstacle = crossedObstacle;
//   if(crossedObstacle == true){
//     stageV == 0

//  } 
  stroke(0);
  strokeWeight(1);
  rect(width/2, rise, 75, 95);
  fill(50, 150, 50)
  //yElev offset - 77
  let xElev = [
    0, 
    -stageV + 730 + adj, 
    -stageV + 1360 + adj, 
    -stageV + 2111 + adj, 
    -stageV + 2848 + adj, 
    -stageV + 3125 + adj, 
    -stageV + 3405 + adj, 
    -stageV + 3685 + adj, 
    -stageV + 4407 + adj, 
    -stageV + 4557 + adj, 
    -stageV + 5220 + adj, 
    -stageV + 5545 + adj, 
    -stageV + 6341 + adj, 
    -stageV + 6631 + adj, 
    -stageV + 7386 + adj, 
    -stageV + 8090 + adj, 
    -stageV + 8487 + adj
  ];

  //let xElev = [
  // 0, 
  // 713, 
  // 1344, 
  // 2094, 
  // 2831, 
  // 3107, 
  // 3388, 
  // 3668, 
  // 4389, 
  // 4539, 
  // 5304, 
  // 5528, 
  // 6324, 
  // 6614, 
  // 7369, 
  // 8073, 
  // 8469
  // ];

  let yWall = [
    height/1.5 - 16 , 
    height/1.2 - 55, 
    height/1.5 - 16, 
    382, 
    255, 
    382, 
    255, 
    height/1.4, 
    height/1.1, 
    height/1.2 - 30, 
    height/1.5 - 16, 
    350, 
    height/1.5 - 16, 
    250, 
    height/1.5 - 16, 
    height/1.1 - 50, 
    height/1.1 - 50
  ];

  let yElev = [
    height/1.5 - 16 + oSet, 
    height/1.2 - 55 + oSet, 
    height/1.5 - 16 + oSet, 
    382 + oSet, 255 + oSet, 
    382 + oSet, 255 + oSet, 
    height/1.4 + oSet, 
    height/1.1 + oSet, 
    height/1.2 - 30 + oSet, 
    height/1.5 - 16 + oSet, 
    350 + oSet, 
    height/1.5 - 16 + oSet, 
    250 + oSet, 
    height/1.5 - 16 + oSet, 
    height/1.1 - 50 + oSet, 
    height/1.1 - 50 + oSet
  ];  
  rect(0, height/1.5 - 16, -stageV + 730 + adj, height);
  rect(-stageV + 730 + adj, height/1.2 - 55, 635, height);
  rect(-stageV + 1360 + adj, height/1.5 - 16, 2325, height);
  rect(-stageV + 3685 + adj, height/1.4 , 722, height);
  rect(-stageV + 4407 + adj, height/1.1 , 150, height);
  rect(-stageV + 4557 + adj, height/1.2 - 30 , 680, height);
  rect(-stageV + 5220 + adj, height/1.5 - 16 , 1121, height);
  rect(-stageV + 6341 + adj, height/1.5 - 16 , 290, height);
  rect(-stageV + 6631 + adj, height/1.5 - 16 , 1045, height);
  rect(-stageV + 7386 + adj, height/1.5 - 16 , 704, height);     
  rect(-stageV + 8090 + adj, height/1.1 - 50 , 397, height);
  //rect(-stageV + 8487 + adj, height/1.1 - 50 , 397, height);  
  //rect(-stageV + adj, 382, 75, 95);  
  rect(-stageV + 2111 + adj, 382, 738, 95);
  rect(-stageV + 2848 + adj, 255, 277, 222);
  rect(-stageV + 3125 + adj, 382, 280, 95);
  rect(-stageV + 3405 + adj, 255, 280, 222);
  rect(-stageV + 5545 + adj, 350, 796, 127);
  rect(-stageV + 6631 + adj, 250, 755, 227);
  stroke(0, 0, 255);
  strokeWeight(1);
  line(xElev[0], yWall[0], xElev[1], yWall[0]);
  line(xElev[1], yWall[0], xElev[1], yWall[1]);
  line(xElev[1], yWall[1], xElev[2], yWall[1]);
  line(xElev[2], yWall[1], xElev[2], yWall[2]);
  line(xElev[2], yWall[2], xElev[3], yWall[2]);
  line(xElev[3], yWall[2], xElev[3], yWall[3]);
  line(xElev[3], yWall[3], xElev[4], yWall[3]);
  line(xElev[4], yWall[3], xElev[4], yWall[4]);
  line(xElev[4], yWall[4], xElev[5], yWall[4]);
  line(xElev[5], yWall[4], xElev[5], yWall[5]);
  line(xElev[5], yWall[5], xElev[6], yWall[5]);
  line(xElev[6], yWall[5], xElev[6], yWall[6]);
  line(xElev[6], yWall[6], xElev[7], yWall[6]);
  line(xElev[7], yWall[6], xElev[7], yWall[7]);
  line(xElev[7], yWall[7], xElev[8], yWall[7]);
  line(xElev[8], yWall[7], xElev[8], yWall[8]);
  line(xElev[8], yWall[8], xElev[9], yWall[8]);
  line(xElev[9], yWall[8], xElev[9], yWall[9]);
  line(xElev[9], yWall[9], xElev[10], yWall[9]);
  line(xElev[10], yWall[9], xElev[10], yWall[10]);
  line(xElev[10], yWall[10], xElev[11], yWall[10]);
  line(xElev[11], yWall[10], xElev[11], yWall[11]);
  line(xElev[11], yWall[11], xElev[12], yWall[11]);
  line(xElev[12], yWall[11], xElev[12], yWall[12]);
  line(xElev[12], yWall[12], xElev[13], yWall[12]);
  line(xElev[13], yWall[12], xElev[13], yWall[13]);
  line(xElev[13], yWall[13], xElev[14], yWall[13]);
  line(xElev[14], yWall[13], xElev[14], yWall[14]);
  line(xElev[14], yWall[14], xElev[15], yWall[14]);
  line(xElev[15], yWall[14], xElev[15], yWall[15]);
  line(xElev[15], yWall[15], xElev[16], yWall[15]);
  line(xElev[16], yWall[15], xElev[16], yWall[16]);
  line(xElev[16], yWall[16], xElev[17], yWall[16]);
  line(xElev[17], yWall[16], xElev[17], yWall[17]);
  stageV = constrain(stageV, 0, 8389)
  left = constrain(left, -80, 570);     
    if( stageV < 713 && stageV == 0){
    atBarrier = false
    floor = 400
    jump = floor - 200
  }
    if( stageV < 713){
    atBarrier = false
    rise = yElev[0]
    floor = yElev[0]
    jump = yElev[0] - 200
  }  
  //   if( stageV <= 713 || stageV >= 1279){
  //   rise = yElev[1]
  //   jump = yElev[1] - 200
  // }
    if( stageV > 713 && stageV < 1279){
      floor = yElev[1]
      jump = floor - 200
    }

    // jump = yElev[1] - 200
    //   if(rise < jump){
    //  rise ++
    // }
    if( stageV > 1343 && stageV < 2094){
    floor = yElev[2]
    jump = yElev[2] - 200
  } 
     if( stageV > 2094 && stageV < 2831 ){
    floor = yElev[3]
    jump = yElev[3] - 200
  }
    if( stageV > 2831 && stageV < 3107 ){
    floor = yElev[4]
    jump = yElev[4] - 200
  } 
    if( stageV > 3107 && stageV < 3388 ){
    floor = yElev[5]
    jump = yElev[5] - 200
  }
    if( stageV > 3388 && stageV < 3668 ){
    floor = yElev[6]
    jump = yElev[6] - 200
  } 
    if( stageV > 3668 && stageV < 4389 ){
    floor = yElev[7]
    jump = yElev[7] - 200
  }
    if( stageV > 4389 && stageV < 4539 ){
    floor = yElev[8]
    jump = yElev[8] - 200
  } 
    if( stageV > 4539 && stageV < 5204 ){
    floor = yElev[9]
    jump = yElev[9] - 200
  }
    if( stageV > 5304 && stageV < 5528 ){
    floor = yElev[10]
    jump = yElev[10] - 200
  } 
    if( stageV > 5528 && stageV < 6324 ){
    floor = yElev[11]
    jump = yElev[11] - 200
  }
    if( stageV > 6324 && stageV < 6614 ){
    floor = yElev[12]
    jump = yElev[12] - 200
  } 
    if( stageV > 6614 && stageV < 7369 ){
    floor = yElev[13]
    jump = yElev[13] - 200
  }
    if( stageV > 7369 && stageV < 8073 ){
    floor = yElev[14]
    jump = yElev[14] - 200
  } 
    if( stageV > 8073 && stageV < 8469){
    floor = yElev[15]
    jump = yElev[15] - 200
  }

// ACTIONS
  if (floor> rise){
    rise = floor;
    atBarrier = false;
  }
  if (floor < rise){
      atBarrier = true;
  }

  moveStage()
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
     stageV = stageV - 20
     facingLeft = true
     facingRight = false
     if (runto.length > 0 && keyIsDown(UP_ARROW) === false) {
    image(runto[newFrame], left, rise - 75, 200, 200)
    }
     if (frameCount % time === 0) {
    newFrame = (newFrame + 1) % runto.length;
    }
  }
  if(keyIsDown(LEFT_ARROW) === true && stageV < 0) {  
    stageV = 0
    left --
    leftS --
    rightS --
    right --
  }
  if(keyIsDown(RIGHT_ARROW) === true){
     facingLeft = false
     facingRight = true
     if (run.length > 0 && keyIsDown(UP_ARROW) === false) {
    image(run[currentFrame], right, rise - 75, 200, 200)
  }     
     if (frameCount % time === 0) {
    currentFrame = (currentFrame + 1) % run.length;
  }
    if (right > 584 && atBarrier == false ){
      
      stageV = stageV+20
    }
  }
  if(keyIsDown(RIGHT_ARROW) === true && stageV === 0){
    right ++
    rightS ++
    leftS ++
    left ++
  }

  if(keyIsDown(UP_ARROW) === true){

    rise = jump
    
    if(facingLeft === true){
      image(runto[newFrame], left, rise - 75, 200, 200)
    }
    if(facingRight === true){
      image(run[currentFrame], right, rise - 75, 200, 200)
    }
  //if(keyisDown(RIGHT_ARROW) === true && keyisDown(UP_ARROW) === true){  }
    
  }
}
