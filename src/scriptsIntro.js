

let displayGameIntro = true;
let displayGameSongs = false;

//HTML Objects
let gameIntroObj = document.querySelector('#game-intro');
gameIntroObj.style.display = 'none';


let gameSongsObj = document.querySelector('#game-songs');
gameSongsObj.style.display = 'none';


function Intro(){
     //INTRO
     let play_sketchIntro = function(p){

          let logo1;
          let logo2;
          let button;
          let cnv;
          let x = window.innerWidth;
          let y = window.innerHeight;
     
          p.setup = function(){
               cnv = p.createCanvas(x, y);
               centerCanvas();
     
               logo1 = p.loadImage("../assets/EVA1.png");
               logo2 = p.loadImage("../assets/EVA2.png");
     
               p.textAlign(p.CENTER, p.CENTER);
               p.rectMode(p.CENTER);
               p.angleMode(p.DEGREES);
          }
     
          p.draw = function(){
               p.clear();
               p.background(0);
     
               var amount = 4;
               var spacing = 20;
               var radius = 250;
     
               for (var i = 0; i < amount; i++) {
                    createNumberRing(radius + spacing * i, 30 + 10 * i, i);
               }
     
               drawTitleText();
               drawSubtitleText();
               drawLogo();
          }
     
          p.windowResized = function(){
               centerCanvas();
          }
     
          p.keyPressed = function(){
               if (p.keyCode === 13) {
               
                displayGameIntro = false;
                displayGameSongs = true;
               }
          }
     
          createNumberRing = function(radius, amount, seed){
               p.randomSeed(seed);
               var randomNumbers = [];
               for (var i = 0; i <= amount; i++) {
                    randomNumbers.push(parseInt(p.random(2), 10));
               }
               var spacing = 360 / amount;
          
               p.push();
               p.translate(x / 2, y / 2);
               var rotSpeed = 0.05;
               p.rotate(p.frameCount * p.random(-rotSpeed, rotSpeed));
               
               for (var i = 0; i < amount; i++) {
                    p.push();
                    p.rotate(i * spacing);
                    var num = new Num(randomNumbers[i], 0 + radius, 0, 90, p.random(50, 255));
                    num.render();
                    p.pop();
               }
          
               p.pop();
          }
     
          Num = function(msg, x, y, rot, clr){
               this.x = x;
               this.y = y;
               this.rot = rot;
               this.msg = msg;
               this.color = clr;
          
               this.render = function() {
                    p.push();
                    p.fill(this.color);
                    p.translate(this.x, this.y);
                    p.rotate(this.rot);
                    p.text(this.msg, 0, 0);
                    p.pop();
               }
          }
     
          drawLogo = function(){
               p.push();
               
               p.image(logo1, x/2 - 100, y/2 - 150, 200, 100);
          
               p.pop();
          }
     
          drawTitleText = function(){
               p.push();
               p.translate(x / 2, y / 2);
          
               var scaleFactor = 0.5;
               var maxLimit = 200;
               if (p.frameCount < maxLimit) {
                    var currentScale = p.map(p.frameCount, 0, maxLimit, 0, scaleFactor);
                    p.scale(1.5 + currentScale);
               } else {
                    p.scale(1.5 + scaleFactor);
               }
          
               p.strokeWeight(2);
               p.stroke(255);
               p.fill(0, 200);
               p.rect(0, 0, 210, 30);
          
               p.fill(255);
               p.noStroke();
               p.textFont('Arial');
               p.text('PIU tribute', 0, 0);
               p.pop();
          }
     
          drawSubtitleText = function(){
               p.push();
               
               p.translate(x/2, y/2 + 80);
               p.scale(2.5);
               
               p.fill('#00ff00');
               p.textFont('Arial');
               var msg = 'PRESS ENTER TO START';
               p.text(msg, 0, 0);
          
               p.pop();
          }
     
          centerCanvas = function(){
               let newX = (p.windowWidth - x) / 2;
               let newY = (p.windowHeight - y) / 2;
     
               cnv.position(newX, newY);
          }
     }
     
     if(displayGameIntro){
     
          gameIntroObj.style.display = '';
     
          //P5
          let play_Intro = new p5(play_sketchIntro, document.getElementById('game-intro'));
     }
}
 
function ListSongs(){
     //SONGS 
     $('#demo').on('slide.bs.carousel', function (e) {
          var ele = $('#demo .carousel-indicators li.active');
          
          var songTitle = document.getElementById("song-title");
          if(ele.data('slideTo') === 1){
     
               songTitle.innerText = "Beethoven Virus";
               pistaMusic = "CS017"; 
          }
          if(ele.data('slideTo') === 0){
               
               songTitle.innerText = "Music 2";
               pistaMusic = "CS031";
          }
     });
     
     document.getElementById("start").addEventListener("click", function(){ playSelectedSong(pistaMusic); } );
     
     function playSelectedSong(music){
          console.log(music);
          window.location.href = "floorDance.html";
     } 
     
     if(displayGameSongs){
          displayGameIntro = false;
     
          gameSongsObj.style.display = '';
     }
}


function setup(){

     Intro();
}

function draw(){

     ListSongs();   
}

