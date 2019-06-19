class MissMessage{
     constructor(){
          this.x = WIDTH/GAMESIZE - 250;
          this.y = HEIGHT/2 + 64;
          this.width = 500;
          this.height = 64;
     }

     setup() {

          this.missImg = play_sketch.loadImage("../assets/EVA1.png");
     }

     draw() {

          play_sketch.image(this.missImg, this.x, this.y, this.width,  this.height);
     }
}