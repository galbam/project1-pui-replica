class BackgroundFloor{

     constructor(){
          this.y = 0;
          this.y1 = HEIGHT;
          this.x = WIDTH/GAMESIZE - (WIDTH/GAMESIZE/2);
     }

     setup(){

          this.back = play_sketch.loadImage("assets/disco1.jpeg");
     }

     draw(){
          play_sketch.push();
          
          this.y -= 5;
          this.y1 -= 5;
          
          if (this.y < -HEIGHT) {
               this.y = HEIGHT;
          }
          if (this.y1 < -HEIGHT) {
               this.y1 = HEIGHT;
          }
          
          play_sketch.image(this.back, this.x, this.y, WIDTH/GAMESIZE, HEIGHT);
          play_sketch.image(this.back, this.x, this.y1, WIDTH/GAMESIZE, HEIGHT);
          
          play_sketch.pop();
     }
}