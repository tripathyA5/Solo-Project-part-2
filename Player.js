class Player extends BaseClass {
  constructor(x,y,width,height){
    super(x,y,50,50);

    Matter.Body.setMass(this.body,this.body.mass*7);
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

  }
}
