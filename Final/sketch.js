let life = false
let lifeEnd = 2
let platform
let obstacle
let stage
let stageV = 1 // -stageV + 634 = 0 ??
let mettaur = [];
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
let facingLeft = false
let facingRight = true

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
  textSize(32);
  textAlign(0, 0);
}

function draw(){

  console.log(floor+  ", " + rise + ", " + atBarrier + ", " + stageV + ", " + lifeEnd);
  background(0);
  image(stage, - stageV * 1, 0);
  image(platform, -stageV , 0);
  image(obstacle, -stageV - 100, height/2 - 325, 688, 516);
  image(obstacle, -stageV + 3000, height/2 -100, 172, 129);
  image(obstacle, -stageV + 4700, height/2 + 47, 172, 129);
  image(obstacle, -stageV + 5400, height/2 + 100, 172, 129);
  image(obstacle, -stageV + 2200, height/2, 172, 129);
  image(obstacle, -stageV + 6600, height/2 - 132, 172, 129);
  image(obstacle, -stageV + 6300, height/2 - 132, 172, 129);
  image(obstacle, -stageV + 7600, height/2 - 235, 172, 129);
  image(obstacle, -stageV + 8300, height/2, 172, 129);

  stroke(0);
  strokeWeight(1);
  // rect(width/2, rise, 75, 95);
  fill(50, 150, 50)
  //yElev offset - 77
  text(lifeEnd, 100, 100);
  if(lifeEnd < 0){
    text("   GameOver", 100, 100);
  }
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
  // rect(0, height/1.5 - 16, -stageV + 730 + adj, height);
  // rect(-stageV + 730 + adj, height/1.2 - 55, 635, height);
  // rect(-stageV + 1360 + adj, height/1.5 - 16, 2325, height);
  // rect(-stageV + 3685 + adj, height/1.4 , 722, height);
  // rect(-stageV + 4407 + adj, height/1.1 , 150, height);
  // rect(-stageV + 4557 + adj, height/1.2 - 30 , 680, height);
  // rect(-stageV + 5220 + adj, height/1.5 - 16 , 1121, height);
  // rect(-stageV + 6341 + adj, height/1.5 - 16 , 290, height);
  // rect(-stageV + 6631 + adj, height/1.5 - 16 , 1045, height);
  // rect(-stageV + 7386 + adj, height/1.5 - 16 , 704, height);     
  // rect(-stageV + 8090 + adj, height/1.1 - 50 , 397, height);
  //rect(-stageV + 8487 + adj, height/1.1 - 50 , 397, height);  
  //rect(-stageV + adj, 382, 75, 95);  
  // rect(-stageV + 2111 + adj, 382, 738, 95);
  // rect(-stageV + 2848 + adj, 255, 277, 222);
  // rect(-stageV + 3125 + adj, 382, 280, 95);
  // rect(-stageV + 3405 + adj, 255, 280, 222);
  // rect(-stageV + 5545 + adj, 350, 796, 127);
  // rect(-stageV + 6631 + adj, 250, 755, 227);
  // stroke(0, 0, 255);
  // strokeWeight(1);
  // line(xElev[0], yWall[0], xElev[1], yWall[0]);
  // line(xElev[1], yWall[0], xElev[1], yWall[1]);
  // line(xElev[1], yWall[1], xElev[2], yWall[1]);
  // line(xElev[2], yWall[1], xElev[2], yWall[2]);
  // line(xElev[2], yWall[2], xElev[3], yWall[2]);
  // line(xElev[3], yWall[2], xElev[3], yWall[3]);
  // line(xElev[3], yWall[3], xElev[4], yWall[3]);
  // line(xElev[4], yWall[3], xElev[4], yWall[4]);
  // line(xElev[4], yWall[4], xElev[5], yWall[4]);
  // line(xElev[5], yWall[4], xElev[5], yWall[5]);
  // line(xElev[5], yWall[5], xElev[6], yWall[5]);
  // line(xElev[6], yWall[5], xElev[6], yWall[6]);
  // line(xElev[6], yWall[6], xElev[7], yWall[6]);
  // line(xElev[7], yWall[6], xElev[7], yWall[7]);
  // line(xElev[7], yWall[7], xElev[8], yWall[7]);
  // line(xElev[8], yWall[7], xElev[8], yWall[8]);
  // line(xElev[8], yWall[8], xElev[9], yWall[8]);
  // line(xElev[9], yWall[8], xElev[9], yWall[9]);
  // line(xElev[9], yWall[9], xElev[10], yWall[9]);
  // line(xElev[10], yWall[9], xElev[10], yWall[10]);
  // line(xElev[10], yWall[10], xElev[11], yWall[10]);
  // line(xElev[11], yWall[10], xElev[11], yWall[11]);
  // line(xElev[11], yWall[11], xElev[12], yWall[11]);
  // line(xElev[12], yWall[11], xElev[12], yWall[12]);
  // line(xElev[12], yWall[12], xElev[13], yWall[12]);
  // line(xElev[13], yWall[12], xElev[13], yWall[13]);
  // line(xElev[13], yWall[13], xElev[14], yWall[13]);
  // line(xElev[14], yWall[13], xElev[14], yWall[14]);
  // line(xElev[14], yWall[14], xElev[15], yWall[14]);
  // line(xElev[15], yWall[14], xElev[15], yWall[15]);
  // line(xElev[15], yWall[15], xElev[16], yWall[15]);
  // line(xElev[16], yWall[15], xElev[16], yWall[16]);
  // line(xElev[16], yWall[16], xElev[17], yWall[16]);
  // line(xElev[17], yWall[16], xElev[17], yWall[17]);
  stageV = constrain(stageV, 0, 8360)
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
    if( stageV > 713 && stageV <= 1270){
      floor = yElev[1]
      jump = floor - 200
    }

    // jump = yElev[1] - 200
    //   if(rise < jump){
    //  rise ++
    // }
    if( stageV > 1270 && stageV <= 2025){
    floor = yElev[2]
    jump = yElev[2] - 200
  } 
     if( stageV > 2025 && stageV <= 2760 ){
    floor = yElev[3]
    jump = yElev[3] - 200
  }
    if( stageV > 2760 && stageV < 3107 ){
    floor = yElev[4]
    jump = yElev[4] - 200
  } 
    if( stageV > 3107 && stageV <= 3330 ){
    floor = yElev[5]
    jump = yElev[5] - 200
  }
    if( stageV > 3330 && stageV < 3668 ){
    floor = yElev[6]
    jump = yElev[6] - 200
  } 
    if( stageV > 3668 && stageV < 4389 ){
    floor = yElev[7]
    jump = yElev[7] - 200
  }
    if( stageV > 4389 && stageV <= 4480 ){
    floor = yElev[8]
    jump = yElev[8] - 200
  } 
    if( stageV > 4480 && stageV <= 5140 ){
    floor = yElev[9]
    jump = yElev[9] - 200
  }
    if( stageV > 5140 && stageV <= 5460){
    floor = yElev[10]
    jump = yElev[10] - 200
  } 
    if( stageV > 5460 && stageV < 6324 ){
    floor = yElev[11]
    jump = yElev[11] - 200
  }
    if( stageV > 6324 && stageV <= 6550 ){
    floor = yElev[12]
    jump = yElev[12] - 200
  } 
    if( stageV > 6550 && stageV < 7369 ){
    floor = yElev[13]
    jump = yElev[13] - 200
  }
    if( stageV > 7369 && stageV <= 8075 ){
    floor = yElev[14]
    jump = yElev[14] - 200
  } 
    if( stageV > 8075 && stageV < 8469){
    floor = yElev[15]
    jump = yElev[15] - 200
  }

//OBSTACLES
    if(stageV > 1610 && stageV < 1612 && rise == yElev[2]){
      if(!life){
      life = true
      lifeEnd -= 1
      }
    } else{
      life = false
    }
        if(stageV > 2400 && stageV < 2402 && rise == yElev[3]){
      if(!life){
      life = true
      lifeEnd -= 1
      }
    } else{
      life = false
    }
        if(stageV > 4110 && stageV < 4112 && rise == yElev[7]){
      if(!life){
      life = true
      lifeEnd -= 1
      }
    } else{
      life = false
    }
        if(stageV > 4820 && stageV < 4822 && rise == yElev[9]){
      if(!life){
      life = true
      lifeEnd -= 1
      }
    } else{
      life = false
    }
        if(stageV > 5700 && stageV < 5702 && rise == yElev[11]){
      if(!life){
      life = true
      lifeEnd -= 1
      }
    } else{
      life = false
    }
        if(stageV > 6000 && stageV < 6002 && rise == yElev[11]){
      if(!life){
      life = true
      lifeEnd -= 1
      }
    } else{
      life = false
    }
        if(stageV > 7010 && stageV < 7012 && rise == yElev[13]){
      if(!life){
      life = true
      lifeEnd -= 1
      }
    } else{
      life = false
    }
        if(stageV > 7700 && stageV < 7702 && rise == yElev[14]){
      if(!life){
      life = true
      lifeEnd -= 1
      }
    } else{
      life = false
    }

// ACTIONS
  if (floor> rise){
    rise = floor;
    atBarrier = false;
  }
  if (floor < rise){
      atBarrier = true;
  }
  if(stageV > 8221){

  console.log(" WINNER !!!!! ");
}
  if(lifeEnd < 0){
  console.log("Game Over");
  rise = rise + 4
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
     facingLeft = true
     facingRight = false
     if (atBarrier == false ){

      stageV = stageV - 10
      
     }
     if (runto.length > 0 && keyIsDown(UP_ARROW) === false) {
    image(runto[newFrame], left, rise - 75, 200, 200)
    }
     if (frameCount % time === 0) {
    newFrame = (newFrame + 1) % runto.length;
    }
  }
  if(keyIsDown(LEFT_ARROW) === true && stageV < 0) {  
    stageV = 0
    left = left - 10
    leftS = leftS - 10
    rightS = rightS - 10
    right = right - 10
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
      
      stageV = stageV+10
    }
  }
  if(keyIsDown(RIGHT_ARROW) === true && stageV === 0){
    right = right + 10
    rightS = rightS + 10
    leftS = leftS + 10
    left = left + 10
  }

  if(keyIsDown(UP_ARROW) === true){

    rise = jump
    
    if(facingLeft === true){
      image(runto[newFrame], left, rise - 75, 200, 200)
    }
    if(facingRight === true){
      image(run[currentFrame], right, rise - 75, 200, 200)
    }
  }
}
