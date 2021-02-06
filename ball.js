class Ball  {
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.1,
            isStatic:false
        }

        this.body=Bodies.circle(x,y,radius);
        this.radius=radius;
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
     imageMode(CENTER);
     image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
  }