class GreatMessage{
     constructor(){
          this.x = WIDTH/GAMESIZE - 250;
          this.y = HEIGHT/2 - 150;
          this.width = 500;
          this.height = 64;
     }

     setup() {

          this.greatImg = play_sketch.loadImage("../assets/EVA4.png");
     }

     draw() {

          play_sketch.image(this.greatImg, this.x, this.y, this.width,  this.height);
     }
}