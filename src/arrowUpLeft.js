class ArrowUpLeft{
     constructor(){
          this.x = WIDTH/GAMESIZE - ARROW_WIDTH/2 - ARROW_WIDTH + ARROW_WIDTH/2;
          this.y = 0;
          this.isUsed = false;
          this.velocity = VELOCITY;
     }

     preload(){

          this.arrow_upLeft_sprite = play_sketch.loadSpriteSheet('../assets/TupLeft.png', ARROW_WIDTH, ARROW_WIDTH, 6);
     }

     setup(){

          this.arrow_upLeft_animation = play_sketch.loadAnimation(this.arrow_upLeft_sprite);
          
     }

     draw(){
          
          play_sketch.animation(this.arrow_upLeft_animation, this.x, this.y);
          this.moveDown();
     }

     moveDown(){
          
          this.y += this.velocity;
     }

     resetY(){
          this.y = 0;
     }

     setIsUsed(){
          this.isUsed = true;
     }

     getIsUsed(){
          return this.isUsed;
     }
}