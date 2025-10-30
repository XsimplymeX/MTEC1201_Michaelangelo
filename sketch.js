  //Midterm Project
  // Michaelangelo B
  // OLD COIN MIDTERM MIX
  // An old coin
  //Using the p5.js library, complete an interactive work inspired by your chosen theme from this semester, choosing one of these options:

  //Short Study Compilation: Select three (or more) of your short studies from this past semester. Create an interactive user experience combining these sketches, so that a user may clearly navigate between the distinct experiences within a single sketch. For example, when starting the sketch, a navigational menu with rollovers may appear for choosing between the different experiences. Or perhaps each experience leads sequentially into the next one based on particular conditions or timers. The navigation may be as straight forward or as creative / experimental as you wish it to be-- as long as the experience has clear cues for navigation.

  //Expanded Short Study: Choose one of your past short studies to expand upon, creating three (or more) distinct state changes for the user to experience. For example, this may be a simple game with a pre-game menu, game experience, and game-over state. Or a simple game with three different levels. Or a creative visualization that has at least three distinct visual experiences.
  //
  //Projects must include:

  //Use of the random function, at least one time in your code.
  //Conditional statements.
  //At least two original (user-defined) functions.
  //A function to start over from the beginning, without exiting the program.
  //Significant iteration of prior work from this semester (as in, a prior short study cannot be handed in as this midterm project without substantial modification of that prior work).
  //Attention to concept, participant experience, and visual design.
  //As comments at the top of your sketch: your name, title of the work, any user instructions. 
  //At least 75% original code. Any borrowed / modified code (any chunk greater than 4 lines) must be clearly attributed as comments in the sketch with origin of the source code. If borrowed code is from online, include the URL source. If borrowed from a book, include the exact page number. If you received significant help on a section of code from another human, this must be attributed as well. Unoriginal code without attribution will be considered plagiarism. Code written by AI, whether attributed or not, will not be accepted for this class. Please check with your instructor if you have questions about this.
  //Recommendations:
  //
  //Scale! Scale! Scale! (Scope the project appropriately for the time allotted.)
  //Prioritize compelling concepts and choices over volume!
  //Sketch out the logic, structure, and visuals before beginning to code. Have clear coding goals.
  //Start simple. Meet the basic requirements first. Add more flair and detailing as time allows.
  //Save your code often, which will create a more detailed version history to refer to.
  //Using program states will be critical for this project. Refer back to our demos for multiple states examples.

let squareW = 700;
let squareV = 450;
let squareZ = 1150;
let squareX = 200;
let squareY = 200;
let squareSize = 100;
let squareColor = (0, 0, 255);
let crossedObstacle = false;
let crossedObstacle2 = false;
let crossedObstacle3 = false; 

function setup() {
  createCanvas(windowWidth,windowHeight);
  noCursor();
  g = createGraphics(windowWidth,windowHeight);
  g.background(0);
  ggs = createGraphics(windowWidth, windowHeight);
  ggs.background(0,255,255);
  s = createGraphics(windowWidth, windowHeight);
  s.background(75,75,150);
  let again = 0
}

function refresh(){

  again = 0
}

function draw() {

  image(s, 0, 0);
  s.fill(0,250,0);
  s.background(75,75,150);
  s.noStroke()
  s.circle(250,250,300);
  s.stroke(200,200,200);
  s.circle(250,250,275);
  s.circle(250,250,270);
  s.fill(250,0,0);
  s.triangle(mouseX+30, mouseY+75, mouseX+58, mouseY+20, mouseX+86, mouseY+75);
  s.square(squareX, squareY, squareSize);
    if (mouseX > squareX && mouseX < squareX + squareSize && mouseY > squareY && mouseY < squareY + squareSize) {
          crossedObstacle = true;
      }
    if(crossedObstacle == true){
      image(g, 0, 0);
      let colorValue = map(mouseY, 0, height, 0, 255);
      g.fill(255, 0, 0, 100);
      g.circle(mouseX, mouseY,50);
      g.fill(0,250,0);
      g.noStroke()
      g.circle(1200,250,300);
      g.stroke(200,200,200);
      g.circle(1200,250,275);
      g.circle(1200,250,270);
      g.fill(250,0,0);
      g.square(squareZ, squareY, squareSize);
        if (mouseX > squareZ && mouseX < squareZ + squareSize && mouseY > squareY && mouseY < squareY + squareSize) {
          crossedObstacle2 = true;
          }
        if (crossedObstacle2 == true){
          image(ggs, 0, 0);
          
          ggs.fill(0,250,0);
          ggs.noStroke()
          ggs.circle(750,500,300);
          ggs.stroke(200,200,200);
          ggs.circle(750,500,275);
          ggs.circle(750,500,270);
          ggs.fill(250,0,0);
          let colorValue = map(mouseY, 0, height, 0, 255);
          ggs.fill(0, colorValue, 255, 100);
          ggs.triangle(mouseX, mouseY, pmouseX, pmouseY, mouseX + 10, mouseY + 10);
          ggs.square(squareW, squareV, squareSize);
          if (mouseX > squareW && mouseX < squareW + squareSize && mouseY > squareV && mouseY < squareV + squareSize) {
          crossedObstacle3 = true;
          }
        if (crossedObstacle3 == true){
          image(s, 0, 0);
          refresh();

        }
         

 }
}
}

