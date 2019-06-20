class GameOver{

     constructor(){
          this.x = WIDTH/GAMESIZE - 300;
          this.y = HEIGHT/2 - 300;
          this.width = 600;
          this.height = 600;
     }

     setup() {

          this.gameOverImg = play_sketch.loadImage("../assets/GameOver.png");
     }

     draw() {

          play_sketch.image(this.gameOverImg, this.x, this.y, this.width,  this.height);
     }

}