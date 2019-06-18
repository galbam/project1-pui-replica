class Arrow{

     constructor(x, y){
          this.x = x;
          this.y = y;
          this.width = ARROW_WIDTH;
          this.height = ARROW_HEIGHT;
          
     }

     setup(){
          // let arrow_sprite;

          // switch (this.index) {
          //      case "center":
          //           // specify width and height of each frame and number of frames
          let arrow_center_sprite = loadSpriteSheet('../assets/Tcenter.png', 120, 120, 6);
          //           break;
          //      case "downleft":
          //           // specify width and height of each frame and number of frames
          let arrow_downLeft_sprite = loadSpriteSheet('../assets/TdownLeft.png', 120, 120, 6);
          //           break;
          //      case "downright":
          //           // specify width and height of each frame and number of frames
          let arrow_downRight_sprite = loadSpriteSheet('../assets/TdownRight.png', 120, 120, 6);
          //           break;
          //      case "upleft":
          //           // specify width and height of each frame and number of frames
          let arrow_upLeft_sprite = loadSpriteSheet('../assets/TupLeft.png', 120, 120, 6);
          //           break;
          //      case "upright":
          //           // specify width and height of each frame and number of frames
          let arrow_upRight_sprite = loadSpriteSheet('../assets/TupRight.png', 120, 120, 6);
          //           break;
          // }
          
          this.arrow_center_animation = loadAnimation(arrow_center_sprite);
          this.arrow_downLeft_animation = loadAnimation(arrow_downLeft_sprite);
          this.arrow_downRight_animation = loadAnimation(arrow_downRight_sprite);
          this.arrow_upLeft_animation = loadAnimation(arrow_upLeft_sprite);
          this.arrow_upRight_animation = loadAnimation(arrow_upRight_sprite);
     }


     setupTest(){

          // let arrow_upRight_sprite = loadSpriteSheet('../assets/TupRight.png', 120, 120, 6);
          // this.arrow_upRight_animation = loadAnimation(arrow_upRight_sprite);
     }

     drawTest(){

     }

     draw(index){

          // animate the sprite sheet
          //animation(this.arrow_animation, this.x, this.y);

          switch (index) {
               case 0:
                    animation(this.arrow_downLeft_animation, this.x, this.y);

                    // specify width and height of each frame and number of frames
                    //arrow_sprite = loadSpriteSheet('../assets/TdownLeft.png', 120, 120, 6);
                    break;
               case 1:
                    animation(this.arrow_upLeft_animation, this.x, this.y);

                    // specify width and height of each frame and number of frames
                    //arrow_sprite = loadSpriteSheet('../assets/TupLeft.png', 120, 120, 6);
                    break;
               case 2:
                    animation(this.arrow_center_animation, this.x, this.y);

                    // specify width and height of each frame and number of frames
                    //arrow_sprite = loadSpriteSheet('../assets/Tcenter.png', 120, 120, 6);
                    break;
               case 3:
                    animation(this.arrow_upRight_animation, this.x, this.y);

                    // specify width and height of each frame and number of frames
                    //arrow_sprite = loadSpriteSheet('../assets/TupRight.png', 120, 120, 6);
                    break;
               case 4:
                    animation(this.arrow_downRight_animation, this.x, this.y);

                    // specify width and height of each frame and number of frames
                    //arrow_sprite = loadSpriteSheet('../assets/TdownRight.png', 120, 120, 6);
                    break;
          }
     }

     moveDown(velocity){
          this.y += velocity;
     }

     moveUp(velocity){
          this.y -= velocity;
     }

     hide(){

     }

     //mostrarse
     //moverce
     //x
     //y
     //desaparecer
}