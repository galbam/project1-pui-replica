/*

   Finger dance

*/

const game = new Game();
let gameGoodScore = 0;
let gameMissScore = 0;
let gameGreatScore = 0;
let gameTotalGreatScore = 0;
let gameScore = 0;

let keyCenterWasPressed = false;
let keyDownLeftWasPressed = false;
let keyDownRightWasPressed = false;
let keyUpLeftWasPressed = false;
let keyUpRightWasPressed = false;

//let sound;
var play_sketch1 = function(p) {
   p.x = WIDTH;
   p.y = HEIGHT;

   let cnv;

   const arrowPool = new ArrowPool();

   const objectsToRedraw = [];
   const messagesGoodToRedraw = [];
   const messagesMissedToRedraw = [];
   const messagesGreatToRedraw = [];

   let isReading = false;
   let pistaIndex = 0;

   //let sound;   

   p.preload = function() {

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
      
      
      // setTimeout(() => {
      //    startReadingSteps();
      // }, 187.5);



      if(game.sound.isPlaying() == false) {
         noLoop();
         //game over
       } 

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
      }

      
      pistaIndex++;


   }

   redrawAll = function() {

      objectsToRedraw.forEach(a => {
         a.draw();

         if (typeof a.intersects === "function") {

            let arrowReceived = a.intersects(game.panel);
            switch(arrowReceived.action){

               case "intersection":
                  switch(arrowReceived.type) {
                     case "center":
                        if(keyCenterWasPressed){                        
                           updateGoodScore();
                        }
                        else{                        
                           updateMissScore();
                        }
                        break;
                     
                     case "downleft":
                        if(keyDownLeftWasPressed){                        
                           updateGoodScore();
                        }
                        else{                        
                           updateMissScore();
                        }
                        break;

                     case "downright":
                        if(keyDownRightWasPressed){                        
                           updateGoodScore();
                        }
                        else{                        
                           updateMissScore();
                        }
                        break;

                     case "upleft":
                        if(keyUpLeftWasPressed){                        
                           updateGoodScore();
                        }
                        else{                        
                           updateMissScore();
                        }
                        break;
   
                     case "upright":
                        if(keyUpRightWasPressed){                        
                           updateGoodScore();
                        }
                        else{                        
                           updateMissScore();
                        }
                        break;

                     default:
                        break;
                  }
                  break;

               default:
                  //none
                  break;
            }
         }

         if(gameGreatScore >= 10){
            updateGreatMessage();
         }

      });

      messagesGoodToRedraw.forEach(mg => {
         mg.draw();
      });

      messagesMissedToRedraw.forEach(mm => {
         mm.draw();
      });

      messagesGreatToRedraw.forEach(g => {
         g.draw();
      });
   }

   updateGoodScore = function() {

      let goodScore = p.select("#panel-good");
      gameGoodScore = gameGoodScore + 1;
      goodScore.html(gameGoodScore);

      const goodImg = arrowPool.getArrow("good");
      messagesGoodToRedraw.push(goodImg);
      
      setTimeout(() => {
         cleanMessagesGoodArray();
      }, 500);

      //Score
      let gameScoreT = p.select("#panel-points");
      gameScore = gameScore + 100;
      gameScoreT.html(gameScore);
   }


   updateMissScore = function() {

      let missScore = p.select("#panel-miss");
      gameMissScore = gameMissScore + 1;
      missScore.html(gameMissScore);

      const missImg = arrowPool.getArrow("miss");
      messagesMissedToRedraw.push(missImg);
      
      setTimeout(() => {
         cleanMessagesMissedArray();
      }, 300);

      gameGreatScore = 0;
   }

   updateGreatMessage = function() {

      let greatScore = p.select("#panel-great");
      gameTotalGreatScore = gameTotalGreatScore + 1;
      greatScore.html(gameTotalGreatScore);

      const greatImg = arrowPool.getArrow("great");
      messagesGreatToRedraw.push(greatImg);
      
      setTimeout(() => {
         cleanMessagesGreatArray();
      }, 800);

      gameGreatScore = 0;
   }

   //Clear messages
   cleanMessagesGoodArray = function(){

      messagesGoodToRedraw.shift();
   }

   cleanMessagesMissedArray = function(){

      messagesMissedToRedraw.shift();
   }

   cleanMessagesGreatArray = function(){

      messagesGreatToRedraw.shift();
   }

   p.keyReleased = function() {

      if (p.keyCode === 103) {
         //console.log("up left");      
         game.panel.reduceUpLeft();

         keyUpLeftWasPressed = false;
      }
   
      if (p.keyCode === 105) {
         //console.log("up right");
         game.panel.reduceUpRight();

         keyUpRightWasPressed = false;
      }
   
      if (p.keyCode === 101) {
         //console.log("center");
         game.panel.reduceCenter();

         keyCenterWasPressed = false;
      }
   
      if (p.keyCode === 97) {
         //console.log("down left");
         game.panel.reduceDownLeft();

         keyDownLeftWasPressed = false;
      }
   
      if (p.keyCode === 99) {
         //console.log("down right");
         game.panel.reduceDownRight(); 
         
         keyDownRightWasPressed = false;
      }
   }
   
   p.keyPressed  = function() {
      if (p.keyCode === 103) {
         //console.log("up left");      
         game.panel.growUpLeft();

         keyUpLeftWasPressed = true;
      }
   
      if (p.keyCode === 105) {
         //console.log("up right");
         game.panel.growUpRight();

         keyUpRightWasPressed = true;
      }
   
      if (p.keyCode === 101) {
         //console.log("center");
         game.panel.growCenter();

         keyCenterWasPressed = true;
      }
   
      if (p.keyCode === 97) {
         //console.log("down left");
         game.panel.growDownLeft();

         keyDownLeftWasPressed = true;
      }
   
      if (p.keyCode === 99) {
         //console.log("down right");
         game.panel.growDownRight(); 
         
         keyDownRightWasPressed = true;
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



//P5
var play_sketch = new p5(play_sketch1, document.getElementById('game-dance-floor'));




// Generates a random color in hexadecimal (ie. #62b9cc)
function generateRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

