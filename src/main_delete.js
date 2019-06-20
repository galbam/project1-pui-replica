
let cnv;

const game = new Game();

const arrowPool = new ArrowPool();

const objectsToRedraw = [];

let flag = true;

let keyUpRightWasPressed = false;

let pistaIndex = 0;


let sound;
function preload(){

   game.sound = loadSound("assets/CS017.mp3", soundLoaded);
}

function centerCanvas() {

   let x = (windowWidth - WIDTH) / GAMESIZE;
   let y = (windowHeight - HEIGHT) / GAMESIZE;
   cnv.position(x, y);
 }


function setup(){
   
   cnv = createCanvas(WIDTH, HEIGHT);
   centerCanvas();
   background(color("black"));

   //game.setup(); 
   //arrowPool.setup();
}

function draw(){
   
   clear();
   background(color("black"));
   

   game.draw();
   redrawAll();


   if(pistaIndex < pista1.length){

      readSongLineTimer();
      
      pistaIndex++;
   }
}


function readSongLineTimer() {

   if (pista1[pistaIndex].indexOf("X") != -1) {
      let steps = pista1[pistaIndex];
      let resOfSteps = [];

      for (let i = 0; i < steps.length; i++) {
         if (steps[i] === "X") {
            resOfSteps.push(i);
         }
      }
      resOfSteps.forEach(x => {
         
         if (x === 3) {
            
            if(flag){
               setInterval(drawArrowWithTimer, 2000);
               flag = false;
            }
         }
      });
   }
}

function drawArrowWithTimer() {

   const arrow = arrowPool.getArrow("upright");
   objectsToRedraw.push(arrow);
}

function windowResized() {

   centerCanvas();

}


function redrawAll(){
   
   objectsToRedraw.forEach(x => {
      x.draw();

       if(game.panel.positionY+60+10 === x.y && keyUpRightWasPressed){
         console.log("Score ++");
      }


   });
}

function soundLoaded(){

   //game.sound.play();
}

function touchStarted() {

   if (getAudioContext().state !== 'running') {
     getAudioContext().resume();
   }
 }

 function mouseClicked(){
   //noLoop();
 }

 function keyReleased() {

   if (keyCode === 103) {
      //console.log("up left");      
      game.panel.reduceUpLeft();
   }

   if (keyCode === 105) {
      //console.log("up right");
      game.panel.reduceUpRight();     
      keyUpRightWasPressed = false;
   }

   if (keyCode === 101) {
      //console.log("center");
      game.panel.reduceCenter();
   }

   if (keyCode === 97) {
      //console.log("down left");
      game.panel.reduceDownLeft();
   }

   if (keyCode === 99) {
      //console.log("down right");
      game.panel.reduceDownRight();      
   }
}

 function keyPressed() {
   if (keyCode === 103) {
      //console.log("up left");      
      game.panel.growUpLeft();
   }

   if (keyCode === 105) {
      //console.log("up right");
      game.panel.growUpRight();    
      keyUpRightWasPressed = true;
   }

   if (keyCode === 101) {
      //console.log("center");
      game.panel.growCenter();
   }

   if (keyCode === 97) {
      //console.log("down left");
      game.panel.growDownLeft();
   }

   if (keyCode === 99) {
      //console.log("down right");
      game.panel.growDownRight();      
   }
 }