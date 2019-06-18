/*

   Finger dance

*/

const game = new Game();
let gameGoodScore = 0;

//let sound;
var play_sketch1 = function(p) {
   p.x = WIDTH;
   p.y = HEIGHT;

   let cnv;

   const arrowPool = new ArrowPool();

   const objectsToRedraw = [];
   const messagesToRedraw = [];

   let isReading = false;

   let keyUpRightWasPressed = false;

   let pistaIndex = 0;

   //let sound;

   p.preload = function(){
      //game.sound = p.loadSound("../assets/CS031.mp3", soundLoaded);
      game.sound = p.loadSound("../assets/CS017.mp3", soundLoaded);
   }
   
   p.setup = function() {
      
      cnv = p.createCanvas(p.x, p.y);
      centerCanvas();
      p.background(p.color("black"));
      
      arrowPool.preload();
      arrowPool.setup();
      game.setup();
   }


   p.draw = function() {
     
      p.clear();
      p.background(p.color("black"));
   
      game.draw();
      redrawAll();
   
      if(!isReading){
   
         setInterval(readSongLineTimer, 187.5/2)
         //setInterval(readSongLineTimer, 168/2);
         isReading = true;
      }

      
      // setInterval(() => {
      //    startReadingSteps();
      // }, 187.5);

   }

   soundLoaded = function() {
      
      game.sound.play();
   }

   // startReadingSteps = function() {

   //    if(!isReading){
   
   //       setInterval(readSongLineTimer, 187.5/2);
   //       //setInterval(readSongLineTimer, 168/2);
   //       isReading = true;
   //    }
   // }

   readSongLineTimer = function() {

      if(pistaIndex <= pista11.length) {

         if (pista11[pistaIndex].indexOf("X") != -1) {
            let steps = pista11[pistaIndex];
            let stepsToUseByLine = [];
      
            for (let i = 0; i < steps.length; i++) {
               if (steps[i] === "X") {
                  stepsToUseByLine.push(i);
               }
            }

            stepsToUseByLine.forEach(x => {
               
               if (x === 0) {
                  const arrow = arrowPool.getArrow("downleft");
                  if(!arrow.getIsUsed()){
                     objectsToRedraw.push(arrow);
                     arrow.setIsUsed();
                  }
               }

               if (x === 1) {
                  const arrow = arrowPool.getArrow("upleft");
                  if(!arrow.getIsUsed()){
                     objectsToRedraw.push(arrow);
                     arrow.setIsUsed();
                  }
               }

               if (x === 2) {
                  const arrow = arrowPool.getArrow("center");
                  if(!arrow.getIsUsed()){
                     objectsToRedraw.push(arrow);
                     arrow.setIsUsed();
                  }
               }

               if (x === 3) {
                  const arrow = arrowPool.getArrow("upright");
                  if(!arrow.getIsUsed()){
                     objectsToRedraw.push(arrow);
                     arrow.setIsUsed();
                  }
               }

               if (x === 4) {
                  const arrow = arrowPool.getArrow("downright");
                  if(!arrow.getIsUsed()){
                     objectsToRedraw.push(arrow);
                     arrow.setIsUsed();
                  }
               }
            });
         }

         //const arrow = arrowPool.getArrow("downright");
         //objectsToRedraw.push(arrow);
      }

      
      pistaIndex++;

   }


   redrawAll = function() {
   
      // if(objectsToRedraw.length > 20){
      //    objectsToRedraw.shift();
      // }

      objectsToRedraw.forEach(a => {
         a.draw();
   
         //console.log("panel arrow", game.panel.positionY+(ARROW_HEIGHT/2));
         //console.log("button", a.y);

         if (typeof a.intersects === "function") {

            // safe to use the function
            if(a.intersects(game.panel)){
               console.log(" - TRUE -");
            }
            else{
               console.log(" - FALSE -");

            }
         }

      });

      messagesToRedraw.forEach(m => {
         m.draw();
      });
   }

   updateGoodScore = function() {

      let goodScore = p.select("#panel-good");
      gameGoodScore = gameGoodScore + 1;
      goodScore.html(gameGoodScore);

      const good = arrowPool.getArrow("good");
      messagesToRedraw.push(good);
      
      setTimeout(() => {
         cleanMessagesArray();
      }, 500);
   }

   cleanMessagesArray = function(){

      messagesToRedraw.shift();
   }

   p.keyReleased = function() {

      if (p.keyCode === 103) {
         //console.log("up left");      
         game.panel.reduceUpLeft();
      }
   
      if (p.keyCode === 105) {
         //console.log("up right");
         game.panel.reduceUpRight();     
         keyUpRightWasPressed = false;
      }
   
      if (p.keyCode === 101) {
         //console.log("center");
         game.panel.reduceCenter();
      }
   
      if (p.keyCode === 97) {
         //console.log("down left");
         game.panel.reduceDownLeft();
      }
   
      if (p.keyCode === 99) {
         //console.log("down right");
         game.panel.reduceDownRight();      
      }
   }
   
   p.keyPressed  = function() {
      if (p.keyCode === 103) {
         //console.log("up left");      
         game.panel.growUpLeft();
      }
   
      if (p.keyCode === 105) {
         //console.log("up right");
         game.panel.growUpRight();    
         keyUpRightWasPressed = true;
      }
   
      if (p.keyCode === 101) {
         //console.log("center");
         game.panel.growCenter();
      }
   
      if (p.keyCode === 97) {
         //console.log("down left");
         game.panel.growDownLeft();
      }
   
      if (p.keyCode === 99) {
         //console.log("down right");
         game.panel.growDownRight();      
      }
    }

   centerCanvas = function() {

      let x = (p.windowWidth - p.x) / GAMESIZE;
      let y = (p.windowHeight - p.y) / GAMESIZE;

      cnv.position(x, y);
   }
    
   p.windowResized = function() {

      centerCanvas();
   }

   p.mouseClicked = function() {

      //p.noLoop();
   }
}



//Play
var play_sketch = new p5(play_sketch1, document.getElementById('game-dance-floor'));


// Generates a random color in hexadecimal (ie. #62b9cc)
function generateRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

