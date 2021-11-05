class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        this.image = loadImage("Block.png");
        this.Visibility = 250;
        super(x, y, width, height);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

        //if(this.body.speed < 3){
          //super.display();
        //}
        //else{
          image(this.image, pos.x, pos.y);

          push();
          tint(250, this.Visibility);
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          //rect(0,0,this.width, this.height);
          pop();
        //}
      }
}
