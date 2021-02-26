class Drops {
    constructor(x,y){
      var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
    }
      this.body=Bodies.circle(x,y,10, options);
      this.width = width;
      this.height = height;
      this.radius = 10;
      World.add(world, this.body)
    }
    update(){
      if(this.body.position.y>height){
        Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0, 400)});
      }
    }
    display(){
      fill("blue");
      ellipseMode(CENTER);
      ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
  }
