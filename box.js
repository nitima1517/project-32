class Box extends BaseClass {
  constructor(x, y, width, height,color){
    super(x,y,width,height);
    this.Visibility=255
  }

  display(){
    if (this.body.speed<3){
      super.display()
    }
    else{
      push()
      this.Visibility= this.visibility-5
      World.remove(world,this.body)
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop()
    }
  }

  score(){
    if(this.Visiblity<0 && this.Visiblity>-105){
      score++
    }
  }
 
 
 
 };

  