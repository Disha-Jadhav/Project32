class polygon
{
    constructor(x, y, sides, r, angle) 
    {
        var options = 
        {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0,
            isStatic: false
        }
        this.r = r;
        this.sides = sides
        this.body = Matter.Bodies.polygon(x, y, sides, r, options);
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display()
      {
        var angle = this.body.angle;
        fill("white");
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
}