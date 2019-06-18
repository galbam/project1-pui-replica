class Panel{

     constructor(positionX, positionY){
          this.positionX = positionX;
          this.positionY = positionY;
          this.indexCenter = 0;
          this.indexDownLeft = 0;
          this.indexDownRight = 0;
          this.indexUpLeft = 0;
          this.indexUpRight = 0;

          this.centerX = 0; 
          // this.downLeftX = 0; 
          // this.downRightX = 0;
          // this.upLeftX = 0;
          // this.upRightX = 0;

          this.centerY = 0; 
          // this.downLeftY = 0; 
          // this.downRightY = 0;
          // this.upLeftY = 0;
          // this.upRightY = 0;
     }

     setup(){

          this.center = play_sketch.loadImage("../assets/RLcenter.png");
          this.downLeft = play_sketch.loadImage("../assets/RLdownLeft.png");
          this.downRight = play_sketch.loadImage("../assets/RLdownRight.png");
          this.upLeft = play_sketch.loadImage("../assets/RLupLeft.png");
          this.upRight = play_sketch.loadImage("../assets/RLupRight.png");

          this.centerEb = play_sketch.loadImage("../assets/EBcenter.png");
          this.downLeftEb = play_sketch.loadImage("../assets/EBdownLeft.png");
          this.downRightEb = play_sketch.loadImage("../assets/EBdownRight.png");
          this.upLeftEb = play_sketch.loadImage("../assets/EBupLeft.png");
          this.upRightEb = play_sketch.loadImage("../assets/EBupRight.png");
     }

     drawRectangle(){
          play_sketch.fill(255, 255, 255, 10);
          play_sketch.rect(this.positionX - (PANEL_WIDTH/2), this.positionY, PANEL_WIDTH, PANEL_HEIGHT);
     }

     drawCenter(){
          this.centerX = this.positionX - ARROW_WIDTH/2;
          this.centerY = this.positionY;
          play_sketch.image(this.center, this.centerX, this.centerY, ARROW_WIDTH, ARROW_HEIGHT);
     }
     drawUpLeft(){
          play_sketch.image(this.upLeft, this.positionX - ARROW_WIDTH/2 - ARROW_WIDTH, this.positionY, ARROW_WIDTH, ARROW_HEIGHT);
          //this.upLeftX = this.positionX - ARROW_WIDTH/2 - ARROW_WIDTH;
          //this.upLeftY = this.positionY;
     }
     drawUpRight(){
          play_sketch.image(this.upRight, this.positionX + ARROW_WIDTH/2, this.positionY, ARROW_WIDTH, ARROW_HEIGHT);
          //this.upRightX = this.positionX + ARROW_WIDTH/2;
          //this.upRightY = this.positionY;
     }
     drawDownLeft(){
          play_sketch.image(this.downLeft, this.positionX - ARROW_WIDTH/2 - ARROW_WIDTH - ARROW_WIDTH, this.positionY, ARROW_WIDTH, ARROW_HEIGHT);
          //this.downLeftX = this.positionX - ARROW_WIDTH/2 - ARROW_WIDTH - ARROW_WIDTH;
          //this.downLeftY = this.positionY;
     }
     drawDownRight(){
          play_sketch.image(this.downRight, this.positionX + ARROW_WIDTH/2 + ARROW_WIDTH, this.positionY, ARROW_WIDTH, ARROW_HEIGHT);
          //this.downRightX = this.positionX + ARROW_WIDTH/2 + ARROW_WIDTH;
          //this.downRightY = this.positionY;
     }

     drawCenterEb(){
          play_sketch.image(this.centerEb, this.positionX - (ARROW_WIDTH+this.indexCenter)/2, this.positionY, ARROW_WIDTH+this.indexCenter, ARROW_HEIGHT+this.indexCenter);
     }
     drawUpLeftEb(){
          play_sketch.image(this.upLeftEb, this.positionX - (ARROW_WIDTH+this.indexUpLeft)/2 - ARROW_WIDTH, this.positionY, ARROW_WIDTH+this.indexUpLeft, ARROW_HEIGHT+this.indexUpLeft);
     }
     drawUpRightEb(){
          play_sketch.image(this.upRightEb, this.positionX + (ARROW_WIDTH+this.indexUpRight)/2, this.positionY, ARROW_WIDTH+this.indexUpRight, ARROW_HEIGHT+this.indexUpRight);
     }
     drawDownLeftEb(){
          play_sketch.image(this.downLeftEb, this.positionX - (ARROW_WIDTH+this.indexDownLeft)/2 - ARROW_WIDTH - ARROW_WIDTH, this.positionY, ARROW_WIDTH+this.indexDownLeft, ARROW_HEIGHT+this.indexDownLeft);
     }
     drawDownRightEb(){
          play_sketch.image(this.downRightEb, this.positionX + (ARROW_WIDTH+this.indexDownRight)/2 + ARROW_WIDTH, this.positionY, ARROW_WIDTH+this.indexDownRight, ARROW_HEIGHT+this.indexDownRight);
     }

     draw(){
          this.drawRectangle();

          this.drawCenter();
          this.drawCenterEb();
          
          this.drawDownLeft();
          this.drawDownLeftEb();
          this.drawDownRight();
          this.drawDownRightEb();

          this.drawUpLeft();
          this.drawUpLeftEb();
          this.drawUpRight();
          this.drawUpRightEb();
     }

     growCenter(){
          this.indexCenter += 5;   
     }

     reduceCenter(){
          this.indexCenter -= 5;   

     }
     growUpLeft(){
          this.indexUpLeft += 5;   
     }

     reduceUpLeft(){
          this.indexUpLeft -= 5;   

     }
     growDownLeft(){
          this.indexDownLeft += 5;   
     }

     reduceDownLeft(){
          this.indexDownLeft -= 5;   

     }
     growUpRight(){
          this.indexUpRight += 5;   
     }

     reduceUpRight(){
          this.indexUpRight -= 5;   

     }
     growDownRight(){
          this.indexDownRight += 5;   
     }

     reduceDownRight(){
          this.indexDownRight -= 5;
     }
}