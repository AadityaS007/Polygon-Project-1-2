class Polygon {
    constructor(x, y, radius) {
        var options = {
            restitution: 0.8,
            frictionAir: 0.005,
            density: 1
        }

        this.body = Bodies.circle(x, y, radius / 2, options)
        this.image = loadImage("polygon.png")
        World.add(world, this.body)


        this.radius = radius

    }

    display() {
        push();
        imageMode(CENTER)
        translate(this.body.position.x, this.body.position.y)
        rotate(this.image.angle)
        //fill("yellow")
        image(this.image, 0, 0, this.radius, this.radius)
        pop();
    }
}

