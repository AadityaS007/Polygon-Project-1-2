class Box {
  constructor(x, y, width, height) {
    var options = {
      //isStatic: false
      friction: 0.05
    }
    this.body = Bodies.rectangle(x, y, width, height, options)
    this.width = width;
    this.height = height;
    World.add(world, this.body)
    this.Visibility = 255;
  }

  display() {
    /**/
    if (this.body.speed < 3) {
      rectMode(CENTER)
      rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }
    else {
     // World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(225, this.Visibility)
      translate(this.body.position.x, this.body.position.y,);
      rotate(this.body.angle);
      rect(0, 0, this.width, this.height)
      pop();
    }
  }
}
// push();
// rectMode(CENTER)xx

// stroke("green")
// strokeWeight(4)
// fill("grey")
// rect(0, 0, this.width, this.height)
// pop();