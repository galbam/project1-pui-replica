class GoodMessage {
     constructor(){
          this.x = WIDTH/GAMESIZE - 250;
          this.y = HEIGHT/2;
          this.width = 500;
          this.height = 64;
     }

     setup() {

          this.goodImg = play_sketch.loadImage("assets/EVA3.png");
     }

     draw() {

          play_sketch.image(this.goodImg, this.x, this.y, this.width,  this.height);
     }
}