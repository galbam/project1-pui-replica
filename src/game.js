class Game{

     constructor(){
          this.panel = new Panel(WIDTH, HEIGHT - 200);
          this.background = new BackgroundFloor();
          
          //this.arrow = new Arrow(0, 0);
          
          //steps
          //music
          //player
          //fondo
          //colores
     }
     
     setup(){
          
          this.background.setup();
          this.panel.setup();
     }

     draw(){
          
          this.background.draw();
          this.panel.draw(); 
     }
}