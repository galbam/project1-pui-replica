class Game{

     constructor(){
          this.panel = new Panel(WIDTH/GAMESIZE, 1100);
          //this.arrow = new Arrow(0, 0);
          
          //steps
          //music
          //player
          //fondo
          //colores
     }
     
     setup(){

          this.back = play_sketch.loadImage("../assets/space1.png");
          this.panel.setup();
     }

     draw(){

          play_sketch.image(this.back, WIDTH/GAMESIZE - (WIDTH/GAMESIZE/2), 0, WIDTH/GAMESIZE, HEIGHT);
          this.panel.draw();          
     }
}