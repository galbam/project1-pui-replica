class ArrowPool{
     constructor(){
          
          this.arrowUpRight = [];
          this.arrowUpLeft = [];
          this.arrowDownRight = [];
          this.arrowDownLeft = [];
          this.arrowCenter = [];

          this.goods = [];

          this.poolSize = 15;
     }

     preload(){

          for (let i = 0; i < this.poolSize; i++) {
               
               const arrow = new ArrowUpRight();
               arrow.preload();
               this.arrowUpRight.push(arrow);
          }

          for (let i = 0; i < this.poolSize; i++) {
               
               const arrow = new ArrowUpLeft();
               arrow.preload();
               this.arrowUpLeft.push(arrow);
          }

          for (let i = 0; i < this.poolSize; i++) {
               
               const arrow = new ArrowDownRight();
               arrow.preload();
               this.arrowDownRight.push(arrow);
          }

          for (let i = 0; i < this.poolSize; i++) {
               
               const arrow = new ArrowDownLeft();
               arrow.preload();
               this.arrowDownLeft.push(arrow);
          }

          for (let i = 0; i < this.poolSize; i++) {
               
               const arrow = new ArrowCenter();
               arrow.preload();
               this.arrowCenter.push(arrow);
          }

          
     }

     setup(){

          for (let i = 0; i < this.poolSize; i++) {
               
              this.arrowUpRight[i].setup();
          }

          for (let i = 0; i < this.poolSize; i++) {
               
               this.arrowUpLeft[i].setup();
          }

          for (let i = 0; i < this.poolSize; i++) {
               
               this.arrowDownRight[i].setup();
          }

          for (let i = 0; i < this.poolSize; i++) {
               
               this.arrowDownLeft[i].setup();
          }

          for (let i = 0; i < this.poolSize; i++) {
               
               this.arrowCenter[i].setup();
          }

          for (let i = 0; i < 2; i++) {

               const good = new GoodMessage();
               good.setup();
               this.goods.push(good);
          }
     }

     getArrow(objectType){

          let current;
          switch (objectType) {
               case "upright":
                    current = this.arrowUpRight.shift();
                    this.arrowUpRight.push(current);
                    break;
          
               case "upleft":
                    current = this.arrowUpLeft.shift();
                    this.arrowUpLeft.push(current);
                    break;

               case "downleft":
                    current = this.arrowDownLeft.shift();
                    this.arrowDownLeft.push(current);
                    break;

               case "downright":
                    current = this.arrowDownRight.shift();
                    this.arrowDownRight.push(current);
                    break;

               case "center":
                    current = this.arrowCenter.shift();
                    this.arrowCenter.push(current);
                    break;

               case "good":
                    current = this.goods.shift();
                    this.goods.push(current);
                    break;

               default:
                    break;
          }

          current.resetY();
          return current;
     }
}