class ArrowDownLeft{
     constructor(){
          this.x = WIDTH/GAMESIZE - ARROW_WIDTH/2 - ARROW_WIDTH - ARROW_WIDTH + ARROW_WIDTH/2;
          this.y = 0;
          this.isUsed = false;
          this.velocity = VELOCITY;
     }

     preload(){

          this.arrow_downLeft_sprite = play_sketch.loadSpriteSheet('../assets/TdownLeft.png', ARROW_WIDTH, ARROW_WIDTH, 6);
     }

     setup(){

          this.arrow_downLeft_animation = play_sketch.loadAnimation(this.arrow_downLeft_sprite);
          
     }

     draw(){
          
          play_sketch.animation(this.arrow_downLeft_animation, this.x, this.y);
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